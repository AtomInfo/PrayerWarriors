import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

// Create a payment intent for a one-time donation
export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency.toLowerCase(),
    });
    
    return {
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id
    };
  } catch (error: any) {
    console.error('Error creating payment intent:', error.message);
    throw error;
  }
}

// Retrieve a payment intent
export async function retrievePaymentIntent(id: string) {
  try {
    return await stripe.paymentIntents.retrieve(id);
  } catch (error: any) {
    console.error('Error retrieving payment intent:', error.message);
    throw error;
  }
}

// Create or retrieve a customer
export async function getOrCreateCustomer(email: string, name?: string) {
  try {
    // Search for existing customer
    const customerList = await stripe.customers.list({
      email,
      limit: 1
    });
    
    if (customerList.data.length > 0) {
      return customerList.data[0];
    }
    
    // Create new customer if not found
    return await stripe.customers.create({
      email,
      name
    });
  } catch (error: any) {
    console.error('Error creating/retrieving customer:', error.message);
    throw error;
  }
}