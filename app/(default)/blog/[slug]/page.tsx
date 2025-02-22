import type { Metadata } from "next";
import { getBlogPosts } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import PageIllustration from "@/components/homepage/page-illustration";
import Image from "next/image";
import { CustomMDX } from "@/components/mdx/mdx";
import RelatedPosts from "./related-posts";
import Partners from "@/components/homepage/partners";

export async function generateStaticParams() {
  const allBlogs = getBlogPosts();

  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
  };
}

export default async function SinglePost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <PageIllustration multiple />
      <section>
        <div className="px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Single article */}
            <div className="mx-auto max-w-3xl">
              <article>
                {/* Post header */}
                <header className="mb-8">
                  <div className="animate-gradient-text pb-4 nacelle-text24 ">
                    {post.metadata.title}
                  </div>
                  <div className="mx-auto mb-5 max-w-3xl">
                    <p className="text-lg text-indigo-200/65">
                      {post.metadata.summary}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      {post.metadata.authorImg && (
                        <a href={post.metadata.authorLink}>
                          <Image
                            className="inline-flex shrink-0 rounded-full"
                            src={post.metadata.authorImg}
                            width={36}
                            height={36}
                            alt={post.metadata.author || ""}
                          />
                        </a>
                      )}
                      <div className="text-sm font-medium text-gray-200">
                        <span>{post.metadata.author}</span>
                        <span className="text-gray-700"> - </span>
                        <a
                          className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                          href={post.metadata.authorLink}
                        >
                          {post.metadata.authorRole}
                        </a>
                      </div>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      <li>
                        <a
                          className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60"
                          href="#0"
                        >
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            {post.metadata.category}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>

                {/* Article image */}
                {post.metadata.image && (
                  <figure className="relative my-8 overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50 lg:-ml-32 lg:-mr-32">
                    <Image
                      className="aspect-video w-full object-cover opacity-70 grayscale"
                      src={post.metadata.image}
                      width={1024}
                      height={576}
                      alt={post.metadata.title}
                      priority
                    />
                  </figure>
                )}

                {/* Article content */}
                <div className="prose max-w-none text-indigo-200/65 prose-headings:scroll-mt-24 prose-headings:font-nacelle prose-headings:font-semibold prose-headings:text-gray-200 prose-h2:mb-4 prose-h2:text-2xl prose-a:font-medium prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l prose-blockquote:border-indigo-500 prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-indigo-200/65 prose-figcaption:mt-3 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-strong:font-medium prose-strong:text-gray-200 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-img:rounded-2xl md:prose-h2:text-3xl [&_blockquote_p:first-of-type]:before:content-none [&_blockquote_p:last-of-type]:after:content-none">
                  <CustomMDX source={post.content} />
                </div>
              </article>
            </div>

            <RelatedPosts />
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}
