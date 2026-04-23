import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import insightTehran from "@/assets/insight-tehran.jpg";
import insightHandshake from "@/assets/insight-handshake.jpg";
import insightDesk from "@/assets/insight-desk.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const featured = {
  date: "March 2026",
  category: "Market Overview",
  readTime: "12 min read",
  title: "Navigating Iran's Technology Ecosystem: What Foreign Companies Should Know",
  excerpt: "A current read on Iran's tech sector — from the startup ecosystem and enterprise software adoption to the realistic outsourcing potential for European and regional clients.",
  image: insightTehran,
};

const articles = [
  {
    date: "February 2026",
    category: "Trade & Commerce",
    readTime: "9 min read",
    title: "Cross-Border Trade Corridors: Iran's Position in Regional Commerce",
    excerpt: "Iran sits at the crossroads of major trade routes connecting Central Asia, the Gulf, and South Asia. Understanding these corridors is key for international traders.",
    image: insightHandshake,
  },
  {
    date: "January 2026",
    category: "Advisory Perspective",
    readTime: "7 min read",
    title: "Partner Selection in Iran: Beyond the Introduction",
    excerpt: "Finding the right local partner is critical — but the process requires more than a list of names. Here's how we approach partner search and due diligence.",
    image: insightDesk,
  },
  {
    date: "December 2025",
    category: "Sector Brief",
    readTime: "8 min read",
    title: "Agricultural Exports from Iran: Opportunities in Saffron, Pistachios, and Beyond",
    excerpt: "Iran is a global leader in several high-value agricultural commodities. We examine the export landscape and sourcing considerations for international buyers.",
    image: insightTehran,
  },
  {
    date: "November 2025",
    category: "Market Note",
    readTime: "6 min read",
    title: "Reading the Iranian Consumer: Why Official Data Tells Half the Story",
    excerpt: "On the divergence between official statistics and the picture you build from in-market conversations — and how foreign operators can avoid the gap.",
    image: insightDesk,
  },
  {
    date: "October 2025",
    category: "Briefing",
    readTime: "10 min read",
    title: "Cross-Border Payments in 2025: A Working Playbook",
    excerpt: "Mapping the operational mechanics that foreign companies are actually using to settle commercial flows linked to Iran.",
    image: insightHandshake,
  },
];

const categories = ["All", "Market Overview", "Advisory Perspective", "Trade & Commerce", "Sector Brief", "Market Note", "Briefing"];

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

      {/* Featured */}
      <section className="section-padding py-20 md:py-24 bg-warm-white">
        <div className="section-container">
          <span className="section-label block mb-10">Featured</span>
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group cursor-pointer"
          >
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-5">
                <span className="text-sand">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight group-hover:text-navy-light transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-base font-sans text-muted-foreground leading-relaxed max-w-xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary mt-8 tracking-wide border-b border-sand pb-1 group-hover:text-navy-light transition-colors">
                Read the full note <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Filter / All articles */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-label">Library</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
                All notes & briefings.
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={`text-xs font-sans uppercase tracking-[0.15em] pb-1 transition-colors ${
                    i === 0
                      ? "text-primary border-b border-sand"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="border-b border-border py-10 md:py-12 group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
                  <div className="lg:col-span-3">
                    <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">{article.category}</div>
                    <div className="text-xs font-sans text-muted-foreground">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary leading-tight group-hover:text-navy-light transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-[0.15em] text-primary mt-4 group-hover:text-navy-light transition-colors">
                      Read note <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe — editorial */}
      <section className="section-padding py-20 md:py-28 bg-warm-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="section-label">Direct to Your Inbox</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
                A short, considered note. A few times a year.
              </h2>
              <p className="mt-5 text-base font-sans text-muted-foreground max-w-xl leading-relaxed">
                We write only when there is something genuinely worth saying about the Iranian market. No newsletters, no marketing — just the briefings we'd want to receive ourselves.
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors w-full justify-center">
                Request to Subscribe <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-xs font-sans text-muted-foreground text-center tracking-wide">
                Distribution kept small and intentional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
