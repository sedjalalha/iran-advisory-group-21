import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import patternBg from "@/assets/pattern-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={patternBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">The Firm</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              Built for Iran's complexity. Delivered to global standards.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              Arad Advisory is a boutique firm that helps international businesses understand, enter, and operate in the Iranian market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="section-label">About Us</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-primary leading-tight">
                More than a consultancy. A bridge.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base font-sans text-charcoal leading-relaxed">
              <p>
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

      <div className="section-padding"><div className="section-container divider-sand" /></div>

      {/* Approach */}
      <section id="approach" className="section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-2xl mb-16">
            <span className="section-label">Our Approach</span>
            <h2 className="mt-4 text-3xl font-serif font-semibold text-primary leading-tight">
              Grounded in practice, not theory.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: "Client-First Scoping", text: "We begin every engagement by understanding the client's stage, objectives, risk appetite, and decision-making needs. We don't impose frameworks — we build around your reality." },
              { title: "Local Network, Not Remote Research", text: "Our intelligence comes from in-country conversations, on-the-ground visits, and direct relationships — not from secondary desk research alone." },
              { title: "Structured Delivery", text: "We work with clear milestones, professional documentation, and regular reporting. Our clients receive deliverables they can act on and share with their stakeholders." },
              { title: "Confidential & Discreet", text: "Many of our clients operate in sensitive commercial or regulatory environments. Discretion is core to how we work, not an afterthought." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="editorial-line mb-6" />
                <h3 className="text-lg font-serif font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Iran */}
      <section id="why-iran" className="bg-primary section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="section-label text-sand">Why Iran</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary-foreground leading-tight">
              A market of scale, depth, and untapped potential.
            </h2>
            <div className="mt-8 space-y-6 text-base font-sans text-primary-foreground/70 leading-relaxed">
              <p>
                Iran is one of the largest economies in the Middle East and Western Asia — with a population of over 85 million, a young and educated workforce, and a diversified industrial base spanning petrochemicals, automotive, construction, agriculture, IT, and consumer goods.
              </p>
              <p>
                It is also one of the most complex markets to approach from the outside. Regulatory frameworks shift, information is fragmented, and trusted access is hard to build without local credibility.
              </p>
              <p>
                For companies willing to look past the noise, Iran offers genuine commercial opportunities — but only when approached with local knowledge, patience, and the right partners on the ground.
              </p>
            </div>
            <Link to="/sectors" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-sand hover:text-sand-light transition-colors mt-8 tracking-wide">
              Explore Our Sector Coverage <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 md:py-28 bg-cream-dark">
        <div className="section-container text-center">
          <h2 className="text-3xl font-serif font-semibold text-primary max-w-2xl mx-auto">
            Interested in learning more about how we work?
          </h2>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-sans font-medium tracking-wide hover:bg-navy-light transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
