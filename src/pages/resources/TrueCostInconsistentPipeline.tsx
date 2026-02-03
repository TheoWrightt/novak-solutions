import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/ui/motion";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TrueCostInconsistentPipeline = () => {
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
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Article
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                The True Cost of Inconsistent Pipeline
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  6 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="prose prose-invert mt-12 max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When we ask service firm leaders about their biggest challenge, "inconsistent pipeline" ranks near the top. But few have calculated what this inconsistency actually costs their business. The number is often shocking.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Obvious Costs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some costs of pipeline inconsistency are easy to spot:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Lost revenue:</strong> Empty months mean missed targets and cash flow pressure</li>
                  <li><strong className="text-foreground">Desperate discounting:</strong> When work dries up, you're more likely to accept lower-margin projects</li>
                  <li><strong className="text-foreground">Delayed growth:</strong> Without predictable revenue, you can't confidently invest in expansion</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Hidden Costs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  But the real damage often happens beneath the surface:
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Talent Instability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When pipeline is unpredictable, so is hiring. You either delay bringing on talent you need (and burn out your current team) or hire during a feast only to face difficult decisions during famine. Good people leave firms that feel unstable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Suboptimal Client Selection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a full pipeline, you can choose clients that align with your ideal profile. With an empty pipeline, you take whatever comes through the door. These poorly-fit clients often become your most difficult engagements.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Leadership Distraction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When founders and senior leaders constantly shift between delivering work and panicking about sales, neither gets the attention it deserves. Strategic thinking takes a backseat to survival mode.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Missed Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perhaps the biggest cost is the opportunities you never pursue. Without confidence in future revenue, you don't invest in marketing, don't develop new services, don't explore new markets. Your competitors who have predictable pipeline are moving ahead.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Calculating Your Cost</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Try this exercise: Look at your revenue over the past 24 months. Calculate your average monthly revenue, then identify your lowest-performing months. The gap between your average and those low months represents your "inconsistency cost."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Now add the hidden costs: How much margin did you sacrifice on projects you shouldn't have taken? How many hours did leadership spend on emergency business development? What opportunities did you pass on due to uncertainty?
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Solution Isn't More Sales Reps</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Many firms react to pipeline problems by hiring salespeople. But without proper systems, processes, and positioning, these hires often underperform. You end up with the cost of a sales team without the results.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The real solution is building a demand generation system—a repeatable, measurable approach to filling your pipeline that works whether you have dedicated sales resources or not.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Taking Action</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Recognising the true cost of inconsistent pipeline is the first step. The next is committing to building systems that create predictability. This doesn't happen overnight, but with the right approach, you can begin seeing improvements within 90 days.
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

export default TrueCostInconsistentPipeline;
