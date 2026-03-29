import { useMemo, useState } from "react";
import { ExternalLink, Github, Search, Sparkles } from "lucide-react";

import { projectsData } from "@/data/projects";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import type { Project } from "@/types/projects";

function getUniqueCategories(projects: Project[]) {
  const categories = new Set<string>();

  projects.forEach((project) => {
    if (project.category) {
      categories.add(project.category);
    }
  });

  return ["All", ...Array.from(categories).sort()];
}

function ProjectCard({ project }: { project: Project }) {
  const hasRepo = Boolean(project.repo);
  const hasDemo = Boolean(project.demo);

  return (
    <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5 group pt-0">
      <div className="relative aspect-video overflow-hidden bg-white/5 w-full">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="block h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://via.placeholder.com/1200x675?text=Project+Image";
          }}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100" />

        {project.category && (
          <div className="absolute right-3 top-3">
            <Badge className="border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70">
              {project.category}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-base text-white">{project.title}</CardTitle>
        <p className="text-sm text-white/60">{project.desc}</p>
      </CardHeader>

      <CardContent className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack) => (
            <Badge
              key={stack}
              variant="secondary"
              className="bg-white/10 text-white/80"
            >
              {stack}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <Button
            size="sm"
            variant="outline"
            className="w-[calc(50%-0.25rem)] border-white/15 bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a
              href={project.repo || "#"}
              target={hasRepo ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" /> Repo
            </a>
          </Button>

          <Button size="sm" className="w-[calc(50%-0.25rem)]" asChild>
            <a
              href={project.demo || "#"}
              target={hasDemo ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Demo <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryOptions = useMemo(() => getUniqueCategories(projectsData), []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projectsData.filter((project) => {
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.stacks.join(" ").toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured,
  );
  const normalProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4" />
            <span>Projects</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">My Projects</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">
            A collection of projects I have worked on. You can search by title,
            description, or category.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-white/40" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project, stack, keyword..."
              className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((categoryName) => (
              <Button
                key={categoryName}
                size="sm"
                variant={
                  activeCategory === categoryName ? "secondary" : "outline"
                }
                onClick={() => setActiveCategory(categoryName)}
                className={
                  activeCategory === categoryName
                    ? "bg-white/15 text-white hover:bg-white/20"
                    : "border-white/15 bg-transparent text-white/80 hover:bg-white/10"
                }
              >
                {categoryName}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {featuredProjects.length > 0 && (
          <section className="mb-12 space-y-4">
            <h2 className="text-xl font-semibold">Featured</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">All Projects</h2>

          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              No projects match your search or filter criteria.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {normalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Have a project idea?</h3>
            <p className="text-sm text-white/60">
              If you'd like to collaborate or need frontend assistance, feel
              free to reach out.
            </p>
          </div>
          <Button asChild>
            <a href="/contact" className="gap-2">
              Contact
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
