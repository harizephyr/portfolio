import FadeIn from "@/components/fade-in";
import ParallaxEffect from "@/components/parallax-effect";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PERSONAL_DATA } from "@/lib/constants";
import {
  BrainCircuitIcon,
  LightbulbIcon,
  ServerIcon,
  SmartphoneIcon,
} from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <BrainCircuitIcon className="h-6 w-6" />,
      title: "AI Integration",
      description:
        "Expertise in integrating LLMs and AI capabilities into applications, creating intelligent user experiences.",
    },
    {
      icon: <ServerIcon className="h-6 w-6" />,
      title: "Full Stack Development",
      description:
        "End-to-end development skills from frontend to backend, databases, and cloud infrastructure.",
    },
    {
      icon: <SmartphoneIcon className="h-6 w-6" />,
      title: "Responsive Design",
      description:
        "Building applications that work flawlessly across all device sizes and platforms.",
    },
    {
      icon: <LightbulbIcon className="h-6 w-6" />,
      title: "Product Innovation",
      description:
        "Transforming ideas into scalable products with focus on user experience and business value.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.15} direction="left">
          <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer and product specialist with expertise in AI and modern web technologies"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="prose prose-lg dark:prose-invert">
              <p>
                I'm a Full Stack Developer and Product Specialist with 4 years of experience 
                building innovative applications that blend cutting-edge AI capabilities 
                with robust software architecture.
              </p>
              <p>
                My expertise spans across both frontend and backend technologies, with a 
                strong focus on React, Next.js, Python (FastAPI, Django), and cloud platforms 
                like AWS, GCP, and Azure. I specialize in creating responsive, performant 
                applications with modern, user-friendly interfaces.
              </p>
              <p>
                As an AI enthusiast, I've worked extensively with technologies like LangChain, 
                PyTorch, and various LLMs (GPT, LLaMA, Claude) to create intelligent applications 
                that solve real-world problems.
              </p>
              <p>
                Based in {PERSONAL_DATA.location}, I'm passionate about continuous learning 
                and staying at the forefront of technology trends to deliver exceptional 
                digital experiences.
              </p>
            </div>
          </FadeIn>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <FadeIn key={index} delay={index * 100} direction="up">
                  <div className="bg-card p-6 rounded-xl shadow-sm border">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}