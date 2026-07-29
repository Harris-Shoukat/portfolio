interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export function FooterLink({ href, label, external }: FooterLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
    >
      {label}
    </a>
  );
}
