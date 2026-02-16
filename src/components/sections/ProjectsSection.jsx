import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PROJECT_THUMB_PLACEHOLDER = "https://placehold.co/1200x675/19161f/c9c3d8?text=Project+Preview";

function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <div className="project-media-wrap">
        <img
          className="project-media"
          src={project.thumbnail || PROJECT_THUMB_PLACEHOLDER}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = PROJECT_THUMB_PLACEHOLDER;
          }}
        />
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
  const [api, setApi] = useState(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateControls = () => {
      setCanGoPrev(api.canScrollPrev());
      setCanGoNext(api.canScrollNext());
    };

    updateControls();
    api.on("select", updateControls);
    api.on("reInit", updateControls);

    return () => {
      api.off("select", updateControls);
      api.off("reInit", updateControls);
    };
  }, [api]);

  return (
    <section id="work" className="section-block reveal" aria-labelledby="work-title">
      <div className="section-heading project-heading">
        <h2 id="work-title">Selected Work</h2>
        <div className="project-carousel-controls" aria-label="Project carousel controls">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="project-carousel-btn"
            onClick={() => api?.scrollPrev()}
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
            onClick={() => api?.scrollNext()}
            aria-label="Show next projects"
            disabled={!canGoNext}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      <Carousel className="project-carousel" setApi={setApi} opts={{ align: "start" }} aria-label="Projects carousel">
        <CarouselContent className="project-carousel-content">
          {projects.map((project) => (
            <CarouselItem key={project.title} className="project-carousel-item">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default ProjectsSection;
