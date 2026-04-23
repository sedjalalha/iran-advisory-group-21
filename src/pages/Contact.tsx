import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Lock, Clock, FileText } from "lucide-react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { trackEvent } from "@/lib/analytics";
import { CALENDLY_URL } from "@/lib/contact-links";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const reassurances = [
  { icon: Lock, title: "Strictly confidential", text: "Inquiries are handled by partners only. NDAs available before any substantive discussion." },
  { icon: Clock, title: "Response within one business day", text: "A senior member of the team will reply personally — not an automated acknowledgement." },
  { icon: FileText, title: "Written scope, no surprises", text: "If we proceed, we provide a clear written brief before any work begins." },
];

const offices = [
  { city: "Tehran", role: "Headquarters", address: "No. 12, 4th Floor, Golestan Complex, Valiasr Ave, Tehran 15146, Iran", note: "Primary operating base for delivery and in-country access" },
  { city: "Muscat", role: "Regional Office", address: "Al Khuwair 166, Muscat, Sultanate of Oman", note: "Cross-border coordination hub for the GCC region" },
  { city: "Turin", role: "European Office", address: "Via Genoa 15, 10126 Turin, Italy", note: "Engagement hub for EU and UK clients" },
];

const Contact = () => {
  const location = useLocation();
  const formStartedRef = useRef(false);
  const submittedRef = useRef(false);
  const abandonTrackedRef = useRef(false);
  const completedFieldsRef = useRef(new Set<string>());
  const lastTouchedFieldRef = useRef<string | null>(null);
  const pageEnterTimeRef = useRef(Date.now());
  const source =
    new URLSearchParams(location.search).get("source") ||
    sessionStorage.getItem("consultation_source") ||
    "direct";

  const emitAbandonIfNeeded = (reason: "route_change" | "page_unload") => {
    if (!formStartedRef.current || submittedRef.current || abandonTrackedRef.current) return;

    abandonTrackedRef.current = true;
    trackEvent("consultation_form_abandoned", {
      source,
      reason,
      completed_fields: completedFieldsRef.current.size,
      last_field: lastTouchedFieldRef.current || "unknown",
      time_on_page_seconds: Math.round((Date.now() - pageEnterTimeRef.current) / 1000),
    });
  };

  const handleFormStart = (fieldName: string) => {
    lastTouchedFieldRef.current = fieldName;
    if (formStartedRef.current) return;

    formStartedRef.current = true;
    trackEvent("consultation_form_started", {
      source,
      first_field: fieldName,
    });
  };

  const handleFieldCompleted = (fieldName: string, value: string) => {
    lastTouchedFieldRef.current = fieldName;
    if (!value.trim() || completedFieldsRef.current.has(fieldName)) return;

    completedFieldsRef.current.add(fieldName);
    trackEvent("consultation_field_completed", {
      source,
      field: fieldName,
      completed_fields: completedFieldsRef.current.size,
    });
  };

  useEffect(() => {
    trackEvent("consultation_page_viewed", {
      source,
      page_path: location.pathname,
    });
  }, [location.pathname, source]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      emitAbandonIfNeeded("page_unload");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      emitAbandonIfNeeded("route_change");
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={fadeUp} custom={0} className="section-label text-sand">Initial Consultation</motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-primary-foreground leading-[1.15]">
              A discreet first conversation.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-primary-foreground/70 font-sans leading-relaxed max-w-xl">
              We welcome confidential initial discussions regarding potential work related to Iran — without obligation and with full discretion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Reassurances strip */}
      <section className="bg-primary border-t border-primary-foreground/10">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            {reassurances.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="px-6 py-10 md:first:pl-0 md:last:pr-0"
              >
                <r.icon className="w-5 h-5 text-sand mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-serif font-semibold text-primary-foreground mb-2">{r.title}</h3>
                <p className="text-sm font-sans text-primary-foreground/60 leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + direct */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Direct contact */}
            <div className="lg:col-span-5">
              <span className="section-label">Reach Us Directly</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-semibold text-primary leading-tight mb-4">
                Confidential initial conversations, without obligation.
              </h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-10">
                Whether you are exploring the Iranian market for the first time or evaluating a specific opportunity, we are happy to listen and advise on next steps.
              </p>

              <div className="mt-2 border-t border-border/80">
                <div className="border-b border-border py-6 flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-sand shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-1">Email</span>
                    <a href="mailto:partners@aradadvisory.com" className="text-sm font-sans text-primary hover:text-navy-light transition-colors">partners@aradadvisory.com</a>
                  </div>
                </div>
                <div className="border-b border-border py-6 flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-sand shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-1">Phone</span>
                    <span className="text-sm font-sans text-primary">+971 4 xxx xxxx</span>
                    <p className="text-xs font-sans text-muted-foreground mt-1">By appointment, partner-direct.</p>
                  </div>
                </div>
                <div className="border-b border-border py-6 flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-sand shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-1">Coordination Hubs</span>
                    <div className="text-sm font-sans text-primary">Tehran · Dubai · London</div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xs font-sans text-muted-foreground leading-relaxed tracking-wide">
                All inquiries are treated with strict confidentiality. We are happy to execute mutual non-disclosure agreements before any substantive discussion.
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-warm-white border border-border/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 md:p-8 lg:p-10">
              <div className="mb-8 border-b border-border/70 pb-6">
                <span className="section-label">Request a Consultation</span>
                <h3 className="mt-4 text-3xl font-serif font-semibold text-primary mb-3">Tell us a little about your inquiry.</h3>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">
                  A brief overview is enough to start. A senior member of our team will respond within one business day.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent("consultation_path_selected", {
                      source,
                      path: "request_call_calendly",
                    })
                  }
                  className="mt-5 inline-flex items-center gap-2 border border-primary/30 bg-primary text-primary-foreground px-5 py-3 text-xs font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors"
                >
                  Request a Call (Calendly) <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  submittedRef.current = true;
                  trackEvent("consultation_form_submit_clicked", {
                    source,
                    completed_fields: completedFieldsRef.current.size,
                    time_on_page_seconds: Math.round((Date.now() - pageEnterTimeRef.current) / 1000),
                  });
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">Full Name</label>
                    <input
                      name="full_name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all"
                      placeholder="Your name"
                      onFocus={() => handleFormStart("full_name")}
                      onBlur={(e) => handleFieldCompleted("full_name", e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">Company</label>
                    <input
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all"
                      placeholder="Your organization"
                      onFocus={() => handleFormStart("company")}
                      onBlur={(e) => handleFieldCompleted("company", e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all"
                      placeholder="your@email.com"
                      onFocus={() => handleFormStart("email")}
                      onBlur={(e) => handleFieldCompleted("email", e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">Country / Location</label>
                    <input
                      name="country_location"
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all"
                      placeholder="Where you're based"
                      onFocus={() => handleFormStart("country_location")}
                      onBlur={(e) => handleFieldCompleted("country_location", e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">Area of Interest</label>
                  <select
                    name="area_of_interest"
                    className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all"
                    onFocus={() => handleFormStart("area_of_interest")}
                    onChange={(e) => handleFieldCompleted("area_of_interest", e.currentTarget.value)}
                  >
                    <option value="">Select an area</option>
                    <option value="market-intelligence">Market Intelligence</option>
                    <option value="market-entry">Market Entry</option>
                    <option value="partner-search">Partner & Vendor Search</option>
                    <option value="business-development">Business Development</option>
                    <option value="local-coordination">Local Coordination</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground block mb-2">A Few Words on Your Inquiry</label>
                  <textarea
                    name="inquiry_summary"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border/80 text-sm font-sans text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sand/60 focus:border-sand transition-all resize-none"
                    placeholder="Briefly describe your objectives and how we might be of assistance."
                    onFocus={() => handleFormStart("inquiry_summary")}
                    onBlur={(e) => handleFieldCompleted("inquiry_summary", e.currentTarget.value)}
                  />
                </div>
                <div className="pt-2">
                  <button type="submit" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium tracking-[0.1em] uppercase hover:bg-navy-light transition-colors">
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-4 text-xs font-sans text-muted-foreground tracking-wide">
                    By submitting, you agree to be contacted privately by a partner. We do not store inquiries on shared platforms.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding py-20 md:py-28 bg-stone-light">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <span className="section-label">Coordination Hubs</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-primary leading-tight">
              Three cities. One coordinated team.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-b md:border-b-0 md:border-r border-border last:border-r-0 py-8 md:py-10 md:px-8 md:first:pl-0"
              >
                <MapPin className="w-4 h-4 text-sand mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-semibold text-primary">{o.city}</h3>
                <p className="mt-2 text-sm font-sans text-charcoal">{o.role}</p>
                <p className="mt-3 text-xs font-sans text-muted-foreground tracking-wide leading-relaxed">{o.address}</p>
                <p className="mt-2 text-xs font-sans text-muted-foreground/60 tracking-wide">{o.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
