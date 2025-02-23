"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@css/help.css"

export default function HelpSidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "FAQ's - General Topics",
      href: "/help/frequently-asked-questions",
    },
    {
      name: "What is Open PRO",
      href: "/help/what-is-open-pro",
    },
    {
      name: "Open PRO plan’s features",
      href: "/help/open-pro-plans-features",
    },
    {
      name: "Get started",
      href: "/help/get-started",
    },
    {
      name: "Payments FAQ’s",
      href: "/help/payments-faqs",
    },
  ];

  return (
    <aside className="help-sidebar ">
      <nav className="help-sidebar-nav">
        <ul className="divide-y text-sm">
          {links.map((link, linkIndex) => (
            <li
              key={linkIndex}
              className="py-2 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]"
            >
              <Link
                className={`group flex items-center transition ${pathname === link.href ? "text-indigo-500" : "text-indigo-200/65 hover:text-indigo-500"}`}
                href={link.href}
              >
                <span>{link.name}</span>

              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
