import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Globe, Users, Briefcase, MapPin, Lock, Compass, FileText } from "lucide-react";
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
    num: "01",
    icon: Search,
    title: "Market Intelligence",
    subtitle: "Research, analysis, and commercial insight",
    description: "We provide tailored market research and commercial intelligence that goes beyond publicly available data. Our work draws on in-country sources, direct interviews, and first-hand industry knowledge to give clients a real understanding of market dynamics, competitive landscape, pricing, distribution, regulatory conditions, and sector-specific opportunities.",
    deliverables: ["Market sizing and segmentation", "Competitive landscape analysis", "Regulatory and compliance mapping", "Sector opportunity assessments", "Custom commercial due diligence"],
    typical: "4–8 weeks",
  },
  {
    id: "market-entry",
    num: "02",
    icon: Globe,
    title: "Market Entry",
    subtitle: "Structuring and supporting market entry",
    description: "Entering the Iranian market requires more than desktop strategy. We help clients develop practical, risk-aware entry plans — identifying the right structure, partners, legal considerations, and go-to-market approach. We support the process from initial assessment through to on-the-ground execution.",
    deliverables: ["Entry strategy development", "Legal and structural guidance", "Channel and distribution mapping", "Regulatory pathway assessment", "Go-to-market planning"],
    typical: "8–16 weeks",
  },
  {
    id: "partner-search",
    num: "03",
    icon: Users,
    title: "Partner & Vendor Search",
    subtitle: "Finding the right local counterparts",
    description: "Access to the right partner — whether a distributor, supplier, JV candidate, or technical team — is often the single most important factor in market success. We identify, approach, vet, and introduce potential counterparts through our direct network and structured search methodology.",
    deliverables: ["Long-list development and screening", "Direct outreach and introduction", "Background checks and due diligence", "Meeting facilitation and coordination", "Partnership structuring support"],
    typical: "6–12 weeks",
  },
  {
    id: "business-development",
    num: "04",
    icon: Briefcase,
    title: "Business Development",
    subtitle: "Building pipeline and commercial traction",
    description: "For companies already present or actively exploring, we support ongoing business development — helping build pipeline, manage key relationships, and create commercial traction in-market. We act as an extension of your team, with local presence and cultural fluency.",
    deliverables: ["Lead generation and qualification", "Relationship management", "Client and buyer engagement", "Event and exhibition support", "Commercial follow-up and coordination"],
    typical: "Retainer-based",
  },
  {
    id: "local-coordination",
    num: "05",
    icon: MapPin,
    title: "Local Coordination",
    subtitle: "In-country presence and operational support",
    description: "Many engagements require physical presence, local logistics, and real-time coordination. We provide in-country support for meetings, site visits, travel, document handling, and any operational task that requires someone trusted on the ground.",
    deliverables: ["In-person meeting coordination", "Site and factory visits", "Travel and logistics planning", "Translation and interpreting", "Administrative and documentation support"],
    typical: "Project or retainer",
  },
];

const principles = [
  { icon: Lock, title: "Confidential by default", text: "Every engagement is treated as sensitive. NDAs, restricted distribution, no public references without consent." },
  { icon: Compass, title: "Scoped, not open-ended", text: "Defined deliverables, fixed timelines, and a written brief — no rolling retainers without purpose." },
  { icon: FileText, title: "Documented, not whispered", text: "Findings and recommendations are written, structured, and built for board-level use." },
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

      {/* Intro paragraph */}
      <section className="section-padding py-20 md:py-24 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="section-label">A Boutique Practice</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Five practice areas. One coordinated team.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">
                Our services are designed to be combined. Most clients begin with a focused intelligence or partner-search mandate, then engage us further as their position in the market matures.
              </p>
              <p className="mt-5 text-base font-sans text-muted-foreground leading-relaxed">
                Every engagement is scoped in writing, led personally by a partner, and supported by our in-country team. We do not operate junior-led delivery models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services — editorial rows */}
      <section className="section-padding pb-20 md:pb-28 bg-warm-white">
        <div className="section-container border-t border-border">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-border py-14 md:py-16 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-sans tracking-[0.2em] text-sand font-medium">{service.num}</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <service.icon className="w-5 h-5 text-sand mb-5" strokeWidth={1.5} />
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight">{service.title}</h2>
                  <p className="mt-2 text-sm font-sans text-muted-foreground">{service.subtitle}</p>
                  <div className="mt-6 inline-flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="w-6 h-px bg-sand" />
                    Typical engagement · {service.typical}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base font-sans text-charcoal leading-relaxed mb-8">{service.description}</p>
                  <div>
                    <span className="section-label block mb-4">Typical Deliverables</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
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

      {/* How we engage — principles */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="section-label">How We Engage</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                Three commitments that shape every mandate.
              </h2>
            </div>
            <div className="lg:col-span-8 border-t border-border">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="border-b border-border py-8 md:py-10 flex gap-6 items-start"
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

      {/* CTA — editorial */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="section-label">Initial Conversation</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                Every engagement is tailored. Let's discuss yours.
              </h2>
              <p className="mt-5 text-base font-sans text-muted-foreground max-w-xl leading-relaxed">
                We scope our work to match your objectives, timeline, and risk posture. There are no off-the-shelf packages — and no obligation to proceed after a first conversation.
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

export default Services;
