"use client";
import IconLinks from "./IconLinks";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { LiLink } from "./LinkComponents";
import globalConfig from "@/configs/globalConfig";
import { FaBars } from "react-icons/fa";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden mobile-menu justify-between">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center text-center text-gray-200 transition ${
          mobileNavOpen && "active"
        }`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <FaBars className="pointer-events-none fill-current" size={16} />
      </button>
      <IconLinks />
      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 mt-2 w-full rounded-xl bg-gray-900/90 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >
          <ul className="p-2 text-sm">
            {globalConfig.menuLinks.map((link) => (
              <LiLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </LiLink>
            ))}
          </ul>
        </Transition>
      </div>
    </div>
  );
}
