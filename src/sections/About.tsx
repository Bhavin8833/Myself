import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-visual.jpg";
import portrait from "@/assets/bhavin-portrait.jpg";
import { Reveal, SplitText } from "@/components/Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const timeline = [
  { year: "2025 — 2027", title: "PGDM — Marketing & Business Analytics", place: "St. Kabir Institute of Professional Studies (Skips B School), Ahmedabad" },
  { year: "May 2026 — Jul 2026", title: "Digital Marketing Intern", place: "NBE Motor Pvt Ltd" },
  { year: "2024 — 2025", title: "Business Operations", place: "Parmar Auto House, Botad" },
  { year: "2021 — 2024", title: "Bachelor Of Commerce (B.Com)", place: "Gujarat University, Ahmedabad" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-strong">
            <img
              src={portrait}
              alt="Bhavin Parmar"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <img
              src={aboutImg}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass absolute -bottom-6 -right-6 hidden rounded-2xl p-5 md:block"
          >
            <div className="font-display text-3xl text-gradient-brand">3+ yrs</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Building & shipping
            </div>
          </motion.div>
        </Reveal>

        <div>
          <div className="mb-12 max-w-3xl">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
              About
            </h2>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              A builder who speaks data, marketing & code.
            </p>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I'm Bhavin — pursuing PGDM in Marketing & Business Analytics at SKIPS B-School. I treat
              Power BI, SQL, AI and the web as one continuous toolkit. Through
              Parmar Labs, I build real-world tech products and aim to deliver data-driven,
              impactful business solutions.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Power BI", "SQL", "AI & Automation", "Digital Marketing", "Web Dev", "Parmar Labs"].map((t) => (
                <li
                  key={t}
                  className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { v: 6, s: "+", l: "Projects" },
                { v: 18, s: "+", l: "Skills" },
                { v: 5, s: "", l: "Certifications" },
                { v: 3, s: "+", l: "Years" },
              ].map((c) => (
                <div key={c.l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-3xl text-gradient-brand md:text-4xl">
                    <Counter to={c.v} suffix={c.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {c.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <h3 className="font-display text-xl">Education & Timeline</h3>
              <ol className="relative mt-6 space-y-6 border-l border-foreground/10 pl-6">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="absolute -left-[7px] mt-1.5 size-3 rounded-full bg-grad-brand glow-blue" />
                    <div className="text-xs uppercase tracking-widest text-primary">
                      {t.year}
                    </div>
                    <div className="font-display text-lg">{t.title}</div>
                    <div className="text-sm text-muted-foreground">{t.place}</div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}