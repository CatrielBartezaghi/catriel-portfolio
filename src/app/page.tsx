import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <SkillsSection />
      <HighlightsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
