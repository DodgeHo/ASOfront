"use client";

import Link from "next/link";
import {
  FaWallet,
  FaEthereum,
  FaExternalLinkAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "@css/sidebar.css";

export default function DonationSidebar() {
  return (
    <aside className="donation-sidebar">
      <nav className="donation-sidebar-nav">
        <ul>
          <li className="donation-sidebar-nav-content">
            <p className="donation-sidebar-nav-title">Token Sale Duration</p>
            <div className="grid grid-cols-[auto_1fr]">
              <div>
                <p className="donation-sidebar-nav-text-second">Duration</p>
                <p className="donation-sidebar-nav-text-second">Start Date</p>
                <p className="donation-sidebar-nav-text-second">End Date</p>
              </div>
              <div>
                <p className="donation-sidebar-nav-text-main">5 days</p>
                <p className="donation-sidebar-nav-text-main">
                  Dec 13, 2024 at 06:00 PM
                </p>
                <p className="donation-sidebar-nav-text-main">
                  Dec 18, 2024 at 06:00 PM
                </p>
              </div>
            </div>
          </li>
          <li className=" donation-sidebar-nav-content donation-sidebar-border">
            <p className="donation-sidebar-nav-title">Token Links</p>
            <ul>
              <li className="donation-sidebar-nav-text-block-link">
                <Link href="#0">
                  <FaWallet />
                  Token Sale Creator Wallet
                  <FaExternalLinkAlt />
                </Link>
              </li>
              <li className="donation-sidebar-nav-text-block-link">
                <Link href="#0">
                  <FaEthereum />
                  Token Contract Address
                  <FaExternalLinkAlt />
                </Link>
              </li>
            </ul>
          </li>
          <li className=" donation-sidebar-nav-content donation-sidebar-border">
            <p className="donation-sidebar-nav-title">Help Links and FAQ</p>
            <ul>
              <li className="donation-sidebar-nav-text-block-link">
                <Link href="#0">
                  <FaQuestionCircle />
                  How to Join a Sale on Fjord
                  <FaExternalLinkAlt />
                </Link>
              </li>
              <li className="donation-sidebar-nav-text-block-link">
                <Link href="#0">
                  <FaQuestionCircle />
                  What is a Fixed Price Sale?
                  <FaExternalLinkAlt />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
