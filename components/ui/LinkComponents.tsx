import Link from "next/link";
import React from "react";

interface LiLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LiLink: React.FC<LiLinkProps> = ({ href, children, className = "nav-link", onClick }) => {
  return (
    <li>
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

interface LiAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export const LiA: React.FC<LiAProps> = ({ href = "#0", children, className = "text-link", ariaLabel, onClick }) => {
  return (
    <li>
      <a href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="footer-heading">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <LiA key={index} href={link.href}>
            {link.label}
          </LiA>
        ))}
      </ul>
    </div>
  );
}
