import { Container } from "@/components/ui/container";
import { PERSONAL_DATA } from "@/lib/constants";
import { HeartIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {PERSONAL_DATA.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <p>
              Looking forward always!
              <HeartIcon className="inline-block h-3 w-3 text-primary mx-1" />{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
