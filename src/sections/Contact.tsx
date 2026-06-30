import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal, SplitText } from "@/components/Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

function Confetti({ on }: { on: boolean }) {
  if (!on) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]">
      {Array.from({ length: 60 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.3;
        const dur = 1.5 + Math.random();
        const color = i % 2 ? "#0052cc" : "#818cf8";
        return (
          <motion.span
            key={i}
            initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
            animate={{ y: "100vh", rotate: 540, opacity: 0 }}
            transition={{ duration: dur, delay, ease: "easeIn" }}
            style={{ left: `${left}%`, background: color }}
            className="absolute top-0 inline-block size-2 rounded-sm"
          />
        );
      })}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [boom, setBoom] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.errors[0].message);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/bhavinparmar8833@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setLoading(false);
      setBoom(true);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setBoom(false), 2000);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const fields = [
    { icon: Phone, label: "Phone", value: "+91 8733825132" },
    { icon: Mail, label: "Email", value: "bhavinparmar8833@gmail.com" },
    { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat" },
  ];
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/bhavin-parmar-bhavin88", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/bhavin8833", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/bhavin._7?igsh=N2ZuYXRjbDFxNG50", label: "Instagram" },
  ];

  return (
    <section id="contact" className="relative py-32">
      <Confetti on={boom} />
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wider text-primary md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Got a project? Let's build something memorable.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-strong h-full rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop a line for collaborations, freelance work or just to say hi.
              </p>
              <div className="mt-8 space-y-5">
                {fields.map((f) => (
                  <div key={f.label} className="flex items-start gap-4">
                    <div className="glass flex size-11 items-center justify-center rounded-2xl">
                      <f.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {f.label}
                      </div>
                      <div className="text-sm">{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-cursor="hover"
                    className="glass flex size-11 items-center justify-center rounded-full transition-colors hover:bg-primary/15"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl border border-foreground/10">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps?q=Ahmedabad,%20Gujarat&output=embed"
                  className="h-48 w-full grayscale opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="glass-strong h-full space-y-5 rounded-3xl p-8 md:p-10"
            >
              {[
                { k: "name", l: "Name", t: "text" },
                { k: "email", l: "Email", t: "email" },
                { k: "subject", l: "Subject", t: "text" },
              ].map((f) => (
                <div key={f.k}>
                  <label htmlFor={f.k} className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">
                    {f.l}
                  </label>
                  <input
                    id={f.k}
                    name={f.k}
                    type={f.t}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-foreground/10 bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground cursor-pointer">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-2xl border border-foreground/10 bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad-brand px-6 py-4 text-sm font-medium text-primary-foreground glow-blue disabled:opacity-60"
              >
                {loading ? "Sending…" : <>Send Message <Send size={14} /></>}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}