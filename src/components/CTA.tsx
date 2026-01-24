import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScaleIn } from "@/components/ui/motion";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <ScaleIn>
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-gradient-to-b from-card to-secondary/20 p-10 text-center sm:p-16 glow">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to build your pipeline?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a fit call to discuss your growth goals. If we're aligned, we'll show you exactly how we'd build your demand generation system.
            </p>
            
            <Button 
              size="lg"
              className="group mt-10 bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-medium"
              asChild
            >
              <a href="mailto:hello@novaksolutions.co.uk">
                Book Your Fit Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">
              No obligation. Just a conversation to see if we're the right fit.
            </p>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};
