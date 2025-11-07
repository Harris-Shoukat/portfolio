import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

export function SkillsetReel() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 md:py-12">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        {/* Row 1: Core Frontend Skills */}
        <ScrollVelocityRow baseVelocity={2} direction={1} className="text-primary/90">
          ReactJs • ReactNative • TypeScript • Next.js • Tailwind CSS • JavaScript (ES6+) • HTML5 • CSS3 • 
        </ScrollVelocityRow>

        {/* Row 2: Tools & Advanced Skills */}
        <ScrollVelocityRow baseVelocity={2} direction={-1} className="text-primary/80">
          Redux • Framer Motion • GSAP • Vite • React Testing Library • git/github •
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* Fade gradients on sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}