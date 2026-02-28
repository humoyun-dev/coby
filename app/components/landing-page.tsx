import { FaqSection } from "@/app/components/sections/faq-section";
import { GovernanceSection } from "@/app/components/sections/governance-section";
import { HeroSection } from "@/app/components/sections/hero-section";
import { PartnersSection } from "@/app/components/sections/partners-section";
import { ProblemDataSection } from "@/app/components/sections/problem-data-section";
import { RoadmapSection } from "@/app/components/sections/roadmap-section";
import { SolutionArchitectureSection } from "@/app/components/sections/solution-architecture-section";
import { StakeholderValueSection } from "@/app/components/sections/stakeholder-value-section";
import { TechnologySection } from "@/app/components/sections/technology-section";
import { LocaleProvider } from "@/app/components/locale-provider";
import { SiteFooter } from "@/app/components/site-footer";
import { TopNav } from "@/app/components/top-nav";

export function LandingPage() {
  return (
    <LocaleProvider>
      <TopNav />
      <main>
        <HeroSection />
        <ProblemDataSection />
        <SolutionArchitectureSection />
        <StakeholderValueSection />
        <TechnologySection />
        <GovernanceSection />
        <RoadmapSection />
        <PartnersSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
