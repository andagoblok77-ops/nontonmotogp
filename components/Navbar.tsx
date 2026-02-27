"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, Sun, Moon, ChevronDown } from "lucide-react";
import Image from "next/image";
import gambar from "../public/logo.png";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect screen size
  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsDesktop(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  // Dark mode toggle
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark || localStorage.getItem("theme") == "dark" ? true : false) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent",
        className,
      )}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          aria-label="Homepage"
        >
          <Image src={gambar} alt="Logo" width={150} height={150} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>

          {/* Dropdown 1 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                aria-haspopup="true"
                className="text-muted-foreground"
              >
                Live Streaming
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="animate-in fade-in-0 zoom-in-95 duration-200"
            >
              <DropdownMenuItem asChild>
                <Link
                  target="_blank"
                  href="https://www.zvstreams.com/search/label/Live%20MotoGP" 
                  className="text-muted-foreground"
                >
                  MotoGP
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  target="_blank"
                  href="https://www.zvstreams.com/search/label/Live%20WSBK"
                  className="text-muted-foreground"
                >
                  WSBK
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown 2 (UPDATED) */}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search Modal */}
          <Dialog
            onOpenChange={(open) => {
              if (open) {
                setTimeout(() => {
                  searchInputRef.current?.focus();
                }, 100);
              }
            }}
          >
            <DialogTrigger asChild>
              {/* <Button variant="ghost" size="icon" aria-label="Open Search">
                <Search className="h-5 w-5" />
              </Button> */}
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>
              <Input
                ref={searchInputRef}
                placeholder="Type to search..."
                aria-label="Search input"
              />
            </DialogContent>
          </Dialog>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("theme", !isDark ? "dark" : "light");
            }}
            aria-label="Toggle Dark Mode"
            className="transition-all duration-300"
          >
            {isDark ? (
              <Sun className="h-5 w-5 transition-transform rotate-180" />
            ) : (
              <Moon className="h-5 w-5 transition-transform" />
            )}
          </Button>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 animate-in fade-in-0 zoom-in-95 duration-200"
            >
              <DropdownMenuItem asChild className="px-1.5 ">
                <Link href="/">Home</Link>
              </DropdownMenuItem>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="px-1.5 ">
                  <Button
                    variant="ghost"
                    aria-haspopup="true"
                    className="text-muted-foreground"
                  >
                    Live Streaming
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="animate-in fade-in-0 zoom-in-95 duration-200"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      target="_blank"
                      href="https://www.zvstreams.com/search/label/Live%20MotoGP"
                      className="text-muted-foreground"
                    >
                      MotoGP
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      target="_blank"
                      href="https://www.zvstreams.com/search/label/Live%20WSBK"
                      className="text-muted-foreground"
                    >
                      WSBK
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  pathname: string;
  children: React.ReactNode;
}

function NavLink({ href, pathname, children }: NavLinkProps) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
