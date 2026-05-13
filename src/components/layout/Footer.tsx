import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background mt-24 border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-mono text-primary opacity-80 hover:opacity-100 transition-opacity">
          © {currentYear} {portfolioData.hero.name}. {portfolioData.footer.phrase}
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href={portfolioData.contact.links.github} className="text-text-muted hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href={portfolioData.contact.links.linkedin} className="text-text-muted hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-text-muted hover:text-primary transition-colors">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
