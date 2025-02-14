import Logo from "./logo";
import Image from "next/image";
import TwitterIcon from "@/public/images/twitter.svg";
import MediumIcon from "@/public/images/OO.png";
import GithubIcon from "@/public/images/github.svg";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { LiLink } from "./LinkComponents";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <ul className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          <LiLink href="/product">Product</LiLink>
          <LiLink href="/about">Company</LiLink>
          <LiLink href="/blog">Resources</LiLink>
          <LiLink href="/help/frequently-asked-questions">
            Content Library
          </LiLink>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-left">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <Image
                      className="h-8 w-8"
                      src={TwitterIcon}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Medium"
                  >
                    <Image className="h-8 w-8" src={MediumIcon} alt="Medium" />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Github"
                  >
                    <Image className="h-8 w-8" src={GithubIcon} alt="Github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
}
