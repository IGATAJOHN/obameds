import { authRouter } from "./auth-router";
import { testRouter } from "./test-router";
import { bookingRouter } from "./booking-router";
import { testimonialRouter } from "./testimonial-router";
import { settingsRouter } from "./settings-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  test: testRouter,
  booking: bookingRouter,
  testimonial: testimonialRouter,
  settings: settingsRouter,
});

export type AppRouter = typeof appRouter;
