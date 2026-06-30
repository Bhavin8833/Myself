import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import portrait from "@/assets/bhavin-portrait.jpg";
import resumePdf from "@/assets/New CV copy 2026.pdf";
import { MagneticButton } from "@/components/MagneticButton";

const ROLES = [
  "Business Analyst",
  "Digital Marketer",
  "Web Developer",
  "AI Builder",
  "Power BI Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient-brand">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-1 animate-pulse bg-primary align-middle" />
    </span>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const rx = useTransform(sy, [-200, 200], [8, -8]);
  const ry = useTransform(sx, [-200, 200], [-8, 8]);
  const tx = useTransform(sx, [-200, 200], [-15, 15]);
  const ty = useTransform(sy, [-200, 200], [-15, 15]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Blobs */}
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="animate-blob absolute left-[10%] top-[20%] size-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="animate-blob absolute right-[5%] top-[10%] size-[480px] rounded-full bg-accent/15 blur-[140px] [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-[5%] left-[40%] size-[360px] rounded-full bg-primary/8 blur-[120px] [animation-delay:-12s]" />
      </div>

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
            Available for new projects
          </motion.div>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            {["Hi,", "I'm", "Bhavin", "Parmar"].map((w, i) => (
              <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.6 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {i === 3 ? <span className="text-gradient-brand">{w}</span> : w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-6 font-display text-2xl text-muted-foreground md:text-3xl"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I design data-driven products and ship marketing systems that move
            numbers. PGDM in Marketing & Business Analytics at SKIPS B-School, founder of Parmar Labs,
            building at the intersection of analytics, AI and the web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-grad-brand px-7 py-3.5 text-sm font-medium text-primary-foreground glow-blue"
            >
              View Portfolio
            </MagneticButton>
            <MagneticButton
              href={resumePdf}
              download="Bhavin_Parmar_Resume.pdf"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              <Download size={16} /> Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(30px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ delay: 1.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX: rx, rotateY: ry, perspective: 1000 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <motion.div
            style={{ x: tx, y: ty }}
            className="animate-float-slow relative h-full w-full overflow-hidden rounded-[2rem] glass-strong shadow-[var(--shadow-elevated)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            <img
              src={portrait}
              alt="Portrait of Bhavin Parmar"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" />
          </motion.div>
          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 text-sm md:block"
          >
            <div className="text-xs text-muted-foreground">Power BI</div>
            <div className="font-display text-lg">Dashboards ⚡</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="glass absolute -right-4 bottom-10 hidden rounded-2xl px-4 py-3 text-sm md:block"
          >
            <div className="text-xs text-muted-foreground">Parmar Labs</div>
            <div className="font-display text-lg">AI · Web · Growth</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-foreground/15 pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-primary"
          />
        </div>
        <span className="flex items-center gap-1">
          Scroll <ArrowDown size={12} />
        </span>
      </motion.a>
    </section>
  );
}