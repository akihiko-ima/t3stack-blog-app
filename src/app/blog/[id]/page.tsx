
import { api } from "~/trpc/server";
import BlogDetailPage from "../components/BlogDetailPage";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { id } = params;
  const detailBlog = await api.post.getDetailBlog({ id: Number(id) });

  return <BlogDetailPage detailBlog={detailBlog} />;
}
