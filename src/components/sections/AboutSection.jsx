import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function AboutSection() {
  return (
    <section id="about" className="section-block reveal" aria-labelledby="about-title">
      <Card className="panel-card">
        <CardHeader>
          <CardTitle id="about-title">About</CardTitle>
          <CardDescription>
            I help teams turn rough product ideas into polished interfaces that stay maintainable.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            My focus is frontend architecture with a design eye: reusable component systems, balanced spacing,
            meaningful motion, and strong usability fundamentals.
          </p>
          <Separator className="divider" />
          <p className="skill-line">React, Vite, TypeScript, Tailwind CSS, Node.js, Accessibility Audits</p>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
