"use client";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { LiLink } from "./LinkComponents";
import "../../app/css/header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-inner">
        <div className="header-content">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="nav-links">
              <LiLink href="/pricing">Pricing</LiLink>
              <LiLink href="/about">About Us</LiLink>
              <LiLink href="/blog">Blog</LiLink>
              <LiLink href="/help/frequently-asked-questions">Help Centre</LiLink>
              <Dropdown title="Resources">
                <LiLink href="/newsletter" className="nav-link-custom">Newsletter</LiLink>
                <LiLink href="/contact" className="nav-link-custom">Contact Us</LiLink>
                <LiLink href="/404" className="nav-link-custom">404</LiLink>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="nav-links">
            <LiLink href="/signin" className="signin-link">Sign In</LiLink>
            <LiLink href="/signip" className="register-link">Register</LiLink>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
