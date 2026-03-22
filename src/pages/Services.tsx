import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Globe, Users, Briefcase, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const services = [
  {
    id: "market-intelligence",
    icon: Search,
    title: "Market Intelligence",
    subtitle: "Research, analysis, and commercial insight",
    description: "We provide tailored market research and commercial intelligence that goes beyond publicly available data. Our work draws on in-country sources, direct interviews, and first-hand industry knowledge to give clients a real understanding of market dynamics, competitive landscape, pricing, distribution, regulatory conditions, and sector-specific opportunities.",
    deliverables: ["Market sizing and segmentation", "Competitive landscape analysis", "Regulatory and compliance mapping", "Sector opportunity assessments", "Custom commercial due diligence"],
  },
  {
    id: "market-entry",
    icon: Globe,
    title: "Market Entry",
    subtitle: "Structuring and supporting market entry",
    description: "Entering the Iranian market requires more than desktop strategy. We help clients develop practical, risk-aware entry plans — identifying the right structure, partners, legal considerations, and go-to-market approach. We support the process from initial assessment through to on-the-ground execution.",
    deliverables: ["Entry strategy development", "Legal and structural guidance", "Channel and distribution mapping", "Regulatory pathway assessment", "Go-to-market planning"],
  },
  {
    id: "partner-search",
    icon: Users,
    title: "Partner & Vendor Search",
    subtitle: "Finding the right local counterparts",
    description: "Access to the right partner — whether a distributor, supplier, JV candidate, or technical team — is often the single most important factor in market success. We identify, approach, vet, and introduce potential counterparts through our direct network and structured search methodology.",
    deliverables: ["Long-list development and screening", "Direct outreach and introduction", "Background checks and due diligence", "Meeting facilitation and coordination", "Partnership structuring support"],
  },
  {
    id: "business-development",
    icon: Briefcase,
    title: "Business Development",
    subtitle: "Building pipeline and commercial traction",
    description: "For companies already present or actively exploring, we support ongoing business development — helping build pipeline, manage key relationships, and create commercial traction in-market. We act as an extension of your team, with local presence and cultural fluency.",
    deliverables: ["Lead generation and qualification", "Relationship management", "Client and buyer engagement", "Event and exhibition support", "Commercial follow-up and coordination"],
  },
  {
    id: "local-coordination",
    icon: MapPin,
    title: "Local Coordination",
    subtitle: "In-country presence and operational support",
    description: "Many engagements require physical presence, local logistics, and real-time coordination. We provide in-country support for meetings, site visits, travel, document handling, and any operational task that requires someone trusted on the ground.",
    deliverables: ["In-person meeting coordination", "Site and factory visits", "Travel and logistics planning", "Translation and interpreting", "Administrative and documentation support"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Advisory Services</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              From insight to access to execution.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              We support the full arc of market engagement — whether you need a focused research mandate or sustained in-country presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="py-16 first:pt-0 last:pb-0 border-b border-border last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-5">
                  <service.icon className="w-6 h-6 text-sand mb-4" strokeWidth={1.5} />
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight">{service.title}</h2>
                  <p className="mt-2 text-sm font-sans text-muted-foreground">{service.subtitle}</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base font-sans text-charcoal leading-relaxed mb-8">{service.description}</p>
                  <div>
                    <span className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground mb-4 block" style={{ letterSpacing: "0.15em" }}>
                      Typical Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm font-sans text-charcoal">
                          <span className="w-1 h-1 bg-sand rounded-full mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding py-20 md:py-28">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground max-w-2xl mx-auto">
            Every engagement is tailored. Let's discuss yours.
          </h2>
          <p className="mt-4 text-base font-sans text-primary-foreground/60 max-w-lg mx-auto">
            We scope our work to match your objectives, timeline, and budget. There are no off-the-shelf packages.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-sand text-primary px-8 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-sand-light transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
