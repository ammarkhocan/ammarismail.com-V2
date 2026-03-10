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

export default function About() {
  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 pb-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4" />
            <span>About Me</span>
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold">
            Kenalan dulu 👋
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/60 max-w-2xl">
            Cerita singkat tentang saya, apa yang saya suka bangun, dan
            teknologi yang saya pakai.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="space-y-5">
            <img
              src="https://17worsb7dw.ucarecd.net/cea206be-5cd8-4fcf-9853-abb4f99318ff/-/preview/971x1000"
              alt="Ammar Ismail Khocan"
              className="w-full max-w-90 rounded-2xl border border-white/10 object-cover"
            />

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/10 text-white/80">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                Indonesia
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white/80">
                <Briefcase className="mr-1 h-3.5 w-3.5" />
                Web Developer
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white/80">
                <GraduationCap className="mr-1 h-3.5 w-3.5" />
                Continuous learner
              </Badge>
            </div>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Hi,{" "}
              <span className="text-white font-medium">
                Ammar Ismail Khocan
              </span>
              . I started my journey as a web developer with a strong passion
              for building modern web applications using React and JavaScript.
            </p>

            <p>
              Currently, I'm focused on improving my skills in both frontend and
              backend development. In the past, I've worked on various projects
              that have helped me grow as a full-stack developer.
            </p>

            <p>
              I enjoy clean user interfaces, solving real-world problems through
              code, and working on side projects.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href="/resume.pdf" download className="gap-2">
                  Download Resume <Download className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-white/15 bg-transparent text-white"
                asChild
              >
                <a href="#tech-stack">My Tech Stack</a>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">What I Do</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/60">
                Build responsive UI, reusable components, and smooth
                interactions with React + Tailwind.
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">UI Component Design</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/60">
                Create consistent design systems using shadcn/ui, good spacing,
                and clean layouts.
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">Learning & Building</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-white/60">
                Improve skills by shipping projects, exploring best practices,
                and trying new tools.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="tech-stack" className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-3">My Tech Stacks</h2>
          <p className="text-sm text-white/60 mb-10">
            Tools yang sering saya gunakan untuk membangun aplikasi web.
          </p>

          <TechStackCarousel />
        </section>
      </div>
    </main>
  );
}
