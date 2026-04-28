import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Globe, Users, Briefcase, MapPin, Lock, Compass, FileText, Check } from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxBand from "@/components/visual/ParallaxBand";
import SectionDivider from "@/components/visual/SectionDivider";
import heroIran from "@/assets/hero-iran.jpg";
import heroBazaar from "@/assets/hero-bazaar.jpg";
import insightDesk from "@/assets/insight-desk.jpg";
import insightHandshake from "@/assets/insight-handshake.jpg";
import insightTehran from "@/assets/insight-tehran.jpg";
import heroShipping from "@/assets/hero-shipping.jpg";
import heroTechnology from "@/assets/hero-technology.jpg";

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
    image: insightDesk,
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
    image: heroTechnology,
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
    image: insightHandshake,
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
    image: heroBazaar,
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
    image: heroShipping,
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
      {/* ============= HERO — full image background ============= */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={insightDesk} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />
        </div>
        <div className="relative section-padding pb-20 md:pb-28 w-full">
          <div className="section-container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Advisory Services</motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground leading-[1.05] tracking-tight">
                From insight to access<br />
                <span className="italic font-light text-sand">to execution</span>.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-8 text-lg md:text-xl text-primary-foreground/75 font-sans leading-relaxed max-w-2xl">
                We support the full arc of market engagement — whether you need a focused research mandate or sustained in-country presence.
              </motion.p>
              {/* anchor nav */}
              <motion.div variants={fadeUp} custom={3} className="mt-12 flex flex-wrap gap-4">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-sand border border-primary-foreground/20 hover:border-sand px-4 py-2 transition-colors"
                  >
                    {s.num} · {s.title}
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
              <span className="section-label">A Boutique Practice</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Five practice areas.<br />
                <span className="italic font-light">One coordinated team</span>.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl font-sans text-charcoal leading-relaxed">
                Our services are designed to be combined. Most clients begin with a focused intelligence or partner-search mandate, then engage us further as their position in the market matures.
              </p>
              <p className="mt-6 text-base font-sans text-muted-foreground leading-relaxed">
                Every engagement is scoped in writing, led personally by a partner, and supported by our in-country team. We do not operate junior-led delivery models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= SERVICES — Editorial rows with imagery ============= */}
      <section className="section-padding pb-24 md:pb-32 bg-warm-white">
        <div className="section-container">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="border-t border-border py-20 md:py-24 scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image side */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-primary group">
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between">
                      <span className="text-[10px] font-sans tracking-[0.25em] text-sand">{service.num} / 05</span>
                      <service.icon className="w-5 h-5 text-sand" strokeWidth={1.4} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-sand mb-2">Typical Engagement</p>
                      <p className="font-serif text-2xl text-primary-foreground">{service.typical}</p>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-7">
                  <span className="text-[10px] font-sans tracking-[0.25em] text-sand">{service.num}</span>
                  <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base font-sans text-muted-foreground italic">{service.subtitle}</p>
                  <div className="editorial-line my-8" />
                  <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">{service.description}</p>

                  <div className="mt-10 bg-stone-light p-8">
                    <span className="section-label block mb-5">Typical Deliverables</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm font-sans text-charcoal">
                          <Check className="w-4 h-4 text-sand mt-0.5 shrink-0" strokeWidth={2} />
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

      {/* ============= PARALLAX BAND ============= */}
      <ParallaxBand
        image={heroBazaar}
        alt="Iranian commerce and on-the-ground engagement"
        height="min-h-[50vh]"
        overlay="gradient"
      >
        <div className="max-w-3xl">
          <p className="section-label text-sand mb-6">Our Method</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary-foreground leading-[1.2] tracking-tight">
            Every mandate is <span className="italic text-sand">scoped in writing</span>, partner-led, and delivered with the same standards a board would expect from any global advisory firm.
          </p>
        </div>
      </ParallaxBand>

      {/* ============= PRINCIPLES ============= */}
      <section className="section-padding py-24 md:py-32 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <span className="section-label">How We Engage</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Three commitments<br />
                <span className="italic font-light">that shape every mandate</span>.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="border-b border-border py-10 flex gap-8 items-start"
                >
                  <span className="text-5xl font-serif font-light text-sand/70 leading-none">0{i + 1}</span>
                  <div className="flex-1">
                    <p.icon className="w-5 h-5 text-sand mb-3" strokeWidth={1.4} />
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-3">{p.title}</h3>
                    <p className="text-base font-sans text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= QUOTE DIVIDER ============= */}
      <SectionDivider
        quote="Define the question. Scope the work. Deliver in writing. Stay alongside if useful. There is no other way we operate."
        attribution="Founding Partner, Arad Advisory"
      />

      {/* ============= CTA — cinematic ============= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={insightTehran} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative section-padding py-24 md:py-32">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <span className="section-label text-sand">Initial Conversation</span>
                <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-[1.1] tracking-tight">
                  Every engagement is tailored.<br />
                  <span className="italic font-light text-sand">Let's discuss yours</span>.
                </h2>
                <p className="mt-8 text-lg font-sans text-primary-foreground/70 max-w-xl leading-relaxed">
                  We scope our work to match your objectives, timeline, and risk posture. There are no off-the-shelf packages — and no obligation to proceed after a first conversation.
                </p>
              </div>
              <div className="lg:col-span-5">
                <Link to="/contact" className="group inline-flex items-center justify-center gap-3 bg-sand text-primary px-10 py-5 text-sm font-sans font-medium tracking-[0.15em] uppercase hover:bg-sand-light transition-all w-full">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-4 text-xs font-sans text-primary-foreground/60 text-center tracking-[0.2em] uppercase">
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

export default Services;
