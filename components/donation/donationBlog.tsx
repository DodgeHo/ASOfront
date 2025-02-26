"use client";

import { useState, useEffect } from "react";
import donationPageConfig from "@/configs/donationPageConfig";
import ReactMarkdown from "react-markdown";
import "@css/donationpage.css";

export default function DonationBlog() {
  const [allPosts, setAllPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [mdxPost, setMdxPost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/donationPosts.json");
      if (!response.ok) {
        console.error("Failed to fetch donation posts:", response.statusText);
        return;
      }
      const donationPosts = await response.json();
      console.log("Fetched donation posts:", donationPosts); // 添加日志
      setAllPosts(donationPosts);
      if (donationPosts.length > 0) {
        setActiveTab(donationPosts[0].metadata.title);
        setMdxPost(donationPosts[0]);
      }
    }
    fetchPosts();
  }, []);

  const handleTabClick = (label: string) => {
    const post = allPosts.find((post) => post.metadata.title === label);
    if (post) {
      setActiveTab(post.metadata.title);
      setMdxPost(post);
    } else {
      setActiveTab(null);
      setMdxPost(null);
    }
  };

  return (
    <section>
      <div className="donation-blog-tabs">
        {allPosts.map((post) => (
          <button
            key={post.metadata.title}
            className={activeTab === post.metadata.title ? "active" : ""}
            onClick={() => handleTabClick(post.metadata.title)}
          >
            {post.metadata.title}
          </button>
        ))}
      </div>
      <div className="px-4 sm:px-6 py-12 md:py-20">
        {mdxPost && (
          <div className="mx-auto max-w-3xl">
            <article>
              <header className="mb-8">
                <div className="animate-gradient-text pb-4 nacelle-text24 ">
                  {mdxPost.metadata.title}
                </div>
                <div className="mx-auto mb-5 max-w-3xl">
                  <p className="text-lg text-indigo-200/65">
                    {mdxPost.metadata.summary}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    {mdxPost.metadata.authorImg && (
                      <a href={mdxPost.metadata.authorLink}>
                        <Image
                          className="inline-flex shrink-0 rounded-full"
                          src={mdxPost.metadata.authorImg}
                          width={36}
                          height={36}
                          alt={mdxPost.metadata.author || ""}
                        />
                      </a>
                    )}
                    <div className="text-sm font-medium text-gray-200">
                      <span>{mdxPost.metadata.author}</span>
                      <span className="text-gray-700"> - </span>
                      <a
                        className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                        href={mdxPost.metadata.authorLink}
                      >
                        {mdxPost.metadata.authorRole}
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
                          {mdxPost.metadata.category}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </header>

              {mdxPost.metadata.image && (
                <figure className="relative my-8 overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50 lg:-ml-32 lg:-mr-32">
                  <Image
                    className="aspect-video w-full object-cover opacity-70 grayscale"
                    src={mdxPost.metadata.image}
                    width={1024}
                    height={576}
                    alt={mdxPost.metadata.title}
                    priority
                  />
                </figure>
              )}

              <div className="prose max-w-none text-indigo-200/65 prose-headings:scroll-mt-24 prose-headings:font-nacelle prose-headings:font-semibold prose-headings:text-gray-200 prose-h2:mb-4 prose-h2:text-2xl prose-a:font-medium prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l prose-blockquote:border-indigo-500 prose-blockquote:pl-4 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:text-indigo-200/65 prose-figcaption:mt-3 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-strong:font-medium prose-strong:text-gray-200 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-img:rounded-2xl md:prose-h2:text-3xl [&_blockquote_p:first-of-type]:before:content-none [&_blockquote_p:last-of-type]:after:content-none">
                <ReactMarkdown>{mdxPost.content}</ReactMarkdown>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
