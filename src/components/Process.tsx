import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const steps = [
  {
    number: "01",
    title: "Fit Call",
    description: "A focused conversation to understand your goals, current pipeline, and whether we're the right partner."
  },
  {
    number: "02",
    title: "Strategy & Setup",
    description: "We diagnose your pipeline, refine your ICP, and build your custom acquisition system."
  },
  {
    number: "03",
    title: "Launch & Optimise",
    description: "Campaigns go live. We monitor, test, and refine to maximise qualified conversations."
  },
  {
    number: "04",
    title: "Scale",
    description: "Once the system is proven, we scale what works and expand into new segments."
  }
];

export const Process = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              How It Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From first call to predictable pipeline
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+32px)] hidden h-px w-[calc(100%-64px)] bg-border lg:block" />
                )}
                
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-2xl font-bold text-primary">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
