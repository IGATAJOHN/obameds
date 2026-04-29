import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { tests } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const testRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(tests).orderBy(desc(tests.createdAt));
  }),

  listActive: publicQuery.query(async () => {
    const db = getDb();
    return db
      .select()
      .from(tests)
      .where(eq(tests.isActive, true))
      .orderBy(desc(tests.createdAt));
  }),

  listByCategory: publicQuery
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      const db = getDb();
      return db
        .select()
        .from(tests)
        .where(eq(tests.category, input.category as typeof tests.$inferSelect.category))
        .orderBy(desc(tests.createdAt));
    }),

  getById: publicQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = getDb();
      const result = await db
        .select()
        .from(tests)
        .where(eq(tests.id, input.id))
        .limit(1);
      return result[0] ?? null;
    }),

  create: adminQuery
    .input(
      z.object({
        name: z.string().min(1),
        category: z.enum([
          "blood",
          "urine",
          "health_package",
          "specialized",
          "hormonal",
          "genetic",
        ]),
        description: z.string().min(1),
        price: z.string().min(1),
        turnaroundTime: z.string().min(1),
        isActive: z.boolean().default(true),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(tests).values(input);
      return { id: Number(result[0].insertId) };
    }),

  update: adminQuery
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        category: z
          .enum([
            "blood",
            "urine",
            "health_package",
            "specialized",
            "hormonal",
            "genetic",
          ])
          .optional(),
        description: z.string().min(1).optional(),
        price: z.string().min(1).optional(),
        turnaroundTime: z.string().min(1).optional(),
        isActive: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const { id, ...data } = input;
      await db.update(tests).set(data).where(eq(tests.id, id));
      return { success: true };
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(tests).where(eq(tests.id, input.id));
      return { success: true };
    }),
});
