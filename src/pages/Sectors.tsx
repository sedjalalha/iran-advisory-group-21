import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    title: "Technology & Digital",
    description: "Iran has a rapidly growing technology ecosystem — with a young, tech-literate population, a vibrant startup scene, and increasing demand for SaaS, AI, digital services, and IT outsourcing. For international technology companies, this represents both a commercial opportunity and a talent pool worth exploring.",
    areas: ["SaaS & Cloud Services", "Artificial Intelligence & Data", "IT Outsourcing & Nearshoring", "Digital Marketing & E-commerce", "Fintech & Payments", "Software Development Talent"],
  },
  {
    id: "trade",
    title: "Trade & Industry",
    description: "Iran's industrial base spans automotive, petrochemicals, construction materials, consumer goods, and light manufacturing. Cross-border trade — particularly with neighboring markets — remains a major commercial activity, with significant volume flowing through well-established trade corridors.",
    areas: ["Cross-Border Trade", "Manufacturing & Assembly", "Consumer Goods & FMCG", "Construction Materials", "Petrochemicals & Derivatives", "Automotive & Parts"],
  },
  {
    id: "investment",
    title: "Investment & Real Estate",
    description: "For investors with the right risk appetite and long-term perspective, Iran offers opportunities in real estate, infrastructure, hospitality, and industrial development. Understanding the local regulatory landscape and identifying credible local partners are essential first steps.",
    areas: ["Commercial Real Estate", "Residential Development", "Hospitality & Tourism", "Infrastructure Projects", "Industrial Parks & Zones", "Joint Ventures & Capital Partnerships"],
  },
  {
    id: "agriculture",
    title: "Agriculture & Resources",
    description: "Iran is one of the world's largest producers of saffron, pistachios, dates, and a range of agricultural commodities. The country also holds significant mineral and natural resource deposits. Export-oriented partnerships and sourcing relationships are areas of active interest.",
    areas: ["Agricultural Exports & Sourcing", "Food Processing & Packaging", "Saffron, Pistachios & Dates", "Mining & Minerals", "Water & Environmental Tech", "Agricultural Technology"],
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

      {/* Sectors */}
      <section className="bg-warm-white">
        {sectors.map((sector, i) => (
          <div key={sector.id} id={sector.id} className={i % 2 === 1 ? "bg-cream-dark" : ""}>
            <div className="section-padding py-20 md:py-28">
              <div className="section-container">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20"
                >
                  <div className="lg:col-span-5">
                    <div className="editorial-line mb-6" />
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight">{sector.title}</h2>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-base font-sans text-charcoal leading-relaxed mb-8">{sector.description}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {sector.areas.map((area) => (
                        <div key={area} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                          <span className="w-1 h-1 bg-sand rounded-full mt-2 shrink-0" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding py-20 md:py-28">
        <div className="section-container text-center">
          <h2 className="text-3xl font-serif font-semibold text-primary-foreground max-w-2xl mx-auto">
            Looking at a specific sector? Let's talk.
          </h2>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-sand text-primary px-8 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-sand-light transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sectors;
