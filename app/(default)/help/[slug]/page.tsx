import type { Metadata } from "next";
import { getHelpPages } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import Sidebar from "./help-sidebar";
import FooterSeparator from "@/components/ui/footer-separator";
import { CustomMDX } from "@/components/mdx/mdx";

export async function generateStaticParams() {
  const allHelps = getHelpPages();

  return allHelps.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const help = getHelpPages().find((post) => post.slug === params.slug);

  if (!help) {
    return;
  }

  const { title, summary: description } = help.metadata;

  return {
    title,
    description,
  };
}

export default async function SingleHelp(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const help = getHelpPages().find((help) => help.slug === params.slug);

  if (!help) notFound();

  return (
    <>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="flex flex-col justify-between md:flex-row">
            {/* Main content */}
            <section className="order-1 md:flex-auto lg:pl-10">
              <article className="prose max-w-none text-[15px] leading-normal text-indigo-200/65 prose-headings:font-nacelle prose-headings:font-semibold prose-headings:text-gray-200 prose-h2:mb-2 prose-h2:mt-0 prose-h2:text-lg prose-a:font-medium prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:italic prose-strong:font-medium prose-strong:text-gray-200 prose-ul:list-none prose-ul:space-y-8 prose-ul:pl-0 prose-li:m-0 prose-li:pl-0">
                <div className="mb-8">
                  <div className="animate-gradient-text pb-4 nacelle-text24 ">
                    {help.metadata.title}
                  </div>
                </div>
                <CustomMDX source={help.content} />
              </article>
            </section>

            {/* Nav sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
      <FooterSeparator />
    </>
  );
}
