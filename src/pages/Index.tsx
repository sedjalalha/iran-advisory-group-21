import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin, Shield, Users, Briefcase, Globe, Search, Lock, Compass, FileText, Building2, Wallet, Cpu, Ship, Landmark, MessageSquare, ClipboardList, Rocket, HandshakeIcon } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedCounter from "@/components/visual/AnimatedCounter";
import ParallaxBand from "@/components/visual/ParallaxBand";
import IranMap from "@/components/visual/IranMap";
import ProcessTimeline from "@/components/visual/ProcessTimeline";
import ClientLogoStrip from "@/components/visual/ClientLogoStrip";
import ServiceCard from "@/components/visual/ServiceCard";
import SectionDivider from "@/components/visual/SectionDivider";
import heroBazaar from "@/assets/hero-bazaar.jpg";
import heroOil from "@/assets/hero-oil.jpg";
import heroAgriculture from "@/assets/hero-agriculture.jpg";
import heroTourism from "@/assets/hero-tourism.jpg";
import heroTechnology from "@/assets/hero-technology.jpg";
import heroShipping from "@/assets/hero-shipping.jpg";
import heroIran from "@/assets/hero-iran.jpg";
import insightTehran from "@/assets/insight-tehran.jpg";
import insightHandshake from "@/assets/insight-handshake.jpg";
import insightDesk from "@/assets/insight-desk.jpg";
import patternBg from "@/assets/pattern-bg.jpg";
import teamFounder from "@/assets/team-founder.jpg";
import teamPartner2 from "@/assets/team-partner-2.jpg";
import teamPartner3 from "@/assets/team-partner-3.jpg";
import teamPartner4 from "@/assets/team-partner-4.jpg";

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
  { value: 15, suffix: "+", label: "Years on the ground in Iran" },
  { value: 9, label: "Sectors actively covered" },
  { value: 40, suffix: "+", label: "Cross-border mandates delivered" },
  { value: 3, label: "Coordination hubs · Tehran · Dubai · London" },
];

const services = [
  { num: "01", icon: Search, title: "Market Intelligence", description: "Commercial research, competitive landscape analysis, and sector mapping tailored to your strategic questions.", image: insightDesk },
  { num: "02", icon: Globe, title: "Market Entry", description: "End-to-end support structuring your approach to entering or expanding within the Iranian market.", image: heroIran },
  { num: "03", icon: Users, title: "Partner & Vendor Search", description: "Identifying, vetting, and connecting you with the right local counterparts — distributors, suppliers, JV partners.", image: insightHandshake },
  { num: "04", icon: Briefcase, title: "Business Development", description: "Building commercial traction through introductions, relationship management, and pipeline development.", image: heroBazaar },
  { num: "05", icon: MapPin, title: "Local Coordination", description: "In-country operational support, meeting coordination, logistics, and real-time local presence when you need it.", image: heroShipping },
];

const sectors = [
  { num: "01", title: "Technology & Digital", items: "SaaS · AI · Outsourcing · Digital Business", icon: Cpu, image: heroTechnology },
  { num: "02", title: "Trade & Industry", items: "Cross-border Trade · Manufacturing · Industrial", icon: Ship, image: heroShipping },
  { num: "03", title: "Investment & Real Estate", items: "Capital Deployment · Property · Development", icon: Building2, image: insightTehran },
  { num: "04", title: "Agriculture & Resources", items: "Agricultural Trade · Natural Resources", icon: Landmark, image: heroAgriculture },
];

const cities = [
  { name: "Tehran", role: "Primary in-country team", x: 47, y: 28, primary: true },
  { name: "Tabriz", role: "Northwest gateway", x: 30, y: 18 },
  { name: "Mashhad", role: "Northeast trade", x: 78, y: 22 },
  { name: "Isfahan", role: "Industrial corridor", x: 48, y: 50 },
  { name: "Shiraz", role: "Southern reach", x: 50, y: 70 },
  { name: "Bandar Abbas", role: "Maritime hub", x: 65, y: 82 },
];

const process = [
  { num: "01", title: "Listen", description: "A confidential conversation to understand your objectives, constraints, and the questions you actually need answered.", icon: MessageSquare },
  { num: "02", title: "Scope", description: "A clear written proposal — defined deliverables, timelines, and a fixed scope. No open-ended retainers.", icon: ClipboardList, duration: "1–2 weeks" },
  { num: "03", title: "Deliver", description: "Structured execution from our cross-border team, with weekly visibility and direct partner-level engagement.", icon: Rocket, duration: "4–16 weeks" },
  { num: "04", title: "Stay alongside", description: "Optional ongoing local coordination once the initial mandate concludes — for follow-through that matters.", icon: HandshakeIcon, duration: "Optional" },
];

const insights = [
  {
    image: insightTehran,
    category: "Market Note",
    date: "Q1 2025",
    title: "Reading Iran's consumer market through informal channels",
    excerpt: "Why official data alone misunderstates demand — and how foreign operators can build a more accurate picture.",
  },
  {
    image: insightHandshake,
    category: "Perspective",
    date: "Q4 2024",
    title: "Choosing the right local partner — and what to avoid",
    excerpt: "A practical framework for evaluating distributors, JV candidates, and commercial agents.",
  },
  {
    image: insightDesk,
    category: "Briefing",
    date: "Q4 2024",
    title: "Cross-border payments in 2025: a working playbook",
    excerpt: "Mapping the operational mechanics that foreign companies are actually using to settle commercial flows.",
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
  { icon: Cpu, label: "SaaS & Tech" },
  { icon: Ship, label: "Trade & Export" },
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

const team = [
  { name: "Arad Mostafavi", role: "Founding Partner", bio: "Two decades advising international companies on entry, partnerships, and operations across Iran and the wider region.", based: "Tehran · Dubai", image: teamFounder },
  { name: "Leila Hosseini", role: "Partner, Market Strategy", bio: "Former corporate strategy lead. Heads our research practice and oversees mandates in consumer, industrial, and trade.", based: "Tehran", image: teamPartner2 },
  { name: "Daniel Kaveh", role: "Partner, Cross-Border", bio: "Background in international banking and structured trade. Leads engagements involving payments, logistics, and compliance navigation.", based: "Dubai · London", image: teamPartner3 },
  { name: "Mahnaz Sarrafi", role: "Senior Advisor", bio: "Decades inside Iranian institutional and family-business networks. Provides counsel on partner selection and stakeholder mapping.", based: "Tehran · Isfahan", image: teamPartner4 },
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
      {/* ============= HERO ============= */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />
        </div>

        {/* corner meta */}
        <div className="absolute top-28 left-0 right-0 z-10 section-padding">
          <div className="section-container flex items-center justify-between text-primary-foreground/60">
            <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.25em]">
              <span className="w-8 h-px bg-sand" />
              Est. Tehran · 2009
            </div>
            <div className="hidden md:flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.25em]">
              Tehran · Dubai · London
              <span className="w-8 h-px bg-sand" />
            </div>
          </div>
        </div>

        <div className="relative section-padding pb-20 md:pb-28 w-full">
          <div className="section-container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.span variants={fadeUp} custom={0} className="section-label text-sand">
                Iran-Focused Business Advisory
              </motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mt-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-semibold text-primary-foreground leading-[1.02] tracking-tight">
                Local roots.<br />
                <span className="italic font-light text-sand">Global</span> delivery.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-8 text-lg md:text-xl text-primary-foreground/75 font-sans leading-relaxed max-w-2xl">
                We help foreign companies understand, assess, enter, and navigate the Iranian market — with trusted in-country access and structured cross-border support.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-sand text-primary px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-sand-light transition-all">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:border-sand hover:text-sand transition-colors">
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* slide indicators + caption */}
            <div className="mt-16 flex items-end justify-between gap-8">
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-0.5 transition-all duration-500 ${i === currentSlide ? "w-12 bg-sand" : "w-6 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="hidden md:block text-right">
                <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary-foreground/50">
                  Now viewing
                </div>
                <div className="mt-1 text-xs font-sans text-primary-foreground/80 capitalize">
                  {heroSlides[currentSlide].alt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= STATS — Animated, no divider walls ============= */}
      <section className="bg-primary border-t border-primary-foreground/10">
        <div className="section-container section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-primary px-6 py-12 md:py-14"
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="text-5xl md:text-6xl font-serif font-medium text-sand"
                />
                <div className="mt-4 text-[10px] font-sans uppercase tracking-[0.2em] text-primary-foreground/60 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= INTRO — Editorial with image ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-editorial">
                <img
                  src={insightTehran}
                  alt="Tehran skyline at golden hour"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-8">
                  <div className="flex items-end justify-between text-primary-foreground">
                    <div>
                      <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-sand mb-2">Operating Base</p>
                      <p className="font-serif text-2xl">Tehran</p>
                    </div>
                    <p className="text-[10px] font-sans tracking-wider text-primary-foreground/60">35.7°N · 51.4°E</p>
                  </div>
                </div>
              </div>
              {/* floating accent */}
              <div className="hidden lg:block absolute -mt-20 -ml-12 w-32 h-32 border border-sand/40" />
            </motion.div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="section-label">Who We Are</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                A boutique firm built for <span className="italic font-light">Iran's complexity</span>.
              </h2>
              <div className="editorial-line my-10" />
              <p className="text-lg md:text-xl font-sans text-charcoal leading-relaxed">
                Arad Advisory bridges the gap between foreign companies and the Iranian market. We combine deep local knowledge with professional cross-border delivery — giving our clients something rare in this market: reliable, grounded insight and access in one place.
              </p>
              <p className="mt-6 text-base font-sans text-muted-foreground leading-relaxed">
                Our team has roots inside Iran and a network built over years of real commercial engagement. We don't just analyze markets — we open doors, find partners, support operations, and stay alongside our clients as they navigate complexity.
              </p>
              <div className="pt-10">
                <Link to="/about" className="group inline-flex items-center gap-3 text-sm font-sans font-medium text-primary tracking-[0.1em] uppercase border-b border-sand pb-1 hover:gap-5 transition-all">
                  Learn About Our Firm <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PARALLAX BAND #1 — Cinematic break ============= */}
      <ParallaxBand
        image={heroIran}
        alt="Iran landscape — a market of scale and complexity"
        height="min-h-[55vh]"
        overlay="gradient"
      >
        <div className="max-w-3xl">
          <p className="section-label text-sand mb-6">A Market of Scale</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground leading-[1.15] tracking-tight">
            <span className="italic font-light text-sand">90 million</span> people. A G20 economy by PPP. Sixteen bordering and proximate markets. <span className="text-primary-foreground/70">One of the most consequential under-engaged markets in the world.</span>
          </p>
        </div>
      </ParallaxBand>

      {/* ============= SERVICES — Image cards ============= */}
      <section className="section-padding py-24 md:py-32 bg-cream-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="section-label">Advisory Services</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                From insight to access<br />
                <span className="italic font-light">to execution</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                We support clients across the full arc of market engagement — from initial research through to local coordination and ongoing business development.
              </p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-3 text-sm font-sans font-medium text-primary tracking-[0.1em] uppercase border-b border-sand pb-1 hover:gap-5 transition-all">
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                num={s.num}
                icon={s.icon}
                title={s.title}
                description={s.description}
                image={s.image}
                href="/services"
                index={i}
              />
            ))}
            {/* tailored CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 5 * 0.08, duration: 0.6 }}
              className="aspect-[4/5] bg-warm-white border border-sand/60 p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <Shield className="w-5 h-5 text-sand mb-6" strokeWidth={1.4} />
                <span className="text-[10px] font-sans tracking-[0.25em] text-sand">06</span>
                <h3 className="mt-5 text-xl md:text-2xl font-serif font-semibold text-primary leading-snug">Tailored Engagements</h3>
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">
                  Every mandate is different. We scope our work to match your stage, objectives, and risk posture.
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-primary border-b border-sand pb-1 self-start mt-8 hover:gap-3 transition-all">
                Request scoping <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= CLIENT LOGO STRIP — social proof ============= */}
      <ClientLogoStrip />

      {/* ============= IRAN MAP — In-country reach ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white relative overflow-hidden">
        {/* faint pattern background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src={patternBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="section-label">In-Country Reach</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Nationwide presence,<br />
                <span className="italic font-light">coordinated centrally</span>.
              </h2>
              <div className="editorial-line my-8" />
              <p className="text-base font-sans text-charcoal leading-relaxed">
                Our core team operates from Tehran, with trusted working relationships extending across every major Iranian commercial centre.
              </p>
              <p className="mt-5 text-sm font-sans text-muted-foreground leading-relaxed">
                The cities marked are a sample of where we are most active; in practice, our reach covers the country.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {cities.slice(0, 4).map((c) => (
                  <div key={c.name} className="border-l-2 border-sand pl-4">
                    <p className="font-serif text-lg text-primary leading-tight">{c.name}</p>
                    <p className="text-[10px] font-sans uppercase tracking-[0.18em] text-muted-foreground mt-1">{c.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <IranMap cities={cities} />
            </div>
          </div>
        </div>
      </section>

      {/* ============= QUOTE DIVIDER ============= */}
      <SectionDivider
        quote="They gave us something we hadn't found anywhere else — a serious, written read of the market combined with people on the ground who could actually move things forward."
        attribution="Head of International Markets · European Industrial Group"
      />

      {/* ============= PROCESS — Visual Timeline ============= */}
      <section className="section-padding py-24 md:py-32 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
            <div className="lg:col-span-7">
              <span className="section-label">How We Work</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                A four-step <span className="italic font-light">engagement</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                Clear scope. Defined deliverables. Partner-led from first conversation to final handover.
              </p>
            </div>
          </div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* ============= PARALLAX BAND #2 — Bazaar texture ============= */}
      <ParallaxBand
        image={heroBazaar}
        alt="Iranian bazaar — local commerce and access"
        height="min-h-[50vh]"
        overlay="gradient"
        align="right"
      >
        <div className="max-w-2xl ml-auto">
          <p className="section-label text-sand mb-6">Why Local Matters</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary-foreground leading-[1.2] tracking-tight">
            Decisions in this market still happen in <span className="italic text-sand">rooms</span>, not on dashboards. Our advantage is being in those rooms.
          </p>
        </div>
      </ParallaxBand>

      {/* ============= SECTOR COVERAGE — Bento grid with imagery ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="section-label">Sector Coverage</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Across industries,<br />
                <span className="italic font-light">grounded in local reality</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                We focus where we have direct experience, established networks, and the ability to introduce clients to credible counterparts.
              </p>
              <Link to="/sectors" className="mt-6 inline-flex items-center gap-3 text-sm font-sans font-medium text-primary tracking-[0.1em] uppercase border-b border-sand pb-1 hover:gap-5 transition-all">
                Explore Sectors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden aspect-[16/10] bg-primary cursor-pointer"
              >
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/70 to-primary/30" />
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between text-primary-foreground">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-sans tracking-[0.25em] text-sand">{s.num}</span>
                    <s.icon className="w-6 h-6 text-sand" strokeWidth={1.3} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold leading-tight mb-3">{s.title}</h3>
                    <p className="text-xs font-sans uppercase tracking-[0.18em] text-primary-foreground/70">{s.items}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHO WE SERVE — Compact strip ============= */}
      <section className="section-padding py-20 bg-stone-light">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Who We Serve</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight">
              Built for serious operators with <span className="italic font-light">real Iran questions</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientTypes.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-warm-white border border-border p-5 flex flex-col items-center text-center gap-3 hover:border-sand transition-colors"
              >
                <c.icon className="w-5 h-5 text-sand" strokeWidth={1.4} />
                <span className="text-xs font-serif font-semibold text-primary leading-snug">{c.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= ENGAGEMENTS — Magazine layout ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <span className="section-label">Selected Engagements</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
              A sample of <span className="italic font-light">recent work</span>.
            </h2>
            <p className="mt-5 text-sm font-sans text-muted-foreground leading-relaxed">
              Client identities are kept confidential by default. The mandates below are anonymised summaries.
            </p>
          </div>
          <div className="space-y-6">
            {engagements.map((e, i) => (
              <motion.article
                key={e.client}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border border-border hover:border-sand/60 transition-colors bg-warm-white p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-3 lg:border-r lg:border-border lg:pr-8">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand">{e.tag}</span>
                  <h3 className="mt-3 text-xl font-serif font-semibold text-primary leading-snug">{e.client}</h3>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="font-serif text-lg text-sand">0{i + 1}</span>
                    <span>/ {engagements.length}</span>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">Challenge</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed">{e.challenge}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">What We Did</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed">{e.work}</p>
                </div>
                <div className="lg:col-span-3 lg:border-l lg:border-border lg:pl-8">
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">Outcome</p>
                  <p className="text-sm font-sans text-charcoal leading-relaxed font-medium">{e.outcome}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============= PRINCIPLES — Side sticky ============= */}
      <section className="section-padding py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="section-label text-sand">Operating Principles</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold leading-[1.1] tracking-tight">
                The way we work,<br />
                <span className="italic font-light text-sand">by design</span>.
              </h2>
              <p className="mt-6 text-sm font-sans text-primary-foreground/60 leading-relaxed">
                Three commitments that shape every engagement we accept.
              </p>
            </div>
            <div className="lg:col-span-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="border-b border-primary-foreground/15 py-10 flex gap-8 items-start group"
                >
                  <span className="text-5xl font-serif font-light text-sand/60 leading-none">0{i + 1}</span>
                  <div className="flex-1">
                    <p.icon className="w-5 h-5 text-sand mb-4" strokeWidth={1.4} />
                    <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-3 leading-snug">{p.title}</h3>
                    <p className="text-base font-sans text-primary-foreground/65 leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= TEAM ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="section-label">The Team</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Senior people.<br />
                <span className="italic font-light">Direct involvement</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base font-sans text-charcoal leading-relaxed">
                Every mandate is led personally by one of our partners. We keep the firm intentionally small so that our most experienced people remain on the work — not behind it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-cream-dark relative">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">{member.role}</p>
                <h3 className="text-xl font-serif font-semibold text-primary leading-snug">{member.name}</h3>
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">{member.bio}</p>
                <p className="mt-4 text-[10px] font-sans uppercase tracking-[0.18em] text-muted-foreground/70">{member.based}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= INSIGHTS ============= */}
      <section className="section-padding py-24 md:py-32 bg-stone-light">
        <div className="section-container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="section-label">Recent Thinking</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Notes from <span className="italic font-light">the ground</span>.
              </h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-3 text-sm font-sans font-medium text-primary tracking-[0.1em] uppercase border-b border-sand pb-1 hover:gap-5 transition-all">
              All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-cream-dark">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
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
                <span className="inline-flex items-center gap-1 text-[11px] font-sans uppercase tracking-[0.18em] text-primary">
                  Read note <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FINAL CTA — Cinematic ============= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroIran} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/75" />
        </div>
        <div className="relative section-padding py-24 md:py-32">
          <div className="section-container">
            <div className="max-w-3xl">
              <span className="section-label text-sand">Initial Conversation</span>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-[1.1] tracking-tight">
                Discreet, considered,<br />
                <span className="italic font-light text-sand">and without obligation</span>.
              </h2>
              <p className="mt-8 text-lg font-sans text-primary-foreground/70 max-w-2xl leading-relaxed">
                Tell us about your objectives. We'll share how we can help — and whether we're the right fit. Initial conversations are confidential and complimentary.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-sand text-primary px-10 py-5 text-sm font-sans font-medium tracking-[0.15em] uppercase hover:bg-sand-light transition-all">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-xs font-sans uppercase tracking-[0.2em] text-primary-foreground/60">
                  Typical response · within one business day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
