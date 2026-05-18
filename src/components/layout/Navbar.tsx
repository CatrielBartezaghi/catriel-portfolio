import Link from "next/link";
import { Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-border">
      <div className="max-w-[1120px] mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-text-primary tracking-tight">
          <Terminal className="text-primary w-7 h-7" />
          <span>{portfolioData.hero.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link href="#about" className="text-text-secondary hover:text-text-primary transition-colors duration-300">About</Link>
          <Link href="#projects" className="text-text-secondary hover:text-text-primary transition-colors duration-300">Projects</Link>
          <Link href="#skills" className="text-text-secondary hover:text-text-primary transition-colors duration-300">Skills</Link>
          <Link href="#experience" className="text-text-secondary hover:text-text-primary transition-colors duration-300">Experience</Link>
        </nav>
        <a 
          href="#contact"
          className="text-base bg-primary text-background px-4 py-2 rounded-md hover:bg-primary-hover active:scale-95 transition-all duration-200 font-medium"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
