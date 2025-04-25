"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Code,
  Gamepad2,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TechCategory = {
  name: string;
  icon: React.ReactNode;
  technologies: string[];
};

export default function TechStackTree() {
  const techCategories: TechCategory[] = [
    {
      name: "Web Developer",
      icon: <Code className="h-5 w-5" />,
      technologies: ["Next.js", "Laravel", "React"],
    },
    {
      name: "CSS",
      icon: <Palette className="h-5 w-5" />,
      technologies: ["Tailwind", "Shadcn"],
    },
    {
      name: "Game Developer",
      icon: <Gamepad2 className="h-5 w-5" />,
      technologies: ["Renpy", "Unity"],
    },
  ];

  return (
    <div className="w-full mx-auto dark">
      <div className="space-y-4">
        {techCategories.map((category) => (
          <CategoryNode key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryNode({ category }: { category: TechCategory }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 bg-muted/50 hover:bg-muted transition-colors text-left"
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        <span className="flex items-center gap-2">
          {category.icon}
          <span className="font-medium">{category.name}</span>
        </span>
      </button>

      <div
        className={cn(
          "pl-12 overflow-hidden transition-all",
          isOpen ? "max-h-96 py-3" : "max-h-0"
        )}
      >
        <ul className="space-y-2">
          {category.technologies.map((tech) => (
            <li key={tech} className="flex items-center gap-2 py-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
