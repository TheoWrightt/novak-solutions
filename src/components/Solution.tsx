import { Target, Settings, BarChart3, MessageSquare } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Target,
    title: "Pipeline Diagnosis & ICP Positioning",
    description: "We identify exactly who you should be targeting and why they'll buy."
  },
  {
    icon: Settings,
    title: "Acquisition System Design",
    description: "Custom demand generation infrastructure built specifically for your firm."
  },
  {
    icon: BarChart3,
    title: "Ongoing Optimisation",
    description: "Continuous refinement based on real data — not guesswork."
  },
  {
    icon: MessageSquare,
    title: "Qualified Conversations Delivered",
    description: "You get sales-ready meetings, not just leads. We handle everything up to the call."
  }
];

export const Solution = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeIn direction="right">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Our Approach
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A strategic partner, not another vendor
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We don't run campaigns and disappear. Novak Solutions becomes an extension of your team — owning pipeline performance at a strategic level without taking over your sales.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our monthly retainer model means we're invested in your long-term growth, not just short-term wins.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
