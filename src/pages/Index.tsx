import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin, Shield, Users, Briefcase, Globe, Search, Lock, Compass, FileText, Building2, Wallet, Plane, Cpu, Ship, Landmark } from "lucide-react";
import Layout from "@/components/Layout";
import heroBazaar from "@/assets/hero-bazaar.jpg";
import heroOil from "@/assets/hero-oil.jpg";
import heroAgriculture from "@/assets/hero-agriculture.jpg";
import heroTourism from "@/assets/hero-tourism.jpg";
import heroTechnology from "@/assets/hero-technology.jpg";
import heroShipping from "@/assets/hero-shipping.jpg";
import insightTehran from "@/assets/insight-tehran.jpg";
import insightHandshake from "@/assets/insight-handshake.jpg";
import insightDesk from "@/assets/insight-desk.jpg";

const heroSlides = [
  { image: heroBazaar, alt: "Iranian bazaar and local commerce" },
  { image: heroOil, alt: "Oil and petrochemical industry" },
  { image: heroAgriculture, alt: "Modern agriculture and farming" },
  { image: heroTourism, alt: "Persepolis and Iranian tourism" },
  { image: heroTechnology, alt: "Technology exhibitions and innovation" },
  { image: heroShipping, alt: "Shipping, ports and international trade" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const stats = [
  { value: "15+", label: "Years on the ground in Iran" },
  { value: "9", label: "Sectors actively covered" },
  { value: "40+", label: "Cross-border mandates delivered" },
  { value: "3", label: "Coordination hubs: Tehran · Dubai · London" },
];

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

const presence = [
  { city: "Tehran", role: "Primary in-country team", coords: "35.7° N · 51.4° E" },
  { city: "Isfahan", role: "Industrial & manufacturing corridor", coords: "32.6° N · 51.7° E" },
  { city: "Mashhad", role: "Northeast trade gateway", coords: "36.3° N · 59.6° E" },
  { city: "Tabriz", role: "Northwest & cross-border access", coords: "38.1° N · 46.3° E" },
  { city: "Shiraz", role: "Southern commercial reach", coords: "29.6° N · 52.5° E" },
  { city: "Bandar Abbas", role: "Maritime & logistics hub", coords: "27.2° N · 56.3° E" },
];

const process = [
  { num: "01", title: "Listen", description: "We start with a confidential conversation to understand your objectives, constraints, and the questions you actually need answered." },
  { num: "02", title: "Scope", description: "A clear written proposal — defined deliverables, timelines, and a fixed scope. No open-ended retainers." },
  { num: "03", title: "Deliver", description: "Structured execution from our cross-border team, with weekly visibility and direct partner-level engagement throughout." },
  { num: "04", title: "Stay alongside", description: "Optional ongoing local coordination once the initial mandate concludes — for follow-through that matters." },
];

const insights = [
  {
    image: insightTehran,
    category: "Market Note",
    date: "Q1 2025",
    title: "Reading Iran's consumer market through informal channels",
    excerpt: "Why official data alone misunderstates demand — and how foreign operators can build a more accurate picture of the Iranian consumer.",
  },
  {
    image: insightHandshake,
    category: "Perspective",
    date: "Q4 2024",
    title: "Choosing the right local partner — and what to avoid",
    excerpt: "A practical framework for evaluating distributors, JV candidates, and commercial agents in the Iranian market.",
  },
  {
    image: insightDesk,
    category: "Briefing",
    date: "Q4 2024",
    title: "Cross-border payments in 2025: a working playbook",
    excerpt: "Mapping the operational mechanics that foreign companies are actually using to settle commercial flows linked to Iran.",
  },
];

const principles = [
  { icon: Lock, title: "Confidentiality first", text: "Every engagement, every conversation. We work with sensitive mandates as a default." },
  { icon: Compass, title: "Boutique by design", text: "A limited client roster ensures partner-level attention on every mandate we accept." },
  { icon: FileText, title: "Written, not whispered", text: "Findings, recommendations, and risks documented clearly — built for board-level use." },
];

const clientTypes = [
  { icon: Globe, label: "Foreign Investors" },
  { icon: Building2, label: "Expansion Teams" },
  { icon: Wallet, label: "Family Offices" },
  { icon: Cpu, label: "SaaS & Tech Companies" },
  { icon: Ship, label: "Trade & Export Businesses" },
  { icon: Landmark, label: "Regional Operators" },
];

const engagements = [
  {
    tag: "Technology · IT Outsourcing",
    client: "European Technology Firm",
    challenge: "Assessing the feasibility of routing software development work through Iran.",
    work: "Capability mapping, pricing benchmark, and risk overview across three candidate cities.",
    outcome: "Structured go/no-go report delivered in four weeks, enabling a clear board decision.",
  },
  {
    tag: "Agriculture · Cross-Border Trade",
    client: "Russian Agricultural Exporter",
    challenge: "Identifying qualified buyers in Iran for lentil and grain volumes.",
    work: "Buyer research, shortlisting, meeting setup, and in-country visit coordination.",
    outcome: "Three qualified buyer meetings held; a recurring trade relationship initiated.",
  },
  {
    tag: "Real Estate · Investment",
    client: "UAE-Based Private Investor",
    challenge: "Understanding pricing, regulation and exit dynamics in the Iranian property market.",
    work: "Market briefing, regional pricing research, and opportunity mapping across two corridors.",
    outcome: "Executive market report delivered within 14 days; investment thesis sharpened.",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
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
                  Request a Consultation
                </Link>
              </motion.div>
            </motion.div>
            {/* Slide indicators */}
            <div className="flex gap-2 mt-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-0.5 transition-all duration-500 ${i === currentSlide ? "w-8 bg-sand" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary border-t border-primary-foreground/10">
        <div className="section-container section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="px-6 py-10 first:pl-0 lg:first:pl-0"
              >
                <div className="text-4xl md:text-5xl font-serif font-medium text-sand">{s.value}</div>
                <div className="mt-3 text-xs font-sans uppercase tracking-[0.15em] text-primary-foreground/60 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction with editorial image */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={insightTehran}
                  alt="Tehran skyline at golden hour"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-sand">Tehran · Operating Base</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="section-label">Who We Are</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                A boutique firm built for Iran's complexity.
              </h2>
              <div className="editorial-line my-8" />
              <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">
                Arad Advisory bridges the gap between foreign companies and the Iranian market. We combine deep local knowledge with professional cross-border delivery to give our clients something rare in this market: reliable, grounded insight and access in one place.
              </p>
              <p className="mt-5 text-base font-sans text-muted-foreground leading-relaxed">
                Our team has roots inside Iran and a network built over years of real commercial engagement. We don't just analyze markets — we open doors, find partners, support operations, and stay alongside our clients as they navigate complexity.
              </p>
              <div className="pt-8">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-navy-light transition-colors tracking-wide border-b border-sand pb-1">
                  Learn About Our Firm <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
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
                className="bg-warm-white p-8 md:p-10 group hover:bg-cream transition-colors"
              >
                <service.icon className="w-5 h-5 text-sand mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
            {/* CTA cell */}
            <div className="bg-warm-white p-8 md:p-10 flex flex-col justify-between border-l-2 border-sand">
              <div>
                <Shield className="w-5 h-5 text-sand mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">Tailored Engagements</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  Every mandate is different. We scope our work to match your stage, objectives, and risk posture.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-navy-light transition-colors mt-8 tracking-wide border-b border-sand pb-1 self-start">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-Country Presence — Map-style */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-10">
            <div className="lg:col-span-5">
              <span className="section-label">In-Country Reach</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Nationwide presence, coordinated centrally.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base font-sans text-charcoal leading-relaxed">
                Our core team operates from Tehran, with trusted working relationships extending across every major Iranian commercial centre — and the wider provincial network that real execution often demands. The cities below are a sample of where we are most active; in practice, our reach covers the country.
              </p>
            </div>
          </div>
          <p className="section-label mb-6">Selected Operating Cities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {presence.map((p, i) => (
              <motion.div
                key={p.city}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-warm-white p-8 group hover:bg-stone-light transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <MapPin className="w-4 h-4 text-sand" strokeWidth={1.5} />
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">{p.coords}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary">{p.city}</h3>
                <p className="mt-2 text-sm font-sans text-muted-foreground leading-relaxed">{p.role}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-xs font-sans text-muted-foreground tracking-wide">
            Plus extended provincial coverage through our trusted in-country network — we mobilise wherever the work demands.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <span className="section-label">Who We Serve</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
              Built for serious operators with real Iran questions.
            </h2>
            <p className="mt-4 text-base font-sans text-muted-foreground leading-relaxed">
              We work with a small number of clients at a time — typically those approaching Iran with intent, not curiosity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {clientTypes.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-warm-white p-6 md:p-8 flex flex-col gap-4 hover:bg-cream transition-colors"
              >
                <c.icon className="w-4 h-4 text-sand" strokeWidth={1.5} />
                <span className="text-sm font-serif font-semibold text-primary leading-snug">{c.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="section-label">Selected Engagements</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                A sample of recent work.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                Client identities are kept confidential by default. The mandates below are anonymised summaries.
              </p>
            </div>
          </div>
          <div className="border-t border-border">
            {engagements.map((e, i) => (
              <motion.article
                key={e.client}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-b border-border py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group"
              >
                <div className="lg:col-span-3">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand">{e.tag}</span>
                  <h3 className="mt-3 text-xl font-serif font-semibold text-primary leading-snug">{e.client}</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">Challenge</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed">{e.challenge}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">What We Did</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed">{e.work}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">Outcome</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed">{e.outcome}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Iran, Why Now */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="section-label">Why Iran, Why Now</span>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                A market at an inflection point.
              </h2>
              <div className="editorial-line my-8" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg font-sans text-charcoal leading-relaxed">
                Iran remains one of the largest under-engaged markets in the world — roughly 90 million people, a substantial industrial base, an unusually well-educated workforce, and deep regional connectivity from the Caucasus to the Gulf.
              </p>
              <p className="mt-5 text-base font-sans text-muted-foreground leading-relaxed">
                The conditions shaping international engagement are shifting. For businesses willing to move early, move carefully, and move with the right local counsel, the opportunity is real and structurally underpriced. We help our clients act on it without naivety.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="border-t border-sand pt-4">
                  <div className="text-3xl font-serif font-medium text-primary">~90m</div>
                  <div className="mt-2 text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">Population</div>
                </div>
                <div className="border-t border-sand pt-4">
                  <div className="text-3xl font-serif font-medium text-primary">G20</div>
                  <div className="mt-2 text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">Scale economy by PPP</div>
                </div>
                <div className="border-t border-sand pt-4">
                  <div className="text-3xl font-serif font-medium text-primary">15+</div>
                  <div className="mt-2 text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">Bordering / proximate markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Coverage — light editorial */}
      <section className="bg-warm-white section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <span className="section-label">Sector Coverage</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Across industries, grounded in local reality.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                We work across traditional and emerging sectors, always combining market knowledge with practical access.
              </p>
              <Link to="/sectors" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-navy-light transition-colors mt-6 tracking-wide border-b border-sand pb-1">
                Explore Sectors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {sectors.map((sector, i) => (
                  <motion.div
                    key={sector.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="border-t border-border p-8 group hover:bg-stone-light transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-sans tracking-[0.2em] text-sand font-medium pt-1">0{i + 1}</span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-primary mb-2">{sector.title}</h3>
                        <p className="text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">{sector.items}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work — Process */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
              A four-step engagement.
            </h2>
            <p className="mt-4 text-base font-sans text-muted-foreground leading-relaxed">
              Clear scope. Defined deliverables. Partner-led from first conversation to final handover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-sans tracking-[0.2em] text-sand font-medium">{step.num}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles / Why Arad */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="section-label">Operating Principles</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                The way we work, by design.
              </h2>
              <p className="mt-4 text-sm font-sans text-muted-foreground leading-relaxed">
                Three commitments that shape every engagement we accept.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-px bg-border">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-warm-white p-8 md:p-10 flex gap-6 items-start"
                >
                  <p.icon className="w-5 h-5 text-sand flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-primary mb-2">{p.title}</h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights / Editorial */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="section-label">Recent Thinking</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Notes from the ground.
              </h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-navy-light transition-colors tracking-wide border-b border-sand pb-1">
              All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {insights.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-sand">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary leading-snug mb-3 group-hover:text-navy-light transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-[0.15em] text-primary">
                  Read note <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Testimonial Band */}
      <section className="bg-primary section-padding py-24 md:py-32 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="text-sand text-6xl font-serif leading-none mb-6">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary-foreground leading-snug">
              They gave us something we hadn't found anywhere else — a serious, written read of the market combined with people on the ground who could actually move things forward.
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="editorial-line" />
              <div>
                <div className="text-sm font-sans font-medium text-primary-foreground">Head of International Markets</div>
                <div className="text-xs font-sans uppercase tracking-[0.15em] text-primary-foreground/50 mt-1">European Industrial Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="section-label">Initial Conversation</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                Discreet, considered, and without obligation.
              </h2>
              <p className="mt-5 text-base font-sans text-muted-foreground max-w-xl leading-relaxed">
                Tell us about your objectives. We'll share how we can help — and whether we're the right fit. Initial conversations are confidential and complimentary.
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors w-full justify-center">
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-xs font-sans text-muted-foreground text-center tracking-wide">
                Typical response within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
