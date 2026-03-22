import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Initial Consultation</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              A discreet first conversation.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              We welcome confidential initial discussions regarding potential work related to Iran — without obligation and with full discretion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <span className="section-label">Reach Us Directly</span>
              <h2 className="mt-4 text-2xl font-serif font-semibold text-primary leading-tight mb-4">
                Confidential initial conversations, without obligation.
              </h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-8">
                Whether you are exploring the Iranian market for the first time or evaluating a specific opportunity, we are happy to listen and advise on next steps.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-sand shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-1" style={{ letterSpacing: "0.15em" }}>Email</span>
                    <a href="mailto:info@aradadvisory.com" className="text-sm font-sans text-primary hover:text-navy-light transition-colors">info@aradadvisory.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-sand shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-1" style={{ letterSpacing: "0.15em" }}>Phone</span>
                    <span className="text-sm font-sans text-primary">+971 4 xxx xxxx</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-sand shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-1" style={{ letterSpacing: "0.15em" }}>Offices</span>
                    <div className="space-y-1 text-sm font-sans text-primary">
                      <p>Dubai, UAE</p>
                      <p>Tehran, Iran</p>
                      <p>London, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  All inquiries are treated with strict confidentiality. We are happy to execute mutual non-disclosure agreements before any substantive discussion.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">Request a Consultation</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  Share a brief overview of your objectives. A senior member of our team will respond within one business day.
                </p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-2" style={{ letterSpacing: "0.15em" }}>Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-cream-dark border-0 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sand transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-2" style={{ letterSpacing: "0.15em" }}>Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-cream-dark border-0 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sand transition-all" placeholder="Your organization" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-2" style={{ letterSpacing: "0.15em" }}>Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-cream-dark border-0 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sand transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-2" style={{ letterSpacing: "0.15em" }}>Area of Interest</label>
                  <select className="w-full px-4 py-3 bg-cream-dark border-0 text-sm font-sans text-primary focus:outline-none focus:ring-1 focus:ring-sand transition-all">
                    <option value="">Select an area</option>
                    <option value="market-intelligence">Market Intelligence</option>
                    <option value="market-entry">Market Entry</option>
                    <option value="partner-search">Partner & Vendor Search</option>
                    <option value="business-development">Business Development</option>
                    <option value="local-coordination">Local Coordination</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground block mb-2" style={{ letterSpacing: "0.15em" }}>Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-cream-dark border-0 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sand transition-all resize-none" placeholder="Briefly describe your objectives and how we might be of assistance." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-navy-light transition-colors">
                  Submit Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
