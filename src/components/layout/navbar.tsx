import { Link, NavLink } from "react-router";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";

export function Navbar() {
  const baseLink =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  const activeLink =
    "text-sm font-medium text-foreground relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-foreground";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="text-xl font-bold text-foreground md:text-2xl">
          Ammar<span className="text-muted-foreground">.</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? activeLink : baseLink)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeLink : baseLink)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? activeLink : baseLink)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeLink : baseLink)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <ModeToggle />

            <Button asChild className="rounded-full">
              <a href="/resume.pdf" download className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-70 border-border bg-background/95 text-foreground backdrop-blur-xl"
            >
              <div className="mt-10 flex flex-col gap-6">
                <NavLink to="/" className={baseLink}>
                  Home
                </NavLink>
                <NavLink to="/about" className={baseLink}>
                  About
                </NavLink>
                <NavLink to="/projects" className={baseLink}>
                  Projects
                </NavLink>
                <NavLink to="/contact" className={baseLink}>
                  Contact
                </NavLink>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      Theme
                    </span>
                    <ModeToggle />
                  </div>

                  <Button asChild className="w-full">
                    <a href="/resume.pdf" download className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
