import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/ui/motion";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const MeasuringWhatMatters = () => {
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
                Measuring What Matters in B2B
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  7 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="prose prose-invert mt-12 max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the age of analytics, it's easy to drown in data. LinkedIn impressions, email open rates, website traffic—the metrics pile up, but do they actually tell you whether your demand generation is working? Here's how to focus on the numbers that matter.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Vanity Metrics vs. Value Metrics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vanity metrics make you feel good but don't correlate with revenue. Value metrics directly connect to business outcomes.
                </p>
                <div className="mt-6 overflow-hidden rounded-lg border border-border">
                  <table className="w-full text-left">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="px-4 py-3 text-foreground font-medium">Vanity Metric</th>
                        <th className="px-4 py-3 text-foreground font-medium">Value Metric</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">LinkedIn followers</td>
                        <td className="px-4 py-3 text-muted-foreground">Qualified meetings booked</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">Email open rate</td>
                        <td className="px-4 py-3 text-muted-foreground">Email reply rate (positive)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">Website visitors</td>
                        <td className="px-4 py-3 text-muted-foreground">Inbound enquiries</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-muted-foreground">Content downloads</td>
                        <td className="px-4 py-3 text-muted-foreground">Sales-qualified leads</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Five Metrics That Matter</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For most B2B service firms, these are the metrics that should be on your dashboard:
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">1. Qualified Opportunities Created</h3>
                <p className="text-muted-foreground leading-relaxed">
                  How many new opportunities entered your pipeline this month? These should be genuinely qualified—meaning they meet your ICP criteria and have expressed interest in a conversation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">2. Pipeline Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What's the total value of opportunities in your active pipeline? Track this weekly or monthly to understand trends. A shrinking pipeline today means revenue problems in 3-6 months.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">3. Conversion Rate by Stage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Where are opportunities getting stuck or dropping out? Understanding conversion at each stage helps you identify and fix bottlenecks:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>Lead → Qualified Opportunity</li>
                  <li>Qualified → Proposal Sent</li>
                  <li>Proposal → Negotiation</li>
                  <li>Negotiation → Closed Won</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">4. Sales Cycle Length</h3>
                <p className="text-muted-foreground leading-relaxed">
                  How long does it take from first contact to closed deal? Long sales cycles tie up resources and make forecasting difficult. Track this and work to reduce it through better qualification and more effective nurturing.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">5. Customer Acquisition Cost (CAC)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What does it cost to acquire a new client? Include all sales and marketing expenses. Compare this to your average contract value and lifetime value to ensure your economics work.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Building Your Dashboard</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Resist the temptation to track everything. A focused dashboard with 5-10 key metrics is far more actionable than a spreadsheet with 50 data points no one looks at.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Start with these five metrics. Add others only when you have specific questions you need to answer or decisions you need to make based on the data.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Making Metrics Actionable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Data is only valuable if it drives action. For each metric:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Set targets:</strong> What does "good" look like?</li>
                  <li><strong className="text-foreground">Review regularly:</strong> Weekly for activity metrics, monthly for outcomes</li>
                  <li><strong className="text-foreground">Diagnose root causes:</strong> When metrics are off, dig into why</li>
                  <li><strong className="text-foreground">Take action:</strong> Every review should end with clear next steps</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Bottom Line</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In B2B, the metrics that matter are the ones that connect directly to revenue. Impressions and open rates might indicate whether your tactics are working, but they don't tell you whether your business is growing. Focus on pipeline, conversions, and customer acquisition—and let those numbers guide your decisions.
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

export default MeasuringWhatMatters;
