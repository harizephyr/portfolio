import FadeIn from "@/components/fade-in";
import ParallaxEffect from "@/components/parallax-effect";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/constants";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-muted/50 relative overflow-hidden"
    >
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.2} direction="down">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
        <ParallaxEffect speed={0.15} direction="up">
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing some of my recent work and contributions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group bg-card border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    {/* <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium flex items-center"
                    >
                      View Project <ExternalLinkIcon className="ml-1 h-4 w-4" />
                    </a> */}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full"
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
