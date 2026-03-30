import { Link } from "react-router";
import {
  GithubIcon,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import ProjectCard from "@/components/shared/projectCard";
import { projectsData } from "@/data/projects";

import SEO from "@/components/shared/seo";

export function App() {
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 3);

  return (
    <main className="min-h-screen font-sans text-white selection:bg-white/30 bg-black">
      <SEO
        title="Ammar Ismail Khocan"
        description="Portfolio of Ammar Ismail Khocan, a Frontend Web Developer building fast and interactive web applications."
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-white/4 via-black to-black" />

      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-24 md:px-8">
        <div className="mb-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-56 md:h-72 md:w-72">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/3" />
              <div className="bg-linear-to-br absolute -inset-2 rounded-full from-white/10 to-transparent opacity-60 blur-xl" />

              <img
                src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
                alt="Ammar"
                loading="lazy"
                className="relative h-full w-full rounded-full border border-white/10 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/600x600?text=Ammar";
                }}
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Available for work
              </span>
            </div>

            <h1 className="leading-[1.1] tracking-tight text-4xl font-extrabold md:text-6xl">
              <span className="text-white">Hi, I'm</span>{" "}
              <span className="bg-linear-to-r bg-clip-text text-transparent from-white via-gray-300 to-gray-500">
                Ammar
              </span>
              <span className="ml-3 inline-block align-middle text-3xl md:text-5xl">
                👋
              </span>
              <br />
              <span className="text-white/90">Web Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              I enjoy building web applications and I'm always looking to learn
              something new. Most of my experience is built around React,
              Node.js, and TypeScript.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="group rounded-full bg-white px-6 text-black hover:bg-gray-200"
              >
                <Link to="/projects" className="gap-2 font-medium">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-white/60">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ammarismailkhocan",
                  label: "LinkedIn",
                },
                {
                  icon: GithubIcon,
                  href: "https://github.com/ammarkhocan",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/ammarkhocan", // Tolong sesuaikan username Instagram-nya ya
                  label: "Instagram",
                },
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:text-white hover:bg-white/10 rounded-full"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-white/10" />

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-2 tracking-tight text-3xl font-bold">
              Featured Projects
            </h2>
            <p className="max-w-xl text-base text-white/60">
              A curated selection of my recent development work.
            </p>
          </div>

          <Button
            variant="outline"
            className="group whitespace-nowrap rounded-full border-white/15 bg-transparent hover:bg-white/5"
            asChild
          >
            <Link to="/projects" className="gap-2">
              View All{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="bg-linear-to-br group relative mt-20 flex flex-col overflow-hidden rounded-3xl border border-white/10 from-white/5 to-transparent p-8 gap-6 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10"></div>

          <div className="relative z-10">
            <h3 className="mb-3 text-2xl font-bold md:text-3xl">
              Let's Work Together
            </h3>
            <p className="max-w-md text-base leading-relaxed text-white/60">
              Interested in collaborating or have an opportunity in mind? I'd
              love to hear from you.
            </p>
          </div>
          <Button
            asChild
            className="relative z-10 group w-full rounded-full bg-white px-8 py-6 text-base text-black hover:bg-gray-200 md:w-auto"
          >
            <Link to="/contact" className="gap-2">
              Send a Message{" "}
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
