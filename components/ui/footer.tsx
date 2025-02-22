import SocialLink from "./SocialLink";
import Logo from "./logo";
import Image from "next/image";
import TwitterIcon from "@/public/images/footer/twitter.svg";
import DiscordIcon from "@/public/images/footer/discord.svg";
import TelegramIcon from "@/public/images/footer/telegram.svg";
import FooterIllustration from "@/public/images/footer/footer-illustration.svg";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="centered-absolute-bottom -translate-x-1/2"
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
        <ul className="grid grid-cols-2 gap-4 justify-between py-8 sm:grid-rows-[auto_auto] md:grid-cols-7 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-7 lg:grid-rows-1">
          {globalConfig.menuLinks.map((link) => (
              <LiLink key={link.href} href={link.href} >
                {link.label}
              </LiLink>
            ))}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-left">
              <Logo />
          </div>

          <div className="text-sm">
                <ul className="inline-flex gap-4 pl-4">
                <SocialLink href="#0" ariaLabel="Discord" src={DiscordIcon} />
                <SocialLink href="#0" ariaLabel="Twitter" src={TwitterIcon} />
                <SocialLink href="#0" ariaLabel="Telegram" src={TelegramIcon} />
                </ul>
            </div>
        </ul>
      </div>
    </footer>
  );
}
