import { initTRPC } from "@trpc/server";

// Initialisation of tRPC Backend
// Should be done only once per backend

const t = initTRPC.context<{
    username?: string;
}>().create();
// const t = initTRPC.create();

// Export reusable router and procedure helpers that can be used throughout the router.

export const router = t.router;
export const publicProcedure = t.procedure;