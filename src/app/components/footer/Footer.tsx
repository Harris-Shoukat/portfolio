import { Logo } from "@/components/ui/Logo";
import { SOCIAL } from "@/lib/constants";
import { FooterLink } from "./FooterLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F1F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />

          <div className="flex items-center gap-6">
            <FooterLink href={SOCIAL.github} label="GitHub" external />
            <FooterLink href={SOCIAL.linkedin} label="LinkedIn" external />
            <FooterLink href={`mailto:${SOCIAL.email}`} label="Email" />
          </div>

          <p className="text-xs text-[#71717A]">&copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
