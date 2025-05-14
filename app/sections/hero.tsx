import AnimatedText from "@/components/animated-text";
import { Container } from "@/components/ui/container";
import { PERSONAL_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import ParallaxEffect from "@/components/parallax-effect";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      {/* Background elements with parallax effect */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.2} direction="down">
          <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
        <ParallaxEffect speed={0.3} direction="up">
          <div className="absolute -left-20 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2">Hi there, I'm</p>
            <AnimatedText
              text={PERSONAL_DATA.name}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              tag="h1"
            />
            <AnimatedText
              text={PERSONAL_DATA.title}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
              delay={1000}
              tag="h2"
            />
            <p className="text-muted-foreground mb-8 max-w-md">
              With 4 years of experience building cutting-edge applications
              using React, Next.js, Python, and cloud technologies. Specialized
              in AI integrations and scalable architectures.
            </p>

            <div className="flex space-x-4 mb-8">
              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={PERSONAL_DATA.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter profile"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/img/dp.jpeg"
                alt="Hariharan S"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
