import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ProcessSection() {
  return (
    <section id="about" className="section-block safe-section reveal" aria-labelledby="about-title">
      <Card className="panel-card stat-frame-card">
        <CardHeader>
          <CardTitle id="about-title">About Me</CardTitle>
          <CardDescription className="about-description">
            I&apos;m a front-end and mobile developer focused on building clean, intuitive, and performant
            applications. I work mainly with React, Next.js, and Flutter, creating user-centered interfaces that
            combine solid logic with thoughtful design.
          </CardDescription>
        </CardHeader>
        <CardContent className="about-content">
          <p>
            My journey into development has been driven by curiosity and continuous learning. I enjoy turning ideas
            into real products, integrating APIs, managing state efficiently, and improving code structure over time.
            I value clean architecture, good practices, and collaboration within a team.
          </p>
          <Separator className="divider" />
          <p className="skill-line">React, Next.js, Flutter, TypeScript, Tailwind CSS, Accessibility</p>
        </CardContent>
      </Card>
    </section>
  );
}

export default ProcessSection;
