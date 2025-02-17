"use client";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";
import "../../app/css/header.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import walletIcon from "@/public/images/wallet.png";
import emailIcon from "@/public/images/email.png";
import personaIcon from "@/public/images/persona.png";
const ICON_SIZE = 30;

export default function Header() {
  return (
    <header>
      <div className="header-content">
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:grow flex flex-1 items-center">
          {/* Desktop menu links */}
          <ul className="nav-links">
            <div className=" ">
              <Logo />
            </div>
            {globalConfig.menuLinks.map((link) => (
              <LiLink
                key={link.href}
                href={link.href}
                className={
                  link.label.startsWith("$")
                    ? "nav-link-highlight nav-link"
                    : "nav-link-common nav-link"
                }
              >
                {link.label}
              </LiLink>
            ))}
            {/* 
              <Dropdown title="选择语言">
                <LiLink href="/English" className="nav-link-custom">English</LiLink>
                <LiLink href="/Chinese" className="nav-link-custom">Chinese</LiLink>
                <LiLink href="/Arabic" className="nav-link-custom">Arabic</LiLink>
              </Dropdown>
            */}
            <div className="flex space-x-2">
                <LiLink href="/Wallet" className="icon-link">
                <Image src={walletIcon} alt="Wallet" width={ICON_SIZE} height={ICON_SIZE} />
                </LiLink>
                <LiLink href="/email" className="icon-link">
                <Image src={emailIcon} alt="Email" width={ICON_SIZE} height={ICON_SIZE} />
                </LiLink>
                <LiLink href="/signin" className="icon-link">
                <Image src={personaIcon} alt="Persona" width={ICON_SIZE} height={ICON_SIZE} />
                </LiLink>
            </div>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
