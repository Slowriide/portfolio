import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CARDS_PER_VIEW = 3;

function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <div className="project-media-wrap">
        <img className="project-media" src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
        <div className="project-media-overlay" aria-hidden="true" />
      </div>
      <CardHeader className="project-card-header">
        <div className="project-meta">
          <span>{project.meta}</span>
          <span>{project.year}</span>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="project-description">{project.description}</CardDescription>
        <div className="tech-badges" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="project-card-content project-actions">
        <Button asChild variant="secondary" className="project-link project-link-primary">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        {project.live ? (
          <Button asChild variant="ghost" className="project-link project-link-secondary">
            <a href={project.live} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </Button>
        ) : (
          <span className="project-link-disabled" aria-label="Live site unavailable">
            Live Site N/A
          </span>
        )}
      </CardContent>
    </Card>
  );
}

function ProjectsSection({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = useMemo(() => Math.max(0, projects.length - CARDS_PER_VIEW), [projects.length]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section id="work" className="section-block reveal" aria-labelledby="work-title">
      <div className="section-heading project-heading">
        <h2 id="work-title">Selected Work</h2>
        <p>Recent product-focused builds from concept to delivery.</p>
        <div className="project-carousel-controls" aria-label="Project carousel controls">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="project-carousel-btn"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            aria-label="Show previous projects"
            disabled={!canGoPrev}
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="project-carousel-btn"
            onClick={() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))}
            aria-label="Show next projects"
            disabled={!canGoNext}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      <div className="project-carousel" aria-label="Projects carousel">
        <div className="project-carousel-track" style={{ transform: `translateX(-${(currentIndex * 100) / CARDS_PER_VIEW}%)` }}>
          {projects.map((project) => (
            <div key={project.title} className="project-carousel-item" style={{ flexBasis: `${100 / CARDS_PER_VIEW}%` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
