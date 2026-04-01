type Tech = {
  name: string;
  icon: string;
};

const techStacks: Tech[] = [
  {
    name: "HTML",
    icon: "https://17worsb7dw.ucarecd.net/270d740f-fa0f-4504-8a58-e4f057f1f447/-/preview/568x643/",
  },
  {
    name: "CSS",
    icon: "https://17worsb7dw.ucarecd.net/c557ffc7-94f0-4c9d-9a7c-e8071514dedb/-/preview/800x908/",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Router",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  {
    name: "Hono",
    icon: "https://hono.dev/images/logo.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

import { Card, CardContent } from "@/components/ui/card";

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {techStacks.map((tech) => (
        <Card
          key={tech.name}
          className="group overflow-hidden bg-muted/30 border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
        >
          <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
            <div className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {tech.name}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
