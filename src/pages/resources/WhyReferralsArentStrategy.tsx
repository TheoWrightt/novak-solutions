import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn } from "@/components/ui/motion";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const WhyReferralsArentStrategy = () => {
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
                Why Referrals Aren't a Strategy
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  8 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="prose prose-invert mt-12 max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Most of our business comes from referrals." It's a statement we hear from nearly every service firm we speak with. And while it sounds like a badge of honour, it's often a warning sign of a business that lacks control over its growth.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Referral Trap</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Referrals feel great. They come with built-in trust, shorter sales cycles, and higher close rates. The client who referred them has essentially done your selling for you. What's not to love?
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The problem is that referrals are inherently unpredictable. You can't control when they come, how many you'll receive, or whether they'll be qualified opportunities. Building a business on referrals is like building a house on sand—it works until it doesn't.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Feast-or-Famine Cycle</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Service firms that rely primarily on referrals often experience the feast-or-famine cycle:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Feast:</strong> Multiple referrals come in at once. The team is stretched thin delivering work. Marketing and business development take a backseat.</li>
                  <li><strong className="text-foreground">Famine:</strong> Projects end. The pipeline is empty. Panic sets in. Everyone scrambles to find new business.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This cycle is exhausting and makes it nearly impossible to plan for growth, hire confidently, or invest in the business.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Referrals as a Channel, Not a Strategy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're not saying referrals are bad. They should absolutely be part of your business development mix. But they should be one channel among many, not your entire strategy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A healthy demand generation system includes:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Proactive outreach:</strong> You control the volume and targeting</li>
                  <li><strong className="text-foreground">Content marketing:</strong> Building authority and inbound interest</li>
                  <li><strong className="text-foreground">Partnerships:</strong> Strategic relationships that generate opportunities</li>
                  <li><strong className="text-foreground">Referrals:</strong> Enhanced through formal referral programs</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">Making Referrals Systematic</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If referrals are currently your primary source of business, there are ways to make them more predictable:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Formalise the ask:</strong> Don't wait for referrals to happen. Build asking for referrals into your client journey.</li>
                  <li><strong className="text-foreground">Create referral incentives:</strong> Whether it's discounts, gifts, or simple recognition, incentivise clients to refer.</li>
                  <li><strong className="text-foreground">Make it easy:</strong> Give clients specific language and materials they can share.</li>
                  <li><strong className="text-foreground">Track and measure:</strong> Treat referrals like any other channel with proper attribution and metrics.</li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Path Forward</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The goal isn't to eliminate referrals—it's to build additional, controllable channels that ensure you're never dependent on them. When you have a predictable pipeline from multiple sources, referrals become a bonus rather than a lifeline.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Start by auditing your current business development. Where did your last 10 clients come from? If more than 50% came from referrals, it's time to diversify your approach.
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

export default WhyReferralsArentStrategy;
