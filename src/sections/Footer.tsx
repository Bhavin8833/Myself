import { motion } from "framer-motion";
import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/bhavin-parmar-bhavin88", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/bhavin8833", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/bhavin._7?igsh=N2ZuYXRjbDFxNG50", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary/5 border-t border-foreground/10 py-20">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="animate-blob absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-5xl font-semibold tracking-tight md:text-8xl">
            Let's build something{" "}
            <span className="text-gradient-brand italic">memorable.</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 border-t border-foreground/10 pt-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-xl">
              <Logo className="h-9 w-auto object-contain" />
              <span>Bhavin Parmar</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Business Analyst, Marketer and Builder — Founder of Parmar Labs. PGDM in Marketing & Business Analytics from SKIPS B-School.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">
              Quick Links
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">Social</div>
            <div className="mt-4 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex size-11 items-center justify-center rounded-full hover:bg-primary/15 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Bhavin Parmar. All rights reserved.</p>
          <a
            href="#home"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 hover:text-foreground"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}