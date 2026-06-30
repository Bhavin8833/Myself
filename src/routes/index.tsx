import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { ParticleField } from "@/components/ParticleField";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { About } from "@/sections/About";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Gallery } from "@/sections/Gallery";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Resume } from "@/sections/Resume";
import { Skills } from "@/sections/Skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavin Parmar — Business Analyst, Marketer & AI Builder" },
      { name: "description", content: "Cinematic interactive portfolio of Bhavin Parmar — analytics, AI, digital marketing and web development work from Parmar Labs." },
      { property: "og:title", content: "Bhavin Parmar — Portfolio" },
      { property: "og:description", content: "Cinematic interactive portfolio showcasing analytics, AI, web and marketing work." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <ParticleField />
      <Toaster theme="dark" position="bottom-center" richColors />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Gallery />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
