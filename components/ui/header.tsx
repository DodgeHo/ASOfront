"use client";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";
import "@css/header.css";
import IconLinks from "./IconLinks";
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname, searchParams]);

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
