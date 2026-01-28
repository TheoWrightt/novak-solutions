import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Within 90 days of working with Novak Solutions, we had more qualified conversations than the previous two quarters combined. Their systematic approach transformed our pipeline.",
    author: "Sarah Mitchell",
    role: "Managing Director",
    company: "Strategic Consulting Group"
  },
  {
    quote: "We were stuck relying on referrals and sporadic outreach. Novak Solutions built us a repeatable system that now generates 15-20 qualified conversations per month.",
    author: "James Crawford",
    role: "CEO",
    company: "Apex Advisory Partners"
  },
  {
    quote: "The difference is accountability. They don't just run campaigns—they own the pipeline outcomes. That's rare in this industry.",
    author: "Emma Richardson",
    role: "Partner",
    company: "Horizon Professional Services"
  },
  {
    quote: "Finally, a partner that understands B2B service businesses. They speak our language and deliver results that actually matter.",
    author: "Michael Thompson",
    role: "Founder",
    company: "Elevate Consulting"
  },
  {
    quote: "Our sales team now has consistent deal flow for the first time in years. The investment paid for itself within the first quarter.",
    author: "David Chen",
    role: "Commercial Director",
    company: "Precision Partners"
  },
  {
    quote: "Novak Solutions didn't just generate leads—they helped us refine our entire go-to-market approach. The strategic value has been immense.",
    author: "Rachel Foster",
    role: "Head of Growth",
    company: "Catalyst Advisory"
  }
];

const results = [
  { metric: "3x", label: "Average increase in qualified conversations" },
  { metric: "90 days", label: "Typical time to predictable pipeline" },
  { metric: "85%", label: "Client retention rate" },
  { metric: "£2.5M+", label: "Pipeline generated for clients" }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Client Results
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Real results from{" "}
                <span className="text-gradient">real clients</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Don't just take our word for it. Here's what our clients have to say about working with Novak Solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {results.map((result) => (
              <StaggerItem key={result.label}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{result.metric}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{result.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Testimonials;
