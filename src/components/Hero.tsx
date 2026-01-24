import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
          B2B Demand Generation
        </p>
        
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build a{" "}
          <span className="text-gradient">predictable pipeline</span>
          {" "}for your service firm
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We design and manage demand generation systems that consistently produce qualified sales conversations — so you can stop relying on referrals and inconsistent outreach.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium glow"
          >
            Book a Fit Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          For B2B service firms generating £1M+ in revenue
        </p>
      </div>
    </section>
  );
};
