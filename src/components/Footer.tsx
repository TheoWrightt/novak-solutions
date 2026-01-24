import novakLogo from "@/assets/novak-logo.jpeg";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <img 
            src={novakLogo} 
            alt="Novak Solutions" 
            className="h-8 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Novak Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
