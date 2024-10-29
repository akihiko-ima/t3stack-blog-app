"use client";


interface DetailBlog {
  id: number;
  title: string;
  description: string | null;
  createdAt: Date;
}

interface BlogDetailPageProps {
  detailBlog: DetailBlog | null;
}

export default function BlogDetailPage({ detailBlog }: BlogDetailPageProps) {

  const handleDelete = () => {
    console.log("a");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="mx-auto mt-10 w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">{detailBlog?.title ?? "No Title"}</h1>
        <div className="mb-8 text-sm text-gray-500">
          {detailBlog && (
            <span>{new Date(detailBlog.createdAt).toLocaleDateString()}</span>
          )}
        </div>
        <p className="whitespace-pre-line text-gray-700">{detailBlog?.description}</p>
        <button
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </main>
  );
}
