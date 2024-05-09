// drizzle.config.ts
import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

// Configure dotenv so "drizzle-kit" will read the environment
// variables from ".env.local" rather than ".env"
dotenv.config({ path: ".env.local" });

export default {
  // Where your Drizzle Schema is located.
  schema: "./src/db/schema.ts",
  // Where your migrations will be stored.
  out: "./src/db/migrations",
  // The environment variables we created previously to connect with
  // the database via Drizzle.
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
  driver: "turso",
} satisfies Config;
