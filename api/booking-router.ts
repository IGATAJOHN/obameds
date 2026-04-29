import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { bookings } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const bookingRouter = createRouter({
  list: adminQuery.query(async () => {
    const db = getDb();
    return db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }),

  listByStatus: adminQuery
    .input(z.object({ status: z.string() }))
    .query(async ({ input }) => {
      const db = getDb();
      return db
        .select()
        .from(bookings)
        .where(eq(bookings.status, input.status as typeof bookings.$inferSelect.status))
        .orderBy(desc(bookings.createdAt));
    }),

  getById: adminQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = getDb();
      const result = await db
        .select()
        .from(bookings)
        .where(eq(bookings.id, input.id))
        .limit(1);
      return result[0] ?? null;
    }),

  create: publicQuery
    .input(
      z.object({
        fullName: z.string().min(1),
        phoneNumber: z.string().min(1),
        email: z.string().email().optional().or(z.literal("")),
        testId: z.number().optional(),
        preferredDate: z.string().min(1),
        serviceType: z.enum(["lab_visit", "home_collection"]),
        address: z.string().optional(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(bookings).values({
        fullName: input.fullName,
        phoneNumber: input.phoneNumber,
        email: input.email || null,
        testId: input.testId || null,
        preferredDate: input.preferredDate,
        serviceType: input.serviceType,
        address: input.address || null,
        notes: input.notes || null,
        status: "pending",
      });
      return { id: Number(result[0].insertId) };
    }),

  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db
        .update(bookings)
        .set({ status: input.status })
        .where(eq(bookings.id, input.id));
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(bookings).where(eq(bookings.id, input.id));
      return { success: true };
    }),

  stats: adminQuery.query(async () => {
    const db = getDb();
    const allBookings = await db.select().from(bookings);
    const pending = allBookings.filter((b) => b.status === "pending").length;
    const confirmed = allBookings.filter((b) => b.status === "confirmed").length;
    const completed = allBookings.filter((b) => b.status === "completed").length;
    const cancelled = allBookings.filter((b) => b.status === "cancelled").length;
    const total = allBookings.length;
    return { total, pending, confirmed, completed, cancelled };
  }),
});
