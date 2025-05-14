import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import SkillsSection from "./sections/skills";
import ExperienceSection from "./sections/experience";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}