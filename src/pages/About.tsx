import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "We measure success by qualified conversations and pipeline growth, not vanity metrics."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, not as a disconnected vendor."
  },
  {
    icon: TrendingUp,
    title: "Systematic Growth",
    description: "Every campaign is built on proven frameworks designed for predictable results."
  },
  {
    icon: Award,
    title: "Selective Excellence",
    description: "We only work with clients we're confident we can deliver exceptional results for."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                About Us
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Building pipelines that{" "}
                <span className="text-gradient">actually work</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Novak Solutions was founded on a simple premise: B2B service firms deserve a partner who's accountable for pipeline performance, not just activity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Story
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  After years of watching B2B service firms struggle with inconsistent deal flow, over-reliance on referrals, and agencies that delivered activity without accountability, we saw an opportunity to do things differently.
                </p>
                <p>
                  Most demand generation agencies focus on tactics—sending emails, running campaigns, generating leads. But leads don't pay bills. Qualified conversations do. And those only happen when you have a systematic approach to identifying, reaching, and engaging the right buyers.
                </p>
                <p>
                  That's why we built Novak Solutions. We partner with established service firms to design and manage demand generation systems that consistently produce the conversations you need to grow. No vanity metrics. No excuses. Just pipeline.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                What We Stand For
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
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

export default About;
