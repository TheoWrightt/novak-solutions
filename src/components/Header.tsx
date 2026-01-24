import novakLogo from "@/assets/novak-logo.jpeg";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <img 
          src={novakLogo} 
          alt="Novak Solutions" 
          className="h-10 w-auto"
        />
        <Button 
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          Book a Call
        </Button>
      </div>
    </header>
  );
};
