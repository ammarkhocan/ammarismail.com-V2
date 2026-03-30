import type { Project } from "@/types/projects";

export const projectsData: Project[] = [
  {
    title: "Address Book",
    desc: "A simple Address Book app to manage contacts add, edit, delete, and search easily. Built with HTML, CSS, and JavaScript as part of my frontend practice projects.",
    stacks: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    image:
      "https://17worsb7dw.ucarecd.net/5e3760d7-71c2-4056-ac80-5ae44896cefe/-/preview/1000x457",
    repo: "https://github.com/ammarkhocan/address-book",
    demo: "https://address-book.ammarismail.com",
    featured: true,
  },
  {
    title: "Bolisto App",
    desc: "A simple task management app built with React to create, organize, and track daily tasks with a clean and responsive UI.",
    stacks: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://17worsb7dw.ucarecd.net/211c6fbc-80b2-4281-be2b-406f0673ac59/-/preview/1000x512",
    repo: "https://github.com/ammarkhocan/bolisto-app",
    demo: "https://bolisto-app.vercel.app",
    featured: false,
  },
  {
    title: "Football Players API",
    desc: "A RESTful API built with Bun and Hono to manage football players and club data with persistent storage.",
    stacks: ["Bun", "Hono", "TypeScript", "PostgreSQL"],
    category: "Backend",
    image:
      "https://17worsb7dw.ucarecd.net/69badde8-fc6e-46c1-84b8-57bd18969fbf/-/preview/1000x500",
    repo: "https://github.com/ammarkhocan/football-players-api",
    demo: "",
    featured: false,
  },
  {
    title: "Acaraga",
    desc: "A fullstack sports event platform that enables users to discover, join, and track events through a personalized dashboard. Built with a scalable layered architecture using React, Hono, and PostgreSQL, with type-safe validation and containerized deployment.",
    stacks: [
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    category: "Fullstack",
    image:
      "https://17worsb7dw.ucarecd.net/51b9257e-8fed-4893-9396-bb97989f0275/-/preview/873x1000",
    repo: "https://github.com/acaraga",
    demo: "https://acaraga.com",
    featured: true,
  },
  {
    title: "Seduh.in",
    desc: "A modern fullstack e-commerce application for local coffee products, built with a layered architecture using React, Hono, and PostgreSQL. Designed with scalable API structure, type-safe validation using Zod, and containerized deployment with Docker.",
    stacks: [
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    category: "Fullstack",
    image:
      "https://17worsb7dw.ucarecd.net/3bb68342-3a31-417c-a3ff-bb7fdead4f1b/-/preview/1000x952",
    repo: "https://github.com/ammarkhocan/seduh.in",
    demo: "https://seduh.in.ammarismail.com",
    featured: true,
  },
];
