import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Ship, Building2, Wheat } from "lucide-react";
import Layout from "@/components/Layout";

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
    description: "Iran has a rapidly growing technology ecosystem — with a young, tech-literate population, a vibrant startup scene, and increasing demand for SaaS, AI, digital services, and IT outsourcing. For international technology companies, this represents both a commercial opportunity and a talent pool worth exploring.",
    areas: ["SaaS & Cloud Services", "Artificial Intelligence & Data", "IT Outsourcing & Nearshoring", "Digital Marketing & E-commerce", "Fintech & Payments", "Software Development Talent"],
    note: "Active mandates: outsourcing feasibility, AI talent sourcing, SaaS distribution.",
  },
  {
    id: "trade",
    num: "02",
    icon: Ship,
    title: "Trade & Industry",
    description: "Iran's industrial base spans automotive, petrochemicals, construction materials, consumer goods, and light manufacturing. Cross-border trade — particularly with neighboring markets — remains a major commercial activity, with significant volume flowing through well-established trade corridors.",
    areas: ["Cross-Border Trade", "Manufacturing & Assembly", "Consumer Goods & FMCG", "Construction Materials", "Petrochemicals & Derivatives", "Automotive & Parts"],
    note: "Active mandates: buyer search, distributor networks, trade corridor strategy.",
  },
  {
    id: "investment",
    num: "03",
    icon: Building2,
    title: "Investment & Real Estate",
    description: "For investors with the right risk appetite and long-term perspective, Iran offers opportunities in real estate, infrastructure, hospitality, and industrial development. Understanding the local regulatory landscape and identifying credible local partners are essential first steps.",
    areas: ["Commercial Real Estate", "Residential Development", "Hospitality & Tourism", "Infrastructure Projects", "Industrial Parks & Zones", "Joint Ventures & Capital Partnerships"],
    note: "Active mandates: market briefings, opportunity mapping, partner due diligence.",
  },
  {
    id: "agriculture",
    num: "04",
    icon: Wheat,
    title: "Agriculture & Resources",
    description: "Iran is one of the world's largest producers of saffron, pistachios, dates, and a range of agricultural commodities. The country also holds significant mineral and natural resource deposits. Export-oriented partnerships and sourcing relationships are areas of active interest.",
    areas: ["Agricultural Exports & Sourcing", "Food Processing & Packaging", "Saffron, Pistachios & Dates", "Mining & Minerals", "Water & Environmental Tech", "Agricultural Technology"],
    note: "Active mandates: sourcing partnerships, export buyer matching, sector briefings.",
  },
];

const Sectors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Sector Coverage</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              Across industries, grounded in local reality.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              We work with clients across traditional and emerging sectors — always combining market knowledge with practical, on-the-ground access.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-20 md:py-24 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="section-label">Approach</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Sector depth, where it matters.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">
                We do not claim coverage of everything. We focus where we have direct experience, established networks, and the ability to introduce clients to credible counterparts in a reasonable timeframe.
              </p>
              <p className="mt-5 text-base font-sans text-muted-foreground leading-relaxed">
                Outside our four primary sectors, we take on selected mandates through our extended network — when scope, timing, and confidentiality fit our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors — editorial rows */}
      <section className="section-padding pb-20 md:pb-28 bg-warm-white">
        <div className="section-container border-t border-border">
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              id={sector.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-border py-14 md:py-16 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-sans tracking-[0.2em] text-sand font-medium">{sector.num}</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <sector.icon className="w-5 h-5 text-sand mb-5" strokeWidth={1.5} />
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight">{sector.title}</h2>
                  <p className="mt-6 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground leading-relaxed">
                    {sector.note}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base font-sans text-charcoal leading-relaxed mb-8">{sector.description}</p>
                  <span className="section-label block mb-4">Coverage Areas</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {sector.areas.map((area) => (
                      <div key={area} className="flex items-start gap-3 text-sm font-sans text-charcoal">
                        <span className="w-1 h-1 bg-sand rounded-full mt-2 shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA — editorial */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="section-label">Sector-Specific Inquiry</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                Looking at a specific sector? Let's talk.
              </h2>
              <p className="mt-5 text-base font-sans text-muted-foreground max-w-xl leading-relaxed">
                Tell us what you're exploring. We'll share an honest read on whether — and how — we can help.
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors w-full justify-center">
                Request a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-xs font-sans text-muted-foreground text-center tracking-wide">
                Confidential, without obligation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sectors;
