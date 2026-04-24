import { BlogPageView } from "@/components/page-templates";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const post = blogPosts[4];
export const metadata = buildMetadata(post.seo);

export default function ChooseDentistBlogPage() {
  return <BlogPageView post={post} />;
}
