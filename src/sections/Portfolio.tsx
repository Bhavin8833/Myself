import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import p6 from "@/assets/project-6.jpg";

import ph1 from "@/assets/PL Humanize/1.png";
import ph2 from "@/assets/PL Humanize/2.png";
import ph3 from "@/assets/PL Humanize/3.png";
import ph4 from "@/assets/PL Humanize/4.png";
import ph5 from "@/assets/PL Humanize/5.png";
import ph6 from "@/assets/PL Humanize/6.png";
import ph7 from "@/assets/PL Humanize/7.png";

import i1 from "@/assets/InvestLive/1.jpg";
import i2 from "@/assets/InvestLive/2.jpg";
import i3 from "@/assets/InvestLive/3.jpg";
import i4 from "@/assets/InvestLive/4.jpg";
import i5 from "@/assets/InvestLive/5.jpg";
import i6 from "@/assets/InvestLive/6.jpg";
import i7 from "@/assets/InvestLive/7.jpg";

import q1 from "@/assets/Quizlive/1.png";
import q2 from "@/assets/Quizlive/2.png";
import q3 from "@/assets/Quizlive/3.png";
import q4 from "@/assets/Quizlive/4.png";
import q5 from "@/assets/Quizlive/5.png";
import q6 from "@/assets/Quizlive/6.png";
import q7 from "@/assets/Quizlive/7.png";
import q8 from "@/assets/Quizlive/8.png";
import q9 from "@/assets/Quizlive/9.png";
import q10 from "@/assets/Quizlive/10.png";

import tp1 from "@/assets/3DPrinter/3D Printer 1.jpg";
import tp2 from "@/assets/3DPrinter/3D Printer 2.jpg";
import tp3 from "@/assets/3DPrinter/3D Printer 3.jpg";
import tp4 from "@/assets/3DPrinter/3D Printer 4.jpg";
import tp5 from "@/assets/3DPrinter/3D Printer 5.jpg";
import tp6 from "@/assets/3DPrinter/3D Printer 6.jpg";
import tp7 from "@/assets/3DPrinter/3D Printer 7.jpg";
import tp8 from "@/assets/3DPrinter/3D Printer 8.jpg";
import tp9 from "@/assets/3DPrinter/3D Printer 9.jpg";
import tp10 from "@/assets/3DPrinter/3D Printer 10.jpg";
import tp11 from "@/assets/3DPrinter/3D Printer 11.jpg";

import l1 from "@/assets/Laser/Laser 1.png";
import l2 from "@/assets/Laser/Laser 2.jpg";
import l3 from "@/assets/Laser/Laser 3.jpg";
import l4 from "@/assets/Laser/Laser 4.jpg";
import l5 from "@/assets/Laser/Laser 5.jpg";
import l6 from "@/assets/Laser/Laser 6.jpg";
import l7 from "@/assets/Laser/Laser 7.jpg";
import l8 from "@/assets/Laser/Laser 8.jpg";
import l9 from "@/assets/Laser/Laser 9.jpg";
import l10 from "@/assets/Laser/Laser 10.jpg";
import l11 from "@/assets/Laser/Laser 11.jpg";
import l12 from "@/assets/Laser/Laser 12.jpg";
import l13 from "@/assets/Laser/Laser 13.jpg";
import l14 from "@/assets/Laser/Laser 14.jpg";
import l15 from "@/assets/Laser 15.jpg";
import l16 from "@/assets/Laser 16.jpg";

import sp1 from "@/assets/Solar_Panel/1.jpeg";
import sp2 from "@/assets/Solar_Panel/2.jpeg";
import sp3 from "@/assets/Solar_Panel/3.jpeg";
import sp4 from "@/assets/Solar_Panel/4.jpeg";
import sp5 from "@/assets/Solar_Panel/5.jpeg";

import sd1 from "@/assets/Sales_Dashboard/1.jpg";
import sd2 from "@/assets/Sales_Dashboard/2.jpg";
import sd3 from "@/assets/Sales_Dashboard/3.jpg";
import sd4 from "@/assets/Sales_Dashboard/4.jpg";
import sd5 from "@/assets/Sales_Dashboard/5.jpg";

import { Reveal, SplitText } from "@/components/Reveal";

type Project = {
  title: string;
  tag: string;
  img: string;
  images?: string[];
  desc: string;
  tech: string[];
  span: string;
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "PL Humanize",
    tag: "AI Product",
    img: ph1,
    images: [ph1, ph2, ph3, ph4, ph5, ph6, ph7],
    desc: "Built an advanced AI-powered text humanization web app under Parmar Labs. Features a multi-pass humanization engine that transforms machine-generated content into authentic, natural human writing — improving readability, tone, and bypassing AI detectors. Built using HTML, CSS, JavaScript, and integrated AI APIs.",
    tech: ["HTML", "CSS", "JavaScript", "AI APIs", "UI/UX"],
    span: "md:col-span-2 md:row-span-2",
    link: "https://bhavin8833.github.io/pl_humanize",
    github: "https://github.com/bhavin8833/pl_humanize",
  },
  {
    title: "InvestLive",
    tag: "Fintech UI",
    img: i1,
    images: [i1, i2, i3, i4, i5, i6, i7],
    desc: "Built a real-time investment simulation web app where users practice stock and portfolio investing with live market-style data. Developed using HTML, CSS, and JavaScript with a focus on UI/UX and financial data visualization.",
    tech: ["HTML", "CSS", "JavaScript", "Financial APIs", "UI/UX"],
    span: "md:col-span-1",
    link: "https://bhavin8833.github.io/InvestLive",
    github: "https://github.com/bhavin8833/InvestLive",
  },
  {
    title: "QuizMaster Live",
    tag: "EdTech",
    img: q1,
    images: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
    desc: "Developed a live quiz hosting platform allowing hosts to run real-time quiz sessions with participants. Features live scoring, leaderboard, timer, and multi-player support — built with web technologies.",
    tech: ["HTML", "CSS", "JavaScript", "Real-Time"],
    span: "md:col-span-1",
    link: "https://bhavin8833.github.io/quizmaster",
    github: "https://github.com/bhavin8833/quizmaster",
  },
  {
    title: "Solar Panel Cleaning Robot",
    tag: "Hardware",
    img: sp1,
    images: [sp1, sp2, sp3, sp4, sp5],
    desc: "Developed an automated robotic cleaning system to maintain solar panel efficiency by removing dust and debris, reducing manual maintenance effort significantly.",
    tech: ["Robotics", "Mechanical Design", "Automation"],
    span: "md:col-span-1",
  },
  {
    title: "Desktop 3D Printer",
    tag: "Hardware",
    img: tp1,
    images: [tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8, tp9, tp10, tp11],
    desc: "Built a fully functional desktop FDM 3D printer from scratch. Gained hands-on expertise in CAD modeling (Fusion 360 / SolidWorks), additive manufacturing, layer calibration, and machine assembly.",
    tech: ["Fusion 360", "SolidWorks", "Additive Manufacturing", "Assembly"],
    span: "md:col-span-1",
  },
  {
    title: "Mini Hydraulic Plate Bending Machine",
    tag: "Engineering",
    img: p6,
    desc: "Designed and assembled a small-scale hydraulic bending machine to understand hydraulic pressure application, mechanical force transmission, and fundamental machine design principles.",
    tech: ["Hydraulics", "Mechanical Design", "Machine Design"],
    span: "md:col-span-1",
  },
  {
    title: "CNC Laser Plotter",
    tag: "Hardware",
    img: l1,
    images: [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16],
    desc: "Designed and built a custom CNC Laser Plotter for precision engraving and cutting. Involved hardware assembly, stepper motor control, and integration with CNC software.",
    tech: ["CNC", "Hardware Design", "Automation", "Laser Engraving"],
    span: "md:col-span-2",
  },
  {
    title: "Sales & Business Performance Dashboard",
    tag: "Data Analytics",
    img: sd1,
    images: [sd1, sd2, sd3, sd4, sd5],
    desc: "Developed an interactive Power BI dashboard to analyze sales performance, customer behavior, and business growth trends. Created dynamic visualizations including KPI cards, revenue analysis, regional performance tracking, product category insights, and customer segmentation. Utilized Power Query for data transformation and DAX measures for advanced calculations, enabling data-driven decision-making and performance monitoring.",
    tech: ["Power BI", "Power Query", "DAX", "Excel"],
    span: "md:col-span-1",
  },
];

export function Portfolio() {
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const currentIndex = open ? projects.findIndex((p) => p.title === open.title) : -1;
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Projects that ship real numbers and real screws.
          </p>
        </div>

        <div className="mb-5 flex flex-col">
          {projects.slice(0, 1).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="group">
              <button
                onClick={() => setOpen(p)}
                data-cursor="hover"
                className="relative w-full overflow-hidden rounded-3xl glass-strong text-left block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <div className="mb-2 text-sm md:text-base uppercase tracking-widest text-primary font-medium">
                    {p.tag}
                  </div>
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl">{p.title}</div>
                  <div className="mt-4 inline-flex translate-y-2 items-center gap-2 text-sm md:text-base font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Open case <ExternalLink size={16} />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5 transition-all group-hover:ring-primary/40" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.slice(1).map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) * 0.05} className="break-inside-avoid group">
              <button
                onClick={() => setOpen(p)}
                data-cursor="hover"
                className="relative w-full overflow-hidden rounded-3xl glass-strong text-left block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-1 text-xs uppercase tracking-widest text-primary">
                    {p.tag}
                  </div>
                  <div className="font-display text-2xl">{p.title}</div>
                  <div className="mt-2 inline-flex translate-y-2 items-center gap-1 text-xs opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Open case <ExternalLink size={12} />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5 transition-all group-hover:ring-primary/40" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4 sm:p-12 md:p-16 backdrop-blur-xl"
            onClick={() => setOpen(null)}
          >
            {/* Floating Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setOpen(prevProject); }}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[90] rounded-full bg-background/60 p-2 sm:p-3 backdrop-blur transition-all hover:bg-background/90 hover:scale-110 hidden sm:block"
            >
              <ChevronLeft size={28} />
            </button>
            
            {/* Floating Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setOpen(nextProject); }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[90] rounded-full bg-background/60 p-2 sm:p-3 backdrop-blur transition-all hover:bg-background/90 hover:scale-110 hidden sm:block"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              className="glass-strong relative max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-3xl"
            >
              <button
                aria-label="Close"
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/60 p-2 backdrop-blur transition-colors hover:bg-background/80"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <img src={open.img} alt={open.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="px-6 pb-10 pt-6 md:px-10 md:pb-12 md:pt-8 relative z-10">
                <div className="mb-3 text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold">
                  {open.tag}
                </div>
                <h3 className="font-display text-3xl md:text-5xl">{open.title}</h3>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground/90 max-w-2xl">
                  {open.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {open.tech.map((t) => (
                    <span
                      key={t}
                      className="glass rounded-full px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {(open.link || open.github) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {open.link && (
                      <a
                        href={open.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-grad-brand px-5 py-2.5 text-sm font-medium text-primary-foreground glow-blue"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {open.github && (
                      <a
                        href={open.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                )}
                
                {open.images && open.images.length > 0 && (
                  <div className="mt-12 border-t border-border/50 pt-10">
                    <h4 className="font-display text-2xl font-semibold mb-8 text-foreground/90">Project Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {open.images.map((img, idx) => (
                        <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong shadow-lg ring-1 ring-white/10">
                          <img 
                            src={img} 
                            alt={`${open.title} gallery image ${idx + 1}`} 
                            className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-110 group-hover:opacity-90" 
                            loading="lazy" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Navigation Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border/50 pt-8">
                  <button 
                    onClick={() => setOpen(prevProject)}
                    className="group flex items-center gap-3 px-5 py-3 rounded-2xl glass hover:bg-white/5 transition-colors w-full sm:w-auto text-left"
                  >
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Previous</div>
                      <div className="font-display text-lg mt-1">{prevProject.title}</div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => setOpen(nextProject)}
                    className="group flex items-center justify-end gap-3 px-5 py-3 rounded-2xl glass hover:bg-white/5 transition-colors w-full sm:w-auto text-right"
                  >
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Next</div>
                      <div className="font-display text-lg mt-1">{nextProject.title}</div>
                    </div>
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}