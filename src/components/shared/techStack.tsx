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
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

function TechItem({ tech }: { tech: Tech }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-w-30 px-4 group cursor-pointer">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <img
          src={tech.icon}
          alt={tech.name}
          className="relative h-14 w-14 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStackCarousel() {
  const duplicatedStacks = [...techStacks, ...techStacks];

  return (
    <div className="w-full">
      <div className="max-w-7xl w-full">
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-black via-black/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-black via-black/80 to-transparent pointer-events-none" />

          <div className="overflow-hidden py-8">
            <div className="flex carousel-track">
              {duplicatedStacks.map((tech, i) => (
                <TechItem key={`tech-${i}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
