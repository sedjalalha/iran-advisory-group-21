import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Network, FileText, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import ParallaxBand from "@/components/visual/ParallaxBand";
import SectionDivider from "@/components/visual/SectionDivider";
import AnimatedCounter from "@/components/visual/AnimatedCounter";
import patternBg from "@/assets/pattern-bg.jpg";
import insightTehran from "@/assets/insight-tehran.jpg";
import heroIran from "@/assets/hero-iran.jpg";
import heroBazaar from "@/assets/hero-bazaar.jpg";
import teamFounder from "@/assets/team-founder.jpg";
import teamPartner2 from "@/assets/team-partner-2.jpg";
import teamPartner3 from "@/assets/team-partner-3.jpg";
import teamPartner4 from "@/assets/team-partner-4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const approach = [
  { num: "01", title: "Client-First Scoping", text: "We begin every engagement by understanding the client's stage, objectives, risk appetite, and decision-making needs. We don't impose frameworks — we build around your reality.", icon: MessageSquare },
  { num: "02", title: "Local Network, Not Remote Research", text: "Our intelligence comes from in-country conversations, on-the-ground visits, and direct relationships — not from secondary desk research alone.", icon: Network },
  { num: "03", title: "Structured Delivery", text: "We work with clear milestones, professional documentation, and regular reporting. Our clients receive deliverables they can act on and share with their stakeholders.", icon: FileText },
  { num: "04", title: "Confidential & Discreet", text: "Many of our clients operate in sensitive commercial or regulatory environments. Discretion is core to how we work, not an afterthought.", icon: Shield },
];

const team = [
  { name: "Arad Mostafavi", role: "Founding Partner", bio: "Two decades advising international companies on entry, partnerships, and operations across Iran and the wider region.", based: "Tehran · Dubai", image: teamFounder },
  { name: "Leila Hosseini", role: "Partner, Market Strategy", bio: "Former corporate strategy lead. Heads our research practice and oversees mandates in consumer, industrial, and trade.", based: "Tehran", image: teamPartner2 },
  { name: "Daniel Kaveh", role: "Partner, Cross-Border", bio: "Background in international banking and structured trade. Leads engagements involving payments, logistics, and compliance navigation.", based: "Dubai · London", image: teamPartner3 },
  { name: "Mahnaz Sarrafi", role: "Senior Advisor", bio: "Decades inside Iranian institutional and family-business networks. Provides counsel on partner selection and stakeholder mapping.", based: "Tehran · Isfahan", image: teamPartner4 },
];

const firmStats = [
  { value: 2009, label: "Established" },
  { value: 15, suffix: "+", label: "Years on the ground" },
  { value: 4, label: "Senior partners" },
  { value: 3, label: "Coordination hubs" },
];

const About = () => {
  return (
    <Layout>
      {/* ============= HERO with pattern overlay ============= */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={insightTehran} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-primary/50" />
          <div className="absolute inset-0 opacity-15">
            <img src={patternBg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative section-padding pb-20 md:pb-28 w-full">
          <div className="section-container">
            <motion.div initial="hidden" animate="visible" className="max-w-4xl">
              <motion.span variants={fadeUp} custom={0} className="section-label text-sand">The Firm</motion.span>
              <motion.h1 variants={fadeUp} custom={1} className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground leading-[1.05] tracking-tight">
                Built for Iran's complexity.<br />
                <span className="italic font-light text-sand">Delivered to global standards</span>.
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="mt-8 text-lg md:text-xl text-primary-foreground/75 font-sans leading-relaxed max-w-2xl">
                Arad Advisory is a boutique firm that helps international businesses understand, enter, and operate in the Iranian market.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Floating stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <div className="section-container section-padding">
            <div className="grid grid-cols-4 bg-warm-white shadow-editorial -mb-12 relative z-10">
              {firmStats.map((s, i) => (
                <div key={s.label} className={`px-6 py-8 text-center ${i > 0 ? "border-l border-border" : ""}`}>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="text-3xl md:text-4xl font-serif font-medium text-primary"
                  />
                  <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============= NARRATIVE ============= */}
      <section className="section-padding pt-32 md:pt-40 pb-24 md:pb-32 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-label">About Us</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                More than a consultancy.<br />
                <span className="italic font-light">A bridge</span>.
              </h2>
              <div className="editorial-line my-8" />
              <p className="text-sm font-sans text-muted-foreground leading-relaxed italic">
                Founded in Tehran. Operating across three continents.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg font-sans text-charcoal leading-relaxed">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-semibold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                Arad Advisory was founded to fill a gap that most international firms face when looking at Iran: the distance between reading about a market and actually being able to engage with it.
              </p>
              <p>
                We are not a large institution. We are a tight, senior team with direct roots in Iran and a carefully cultivated network across sectors, cities, and institutions. Our value lies in the quality of our access, the reliability of our judgment, and our ability to move between cultures and business norms with fluency.
              </p>
              <p>
                Every engagement is scoped around the client's real objectives — whether that means a focused research mandate, a partner identification process, a market entry plan, or ongoing local coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= QUOTE DIVIDER ============= */}
      <SectionDivider
        quote="The distance between reading about a market and being able to engage with it — that is the gap we close."
      />

      {/* ============= TEAM — Editorial gallery ============= */}
      <section className="section-padding py-24 md:py-32 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="section-label">The Team</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
                Senior people.<br />
                <span className="italic font-light">Direct involvement</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed">
                Every mandate is led personally by one of our partners. We keep the firm intentionally small so that our most experienced people remain on the work — not behind it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
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
                  <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
                  <div className="absolute top-4 left-4 text-[10px] font-sans uppercase tracking-[0.2em] text-primary-foreground bg-primary/80 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    0{i + 1}
                  </div>
                </div>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">{member.role}</p>
                <h3 className="text-xl font-serif font-semibold text-primary leading-snug">{member.name}</h3>
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">{member.bio}</p>
                <p className="mt-4 text-[10px] font-sans uppercase tracking-[0.18em] text-muted-foreground/70">{member.based}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border max-w-3xl">
            <p className="text-base font-sans text-muted-foreground italic leading-relaxed">
              Beyond the partner team, we draw on a trusted network of in-country specialists, sector advisors, and on-the-ground operators — engaged selectively, mandate by mandate.
            </p>
          </div>
        </div>
      </section>

      {/* ============= PARALLAX BAND ============= */}
      <ParallaxBand
        image={heroBazaar}
        alt="Iranian commerce and human relationships"
        height="min-h-[50vh]"
        overlay="gradient"
      >
        <div className="max-w-2xl">
          <p className="section-label text-sand mb-6">Our Network</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary-foreground leading-[1.2] tracking-tight">
            Built over years of <span className="italic text-sand">real commercial engagement</span>. Not borrowed, not outsourced.
          </p>
        </div>
      </ParallaxBand>

      {/* ============= APPROACH — Visual Cards ============= */}
      <section id="approach" className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="max-w-3xl mb-16">
            <span className="section-label">Our Approach</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
              Grounded in practice,<br />
              <span className="italic font-light">not theory</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-warm-white p-10 md:p-14 hover:bg-stone-light transition-colors relative overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 text-[140px] font-serif font-light text-sand/10 leading-none select-none">
                  {item.num}
                </span>
                <div className="relative">
                  <item.icon className="w-6 h-6 text-sand mb-6" strokeWidth={1.4} />
                  <span className="text-[10px] font-sans tracking-[0.25em] text-sand">{item.num}</span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-primary mb-4 leading-tight">{item.title}</h3>
                  <p className="text-base font-sans text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHY IRAN — Cinematic full ============= */}
      <section id="why-iran" className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={heroIran} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="relative section-padding py-24 md:py-32 text-primary-foreground">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <span className="section-label text-sand">Why Iran</span>
                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.1] tracking-tight">
                  A market of scale,<br />
                  depth,<br />
                  <span className="italic font-light text-sand">and untapped potential</span>.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-base md:text-lg font-sans text-primary-foreground/75 leading-relaxed">
                <p>
                  Iran is one of the largest economies in the Middle East and Western Asia — with a population of over 85 million, a young and educated workforce, and a diversified industrial base spanning petrochemicals, automotive, construction, agriculture, IT, and consumer goods.
                </p>
                <p>
                  It is also one of the most complex markets to approach from the outside. Regulatory frameworks shift, information is fragmented, and trusted access is hard to build without local credibility.
                </p>
                <p>
                  For companies willing to look past the noise, Iran offers genuine commercial opportunities — but only when approached with local knowledge, patience, and the right partners on the ground.
                </p>

                {/* Inline metrics */}
                <div className="pt-6 grid grid-cols-3 gap-6 border-t border-primary-foreground/15">
                  <div>
                    <AnimatedCounter value={85} suffix="m+" className="text-3xl md:text-4xl font-serif font-medium text-sand" />
                    <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.18em] text-primary-foreground/55">Population</p>
                  </div>
                  <div>
                    <span className="text-3xl md:text-4xl font-serif font-medium text-sand">G20</span>
                    <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.18em] text-primary-foreground/55">Economy by PPP</p>
                  </div>
                  <div>
                    <AnimatedCounter value={16} className="text-3xl md:text-4xl font-serif font-medium text-sand" />
                    <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.18em] text-primary-foreground/55">Bordering markets</p>
                  </div>
                </div>

                <Link to="/sectors" className="inline-flex items-center gap-3 text-sm font-sans font-medium text-sand mt-10 tracking-[0.1em] uppercase border-b border-sand pb-1 hover:gap-5 transition-all">
                  Explore Our Sector Coverage <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="section-padding py-24 md:py-32 bg-warm-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Initial Conversation</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-[1.1] tracking-tight">
              Interested in learning more<br />
              <span className="italic font-light">about how we work</span>?
            </h2>
            <p className="mt-8 text-lg font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Initial conversations are confidential and complimentary. We'll listen first, and share an honest read on whether we're the right fit.
            </p>
            <div className="mt-12 inline-flex flex-col items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-sans font-medium tracking-[0.15em] uppercase hover:bg-navy-light transition-all">
                Request a Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-xs font-sans text-muted-foreground tracking-[0.2em] uppercase">
                Typical response · within one business day
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
