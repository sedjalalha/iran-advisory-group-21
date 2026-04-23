import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, FileText, CalendarClock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CALENDLY_URL } from "@/lib/contact-links";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  {
    label: "The Firm",
    children: [
      { label: "About Us", href: "/about", description: "Who we are and how we work" },
      { label: "Our Approach", href: "/about#approach", description: "Methodology and principles" },
      { label: "Why Iran", href: "/about#why-iran", description: "The opportunity and the landscape" },
    ],
  },
  {
    label: "Advisory Services",
    children: [
      { label: "Market Intelligence", href: "/services#market-intelligence", description: "Research, analysis, and commercial insight" },
      { label: "Market Entry", href: "/services#market-entry", description: "Structuring and supporting market entry" },
      { label: "Partner & Vendor Search", href: "/services#partner-search", description: "Finding the right local counterparts" },
      { label: "Business Development", href: "/services#business-development", description: "Building pipeline and commercial traction" },
      { label: "Local Coordination", href: "/services#local-coordination", description: "In-country presence and operational support" },
    ],
  },
  {
    label: "Sectors",
    children: [
      { label: "Technology & Digital", href: "/sectors#technology", description: "SaaS, AI, outsourcing, digital business" },
      { label: "Trade & Industry", href: "/sectors#trade", description: "Cross-border trade and industrial sectors" },
      { label: "Investment & Real Estate", href: "/sectors#investment", description: "Capital deployment and property" },
      { label: "Agriculture & Resources", href: "/sectors#agriculture", description: "Agricultural and natural resource opportunities" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [consultationMenuOpen, setConsultationMenuOpen] = useState(false);
  const [consultationSource, setConsultationSource] = useState<"navbar_desktop" | "navbar_mobile">("navbar_desktop");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const trackConsultationClick = (source: "navbar_desktop" | "navbar_mobile") => {
    sessionStorage.setItem("consultation_source", source);
    trackEvent("consultation_cta_click", {
      source,
      page_path: location.pathname,
    });
  };

  const openConsultationMenu = (source: "navbar_desktop" | "navbar_mobile") => {
    trackConsultationClick(source);
    setConsultationSource(source);
    setConsultationMenuOpen(true);
    trackEvent("consultation_options_opened", {
      source,
      page_path: location.pathname,
    });
  };

  const handleFormPathSelected = () => {
    trackEvent("consultation_path_selected", {
      source: consultationSource,
      path: "form",
    });
    setConsultationMenuOpen(false);
  };

  const handleCallPathSelected = () => {
    trackEvent("consultation_path_selected", {
      source: consultationSource,
      path: "request_call_calendly",
    });
    setConsultationMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-border">
      <div className="section-padding">
        <div className="section-container flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-sm font-bold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-primary leading-tight tracking-tight">Arad Advisory</span>
              <span className="text-[0.6rem] font-sans tracking-[0.2em] uppercase text-muted-foreground">Iran · Global</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link to={item.href} className="nav-link flex items-center gap-1">
                    {item.label}
                  </Link>
                ) : (
                  <button className="nav-link flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="w-3 h-3 transition-transform" style={{
                      transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-72"
                    >
                      <div className="bg-warm-white border border-border shadow-lg p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-3 hover:bg-cream-dark transition-colors group"
                          >
                            <span className="text-sm font-sans font-medium text-primary group-hover:text-navy-light">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-muted-foreground mt-0.5 font-sans">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button
              type="button"
              onClick={() => openConsultationMenu("navbar_desktop")}
              className="ml-2 inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors"
            >
              Request a Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-warm-white border-t border-border overflow-hidden"
          >
            <div className="section-padding py-6 space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block py-3 nav-link text-base"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 nav-link text-base"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform" style={{
                          transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                        }} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && item.children && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4 border-l border-secondary/40"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="block py-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openConsultationMenu("navbar_mobile");
                  }}
                  className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors"
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={consultationMenuOpen} onOpenChange={setConsultationMenuOpen}>
        <DialogContent className="sm:max-w-2xl bg-stone-light border-border/80 p-8 md:p-10">
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="text-3xl md:text-4xl font-sans font-semibold text-primary tracking-tight leading-tight">
              Choose your preferred next step
            </DialogTitle>
            <DialogDescription className="text-lg font-sans text-muted-foreground leading-relaxed">
              Share your brief through our form, or request a direct call via Calendly.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 grid gap-5">
            <Link
              to={`/contact?source=${consultationSource}_form`}
              onClick={handleFormPathSelected}
              className="group block border-2 border-sand/70 bg-warm-white p-6 md:p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sand hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">
                <FileText className="h-4 w-4 text-sand" />
                Consultation Form
              </div>
              <div className="mt-3 text-4xl font-sans font-semibold text-primary leading-tight tracking-tight">Fill the inquiry form</div>
              <p className="mt-3 text-base font-sans text-muted-foreground">
                Best for detailed requests and scoped mandates.
              </p>
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleCallPathSelected}
              className="group block border-2 border-primary/90 bg-primary p-6 md:p-7 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-primary-foreground/70">
                <CalendarClock className="h-4 w-4 text-sand" />
                Request a Call
              </div>
              <div className="mt-3 flex items-center gap-2 text-4xl font-sans font-semibold text-primary-foreground leading-tight tracking-tight">
                Schedule via Calendly
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <p className="mt-3 text-base font-sans text-primary-foreground/75">
                Pick a suitable time instantly with no back-and-forth.
              </p>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
