import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasRepo = Boolean(project.repo);
  const hasDemo = Boolean(project.demo);

  return (
    <Card className="group flex h-full flex-col overflow-hidden pt-0 transition-colors duration-300">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
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

        <div className="absolute inset-0 bg-foreground/10 opacity-0 transition duration-300 group-hover:opacity-100" />

        {project.category && (
          <div className="absolute right-3 top-3">
            <Badge className="border-transparent bg-background/80 text-foreground shadow-sm backdrop-blur-md hover:bg-background/90">
              {project.category}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-base text-foreground">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{project.desc}</p>
      </CardHeader>

      <CardContent className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack) => (
            <Badge key={stack} variant="secondary">
              {stack}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <Button
            size="sm"
            variant="outline"
            className="w-[calc(50%-0.25rem)] bg-transparent"
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
