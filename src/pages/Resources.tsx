import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowRight, BookOpen, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    type: "Guide",
    icon: BookOpen,
    title: "The B2B Pipeline Playbook",
    description: "A comprehensive guide to building predictable demand generation systems for service firms. Learn the frameworks we use with our clients.",
    readTime: "15 min read"
  },
  {
    type: "Article",
    icon: FileText,
    title: "Why Referrals Aren't a Strategy",
    description: "Referrals are great—until they dry up. Here's why service firms need to build systematic acquisition channels alongside their network.",
    readTime: "8 min read"
  },
  {
    type: "Article",
    icon: FileText,
    title: "The True Cost of Inconsistent Pipeline",
    description: "What feast-or-famine deal flow really costs your business—and how to fix it without hiring an expensive sales team.",
    readTime: "6 min read"
  },
  {
    type: "Video",
    icon: Video,
    title: "Demand Generation vs Lead Generation",
    description: "Understanding the critical difference between generating leads and generating demand—and why it matters for your pipeline.",
    readTime: "12 min watch"
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "ICP Definition Framework",
    description: "How to define your Ideal Customer Profile with precision. The foundation of every successful demand generation system.",
    readTime: "10 min read"
  },
  {
    type: "Article",
    icon: FileText,
    title: "Measuring What Matters in B2B",
    description: "Forget vanity metrics. Here are the only numbers that matter when building a predictable sales pipeline.",
    readTime: "7 min read"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Resources
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Insights for{" "}
                <span className="text-gradient">growth-focused</span> leaders
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Practical guides, frameworks, and insights to help you build a more predictable pipeline.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {resources.map((resource, index) => (
              <StaggerItem key={index}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {resource.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Get insights delivered
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join service firm leaders who receive our weekly insights on building predictable pipeline. No spam, just value.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-80"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Resources;
