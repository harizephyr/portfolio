"use client";

import FadeIn from "@/components/fade-in";
import ParallaxEffect from "@/components/parallax-effect";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PERSONAL_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, SendIcon, TwitterIcon } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          type: null,
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxEffect speed={0.2} direction="left">
          <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </ParallaxEffect>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to bring it to life"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me via email or through the contact form. 
                I'm open to discussing new projects, opportunities, or just chatting about technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {PERSONAL_DATA.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">{PERSONAL_DATA.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href={PERSONAL_DATA.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary hover:text-primary-foreground border p-3 rounded-full transition-colors"
                    aria-label="GitHub profile"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href={PERSONAL_DATA.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary hover:text-primary-foreground border p-3 rounded-full transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href={PERSONAL_DATA.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary hover:text-primary-foreground border p-3 rounded-full transition-colors"
                    aria-label="Twitter profile"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium flex items-center justify-center disabled:opacity-70 transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <SendIcon className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
              
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}