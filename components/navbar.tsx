"use client";

import { Container } from "@/components/ui/container";
import { PERSONAL_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NavItemProps {
  title: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ title, href, active, onClick }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          if (onClick) onClick();
        }}
        className={cn(
          "relative block px-3 py-2 transition",
          active
            ? "text-primary font-medium"
            : "hover:text-primary"
        )}
      >
        {title}
        {active && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0" />
        )}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setIsScrolled(window.scrollY > 50);

      // Handle active section highlighting
      const sections = navItems.map((item) => item.href);
      
      const currentSection = sections.find((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {PERSONAL_DATA.name}
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2 text-sm font-medium">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  title={item.title}
                  href={item.href}
                  active={activeSection === item.href}
                />
              ))}
              <li className="ml-3">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-4 rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-md border"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <Container>
            <nav className="py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <NavItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    active={activeSection === item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}