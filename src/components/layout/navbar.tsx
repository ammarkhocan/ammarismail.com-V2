import { Link, NavLink } from "react-router";
import { Menu, Download, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const baseLink =
    "text-sm font-medium text-white/70 hover:text-white transition-colors";

  const activeLink =
    "text-sm font-medium text-white relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="text-xl md:text-2xl font-bold text-white">
          Ammar<span className="text-white/50">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
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
                to="/project"
                className={({ isActive }) => (isActive ? activeLink : baseLink)}
              >
                Project
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

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Toggle theme"
            >
              <Moon className="h-5 w-5" />
            </Button>

            <Button asChild>
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
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-70 border-white/10 bg-black/90 text-white backdrop-blur-xl"
            >
              <div className="mt-10 flex flex-col gap-6">
                <NavLink to="/" className={baseLink}>
                  Home
                </NavLink>
                <NavLink to="/about" className={baseLink}>
                  About
                </NavLink>
                <NavLink to="/project" className={baseLink}>
                  Project
                </NavLink>
                <NavLink to="/contact" className={baseLink}>
                  Contact
                </NavLink>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-white/15 bg-transparent text-white hover:bg-white/10"
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    Theme (later)
                  </Button>

                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-white/90"
                  >
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
