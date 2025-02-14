"use client";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";
import "../../app/css/header.css";

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
                className={link.label.startsWith('$') ? 'nav-link-highlight nav-link' : 'nav-link-common nav-link'}
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
            <LiLink href="/signin" className="signin-link">登录</LiLink>
            <LiLink href="/signip" className="register-link">注册</LiLink>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
