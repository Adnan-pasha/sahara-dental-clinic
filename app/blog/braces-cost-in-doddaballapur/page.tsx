import { BlogPageView } from "@/components/page-templates";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const post = blogPosts[0];
export const metadata = buildMetadata(post.seo);

export default function BracesCostBlogPage() {
  return <BlogPageView post={post} />;
}
