import { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  teamSize?: number;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

export type Skill = {
  name: string;
  color: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type NavItem = {
  name: string;
  href: string;
};

