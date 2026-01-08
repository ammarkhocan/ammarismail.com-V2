import { Link, NavLink } from "react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Ammar<span className="text-gray-500">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-gray-900"
                  : "font-medium text-gray-600 hover:text-gray-900"
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
                  ? "font-medium text-gray-900"
                  : "font-medium text-gray-600 hover:text-gray-900"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-gray-900"
                  : "font-medium text-gray-600 hover:text-gray-900"
              }
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-gray-900"
                  : "font-medium text-gray-600 hover:text-gray-900"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-260px pl-5">
              <div className="mt-10 flex flex-col gap-6">
                <NavLink
                  to="/"
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                >
                  About
                </NavLink>
                <NavLink
                  to="/project"
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                >
                  Project
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                >
                  Contact
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
