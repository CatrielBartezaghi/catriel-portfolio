import { BriefcaseBusiness } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-text-primary flex items-center gap-3">
          <BriefcaseBusiness className="text-primary w-8 h-8" /> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card rounded-xl p-6 flex flex-col h-full group transition-all hover:-translate-y-1">
              <div className="mb-2">
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="text-2xl font-semibold text-text-primary group-hover:text-primary transition-colors mt-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-[16px] text-text-secondary mb-4">
                {project.description}
              </p>
              {project.focus && project.focus.length > 0 && (
                <div className="mb-6 flex-grow">
                  <p className="text-[14px] font-semibold text-text-primary mb-2">Focus:</p>
                  <ul className="space-y-1">
                    {project.focus.map((item, i) => (
                      <li key={i} className="text-[15px] text-text-secondary flex items-start gap-2">
                        <span className="text-primary mt-1">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-surface-elevated text-text-secondary font-mono text-xs px-2 py-1 rounded border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
