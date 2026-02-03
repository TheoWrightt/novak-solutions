import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/ui/motion";
import { ArrowLeft, Clock, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ICPDefinitionFramework = () => {
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
                ICP Definition Framework
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  10 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-medium">Download the ICP Worksheet</p>
                    <p className="text-sm text-muted-foreground">Complete template for defining your ideal customer</p>
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
                  Your Ideal Customer Profile (ICP) is the foundation of every successful demand generation effort. Without clarity on who you're targeting, your messaging will be generic, your outreach will be unfocused, and your results will be disappointing.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Why ICP Matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A well-defined ICP enables you to:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Create messaging that resonates deeply with your target audience</li>
                  <li>Focus your resources on prospects most likely to convert</li>
                  <li>Shorten sales cycles by speaking directly to buyer pain points</li>
                  <li>Improve close rates by qualifying opportunities more effectively</li>
                  <li>Increase customer lifetime value by attracting better-fit clients</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Four Dimensions of ICP</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use a four-dimensional framework to define ICPs for our clients:
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">1. Firmographic Characteristics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These are the objective, measurable characteristics of your ideal customer:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Industry/Vertical:</strong> Which sectors do you serve best?</li>
                  <li><strong className="text-foreground">Company Size:</strong> Revenue range, employee count</li>
                  <li><strong className="text-foreground">Geography:</strong> Regions, countries, or markets</li>
                  <li><strong className="text-foreground">Growth Stage:</strong> Startup, scale-up, established, enterprise</li>
                  <li><strong className="text-foreground">Business Model:</strong> B2B, B2C, SaaS, professional services, etc.</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">2. Situational Triggers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What events or situations create urgency for your solution?
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Just raised funding</li>
                  <li>Entering a new market</li>
                  <li>Leadership change</li>
                  <li>Missed revenue targets</li>
                  <li>Competitor pressure</li>
                  <li>Regulatory changes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding triggers helps you time your outreach and craft relevant messages.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">3. Buyer Personas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Who within these organisations makes or influences buying decisions?
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Decision Maker:</strong> Who signs the contract?</li>
                  <li><strong className="text-foreground">Champion:</strong> Who advocates for your solution internally?</li>
                  <li><strong className="text-foreground">Influencers:</strong> Who else has input on the decision?</li>
                  <li><strong className="text-foreground">End Users:</strong> Who will actually use your service?</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  For each persona, document their goals, challenges, objections, and how they measure success.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">4. Deal Economics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not all customers are created equal from a business perspective:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Contract Value:</strong> What's the typical deal size?</li>
                  <li><strong className="text-foreground">Sales Cycle:</strong> How long from first contact to close?</li>
                  <li><strong className="text-foreground">Lifetime Value:</strong> Renewal rates, expansion potential</li>
                  <li><strong className="text-foreground">Margin:</strong> Profitability of these engagements</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The ICP Definition Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Follow these steps to define your ICP:
                </p>
                <ol className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Analyse your best clients:</strong> Look at your top 10-20% of customers. What do they have in common?</li>
                  <li><strong className="text-foreground">Interview your team:</strong> Sales, delivery, and account management all have insights on what makes a great client.</li>
                  <li><strong className="text-foreground">Review lost deals:</strong> Why did prospects not convert? This reveals anti-ICP characteristics.</li>
                  <li><strong className="text-foreground">Validate with data:</strong> Use your CRM and financial data to confirm patterns.</li>
                  <li><strong className="text-foreground">Document and share:</strong> Create a clear, accessible ICP document that everyone can reference.</li>
                </ol>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Common Mistakes</h2>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Too broad:</strong> "Any company that needs our services" isn't an ICP</li>
                  <li><strong className="text-foreground">Too narrow:</strong> If only 100 companies fit your ICP, you've over-constrained</li>
                  <li><strong className="text-foreground">Aspirational vs. actual:</strong> Define who you can win today, not who you wish you could</li>
                  <li><strong className="text-foreground">Set and forget:</strong> Your ICP should evolve as your business and market change</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Putting It Into Practice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once your ICP is defined, use it to:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Build targeted prospect lists</li>
                  <li>Craft persona-specific messaging</li>
                  <li>Train your team on qualification criteria</li>
                  <li>Focus your content marketing</li>
                  <li>Evaluate partnership opportunities</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Download our ICP Worksheet above to work through this framework for your business.
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

export default ICPDefinitionFramework;
