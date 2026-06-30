import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Reveal, SplitText } from "@/components/Reveal";
import resumePdf from "@/assets/New CV copy 2026.pdf";

const blocks = [
  {
    h: "Experience",
    items: [
      { t: "Digital Marketing Intern — NBE Motor Pvt Ltd", s: "May 2026 — Jul 2026", d: "Managed social content, designed visual assets using Canva, optimized GMB listings, set up and monitored Google & Facebook Ads." },
      { t: "Business Operations — Parmar Auto House", s: "2024 — 2025", d: "Coordinated sales, tracked inventory for 100+ agriculture spare parts, and helped grow inquiries by 10-15%." },
      { t: "Marketing Head — Parmar Auto House", s: "2023 — 2025", d: "Orchestrated local promotional events and marketing campaigns to build brand visibility and outreach." },
    ],
  },
  {
    h: "Education",
    items: [
      { t: "PGDM — Marketing & Business Analytics", s: "2025 — 2027", d: "St. Kabir Institute of Professional Studies (SKIPS), Ahmedabad. Focused on marketing strategy & business analytics." },
      { t: "Bachelor Of Commerce (B.Com)", s: "2021 — 2024", d: "Gujarat University, Ahmedabad. Commerce, finance, and accounting basics." },
    ],
  },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-20 md:py-32 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
            Resume
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            A snapshot of the story so far.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 80 }}
              style={{ perspective: 1200 }}
              className="glass-strong rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center justify-between border-b border-foreground/10 pb-6">
                <div>
                  <div className="font-display text-2xl">Bhavin Parmar</div>
                  <div className="text-sm text-muted-foreground">
                    Business Analyst · Marketer · Builder
                  </div>
                </div>
                <FileText className="text-primary" />
              </div>
              {blocks.map((b) => (
                <div key={b.h} className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-primary">{b.h}</div>
                  <div className="mt-3 space-y-4">
                    {b.items.map((i) => (
                      <div key={i.t}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <div className="font-display text-base">{i.t}</div>
                          <div className="text-xs text-muted-foreground">{i.s}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">{i.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="font-display text-2xl">Want the full version?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Grab the detailed PDF with every project, tool and metric — or
                  preview it inline before downloading.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={resumePdf}
                  download="Bhavin_Parmar_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-grad-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-blue"
                >
                  <Download size={16} /> Download CV (PDF)
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium"
                >
                  <FileText size={16} /> View Full Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}