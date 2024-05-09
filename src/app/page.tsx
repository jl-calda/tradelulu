import { getPosts, addPost, Post } from "@/actions/postActions";

export default async function Home() {
  // Takes in the data, namely the `title` and `content`,
  // and calls `addPost` to insert this into our database.
  async function submitPost(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await addPost({ title, content } as Post);
  }

  const posts = await getPosts();
  // The `getPosts` function is used to render all posts.

  // The `<form>` takes in the `title` and `content`
  // and sends this to the server upon submission.
  return (
    <div>
      Posts:
      <div className="bg-blue-500 space-y-2">
        {posts.map((post) => (
          <div key={post.id}>
            <div>Title: {post.title}</div>
            <div>Content: {post.content}</div>
          </div>
        ))}
      </div>
      <form
        action={submitPost}
        className="flex flex-col mt-4"
      >
        Input Form:
        <label>
          Title:
          <input
            type="text"
            name="title"
            className="bg-orange-500"
            required
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            className="bg-orange-500"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-green-500 w-fit mt-3"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
