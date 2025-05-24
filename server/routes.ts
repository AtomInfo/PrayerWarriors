import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createPaymentIntent, retrievePaymentIntent } from "./stripe";
import { insertDonationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for donations
  
  // Create a payment intent for donation
  app.post("/api/create-donation-intent", async (req: Request, res: Response) => {
    try {
      const { amount, currency = "USD", donationType = "tithe", anonymous = false, note } = req.body;
      
      if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        return res.status(400).json({ 
          error: "Invalid amount. Please provide a valid positive number." 
        });
      }
      
      // Create a payment intent with Stripe
      const paymentIntent = await createPaymentIntent(parseFloat(amount), currency);
      
      // Store the donation in our database as pending
      const donationData = {
        amount: amount.toString(),
        currency,
        donationType,
        anonymous,
        note,
        status: "pending"
      };
      
      // If user is logged in, attach their ID (this part would need authentication system)
      // if (req.user) {
      //   donationData.userId = req.user.id;
      // }
      
      // Create donation record with the required fields
      const donation = await storage.createDonation({
        amount: amount.toString(),
        currency,
        donationType,
        anonymous,
        note: note || null
      });
      
      res.json({ 
        clientSecret: paymentIntent.clientSecret,
        donationId: donation.id
      });
    } catch (error: any) {
      console.error("Error creating donation:", error);
      res.status(500).json({ error: error.message || "Failed to process donation" });
    }
  });
  
  // Webhook to handle Stripe events
  app.post("/api/stripe-webhook", async (req: Request, res: Response) => {
    const payload = req.body;
    
    try {
      // Handle the event
      switch (payload.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = payload.data.object;
          // Update donation status in the database
          // This would require mapping the payment intent ID to our donation
          console.log('Payment succeeded:', paymentIntent.id);
          break;
        case 'payment_intent.payment_failed':
          const failedPayment = payload.data.object;
          console.log('Payment failed:', failedPayment.id);
          break;
        default:
          console.log(`Unhandled event type: ${payload.type}`);
      }
      
      res.sendStatus(200);
    } catch (error: any) {
      console.error('Webhook error:', error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  });
  
  // Confirm donation success and update status
  app.post("/api/confirm-donation/:donationId", async (req: Request, res: Response) => {
    try {
      const { donationId } = req.params;
      const { paymentIntentId } = req.body;
      
      if (!donationId || !paymentIntentId) {
        return res.status(400).json({ error: "Missing donation ID or payment intent ID" });
      }
      
      // Retrieve payment intent from Stripe to confirm it succeeded
      const paymentIntent = await retrievePaymentIntent(paymentIntentId);
      
      if (paymentIntent.status === "succeeded") {
        // Update donation status in the database
        await storage.updateDonationStatus(
          parseInt(donationId), 
          "completed", 
          paymentIntentId
        );
        
        return res.json({ success: true, message: "Donation completed successfully" });
      } else {
        return res.status(400).json({ 
          error: "Payment not completed", 
          paymentStatus: paymentIntent.status 
        });
      }
    } catch (error: any) {
      console.error("Error confirming donation:", error);
      res.status(500).json({ error: error.message || "Failed to confirm donation" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
