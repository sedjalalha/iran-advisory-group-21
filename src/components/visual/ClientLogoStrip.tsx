import { motion } from "framer-motion";

/**
 * Anonymized client typology strip.
 * We do not show real client logos (confidentiality) — instead a typographic
 * marquee of client descriptors creates social proof without breaching trust.
 */

const clients = [
  "European Tech Group",
  "Gulf Family Office",
  "Russian Agri Exporter",
  "FTSE-Listed Industrial",
  "DACH SaaS Platform",
  "Asian Trade House",
  "MENA Investment Fund",
  "EU Manufacturing Group",
];

const ClientLogoStrip = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-warm-white py-10">
      <div className="section-container section-padding mb-6">
        <p className="section-label text-center">
          A sample of recent client typologies — identities held in confidence
        </p>
      </div>

      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-warm-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-warm-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="font-serif text-xl md:text-2xl text-primary/40 italic tracking-tight shrink-0"
            >
              {c}
              <span className="ml-16 text-sand/50 not-italic">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogoStrip;
