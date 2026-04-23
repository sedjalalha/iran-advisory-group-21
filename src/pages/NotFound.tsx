import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding py-32 md:py-44 bg-warm-white">
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-sand">Error 404</span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary leading-[1.1]">
              The page you were looking for isn't here.
            </h1>
            <div className="editorial-line my-10" />
            <p className="text-base md:text-lg font-sans text-charcoal leading-relaxed max-w-xl">
              The link may have moved, or the page may no longer exist. If you reached this from elsewhere, we'd be glad to point you in the right direction.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors">
                Return Home <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-border text-primary px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:border-sand hover:text-navy-light transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
