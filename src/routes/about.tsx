import TechStackCarousel from "@/components/shared/techStack";
import {
  Download,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/shared/seo";

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-24 text-foreground transition-colors duration-300">
      <SEO
        title="About"
        description="Portfolio of Ammar Ismail Khocan, a Frontend Web Developer building fast and interactive web applications."
      />
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            <Sparkles className="h-4 w-4" />
            <span>About Me</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Let's get to know each other 👋
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
            A brief story about me, what I love to build, and the technologies I
            use.
          </p>
        </div>

        <section className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div className="space-y-5">
            <img
              src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
              alt="Ammar Ismail Khocan"
              className="max-w-90 w-full rounded-2xl border border-border object-cover"
            />

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                Indonesia
              </Badge>
              <Badge variant="secondary">
                <Briefcase className="mr-1 h-3.5 w-3.5" />
                Web Developer
              </Badge>
              <Badge variant="secondary">
                <GraduationCap className="mr-1 h-3.5 w-3.5" />
                Continuous learner
              </Badge>
            </div>
          </div>

          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Hi I'm Ammar Ismail Khocan , a web developer based in Indonesia. I
              spend most of my time working with React and Tailwind, turning
              static designs into interactive and responsive web apps.
            </p>

            <p>
              I like keeping things simple and clean, both in UI design and in
              my code. Lately, I've been diving deeper into full-stack
              development, figuring out how the backend connects with the
              frontend to build complete products.
            </p>

            <p>
              When I'm not writing code or debugging errors, you can usually
              find me playing video games or working out.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href="/resume.pdf" download className="gap-2">
                  Download Resume <Download className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" className="bg-transparent" asChild>
                <a href="#tech-stack">My Tech Stack</a>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12 bg-border" />

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">What I Do</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-base">
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Writing clean, functional React code. I care about how things
                look, but I care even more about how they work under the hood.
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-base">
                  UI/UX Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Translating Figma designs into actual web pages. I try my best
                to pay attention to spacing, colors, and responsive layouts.
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-base">
                  Tinkering & Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Building side projects just to see how things work. Currently
                exploring how to write better and more maintainable backend
                code.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="tech-stack" className="mt-20 text-center">
          <h2 className="mb-3 text-2xl font-bold">My Tech Stack</h2>
          <p className="mb-10 text-sm text-muted-foreground">
            The tools and technologies I frequently use to build web
            applications.
          </p>

          <TechStackCarousel />
        </section>
      </div>
    </main>
  );
}
