import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Shield, Users, Briefcase, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-iran.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const services = [
  { icon: Search, title: "Market Intelligence", description: "Commercial research, competitive landscape analysis, and sector mapping tailored to your strategic questions." },
  { icon: Globe, title: "Market Entry", description: "End-to-end support structuring your approach to entering or expanding within the Iranian market." },
  { icon: Users, title: "Partner & Vendor Search", description: "Identifying, vetting, and connecting you with the right local counterparts — distributors, suppliers, JV partners, and talent." },
  { icon: Briefcase, title: "Business Development", description: "Building commercial traction through introductions, relationship management, and pipeline development." },
  { icon: MapPin, title: "Local Coordination", description: "In-country operational support, meeting coordination, logistics, and real-time local presence when you need it." },
];

const sectors = [
  { title: "Technology & Digital", items: "SaaS · AI · Outsourcing · Digital Business" },
  { title: "Trade & Industry", items: "Cross-border Trade · Manufacturing · Industrial" },
  { title: "Investment & Real Estate", items: "Capital Deployment · Property · Development" },
  { title: "Agriculture & Resources", items: "Agricultural Trade · Natural Resources" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Iran skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30" />
        </div>
        <div className="relative section-padding pb-16 md:pb-24 w-full">
          <div className="section-container">
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.span variants={fadeUp} custom={0} className="section-label text-sand">
                Iran-Focused Business Advisory
              </motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-[1.15] tracking-tight">
                Local roots.<br />Global delivery.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg md:text-xl text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
                We help foreign companies understand, assess, enter, and navigate the Iranian market — with trusted in-country access and structured cross-border support.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" className="inline-flex items-center gap-2 bg-sand text-primary px-6 py-3 text-sm font-sans font-medium tracking-wide hover:bg-sand-light transition-colors">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 text-sm font-sans font-medium tracking-wide hover:border-sand hover:text-sand transition-colors">
                  Start a Conversation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-label">Who We Are</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                A boutique firm built for Iran's complexity.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base font-sans text-charcoal leading-relaxed">
                Arad Advisory is a boutique business advisory firm that bridges the gap between foreign companies and the Iranian market. We combine deep local knowledge with professional cross-border delivery to give our clients something rare: reliable, grounded insight and access in one of the world's most misunderstood markets.
              </p>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Our team has roots inside Iran and a network built over years of real commercial engagement. We don't just analyze markets — we open doors, find partners, support operations, and stay alongside our clients as they navigate complexity.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-navy-light transition-colors tracking-wide">
                  Learn About Our Firm <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-padding"><div className="section-container divider-sand" /></div>

      {/* Services */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <span className="section-label">Advisory Services</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
              From insight to access to execution.
            </h2>
            <p className="mt-4 text-base font-sans text-muted-foreground leading-relaxed">
              We support clients across the full arc of market engagement — from initial research through to local coordination and ongoing business development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-warm-white p-8 md:p-10 group hover:bg-cream-dark transition-colors"
              >
                <service.icon className="w-5 h-5 text-sand mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
            {/* CTA cell */}
            <div className="bg-primary p-8 md:p-10 flex flex-col justify-between">
              <div>
                <Shield className="w-5 h-5 text-sand mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-3">Tailored Engagements</h3>
                <p className="text-sm font-sans text-primary-foreground/60 leading-relaxed">
                  Every mandate is different. We scope our work to match your stage, objectives, and risk posture.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-sand hover:text-sand-light transition-colors mt-8 tracking-wide">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Band */}
      <section className="bg-primary section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="section-label text-sand">Sector Coverage</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary-foreground leading-tight">
                Across industries, grounded in local reality.
              </h2>
              <p className="mt-4 text-sm font-sans text-primary-foreground/60 leading-relaxed">
                We work across traditional and emerging sectors, always combining market knowledge with practical access.
              </p>
              <Link to="/sectors" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-sand hover:text-sand-light transition-colors mt-6 tracking-wide">
                Explore Sectors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary-foreground/10">
                {sectors.map((sector) => (
                  <div key={sector.title} className="bg-navy-light p-8 hover:bg-charcoal transition-colors">
                    <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2">{sector.title}</h3>
                    <p className="text-xs font-sans text-primary-foreground/50 tracking-wide">{sector.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding py-20 md:py-28 bg-cream-dark">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Why Arad</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
              What sets us apart.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { title: "Real In-Country Access", text: "We don't work from a distance. Our network is built from years of on-the-ground engagement across Iranian cities, industries, and institutions." },
              { title: "Cross-Border Professionalism", text: "We deliver to international standards — structured reporting, clear timelines, confidential handling, and transparent communication." },
              { title: "Boutique Discretion", text: "We work with a limited number of clients at any time, ensuring dedicated attention and the discretion that sensitive markets demand." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="editorial-line mb-6" />
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight max-w-2xl mx-auto">
            Ready to explore the Iranian market with confidence?
          </h2>
          <p className="mt-4 text-base font-sans text-muted-foreground max-w-lg mx-auto">
            Tell us about your objectives. We'll share how we can help — and whether we're the right fit.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-navy-light transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
