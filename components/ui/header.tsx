"use client";
import React, { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";
import "@css/header.css";
import IconLinks from "./IconLinks";

export default function Header() {
  const pathname = usePathname() || "/";
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return (
    <header>
      <div className="header-content">
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:grow flex flex-1 items-center">
          {/* Desktop menu links */}
          <ul className="nav-links">
            <div className="nav-link-logo">
              <Logo />
            </div>
            {globalConfig.menuLinks.map((link) => (
              <LiLink
                key={link.href}
                href={link.href}
                className={
                  currentPathname.includes(link.href)
                    ? "nav-link nav-link-highlight"
                    : "nav-link nav-link-common "
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
            <IconLinks />
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
