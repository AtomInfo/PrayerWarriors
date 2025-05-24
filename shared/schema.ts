import { pgTable, text, serial, integer, boolean, timestamp, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  fullName: text("full_name"),
  stripeCustomerId: text("stripe_customer_id"),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  amount: numeric("amount").notNull(),
  currency: text("currency").notNull().default("USD"),
  stripePaymentId: text("stripe_payment_id"),
  donationType: text("donation_type").notNull().default("tithe"), // tithe, offering, missions, etc.
  status: text("status").notNull().default("pending"), // pending, completed, failed
  createdAt: timestamp("created_at").defaultNow(),
  anonymous: boolean("anonymous").default(false),
  note: text("note"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
});

export const insertDonationSchema = createInsertSchema(donations, {
  amount: z.string().min(1),
  currency: z.string().default("USD"),
  donationType: z.string().default("tithe"),
  anonymous: z.boolean().default(false),
  note: z.string().nullable().optional(),
  userId: z.number().nullable().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;
