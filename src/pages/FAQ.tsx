import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is Novak Solutions different from other lead generation agencies?",
    answer: "We don't just generate leads—we build and manage complete demand generation systems focused on qualified sales conversations. We're accountable for pipeline outcomes, not just activity metrics. Most agencies measure success by emails sent or leads generated. We measure success by conversations booked and pipeline created."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We specialise in B2B service firms generating £1M+ in annual revenue (or approaching it), with deal values of £5k+. This includes consultancies, professional services firms, agencies, and specialist B2B providers. If you have a founder-led or small sales team and want predictable pipeline growth, we're likely a good fit."
  },
  {
    question: "What's included in your monthly retainer?",
    answer: "Our retainers include pipeline diagnosis, ICP positioning and refinement, design and management of your acquisition system, ongoing campaign optimisation, weekly reporting, and strategic consultation. We handle everything from strategy to execution—you just need to show up to the qualified conversations we generate."
  },
  {
    question: "How long before we see results?",
    answer: "Most clients start seeing qualified conversations within the first 30-60 days. By 90 days, you should have a predictable, repeatable system in place. However, timeline varies based on your industry, sales cycle, and how refined your ICP is when we start."
  },
  {
    question: "Why is there a 3-month minimum term?",
    answer: "Building a sustainable demand generation system takes time. The first month is focused on diagnosis, setup, and initial testing. Months two and three are about optimisation and scaling what works. We require a 3-month minimum because we're committed to delivering real results, not quick wins that don't last."
  },
  {
    question: "What do you need from us to get started?",
    answer: "We need access to your existing sales data and CRM, clarity on your ideal customer profile, and availability for a weekly sync call. The more context you can provide upfront, the faster we can build a system tailored to your specific market and goals."
  },
  {
    question: "Do you guarantee results?",
    answer: "We don't offer guarantees because every business is different. What we do offer is transparency, accountability, and a track record of success. We only take on clients we're confident we can help, which is why we start with a discovery call to assess fit."
  },
  {
    question: "What happens after the initial 3 months?",
    answer: "After the initial term, we move to a month-to-month engagement. Most clients continue because the system is working and they want to scale further. We'll also identify opportunities to expand into new segments or channels as your pipeline matures."
  },
  {
    question: "Can you work with our existing sales team?",
    answer: "Absolutely. We work as an extension of your team, not a replacement. Our job is to fill your pipeline with qualified conversations—your sales team handles the closing. We'll align on handoff processes, qualification criteria, and reporting to ensure seamless collaboration."
  },
  {
    question: "How do you qualify the conversations you generate?",
    answer: "We work with you to define specific qualification criteria based on your ideal customer profile. This typically includes company size, industry, budget indicators, and buying signals. Every conversation we book meets the agreed criteria—no padding with unqualified leads."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Questions?{" "}
                <span className="text-gradient">Answered.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Everything you need to know about working with Novak Solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <StaggerContainer staggerDelay={0.05}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <StaggerItem key={index}>
                    <AccordionItem 
                      value={`item-${index}`}
                      className="rounded-xl border border-border bg-card px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default FAQ;
