import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Ship, Building2, Wheat, Check } from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxBand from "@/components/visual/ParallaxBand";
import AnimatedCounter from "@/components/visual/AnimatedCounter";
import heroTechnology from "@/assets/hero-technology.jpg";
import heroShipping from "@/assets/hero-shipping.jpg";
import heroAgriculture from "@/assets/hero-agriculture.jpg";
import heroOil from "@/assets/hero-oil.jpg";
import insightTehran from "@/assets/insight-tehran.jpg";
import heroIran from "@/assets/hero-iran.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const sectors = [
  {
    id: "technology",
    num: "01",
    icon: Cpu,
    title: "Technology & Digital",
    tagline: "A young, technical population — ready to be activated.",
    description: "Iran has a rapidly growing technology ecosystem — with a young, tech-literate population, a vibrant startup scene, and increasing demand for SaaS, AI, digital services, and IT outsourcing. For international technology companies, this represents both a commercial opportunity and a talent pool worth exploring.",
    areas: ["SaaS & Cloud Services", "Artificial Intelligence & Data", "IT Outsourcing & Nearshoring", "Digital Marketing & E-commerce", "Fintech & Payments", "Software Development Talent"],
    note: "Active mandates: outsourcing feasibility, AI talent sourcing, SaaS distribution.",
    image: heroTechnology,
    metric: { value: 80, suffix: "+", label: "Active tech accelerators in Tehran" },
  },
  {
    id: "trade",
    num: "02",
    icon: Ship,
    title: "Trade & Industry",
    tagline: "Established corridors. Real volume. Reliable counterparties.",
    description: "Iran's industrial base spans automotive, petrochemicals, construction materials, consumer goods, and light manufacturing. Cross-border trade — particularly with neighboring markets — remains a major commercial activity, with significant volume flowing through well-established trade corridors.",
    areas: ["Cross-Border Trade", "Manufacturing & Assembly", "Consumer Goods & FMCG", "Construction Materials", "Petrochemicals & Derivatives", "Automotive & Parts"],
    note: "Active mandates: buyer search, distributor networks, trade corridor strategy.",
    image: heroShipping,
    metric: { value: 16, label: "Bordering & proximate trade markets" },
  },
  {
    id: "investment",
    num: "03",
    icon: Building2,
    title: "Investment & Real Estate",
    tagline: "Underpriced fundamentals — for those with patience.",
    description: "For investors with the right risk appetite and long-term perspective, Iran offers opportunities in real estate, infrastructure, hospitality, and industrial development. Understanding the local regulatory landscape and identifying credible local partners are essential first steps.",
    areas: ["Commercial Real Estate", "Residential Development", "Hospitality & Tourism", "Infrastructure Projects", "Industrial Parks & Zones", "Joint Ventures & Capital Partnerships"],
    note: "Active mandates: market briefings, opportunity mapping, partner due diligence.",
    image: insightTehran,
    metric: { value: 90, suffix: "m", label: "Population — domestic demand base" },
  },
  {
    id: "agriculture",
    num: "04",
    icon: Wheat,
    title: "Agriculture & Resources",
    tagline: "World-leading production. Underdeveloped channels.",
    description: "Iran is one of the world's largest producers of saffron, pistachios, dates, and a range of agricultural commodities. The country also holds significant mineral and natural resource deposits. Export-oriented partnerships and sourcing relationships are areas of active interest.",
    areas: ["Agricultural Exports & Sourcing", "Food Processing & Packaging", "Saffron, Pistachios & Dates", "Mining & Minerals", "Water & Environmental Tech", "Agricultural Technology"],
    note: "Active mandates: sourcing partnerships, export buyer matching, sector briefings.",
    image: heroAgriculture,
    metric: { value: 90, suffix: "%", label: "Global saffron production share" },
  },
];

const Sectors = () => {
  return (
    <Layout>
      {/* ============= HERO ============= */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroOil} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />
        </div>
        <div className="relative section-padding pb-20 md:pb-28 w-full">
          <div className="section-container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Sector Coverage</motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground leading-[1.05] tracking-tight">
                Across industries,<br />
                <span className="italic font-light text-sand">grounded in local reality</span>.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-8 text-lg md:text-xl text-primary-foreground/75 font-sans leading-relaxed max-w-2xl">
                We work with clients across traditional and emerging sectors — always combining market knowledge with practical, on-the-ground access.
              </motion.p>
              {/* sector chips */}
              <motion.div variants={fadeUp} custom={3} className="mt-12 flex flex-wrap gap-3">
                {sectors.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-sand border border-primary-foreground/20 hover:border-sand px-4 py-2 transition-colors"
                  >
                    <s.icon className="w-3.5 h-3.5" strokeWidth={1.4} />
                    {s.title}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= INTRO ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="section-label">Approach</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Sector depth,<br />
                <span className="italic font-light">where it matters</span>.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl font-sans text-charcoal leading-relaxed">
                We do not claim coverage of everything. We focus where we have direct experience, established networks, and the ability to introduce clients to credible counterparts in a reasonable timeframe.
              </p>
              <p className="mt-6 text-base font-sans text-muted-foreground leading-relaxed">
                Outside our four primary sectors, we take on selected mandates through our extended network — when scope, timing, and confidentiality fit our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= SECTORS — Editorial alternating with full-bleed imagery ============= */}
      {sectors.map((sector, idx) => (
        <section
          key={sector.id}
          id={sector.id}
          className={`scroll-mt-24 ${idx % 2 === 0 ? "bg-warm-white" : "bg-stone-light"}`}
        >
          <div className="section-padding py-24 md:py-32">
            <div className="section-container">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary group">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between">
                      <span className="text-[10px] font-sans tracking-[0.25em] text-sand bg-primary/30 backdrop-blur-sm px-3 py-1.5">
                        {sector.num} / 04
                      </span>
                      <sector.icon className="w-6 h-6 text-sand" strokeWidth={1.3} />
                    </div>
                  </div>
                  {/* Floating metric card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative -mt-20 ml-auto mr-6 lg:mr-12 w-[260px] bg-warm-white border-l-4 border-sand p-6 shadow-editorial"
                  >
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">By the numbers</p>
                    <AnimatedCounter
                      value={sector.metric.value}
                      suffix={sector.metric.suffix}
                      className="text-4xl font-serif font-medium text-primary"
                    />
                    <p className="mt-2 text-xs font-sans text-muted-foreground leading-relaxed">{sector.metric.label}</p>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-sans tracking-[0.25em] text-sand font-medium">{sector.num}</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                    {sector.title}
                  </h2>
                  <p className="mt-4 text-lg font-serif italic text-sand">
                    {sector.tagline}
                  </p>
                  <div className="editorial-line my-8" />
                  <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">{sector.description}</p>

                  <div className="mt-10">
                    <span className="section-label block mb-5">Coverage Areas</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {sector.areas.map((area) => (
                        <div key={area} className="flex items-start gap-3 text-sm font-sans text-charcoal">
                          <Check className="w-4 h-4 text-sand mt-0.5 shrink-0" strokeWidth={2} />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 bg-primary/5 border-l-2 border-sand">
                    <div className="w-2 h-2 rounded-full bg-sand animate-pulse" />
                    <p className="text-xs font-sans text-charcoal italic">{sector.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ============= PARALLAX BAND ============= */}
      <ParallaxBand
        image={heroIran}
        alt="Iran's economic landscape"
        height="min-h-[55vh]"
        overlay="gradient"
      >
        <div className="max-w-3xl">
          <p className="section-label text-sand mb-6">Beyond Our Four Sectors</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary-foreground leading-[1.2] tracking-tight">
            We selectively accept mandates outside our core sectors — when scope, <span className="italic text-sand">timing, and confidentiality</span> fit our standards.
          </p>
        </div>
      </ParallaxBand>

      {/* ============= CTA ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Sector-Specific Inquiry</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
              Looking at a specific sector?<br />
              <span className="italic font-light">Let's talk</span>.
            </h2>
            <p className="mt-8 text-lg font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Tell us what you're exploring. We'll share an honest read on whether — and how — we can help.
            </p>
            <div className="mt-12 inline-flex flex-col items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-sans font-medium tracking-[0.15em] uppercase hover:bg-navy-light transition-all">
                Request a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-xs font-sans text-muted-foreground tracking-[0.2em] uppercase">
                Confidential · Without obligation
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sectors;
