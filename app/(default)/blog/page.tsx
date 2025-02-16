import { getBlogPosts } from "@/components/mdx/utils";
import CategoryProvider from "./category-provider";
import PageIllustration from "@/components/page-illustration";
import BlogFilters from "./filters";
import PostItem from "@/app/(default)/blog/post-item";

export const metadata = {
  title: "Blog - Open PRO",
  description: "Page description",
};

import Partners from "@/components/partners";
import Pagination from "./pagination";

export default function Blog() {
  const allBlogs = getBlogPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1;
  });

  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <div className="animate-gradient-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                The Open PRO Blog
              </div>
              <div className="mx-auto max-w-3xl">
                <p className="text-xl text-indigo-200/65">
                  Discover the latest news, tips and user research insights from
                  Open PRO.
                </p>
              </div>
            </div>
            <div>
              <CategoryProvider>
                {/* Buttons */}
                <BlogFilters />

                {/* Articles */}
                <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                  {allBlogs.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </CategoryProvider>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}
