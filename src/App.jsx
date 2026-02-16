import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { contactLinks, heroStats, navLinks, projects, studioBackgroundUrl } from "@/data/portfolioData";

function App() {
  return (
    <div className="page-shell" style={{ "--bg-image": `url(${studioBackgroundUrl})` }}>
      <div className="background-layer" aria-hidden="true" />
      <SiteHeader navLinks={navLinks} />

      <main id="top" className="content-wrap">
        <HeroSection stats={heroStats} />
        <ProjectsSection projects={projects} />
        <ProcessSection />
        <ContactSection contactLinks={contactLinks} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
