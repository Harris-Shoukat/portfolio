interface LogoProps {
  size?: "sm" | "base";
}

export function Logo({ size = "base" }: LogoProps) {
  return (
    <a href="#" className={`${size === "sm" ? "text-sm" : "text-base sm:text-lg"} font-bold tracking-tight text-[#FAFAFA]`}>
      Harris<span className="text-[#00F5A0]">.</span>
    </a>
  );
}
