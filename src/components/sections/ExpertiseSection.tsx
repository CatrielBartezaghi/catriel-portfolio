import { portfolioData } from "@/data/portfolio";
import { ServerCog, DatabaseZap, Bot, ShieldCheck } from "lucide-react";

export function ExpertiseSection() {
  const { expertise } = portfolioData;

  const getIcon = (title: string) => {
    switch (title) {
      case "Business Logic": return <ServerCog className="text-primary w-6 h-6" />;
      case "Data & SQL": return <DatabaseZap className="text-primary w-6 h-6" />;
      case "Automation": return <Bot className="text-primary w-6 h-6" />;
      case "Reliability": return <ShieldCheck className="text-primary w-6 h-6" />;
      default: return null;
    }
  };

  if (!expertise || expertise.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-surface-container-highest/30 border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-text-primary">
          What I’m good at
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl p-6 flex flex-col items-start text-left group">
              <div className="flex items-center gap-3 mb-3">
                {getIcon(item.title)}
                <h3 className="text-[17px] font-semibold text-text-primary group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
