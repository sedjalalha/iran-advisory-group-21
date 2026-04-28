import { useState } from "react";
import { motion } from "framer-motion";

interface City {
  name: string;
  role: string;
  /** percentage from left (0-100) */
  x: number;
  /** percentage from top (0-100) */
  y: number;
  primary?: boolean;
}

interface IranMapProps {
  cities: City[];
  className?: string;
}

/**
 * Stylized SVG outline of Iran with plotted city markers.
 * Path is a simplified silhouette — refined to feel editorial, not literal.
 */
const IRAN_PATH =
  "M88,38 L120,28 L155,22 L195,20 L235,28 L278,42 L318,55 L355,72 L395,92 L432,118 L460,148 L478,182 L488,218 L482,252 L460,282 L432,308 L398,328 L362,342 L325,348 L288,345 L252,335 L218,318 L188,295 L162,268 L142,238 L128,205 L120,170 L115,138 L110,108 L102,80 L92,55 Z";

const IranMap = ({ cities, className = "" }: IranMapProps) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto"
        aria-label="Map of Iran with operating cities"
        role="img"
      >
        <defs>
          <linearGradient id="iranFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--navy))" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.10" />
          </linearGradient>
          <pattern id="dotGrid" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="hsl(var(--navy))" fillOpacity="0.15" />
          </pattern>
        </defs>

        {/* dot grid background */}
        <rect width="600" height="400" fill="url(#dotGrid)" />

        {/* Iran silhouette */}
        <motion.path
          d={IRAN_PATH}
          fill="url(#iranFill)"
          stroke="hsl(var(--navy))"
          strokeOpacity="0.35"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />

        {/* connecting lines from Tehran (primary) to others */}
        {cities.map((city, i) => {
          const tehran = cities.find((c) => c.primary);
          if (!tehran || city.primary) return null;
          const x1 = (tehran.x / 100) * 600;
          const y1 = (tehran.y / 100) * 400;
          const x2 = (city.x / 100) * 600;
          const y2 = (city.y / 100) * 400;
          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--sand))"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              strokeOpacity={active === i ? 0.9 : 0.4}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
            />
          );
        })}

        {/* city markers */}
        {cities.map((city, i) => {
          const cx = (city.x / 100) * 600;
          const cy = (city.y / 100) * 400;
          const isActive = active === i;
          return (
            <g
              key={city.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
            >
              {city.primary && (
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="14"
                  fill="hsl(var(--sand))"
                  fillOpacity="0.18"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                />
              )}
              <motion.circle
                cx={cx}
                cy={cy}
                r={city.primary ? 5 : 3.5}
                fill={city.primary ? "hsl(var(--sand))" : "hsl(var(--navy))"}
                stroke="hsl(var(--cream))"
                strokeWidth="1.2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: isActive ? 1.4 : 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              />
              <text
                x={cx + 9}
                y={cy + 3}
                fill="hsl(var(--navy))"
                fontSize="9"
                fontFamily="Inter, sans-serif"
                fontWeight={city.primary ? 600 : 500}
                opacity={isActive || city.primary ? 1 : 0.7}
                style={{ letterSpacing: "0.05em" }}
              >
                {city.name.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* legend */}
      <div className="mt-6 flex flex-wrap items-center gap-6 text-[10px] font-sans uppercase tracking-[0.18em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sand" />
          Primary base
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Active city
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-px border-t border-dashed border-sand" />
          Coordination corridor
        </div>
      </div>
    </div>
  );
};

export default IranMap;
