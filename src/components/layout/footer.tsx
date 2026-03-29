import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Ammar Ismail Khocan.
            <span className="block md:inline md:ml-2">
              All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ammarismailkhocan/"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/ammarkhocan"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://instagram.com/ammarkhocan"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="mailto:youremail@gmail.com"
              className="text-white/60 hover:text-white transition"
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
