// src/db/index.ts
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// Creating the turso client using our environment variables
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Creating a `db` instance to interact with our Turso DB via Drizzle.
export const db = drizzle(turso);

// Optionally export the type of `db` for TS users.
export type DbClient = typeof db;
