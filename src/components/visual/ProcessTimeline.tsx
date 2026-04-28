import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      {/* Desktop horizontal connecting line */}
      <div className="hidden lg:block absolute top-[34px] left-0 right-0 h-px bg-border">
        <motion.div
          className="h-full bg-sand origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* node */}
            <div className="relative flex items-center mb-8 lg:block">
              <motion.div
                className="relative z-10 w-[68px] h-[68px] rounded-full bg-warm-white border border-sand flex items-center justify-center shadow-[0_8px_30px_-12px_hsl(var(--navy)/0.25)]"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.6, type: "spring", stiffness: 120 }}
              >
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.4} />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-sans font-medium tracking-wider px-2 py-0.5">
                  {step.num}
                </span>
              </motion.div>
            </div>

            <div className="lg:pr-6">
              {step.duration && (
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-sand mb-2">
                  {step.duration}
                </p>
              )}
              <h3 className="text-xl font-serif font-semibold text-primary mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
