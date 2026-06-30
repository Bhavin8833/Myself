import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal, SplitText } from "@/components/Reveal";

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

// Certificate Imports
import cert002 from "@/assets/Certificates/002.jpg";
import cert004 from "@/assets/Certificates/004.jpg";
import cert007 from "@/assets/Certificates/007.jpg";
import cert008 from "@/assets/Certificates/008.jpg";
import cert009 from "@/assets/Certificates/009.jpg";
import cert010 from "@/assets/Certificates/010.jpg";
import cert012 from "@/assets/Certificates/012.jpg";
import certAtmiya3 from "@/assets/Certificates/Atmiya University 3rd Number Rank.jpg";
import certAtmiyaPoster from "@/assets/Certificates/Atmiya University Poster Making Competition.jpg";
import certAtmiyaRakhi from "@/assets/Certificates/Atmiya University RAkhi Making Copetition.jpg";
import certAtmiya from "@/assets/Certificates/Atmiya University.jpg";

const items = [
  { src: ph1, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph2, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph3, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph4, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph5, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph6, cat: "Projects", subCat: "PL Humanize", span: "" },
  { src: ph7, cat: "Projects", subCat: "PL Humanize", span: "" },

  { src: i1, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i2, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i3, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i4, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i5, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i6, cat: "Projects", subCat: "InvestLive", span: "" },
  { src: i7, cat: "Projects", subCat: "InvestLive", span: "" },

  { src: q1, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q2, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q3, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q4, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q5, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q6, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q7, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q8, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q9, cat: "Projects", subCat: "QuizMaster Live", span: "" },
  { src: q10, cat: "Projects", subCat: "QuizMaster Live", span: "" },

  { src: tp1, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp2, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp3, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp4, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp5, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp6, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp7, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp8, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp9, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp10, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },
  { src: tp11, cat: "Projects", subCat: "Desktop 3D Printer", span: "" },

  { src: l1, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l2, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l3, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l4, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l5, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l6, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l7, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l8, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l9, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l10, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l11, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l12, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l13, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l14, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l15, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },
  { src: l16, cat: "Projects", subCat: "CNC Laser Plotter", span: "" },

  { src: sp1, cat: "Projects", subCat: "Solar Panel Cleaning Robot", span: "" },
  { src: sp2, cat: "Projects", subCat: "Solar Panel Cleaning Robot", span: "" },
  { src: sp3, cat: "Projects", subCat: "Solar Panel Cleaning Robot", span: "" },
  { src: sp4, cat: "Projects", subCat: "Solar Panel Cleaning Robot", span: "" },
  { src: sp5, cat: "Projects", subCat: "Solar Panel Cleaning Robot", span: "" },

  { src: sd1, cat: "Projects", subCat: "Sales & Business Performance Dashboard", span: "" },
  { src: sd2, cat: "Projects", subCat: "Sales & Business Performance Dashboard", span: "" },
  { src: sd3, cat: "Projects", subCat: "Sales & Business Performance Dashboard", span: "" },
  { src: sd4, cat: "Projects", subCat: "Sales & Business Performance Dashboard", span: "" },
  { src: sd5, cat: "Projects", subCat: "Sales & Business Performance Dashboard", span: "" },
  
  // Certificates ordered specifically to distribute into masonry columns matching mockup:
  // Column 1
  { src: cert008, cat: "Certificates", span: "" }, // Excel (landscape)
  { src: cert007, cat: "Certificates", span: "" }, // Bhartiya Sanskriti (portrait)
  { src: cert002, cat: "Certificates", span: "" }, // Atmiya Achievement (landscape)
  
  // Column 2
  { src: cert004, cat: "Certificates", span: "" }, // Atmiya Participation (landscape)
  { src: cert009, cat: "Certificates", span: "" }, // TechNova Spark (landscape)
  { src: certAtmiyaRakhi, cat: "Certificates", span: "" }, // Yoga Gurukul (landscape)
  { src: certAtmiyaPoster, cat: "Certificates", span: "" }, // Atmiya Poster Achievement (landscape)
  
  // Column 3
  { src: cert012, cat: "Certificates", span: "" }, // Atmiya Rakhi Participant (portrait)
  { src: cert010, cat: "Certificates", span: "" }, // Apex Computer (portrait)
  { src: certAtmiya3, cat: "Certificates", span: "" }, // Atmiya Rakhi Coordinator (portrait)
  { src: certAtmiya, cat: "Certificates", span: "" }, // Atmiya Poster Participation (landscape)
];

const cats = ["All", "Events", "College", "Projects", "Work", "Certificates", "Travel"];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lb, setLb] = useState<string | null>(null);
  const [limit, setLimit] = useState(12);

  const filtered = cat === "All" ? items.slice(0, limit) : items.filter((i) => i.cat === cat);
  const hasMore = cat === "All" && limit < items.length;

  let col1: typeof items = [];
  let col2: typeof items = [];
  let col3: typeof items = [];

  if (cat === "Certificates") {
    col1 = [
      items.find((it) => it.src === cert008)!,
      items.find((it) => it.src === cert007)!,
      items.find((it) => it.src === cert002)!,
    ].filter(Boolean);

    col2 = [
      items.find((it) => it.src === cert004)!,
      items.find((it) => it.src === cert009)!,
      items.find((it) => it.src === certAtmiyaRakhi)!,
      items.find((it) => it.src === certAtmiyaPoster)!,
    ].filter(Boolean);

    col3 = [
      items.find((it) => it.src === cert012)!,
      items.find((it) => it.src === cert010)!,
      items.find((it) => it.src === certAtmiya3)!,
      items.find((it) => it.src === certAtmiya)!,
    ].filter(Boolean);
  } else {
    filtered.forEach((item, index) => {
      if (index % 3 === 0) col1.push(item);
      else if (index % 3 === 1) col2.push(item);
      else col3.push(item);
    });
  }

  useEffect(() => {
    document.body.style.overflow = lb ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lb]);

  const currentIndex = lb ? filtered.findIndex((it) => it.src === lb) : -1;
  const prevImg = currentIndex > 0 ? filtered[currentIndex - 1].src : filtered[filtered.length - 1]?.src;
  const nextImg = currentIndex < filtered.length - 1 ? filtered[currentIndex + 1].src : filtered[0]?.src;

  return (
    <section id="gallery" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
            Gallery
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Moments, builds & milestones.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              data-cursor="hover"
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                cat === c ? "bg-grad-brand text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {cat === "Projects" ? (
          <div className="flex flex-col gap-16">
            {Array.from(new Set(filtered.map(it => it.subCat || "Other"))).map((groupName) => {
              const groupItems = filtered.filter(it => (it.subCat || "Other") === groupName);
              const gc1: typeof items = [], gc2: typeof items = [], gc3: typeof items = [];
              groupItems.forEach((it, i) => {
                if (i % 3 === 0) gc1.push(it);
                else if (i % 3 === 1) gc2.push(it);
                else gc3.push(it);
              });
              
              const renderCol = (cItems: typeof items, cIdx: number) => (
                <div className="flex flex-col gap-4">
                  {cItems.map((it, i) => (
                    <Reveal key={`g-${groupName}-c${cIdx}-${i}`} delay={i * 0.04}>
                      <button
                        onClick={() => setLb(it.src)}
                        className="group relative w-full overflow-hidden rounded-2xl glass-strong block"
                      >
                        <img
                          src={it.src}
                          alt=""
                          loading="lazy"
                          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          {it.subCat || it.cat}
                        </div>
                      </button>
                    </Reveal>
                  ))}
                </div>
              );

              return (
                <div key={groupName} className="flex flex-col gap-6 w-full">
                  {groupName !== "Other" && (
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary/90 pl-4 border-l-4 border-primary self-start">
                      {groupName}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start w-full">
                    {renderCol(gc1, 1)}
                    {renderCol(gc2, 2)}
                    {renderCol(gc3, 3)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {[col1, col2, col3].map((cItems, cIdx) => (
              <div key={`def-c${cIdx}`} className="flex flex-col gap-4">
                {cItems.map((it, i) => (
                  <Reveal key={`def-c${cIdx}-${i}`} delay={i * 0.04}>
                    <button
                      onClick={() => setLb(it.src)}
                      className="group relative w-full overflow-hidden rounded-2xl glass-strong block"
                    >
                      <img
                        src={it.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        {it.subCat || it.cat}
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        )}

        {hasMore && (
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setLimit((prev) => prev + 12)}
                className="group relative overflow-hidden rounded-full border border-primary/30 bg-primary/5 px-8 py-4 font-medium text-primary transition-all hover:border-primary/50 hover:bg-primary/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View {items.length - limit} More Images
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 p-6 backdrop-blur-xl"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 z-[90] rounded-full bg-background/60 p-2 backdrop-blur transition-all hover:bg-background/90 hover:scale-110"
              onClick={() => setLb(null)}
            >
              <X size={18} />
            </button>

            {/* Floating Prev Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLb(prevImg); }}
              className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-[90] rounded-full bg-background/60 p-2 sm:p-3 backdrop-blur transition-all hover:bg-background/90 hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>
            
            {/* Floating Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLb(nextImg); }}
              className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-[90] rounded-full bg-background/60 p-2 sm:p-3 backdrop-blur transition-all hover:bg-background/90 hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>

            <motion.img
              src={lb}
              alt=""
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-[var(--shadow-elevated)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}