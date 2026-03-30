import { Link } from "react-router";
import {
  GithubIcon,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const featuredProjects = [
  {
    title: "ACARAGA - Sports Event Platform",
    desc: "A modern platform to centralize information and track sports events. Built with a robust full-stack architecture.",
    image: "https://via.placeholder.com/1200x675?text=ACARAGA+Platform",
    stacks: ["React", "Tailwind CSS", "Bun", "Hono", "Prisma"],
    repo: "https://github.com/yourusername/acaraga",
    demo: "https://acaraga-demo.com",
  },
  {
    title: "Interactive Quiz Application",
    desc: "A dynamic quiz app featuring state management, a countdown timer, local storage persistence, and OpenTDB API integration.",
    image: "https://via.placeholder.com/1200x675?text=Quiz+App",
    stacks: ["React", "TypeScript", "Vite", "Shadcn UI"],
    repo: "https://github.com/yourusername/quiz-app",
    demo: "https://quiz-app-demo.com",
  },
  {
    title: "PT GABE JAI PRO - Real Estate",
    desc: "A premium company profile website for a real estate entity, featuring a responsive UI and an interactive KPR calculator.",
    image: "https://via.placeholder.com/1200x675?text=Real+Estate+Web",
    stacks: ["HTML", "CSS", "JavaScript", "UI/UX"],
    repo: "https://github.com/yourusername/gabe-jai-pro",
    demo: "https://gabejaipro.com",
  },
];

export function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-white/4 via-black to-black -z-10" />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-8 pt-24 pb-14">
        <div className="mb-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-56 md:h-72 md:w-72">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/3" />
              <div className="absolute -inset-2 rounded-full bg-linear-to-br from-white/10 to-transparent blur-xl opacity-60" />

              <img
                src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
                alt="Ammar"
                loading="lazy"
                className="relative h-full w-full rounded-full object-cover border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/600x600?text=Ammar";
                }}
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 text-sm text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="text-white">Hi, I'm</span>{" "}
              <span className="bg-linear-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Ammar
              </span>
              <span className="ml-2 inline-block align-middle text-3xl md:text-5xl">
                👋
              </span>
              <br />
              <span className="text-white/90">Frontend Web Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/60 leading-relaxed text-base md:text-lg">
              I focus on building clean and responsive web interfaces—from
              reusable components and robust state management to the small
              details that make interactions feel smooth and intuitive.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="group rounded-full px-6 bg-white text-black hover:bg-gray-200"
              >
                <Link to="/projects" className="gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-7 flex items-center gap-2 text-white/70">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: GithubIcon,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
              ].map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
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

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Featured Projects
            </h2>
            <p className="text-base text-white/60 max-w-xl">
              A curated selection of my recent development work.
            </p>
          </div>

          <Button
            variant="outline"
            className="border-white/15 bg-transparent group rounded-full hover:bg-white/5 whitespace-nowrap"
            asChild
          >
            <Link to="/projects" className="gap-2">
              View All{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <Card
              key={p.title}
              className="bg-white/5 border-white/10 flex flex-col overflow-hidden transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative aspect-video overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/1200x675?text=Project+Image";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {p.title}
                </CardTitle>
                <p className="text-sm text-white/60 leading-relaxed">
                  {p.desc}
                </p>
              </CardHeader>

              <CardContent className="mt-auto space-y-5">
                <div className="flex flex-wrap gap-2">
                  {p.stacks.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="bg-white/10 text-white/80 hover:bg-white/20 transition-colors cursor-default"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {p.repo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/15 bg-transparent hover:bg-white/10 rounded-md"
                      asChild
                    >
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="gap-2"
                      >
                        <GithubIcon className="h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button
                      size="sm"
                      className="rounded-md group bg-white text-black hover:bg-gray-200"
                      asChild
                    >
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="gap-2"
                      >
                        Live Demo{" "}
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-8 md:p-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Let's Work Together
            </h3>
            <p className="text-base text-white/60 max-w-md leading-relaxed">
              Interested in collaborating or have an opportunity in mind? I'd
              love to hear from you.
            </p>
          </div>
          <Button
            asChild
            className="relative z-10 group rounded-full px-8 py-6 text-base bg-white text-black hover:bg-gray-200 w-full md:w-auto"
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
