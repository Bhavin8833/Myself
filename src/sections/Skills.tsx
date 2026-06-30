import { motion } from "framer-motion";
import { useState } from "react";
import { Database, Calculator, BarChart, PenTool, Box, Hexagon, FileText, LineChart, Brush } from "lucide-react";
import { Reveal, SplitText } from "@/components/Reveal";

const ring = [
  { label: "Power BI", value: 92 },
  { label: "SQL & Analytics", value: 88 },
  { label: "Digital Marketing", value: 90 },
  { label: "AI Tool Dev", value: 87 },
  { label: "Web Development", value: 85 },
  { label: "3D Modeling / CAD", value: 84 },
];

const cloud = [
  "HTML", "CSS", "JavaScript", "GitHub & GitHub Pages", "API Integration",
  "UI/UX Design", "Prompt Engineering", "AI Tool Development", 
  "Social Media Design", "Event Planning", "Business Communication", 
  "Storytelling", "Brand Identity", "SQL"
];

const softwareSkills = [
  { name: "Photoshop", iconUrl: "/logos/photoshop.png?v=2", Fallback: PenTool },
  { name: "Illustrator", iconUrl: "/logos/illlustrtor.png?v=2", Fallback: Brush },
  { name: "Fusion 360", iconUrl: "/logos/Fusion360_Logo.svg.webp?v=2", Fallback: Box },
  { name: "MS Office", iconUrl: "/logos/Msoffice.jpg?v=2", Fallback: FileText },
  { name: "Power BI", iconUrl: "/logos/Power Bi.jpg?v=2", Fallback: BarChart },
  { name: "MS Access", iconUrl: "/logos/Msasees.jpg?v=2", Fallback: Database },
  { name: "SolidWorks", iconUrl: "/logos/solidworks.png?v=2", Fallback: Hexagon },
  { name: "Miracle (Accounting)", iconUrl: "/logos/mirecle.jpg?v=2", Fallback: Calculator },
  { name: "SPSS", iconUrl: "/logos/spss.jpg?v=2", Fallback: LineChart },
];

function SoftwareCard({ name, iconUrl, Fallback }: any) {
  const [error, setError] = useState(false);

  return (
    <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:bg-primary/5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden p-2">
        {iconUrl && !error ? (
          <img src={iconUrl} alt={name} className="h-full w-full object-contain mix-blend-multiply" onError={() => setError(true)} />
        ) : (
          <Fallback className="h-8 w-8 text-primary" />
        )}
      </div>
      <span className="font-medium text-foreground">{name}</span>
    </div>
  );
}

function Ring({ label, value }: { label: string; value: number }) {
  const c = 2 * Math.PI * 42;
  return (
    <div className="glass flex flex-col items-center rounded-2xl p-6">
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle cx="50" cy="50" r="42" stroke="oklch(0.15 0.02 240 / 8%)" strokeWidth="6" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            stroke="url(#g)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 290)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-xl">
          {value}%
        </div>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
              Stack
            </h2>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              The toolkit I ship with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {ring.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <Ring {...s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 mb-8 max-w-2xl">
          <h3 className="font-display text-2xl font-semibold uppercase tracking-wider text-primary">
            Software Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {softwareSkills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <SoftwareCard {...s} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {cloud.map((t, i) => (
              <motion.span
                key={t}
                whileHover={{ y: -3, scale: 1.05 }}
                style={{
                  fontSize: `${0.85 + ((i * 17) % 7) * 0.08}rem`,
                }}
                className="glass cursor-default rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}