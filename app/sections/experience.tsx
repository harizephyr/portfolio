import FadeIn from "@/components/fade-in";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/constants";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import ParallaxEffect from "@/components/parallax-effect";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.1} direction="up">
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="A timeline of my professional journey and key achievements"
        />

        <div className="relative border-l border-muted pl-8 ml-4 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <FadeIn key={index} delay={index * 200} direction="right">
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center -left-12 border-4 border-background">
                  <BriefcaseIcon className="h-4 w-4 text-primary" />
                </div>

                <div className="bg-card border rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
                  <div className="sm:flex sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-muted-foreground">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}