import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ammar Ismail Khocan.
            <span className="block md:ml-2 md:inline">
              All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ammarismailkhocan/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/ammarkhocan"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com/ammarkhocan"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="mailto:ammarme@gmail.com"
              className="text-muted-foreground transition hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
