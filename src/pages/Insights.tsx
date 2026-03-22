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

const articles = [
  {
    date: "March 2026",
    category: "Market Overview",
    title: "Navigating Iran's Technology Ecosystem: What Foreign Companies Should Know",
    excerpt: "A look at the current state of Iran's tech sector — from the startup ecosystem to enterprise software adoption and outsourcing potential.",
  },
  {
    date: "February 2026",
    category: "Trade & Commerce",
    title: "Cross-Border Trade Corridors: Iran's Position in Regional Commerce",
    excerpt: "Iran sits at the crossroads of major trade routes connecting Central Asia, the Gulf, and South Asia. Understanding these corridors is key for international traders.",
  },
  {
    date: "January 2026",
    category: "Advisory Perspective",
    title: "Partner Selection in Iran: Beyond the Introduction",
    excerpt: "Finding the right local partner is critical — but the process requires more than a list of names. Here's how we approach partner search and due diligence.",
  },
  {
    date: "December 2025",
    category: "Sector Brief",
    title: "Agricultural Exports from Iran: Opportunities in Saffron, Pistachios, and Beyond",
    excerpt: "Iran is a global leader in several high-value agricultural commodities. We examine the export landscape and sourcing considerations for international buyers.",
  },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Insights</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              Perspectives on the market.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              Selected observations, analysis, and advisory perspectives from our work across the Iranian market.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="space-y-0">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="py-12 border-b border-border last:border-0 first:pt-0 group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
                  <div className="lg:col-span-3">
                    <span className="text-xs font-sans text-muted-foreground">{article.date}</span>
                    <span className="mx-2 text-border">·</span>
                    <span className="text-xs font-sans font-medium text-sand">{article.category}</span>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="text-xl md:text-2xl font-serif font-semibold text-primary leading-tight group-hover:text-navy-light transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary mt-4 group-hover:text-navy-light transition-colors tracking-wide">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark section-padding py-16">
        <div className="section-container text-center">
          <p className="text-base font-sans text-muted-foreground">
            Want to receive our insights directly?{" "}
            <Link to="/contact" className="text-primary font-medium hover:text-navy-light transition-colors">Get in touch</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
