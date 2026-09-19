import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { FadeIn } from './components/FadeIn';
import { Download } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleContactClick = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen overflow-x-clip">
      {/* SECTION 1: HERO SECTION */}
      <HeroSection
        onOpenResume={() => setIsResumeOpen(true)}
        onContactClick={handleContactClick}
      />

      {/* SECTION 2: MARQUEE SECTION */}
      <MarqueeSection />

      {/* SECTION 3: ABOUT SECTION */}
      <AboutSection
        onOpenResume={() => setIsResumeOpen(true)}
        onContactClick={handleContactClick}
      />

      {/* SECTION 4: SERVICES SECTION */}
      <ServicesSection />

      {/* SECTION 5: PROJECTS SECTION */}
      <ProjectsSection />

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0C0C0C] border-t border-white/10 py-16 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <FadeIn delay={0} y={20}>
            <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl tracking-tight">
              Let&apos;s Build Something Unforgettable
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#D7E2EA]/70 max-w-md text-sm sm:text-base">
              Available for Financial Accounting, GST Compliance, Excel Data Modeling &amp; Financial Analytics.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
              {/* View Resume Drawer Button */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-medium uppercase text-xs tracking-widest hover:scale-105 transition-transform cursor-pointer"
              >
                View Harini D Resume
              </button>

              {/* Direct PDF Download Button */}
              <a
                href="/Harini_D_Resume.pdf"
                download="Harini_D_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase text-xs tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download Resume PDF
              </a>

              {/* Email Link */}
              <a
                href="mailto:hariniharinivarsha@gmail.com"
                className="px-6 py-3 rounded-full border border-white/20 text-[#D7E2EA]/80 font-medium uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
              >
                hariniharinivarsha@gmail.com
              </a>
            </div>
          </FadeIn>

          <p className="text-xs text-[#D7E2EA]/40 mt-8 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Harini D -- International Accounting &amp; Finance Portfolio.
          </p>
        </div>
      </footer>

      {/* RESUME MODAL DRAWER */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
