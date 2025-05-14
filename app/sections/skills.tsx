import FadeIn from "@/components/fade-in";
import ParallaxEffect from "@/components/parallax-effect";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.15} direction="right">
          <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
        <ParallaxEffect speed={0.2} direction="left">
          <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit for building modern applications"
        />

        <div className="space-y-12">
          {SKILLS.map((skillCategory, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="relative group"
                    >
                      <div className="bg-background border rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <span className="font-medium">{tech}</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} className="mt-16">
          <div className="bg-card border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">My Development Approach</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-1 w-[95%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Clean Architecture</span>
                  <span className="text-muted-foreground">95%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-2 w-[90%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Responsive Design</span>
                  <span className="text-muted-foreground">90%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-3 w-[88%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Testing & Quality</span>
                  <span className="text-muted-foreground">88%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-4 w-[92%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>CI/CD Implementation</span>
                  <span className="text-muted-foreground">92%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-5 w-[94%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>API Design</span>
                  <span className="text-muted-foreground">94%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-chart-1 w-[89%] rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Performance Optimization</span>
                  <span className="text-muted-foreground">89%</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}