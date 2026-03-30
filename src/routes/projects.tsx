import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";

import { projectsData } from "@/data/projects";
import type { Project } from "@/types/projects";

import ProjectCard from "@/components/shared/projectCard";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function getUniqueCategories(projects: Project[]) {
  const categories = new Set<string>();

  projects.forEach((project) => {
    if (project.category) {
      categories.add(project.category);
    }
  });

  return ["All", ...Array.from(categories).sort()];
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
