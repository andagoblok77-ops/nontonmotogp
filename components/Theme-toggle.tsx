"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={() => {
        const themeVal =
          theme === localStorage.getItem("theme-livemotogp") ? "light" : "dark";
        setTheme(themeVal);
        
        
        localStorage.setItem("theme-livemotogp", themeVal);
      }}
      className="transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}
