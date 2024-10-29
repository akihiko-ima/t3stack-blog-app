import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const allBlogs = await api.post.getAllBlogs();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white py-12 ">
        <div className="container px-4 mx-auto">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">T3</span> App Blog
          </h1>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {allBlogs?.map((blog) => (
              <Link href={`/blog/${blog.id}`}
                key={blog.id}>
                <div className="rounded-xl bg-white/10 p-6">
                  <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                  <div className="mb-4 text-lg">{blog.description}</div>
                  <span className="text-base text-gray-400">{blog.createdAt.toLocaleDateString()}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/postBlog" className="rounded-md bg-orange-500 px-6 py-2 font-medium">
              投稿する
            </Link>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
