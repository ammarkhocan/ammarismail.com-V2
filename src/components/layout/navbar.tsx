import { Link, NavLink } from "react-router";
import { Menu, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ModeToggle } from "../mode-toggle";

const RESUME_URL =
  "https://drive.google.com/file/d/1RtU10NXcx-oNOoAgf7EsPI-mGl65XpRD/view?usp=sharing";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="text-xl font-bold md:text-2xl">
          Ammar<span className="text-muted-foreground">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-foreground"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-foreground"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-foreground"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-foreground"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button asChild className="rounded-full">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 flex flex-col">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links</SheetDescription>
              </VisuallyHidden>

              <div className="flex items-center justify-between py-2">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold text-foreground"
                >
                  Ammar<span className="text-muted-foreground">.</span>
                </Link>
              </div>

              {/* Links */}
              <nav className="mt-8 flex flex-col gap-4">
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-foreground border-l-2 border-foreground pl-3"
                      : "font-medium text-muted-foreground hover:text-foreground pl-3"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-foreground border-l-2 border-foreground pl-3"
                      : "font-medium text-muted-foreground hover:text-foreground pl-3"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/projects"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-foreground border-l-2 border-foreground pl-3"
                      : "font-medium text-muted-foreground hover:text-foreground pl-3"
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-foreground border-l-2 border-foreground pl-3"
                      : "font-medium text-muted-foreground hover:text-foreground pl-3"
                  }
                >
                  Contact
                </NavLink>
              </nav>

              <div className="mt-auto pt-6 border-t border-border">
                <Button asChild className="rounded-full w-full">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
