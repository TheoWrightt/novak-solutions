import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/ui/motion";
import { ArrowLeft, Clock, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PipelinePlaybook = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 pb-16 sm:pt-40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <Link 
                to="/resources" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Guide
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The B2B Pipeline Playbook
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  15 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-medium">Download the full playbook</p>
                    <p className="text-sm text-muted-foreground">Get the complete PDF with worksheets and templates</p>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="prose prose-invert mt-12 max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For service firms generating £1M+ in revenue, the difference between consistent growth and stagnation often comes down to one thing: a predictable pipeline. This playbook outlines the exact framework we use with our clients to build demand generation systems that deliver qualified opportunities month after month.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Problem with Traditional Lead Generation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most service firms rely on a combination of referrals, networking, and occasional inbound enquiries. While these channels can produce results, they share a common flaw: unpredictability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you can't predict your pipeline, you can't predict your revenue. When you can't predict your revenue, you can't confidently invest in growth—whether that's hiring, expanding services, or entering new markets.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Demand Generation Framework</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our framework consists of four interconnected pillars:
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">1. Ideal Customer Profile (ICP) Definition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before any outreach or content creation, you need absolute clarity on who you're targeting. This goes beyond basic demographics. We help our clients define their ICP based on:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Company characteristics (size, industry, growth stage)</li>
                  <li>Buying triggers (what events create urgency)</li>
                  <li>Decision-maker profiles (titles, pain points, goals)</li>
                  <li>Deal economics (contract values, sales cycle length)</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">2. Multi-Channel Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't believe in single-channel strategies. Our clients typically leverage a combination of:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>LinkedIn outreach (personalised, value-first messaging)</li>
                  <li>Email sequences (education-focused, not pitch-heavy)</li>
                  <li>Content syndication (positioning as thought leaders)</li>
                  <li>Strategic partnerships (channel and referral programs)</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">3. Qualification Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not all leads are created equal. We implement qualification frameworks that ensure your sales team spends time only on prospects with genuine buying intent and fit. This includes BANT criteria, scoring models, and structured discovery processes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">4. Pipeline Visibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can't improve what you can't measure. We establish clear dashboards and reporting that give you real-time visibility into:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Pipeline value and velocity</li>
                  <li>Conversion rates by stage</li>
                  <li>Channel performance</li>
                  <li>Forecast accuracy</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Implementation Timeline</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Building a predictable pipeline isn't an overnight process. Here's a realistic timeline for implementation:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Month 1:</strong> ICP definition, messaging development, infrastructure setup</li>
                  <li><strong className="text-foreground">Month 2:</strong> Campaign launch, initial outreach, feedback loops</li>
                  <li><strong className="text-foreground">Month 3:</strong> Optimisation, scaling what works, qualification refinement</li>
                  <li><strong className="text-foreground">Months 4-6:</strong> Predictable pipeline established, continuous improvement</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Getting Started</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The first step is understanding your current state. Where are your opportunities coming from today? What's your conversion rate? How long is your sales cycle? With this baseline, we can design a system tailored to your specific situation and goals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you're ready to build a more predictable pipeline, book a discovery call with our team. We'll assess your current situation and show you exactly how we'd approach your demand generation challenges.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>

      <CTA />
      <Footer />
    </div>
  );
};

export default PipelinePlaybook;
