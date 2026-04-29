import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { settings } from "@db/schema";
import { eq } from "drizzle-orm";

export const settingsRouter = createRouter({
  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(settings);
  }),

  getByKey: publicQuery
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      const db = getDb();
      const result = await db
        .select()
        .from(settings)
        .where(eq(settings.key, input.key))
        .limit(1);
      return result[0] ?? null;
    }),

  update: adminQuery
    .input(z.object({ key: z.string(), value: z.string().optional() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      const existing = await db
        .select()
        .from(settings)
        .where(eq(settings.key, input.key))
        .limit(1);

      const val = input.value ?? null;

      if (existing[0]) {
        await db
          .update(settings)
          .set({ value: val })
          .where(eq(settings.key, input.key));
      } else {
        await db.insert(settings).values({
          key: input.key,
          value: val,
        });
      }
      return { success: true };
    }),

  bulkUpdate: adminQuery
    .input(z.array(z.object({ key: z.string(), value: z.string().optional() })))
    .mutation(async ({ input }) => {
      const db = getDb();
      for (const item of input) {
        const existing = await db
          .select()
          .from(settings)
          .where(eq(settings.key, item.key))
          .limit(1);

        const val = item.value ?? null;

        if (existing[0]) {
          await db
            .update(settings)
            .set({ value: val })
            .where(eq(settings.key, item.key));
        } else {
          await db.insert(settings).values({ key: item.key, value: val });
        }
      }
      return { success: true };
    }),
});
