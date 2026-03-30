import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasRepo = Boolean(project.repo);
  const hasDemo = Boolean(project.demo);

  return (
    <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5 pt-0 group">
      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
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
