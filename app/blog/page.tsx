import Link from "next/link";

import { blogIndexSeo, blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(blogIndexSeo);

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Dental Advice</p>
          <h1>{blogIndexSeo.h1}</h1>
          <p className="lead">
            Explore practical guides on braces, aligners, implants, and root canal
            treatment to help you make informed decisions about your oral health.
          </p>
        </div>
      </section>
      <main className="container section">
        <div className="card-grid card-grid-2">
          {blogPosts.map((post) => (
            <article className="card" key={post.seo.path}>
              <div className="card-body">
                <h3>{post.seo.h1}</h3>
                <p>{post.seo.description}</p>
                <div className="button-row" style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
                  <Link href={post.seo.path} className="button button-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
