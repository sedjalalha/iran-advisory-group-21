import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  href?: string;
  index?: number;
}

const ServiceCard = ({
  num,
  icon: Icon,
  title,
  description,
  image,
  href,
  index = 0,
}: ServiceCardProps) => {
  const Wrapper: any = href ? Link : "div";
  const wrapperProps = href ? { to: href } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
    >
      <Wrapper
        {...wrapperProps}
        className="group relative block overflow-hidden bg-primary aspect-[4/5] cursor-pointer"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30 group-hover:from-primary/95 transition-colors duration-700" />
        </div>

        {/* top meta */}
        <div className="absolute top-0 left-0 right-0 p-7 md:p-8 flex items-center justify-between">
          <span className="text-[10px] font-sans tracking-[0.25em] text-sand">
            {num}
          </span>
          <Icon className="w-5 h-5 text-sand" strokeWidth={1.4} />
        </div>

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <div className="w-10 h-px bg-sand mb-5 group-hover:w-20 transition-all duration-500" />
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary-foreground leading-snug mb-3">
            {title}
          </h3>
          <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed line-clamp-3 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {description}
          </p>
          {href && (
            <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-sand">
              Learn More <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default ServiceCard;
