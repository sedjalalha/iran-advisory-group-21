import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBandProps {
  image: string;
  alt: string;
  height?: string;
  overlay?: "dark" | "light" | "gradient" | "none";
  children?: ReactNode;
  align?: "center" | "left" | "right";
}

const ParallaxBand = ({
  image,
  alt,
  height = "min-h-[60vh]",
  overlay = "gradient",
  children,
  align = "left",
}: ParallaxBandProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  const overlayClass = {
    dark: "bg-primary/70",
    light: "bg-warm-white/40",
    gradient: "bg-gradient-to-t from-primary/85 via-primary/40 to-primary/20",
    none: "",
  }[overlay];

  const alignClass = {
    center: "items-center justify-center text-center",
    left: "items-end justify-start",
    right: "items-end justify-end text-right",
  }[align];

  return (
    <section
      ref={ref}
      className={`relative w-full ${height} overflow-hidden flex ${alignClass}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlayClass}`} />
      )}
      {children && (
        <div className="relative z-10 section-padding section-container w-full pb-16 md:pb-24">
          {children}
        </div>
      )}
    </section>
  );
};

export default ParallaxBand;
