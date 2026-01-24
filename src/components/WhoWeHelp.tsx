import { Check } from "lucide-react";

const criteria = [
  "Generate £1M+ in annual revenue (or approaching it)",
  "Sell services with deal values of £5k+",
  "Have founder-led or small sales teams",
  "Want predictable, scalable pipeline growth",
  "Ready to invest in long-term growth"
];

const sectors = [
  "Professional Services",
  "Consultancies",
  "Agencies",
  "Specialist B2B Providers"
];

export const WhoWeHelp = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Who We Work With
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built for ambitious B2B service firms
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We partner with UK and EU-based firms that are serious about building predictable revenue. If that's you, we should talk.
            </p>

            <ul className="mt-10 space-y-4">
              {criteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-border bg-card p-8 sm:p-10">
              <h3 className="text-xl font-semibold">Typical Sectors</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div 
                    key={sector}
                    className="rounded-lg bg-secondary/50 px-4 py-3 text-center font-medium"
                  >
                    {sector}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">Investment</p>
                <p className="mt-2 text-3xl font-bold">
                  £6,000 – £9,000
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  3-month minimum engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
