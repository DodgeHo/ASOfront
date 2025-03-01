import Image from "next/image";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  src: string;
  alt?: string;
  size?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  ariaLabel,
  src,
  alt,
  size = 16,
}) => {
  const sizeClass = `h-${size} w-${size}`; // Imagesize

  return (
    <li className="list-none">
      <a
        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
        href={href}
        aria-label={ariaLabel}
      >
        <Image width={size} height={size} src={src} alt={alt || ariaLabel} />
      </a>
    </li>
  );
};

export default SocialLink;
