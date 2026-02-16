import { useEffect, useMemo, useState } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { contactLinks, heroStats, navLinks, projects, studioBackgroundUrl } from "@/data/portfolioData";
import { DEFAULT_THEME_ID, resolveTheme, THEME_STORAGE_KEY, themeOptions } from "@/lib/themes";

function App() {
  const [themeId, setThemeId] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_THEME_ID;
    }

    return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME_ID;
  });

  const activeTheme = useMemo(() => resolveTheme(themeId), [themeId]);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, activeTheme.id);
  }, [activeTheme.id]);

  
  return (
    <div
      className="page-shell"
      style={{
        "--bg-image": `url(${studioBackgroundUrl})`,
        "--accent": activeTheme.accent,
        "--accent-strong": activeTheme.accentStrong,
        "--accent-rgb": activeTheme.accentRgb
      }}
    >
      <div className="background-layer" aria-hidden="true" />
      <div className="layout-frame">
        <SiteHeader navLinks={navLinks} themeOptions={themeOptions} activeThemeId={activeTheme.id} onThemeChange={setThemeId} />
        <main id="top" className="content-wrap">
          <HeroSection stats={heroStats} />
          <ProjectsSection projects={projects} />
          <ProcessSection />
          <ContactSection contactLinks={contactLinks} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
