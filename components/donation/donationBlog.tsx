"use client";

import { useState, useEffect } from "react";
import DonationSidebar from "./donation-sidebar";
import ReactMarkdown from "react-markdown";
//import { Metadata } from "@/components/mdx/utils";
import Image from "next/image";
import donationPageConfig from "@/configs/donationPageConfig";
import LogoMedium from "@/public/images/donation/logo-medium.png";
import SocialLink from "@/components/ui/SocialLink";
import TwitterIcon from "@/public/images/footer/twitter.svg";
import DiscordIcon from "@/public/images/footer/discord.svg";
import TelegramIcon from "@/public/images/footer/telegram.svg";
import donationPosts from "@/public/donationPosts.json"; // 导入 JSON 文件

type Metadata = {
  title: string;
  summary?: string;
};

interface Post {
  metadata: Metadata;
  slug:string;
  content: string;
}

export default function DonationBlog() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [mdxPost, setMdxPost] = useState<Post | null>(null);

  useEffect(() => {
    // 使用导入的 JSON 数据
    const fetchedPosts: Post[] = donationPosts;
    console.log("Fetched donation posts:", fetchedPosts); // 添加日志
    setAllPosts(fetchedPosts);
    if (fetchedPosts.length > 0) {
      setActiveTab(fetchedPosts[0].metadata.title);
      setMdxPost(fetchedPosts[0]);
    }
  }, []);

  const handleTabClick = (label: string) => {
    const post = allPosts.find((post) => post.metadata.title === label);
    if (post) {
      setActiveTab(post.metadata.title);
      setMdxPost(post);
    } else {
      setActiveTab("");
      setMdxPost(null);
    }
  };

  return (
    <>
      {mdxPost && (
        <section className="flex flex-col justify-between md:flex-row py-12 md:py-20 space-y-6 md:space-y-0 max-w-3xl mx-auto">
          <div>
            <div className="donation-blog-tabs flex">
              {allPosts.map((post) => (
                <button
                  key={post.metadata.title}
                  className={`flex-1 ${
                    activeTab === post.metadata.title ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(post.metadata.title)}
                >
                  {post.metadata.title}
                </button>
              ))}
            </div>
            <div className= "donation-blog-container">
              <div className="donation-blog-header">
                <div
                  style={{
                    position: "relative",
                    height: "var(--aso-donation-blog-author-icon-size)",
                    width: "var(--aso-donation-blog-author-icon-size)",
                  }}
                >
                  <Image
                    className="aso-pum-icon"
                    src={LogoMedium}
                    alt="ASO logo"
                    fill
                  />
                </div>
                <div className="donation-blog-author-container ">
                  <div className="donation-blog-author-name">
                    {donationPageConfig.ASOPumTitle}
                    <div className="donation-blog-author-label">
                      {donationPageConfig.ASOPumLabel}
                    </div>
                  </div>
                </div>
                <div key="socialLink" className="donation-blog-social-link">
                  <SocialLink
                    href="#0"
                    ariaLabel="Discord"
                    src={DiscordIcon}
                    size={20}
                  />
                  <SocialLink
                    href="#0"
                    ariaLabel="Twitter"
                    src={TwitterIcon}
                    size={20}
                  />
                  <SocialLink
                    href="#0"
                    ariaLabel="Telegram"
                    src={TelegramIcon}
                    size={20}
                  />
                </div>
              </div>

              <article>
                <div className="animate-white-text nacelle-text23 ">
                  {mdxPost.metadata.title}
                </div>

                <div className="donation-blog-content">
                  <ReactMarkdown>{mdxPost.content}</ReactMarkdown>
                </div>
              </article>
            </div>
          </div>

          <DonationSidebar />
        </section>
      )}
    </>
  );
}
