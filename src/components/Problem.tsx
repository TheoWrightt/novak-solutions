import { AlertCircle, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Inconsistent Deal Flow",
    description: "Revenue swings month to month. Some quarters you're slammed, others you're scrambling for new business."
  },
  {
    icon: Users,
    title: "Founder-Led Sales Dependency",
    description: "Growth stalls when founders are the only ones who can close deals. There's no system — just hustle."
  },
  {
    icon: AlertCircle,
    title: "Agencies Focus on Tactics",
    description: "Most agencies deliver leads, not pipeline. You get activity reports while deals slip through the cracks."
  }
];

export const Problem = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Challenge
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why pipeline growth is hard for service firms
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Hiring internally is expensive and slow. Most agencies chase vanity metrics. You need a strategic partner who owns pipeline performance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{problem.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
