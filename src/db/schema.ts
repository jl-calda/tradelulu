import { randomUUID } from "crypto";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  // The `randomUUID()`function is built in to JS
  // and allows for easy surrogate key generation.
  id: text("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title").notNull(),
  content: text("content").notNull(),
});
