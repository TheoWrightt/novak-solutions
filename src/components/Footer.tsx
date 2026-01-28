import { Link } from "react-router-dom";
import novakLogo from "@/assets/novak-logo.jpeg";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link to="/">
              <img 
                src={novakLogo} 
                alt="Novak Solutions" 
                className="h-8 w-auto"
              />
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Novak Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
