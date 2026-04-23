import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-sand flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-sand">A</span>
                </div>
                <span className="font-serif text-lg font-semibold tracking-tight">Arad Advisory</span>
              </div>
              <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed">
                Boutique advisory for companies entering and navigating the Iranian market. Local roots, global delivery.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="section-label text-sand mb-4">The Firm</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">About Us</Link></li>
                <li><Link to="/about#approach" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Our Approach</Link></li>
                <li><Link to="/about#why-iran" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Why Iran</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="section-label text-sand mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services#market-intelligence" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Market Intelligence</Link></li>
                <li><Link to="/services#market-entry" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Market Entry</Link></li>
                <li><Link to="/services#partner-search" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Partner Search</Link></li>
                <li><Link to="/services#business-development" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Business Development</Link></li>
                <li><Link to="/services#local-coordination" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Local Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="section-label text-sand mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li><Link to="/contact" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Get in Touch</Link></li>
                <li><Link to="/insights" className="text-sm font-sans text-primary-foreground/60 hover:text-sand transition-colors">Insights</Link></li>
              </ul>
              <div className="mt-8">
                <p className="text-xs font-sans text-primary-foreground/40">Tehran · Muscat · Turin</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-sans text-primary-foreground/40">
              © {new Date().getFullYear()} Arad Advisory. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-xs font-sans text-primary-foreground/40 hover:text-sand transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs font-sans text-primary-foreground/40 hover:text-sand transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
