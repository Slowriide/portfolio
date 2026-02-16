import { Button } from "@/components/ui/button";

function HeroSection({ stats }) {
  return (
    <section className="hero reveal" aria-labelledby="hero-title">
      <p className="eyebrow">Flutter | React | Next.js Developer</p>
      <h1 id="hero-title">I build clean, fast interfaces with purpose and precision.</h1>
      <p className="hero-copy">
          I build modern digital experiences combining clean design, solid logic, and a passion for continuous learning.
      </p>
      <div className="hero-actions">
        <Button asChild>
          <a href="#work">View projects</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#contact">Book a call</a>
        </Button>
      </div>
      <div className="stat-strip" aria-label="Highlights">
        {stats.map((stat) => (
          <p key={stat.label}>
            <strong>{stat.value}</strong> {stat.label}
          </p>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
