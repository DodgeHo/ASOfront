import Image from "next/image";
import { LiLink } from "./LinkComponents";
import walletIcon from "@/public/images/wallet.png";
import emailIcon from "@/public/images/email.png";
import personaIcon from "@/public/images/persona.png";
import walletActIcon from "@/public/images/wallet-act.png";
import emailActIcon from "@/public/images/email-act.png";
import personaActIcon from "@/public/images/persona-act.png";

const ICON_SIZE = 30;

export default function IconLinks() {
  return (
    <div className="flex space-x-2 ml-auto">
      <LiLink href="/Wallet" className="icon-link">
        <Image src={walletIcon} alt="Wallet" width={ICON_SIZE} height={ICON_SIZE} className="default-icon" />
        <Image src={walletActIcon} alt="Wallet Active" width={ICON_SIZE} height={ICON_SIZE} className="active-icon" />
      </LiLink>
      <LiLink href="/email" className="icon-link">
        <Image src={emailIcon} alt="Email" width={ICON_SIZE} height={ICON_SIZE} className="default-icon" />
        <Image src={emailActIcon} alt="Email Active" width={ICON_SIZE} height={ICON_SIZE} className="active-icon" />
      </LiLink>
      <LiLink href="/signin" className="icon-link">
        <Image src={personaIcon} alt="Persona" width={ICON_SIZE} height={ICON_SIZE} className="default-icon" />
        <Image src={personaActIcon} alt="Persona Active" width={ICON_SIZE} height={ICON_SIZE} className="active-icon" />
      </LiLink>
    </div>
  );
}