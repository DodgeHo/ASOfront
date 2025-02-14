import Image from "next/image";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  src: string;
  alt?: string; 
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, src, alt }) => {
  return (
    <li>
      <a
        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
        href={href}
        aria-label={ariaLabel}
      >
        <Image className="h-4 w-4" src={src} alt={alt || ariaLabel} />
      </a>
    </li>
  );
};

export default SocialLink;