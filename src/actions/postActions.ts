import { db } from "@/db";
import { posts } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// Our schema converted to a TypeScript type.
export type Post = InferSelectModel<typeof posts>;

// Using the `db` instance created earlier to fetch all posts from
// our database.
export const getPosts = async () => {
  return await db.select().from(posts);
};

// Upon receiving a `title` and `content` from the frontend,
// we insert this data into our database.
export const addPost = async ({ title, content }: Post) => {
  await db.insert(posts).values({ title, content });
  // Revalidate the existing cached data (refetch
  // all posts after insertion happens).
  revalidatePath("/");
};
