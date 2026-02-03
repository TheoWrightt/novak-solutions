import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowRight, BookOpen, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const articles = [
  {
    type: "Guide",
    icon: BookOpen,
    title: "The B2B Pipeline Playbook",
    description: "A comprehensive guide to building predictable demand generation systems for service firms. Learn the frameworks we use with our clients.",
    readTime: "15 min read",
    href: "/resources/pipeline-playbook"
  },
  {
    type: "Article",
    icon: FileText,
    title: "Why Referrals Aren't a Strategy",
    description: "Referrals are great—until they dry up. Here's why service firms need to build systematic acquisition channels alongside their network.",
    readTime: "8 min read",
    href: "/resources/why-referrals-arent-strategy"
  },
  {
    type: "Article",
    icon: FileText,
    title: "The True Cost of Inconsistent Pipeline",
    description: "What feast-or-famine deal flow really costs your business—and how to fix it without hiring an expensive sales team.",
    readTime: "6 min read",
    href: "/resources/true-cost-inconsistent-pipeline"
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "ICP Definition Framework",
    description: "How to define your Ideal Customer Profile with precision. The foundation of every successful demand generation system.",
    readTime: "10 min read",
    href: "/resources/icp-definition-framework"
  },
  {
    type: "Article",
    icon: FileText,
    title: "Measuring What Matters in B2B",
    description: "Forget vanity metrics. Here are the only numbers that matter when building a predictable sales pipeline.",
    readTime: "7 min read",
    href: "/resources/measuring-what-matters"
  }
];

const downloads = [
  {
    title: "Pipeline Health Checklist",
    description: "A 20-point checklist to audit your current pipeline and identify gaps.",
    format: "PDF",
    size: "245 KB"
  },
  {
    title: "Discovery Call Framework",
    description: "The exact questions we use to qualify prospects and understand their needs.",
    format: "PDF",
    size: "180 KB"
  },
  {
    title: "Monthly Metrics Template",
    description: "Spreadsheet template for tracking the five metrics that matter in B2B.",
    format: "XLSX",
    size: "120 KB"
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

      {/* Articles Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-12">
              Articles & Guides
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {articles.map((resource, index) => (
              <StaggerItem key={index}>
                <Link to={resource.href} className="block h-full">
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
                      <span className="flex items-center text-primary text-sm font-medium">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Downloadable Resources
              </h2>
              <p className="mt-4 text-muted-foreground">
                Templates and tools you can use right away
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto" staggerDelay={0.1}>
            {downloads.map((download, index) => (
              <StaggerItem key={index}>
                <div className="rounded-xl border border-border bg-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {download.format} • {download.size}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{download.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{download.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24">
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
