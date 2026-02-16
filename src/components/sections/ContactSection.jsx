import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const contactIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin
};

function getContactDetail(item) {
  if (item.href.startsWith("mailto:")) {
    return item.href.replace("mailto:", "");
  }

  try {
    const parsedUrl = new URL(item.href);
    const cleanPath = parsedUrl.pathname === "/" ? "" : parsedUrl.pathname;
    return `${parsedUrl.hostname}${cleanPath}`;
  } catch {
    return item.href;
  }
}

function ContactSection({ contactLinks }) {
  return (
    <section id="contact" className="section-block safe-section contact-section reveal" aria-labelledby="contact-title">
      <div className="contact-layout">
        <Card className="panel-card contact-card stat-frame-card">
          <CardHeader>
            <CardTitle id="contact-title">Let us build something sharp</CardTitle>
            <CardDescription>
              Available for freelance projects, long-term product work, and team augmentation.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="contact-item-grid" aria-label="Contact platforms">
          {contactLinks.map((item) => {
            const Icon = contactIcons[item.label];
            const detail = getContactDetail(item);
            const isEmail = item.label === "Email";

            return (
              <a
                key={item.label}
                className="contact-item-link contact-link"
                href={item.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer"}
                aria-label={`${item.label}: ${detail}`}
              >
                <Card className="panel-card contact-item-card stat-frame-card">
                  <CardHeader className="contact-item-header p-0 space-y-0">
                    {Icon ? (
                      <span className="contact-item-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                    ) : null}
                    <div className="contact-item-copy">
                      <CardTitle className="contact-item-title">{item.label}</CardTitle>
                      <CardDescription className="contact-item-detail">{detail}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
