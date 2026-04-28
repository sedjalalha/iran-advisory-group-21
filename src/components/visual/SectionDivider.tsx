import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionDividerProps {
  /** Optional subtle quote / phrase */
  quote?: string;
  attribution?: string;
}

/**
 * A breathing visual divider for between text-heavy sections.
 * Geometric, refined — uses motion to add subtle premium feel.
 */
const SectionDivider = ({ quote, attribution }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0.5]);

  if (!quote) {
    return (
      <div ref={ref} className="bg-warm-white py-16 md:py-24">
        <div className="section-container section-padding flex justify-center">
          <motion.div
            style={{ scaleX: lineScale }}
            className="h-px w-32 bg-sand origin-center"
          />
        </div>
      </div>
    );
  }

  return (
    <section ref={ref} className="bg-warm-white py-20 md:py-32">
      <div className="section-container section-padding">
        <motion.div
          style={{ opacity }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            style={{ scaleX: lineScale }}
            className="h-px w-16 bg-sand mx-auto mb-10 origin-center"
          />
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-primary leading-[1.3] tracking-tight italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
          {attribution && (
            <p className="mt-8 text-[10px] font-sans uppercase tracking-[0.25em] text-muted-foreground">
              — {attribution}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionDivider;
