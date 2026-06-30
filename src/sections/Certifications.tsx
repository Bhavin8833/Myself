import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Search } from "lucide-react";
import { Reveal, SplitText } from "@/components/Reveal";

// Primary Certificates
import sapDataAnalyst from "@/assets/Certificates/SAP Certified - Data Analyst - SAP Analytics Cloud.pdf";
import sapBtp from "@/assets/Certificates/Discovering SAP Business Technology Platform.pdf";
import storytelling from "@/assets/Certificates/Coursera AA4ZTV9BN6FS.pdf";
import departure from "@/assets/Certificates/Coursera ATAQ83YXAEVK.pdf";

// Additional Certificates
import cxoMarketing from "@/assets/Certificates/3439706_Digital_Marketing_for_CXOs_4079211.pdf";
import businessAnalysis from "@/assets/Certificates/Business Analysis & Process Management.pdf";
import businessManagement from "@/assets/Certificates/Business Management Essentials Certification.pdf";
import miroBMC from "@/assets/Certificates/Business Model Canvas Analysis with Miro.pdf";
import businessPlan from "@/assets/Certificates/Business Plan Competiton.pdf";
import campusCrew from "@/assets/Certificates/Campus Crew.pdf";
import excelFinStatement from "@/assets/Certificates/Create a Financial Statement using Microsoft Excel.pdf";
import criticalThinkingAI from "@/assets/Certificates/Critical Thinking in the AI Era.pdf";
import dcfModeling from "@/assets/Certificates/Discounted Cash Flow Modeling.pdf";
import sapAnalyticsCloud from "@/assets/Certificates/Exploring SAP Analytics Cloud.pdf";
import excelGettingStarted from "@/assets/Certificates/Getting Started with Microsoft Excel.pdf";
import googleAds from "@/assets/Certificates/Google Ads for Beginners.pdf";
import googleCloudAI from "@/assets/Certificates/Innovating with Google Cloud AI.pdf";
import excelDataAnalysis from "@/assets/Certificates/Introduction to Data Analysis using Microsoft.pdf";
import riskManagement from "@/assets/Certificates/Investment Risk Management.pdf";
import powerBI from "@/assets/Certificates/Power Bi.pdf";
import techNovaQuiz from "@/assets/Certificates/Quizz of TechNova National Quiz Challenge.pdf";
import artOfSales from "@/assets/Certificates/The Art of Sales_ Fundamentals of Selling.pdf";
import canvaCourseCollateral from "@/assets/Certificates/Use Canva to Design Digital Course Collateral.pdf";
import excelFormulas from "@/assets/Certificates/Using Basic Formulas and Functions in Microsoft.pdf";
import enigmaEnclave from "@/assets/Certificates/Enigma Enclave.pdf";
import excavate from "@/assets/Certificates/Excavate.pdf";
import pratidwandi from "@/assets/Certificates/Pratidwandi.pdf";
import triqThinkTwice from "@/assets/Certificates/TRIQ - Think Twice.pdf";
import givaCase from "@/assets/Certificates/Day 1 - GIVA.pdf";
import hammerCase from "@/assets/Certificates/Day 2 - Hammer.pdf";
import blueTeaCase from "@/assets/Certificates/Day 3 - Blue Tea.pdf";
import mavisPantryCase from "@/assets/Certificates/Day 5 - MAVI's Pantry.pdf";

const certs = [
  { t: "Storytelling and influencing: Communicate With Impact", i: "Coursera", y: "2024", link: storytelling },
  { t: "Create a Departure And Personal Statement For Interviews", i: "Coursera", y: "2024", link: departure },
  { t: "SAP Certified – Data Analyst, SAP Analytics Cloud", i: "SAP", y: "2026", link: sapDataAnalyst },
  { t: "Discovering SAP Business Technology Platform", i: "SAP Learning", y: "2026", link: sapBtp },
];

const additionalCerts = [
  // Coursera
  { t: "Business Analysis & Process Management", i: "Coursera", y: "2025", link: businessAnalysis },
  { t: "Business Model Canvas Analysis with Miro", i: "Coursera", y: "2025", link: miroBMC },
  { t: "Create a Financial Statement using MS Excel", i: "Coursera", y: "2025", link: excelFinStatement },
  { t: "Getting Started with Microsoft Excel", i: "Coursera", y: "2025", link: excelGettingStarted },
  { t: "Introduction to Data Analysis using MS Excel", i: "Coursera", y: "2025", link: excelDataAnalysis },
  { t: "Investment Risk Management", i: "Coursera", y: "2025", link: riskManagement },
  { t: "The Art of Sales: Fundamentals of Selling", i: "Coursera", y: "2025", link: artOfSales },
  { t: "Use Canva to Design Digital Course Collateral", i: "Coursera", y: "2025", link: canvaCourseCollateral },
  { t: "Using Basic Formulas and Functions in MS Excel", i: "Coursera", y: "2025", link: excelFormulas },
  
  // Unstop
  { t: "Business Plan Competition Winner", i: "Unstop", y: "2025", link: businessPlan },
  { t: "Corporate Case Studies: GIVA Case Study", i: "Unstop", y: "2025", link: givaCase },
  { t: "Corporate Case Studies: Hammer Case Study", i: "Unstop", y: "2025", link: hammerCase },
  { t: "Corporate Case Studies: Blue Tea Case Study", i: "Unstop", y: "2025", link: blueTeaCase },
  { t: "Corporate Case Studies: MAVI's Pantry Case", i: "Unstop", y: "2025", link: mavisPantryCase },

  // HP LIFE
  { t: "Critical Thinking in the AI Era", i: "HP LIFE", y: "2025", link: criticalThinkingAI },
  
  // SAP Learning
  { t: "Exploring SAP Analytics Cloud", i: "SAP Learning", y: "2026", link: sapAnalyticsCloud },

  // Others (1 each)
  { t: "Digital Marketing for CXOs", i: "Digital Marketing Academy", y: "2026", link: cxoMarketing },
  { t: "Business Management Essentials", i: "Management Institute", y: "2025", link: businessManagement },
  { t: "Campus Crew Lead Engagement", i: "Corporate Program", y: "2026", link: campusCrew },
  { t: "Discounted Cash Flow (DCF) Modeling", i: "Financial Analyst", y: "2025", link: dcfModeling },
  { t: "Google Ads for Beginners", i: "Google Ads", y: "2025", link: googleAds },
  { t: "Innovating with Google Cloud AI", i: "Google Cloud", y: "2025", link: googleCloudAI },
  { t: "Power BI Dashboarding & Data Analytics", i: "Coursera / Microsoft", y: "2025", link: powerBI },
  { t: "TechNova National Quiz Challenge 2026", i: "TechNova National", y: "2026", link: techNovaQuiz },
  { t: "Enigma Enclave Business Event Coordinator", i: "Atmiya University", y: "2023", link: enigmaEnclave },
  { t: "Excavate Competition Runner-Up", i: "National Tech Fest", y: "2023", link: excavate },
  { t: "Pratidwandi Marketing Case Study Competition", i: "Case Challenge", y: "2023", link: pratidwandi },
  { t: "TRIQ - Think Twice National Quiz Certificate", i: "National Quiz", y: "2024", link: triqThinkTwice },
];

export function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCerts = additionalCerts.filter(c =>
    c.t.toLowerCase().includes(search.toLowerCase()) ||
    c.i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="certifications" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Receipts for the craft.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <motion.div
                whileHover={{ rotateX: -4, rotateY: 4, y: -4 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-strong group relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between h-full"
              >
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-grad-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div>
                  <div className="flex items-start justify-between">
                    <div className="glass flex size-12 items-center justify-center rounded-2xl">
                      <Award className="text-primary" size={20} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.y}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.i}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/5">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    View Certificate PDF <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="glass px-7 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-primary/10 transition-colors shadow-sm cursor-pointer"
          >
            {expanded ? "Show Less" : "View 25+ More Certificates & Case Studies"}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden"
            >
              <div className="mb-8 flex justify-center relative max-w-lg mx-auto">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search Excel, Marketing, Case Studies, SAP..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-foreground/10 bg-card pl-10 pr-5 py-3 text-sm text-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredCerts.length > 0 ? (
                  filteredCerts.map((c) => (
                    <motion.div
                      key={c.t}
                      layout
                      className="glass p-5 rounded-2xl flex flex-col justify-between border border-foreground/5 hover:border-primary/20 transition-colors"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.y}</span>
                          <span className="text-[10px] font-semibold text-primary text-right">{c.i}</span>
                        </div>
                        <h4 className="mt-2 font-display text-base font-semibold leading-snug text-foreground">{c.t}</h4>
                      </div>
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline w-fit"
                      >
                        Open PDF <ExternalLink size={10} />
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center text-sm text-muted-foreground">
                    No matching certificates found.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}