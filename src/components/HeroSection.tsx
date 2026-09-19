import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { Download } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume?: () => void;
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onContactClick }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            {/* View Resume Drawer Button */}
            <button
              onClick={onOpenResume}
              className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-[#B600A8] text-[#B600A8] hover:bg-[#B600A8]/20 transition-colors uppercase font-bold cursor-pointer"
            >
              Resume
            </button>

            {/* Direct PDF Download Button */}
            <a
              href="/Harini_D_Resume.pdf"
              download="Harini_D_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white hover:scale-105 transition-all uppercase font-bold cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" /> PDF
            </a>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); onContactClick?.() || scrollToSection('contact'); }}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[16.5vw] text-center select-none">
            i&apos;m harini
          </h1>
        </FadeIn>
      </div>

      {/* Center Image: pngwing.com (29).png with Magnet Effect */}
      {/* Center Image: pngwing.com (29).png with Centering & Magnet Effect */}
<FadeIn
  delay={0.6}
  y={30}
  className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
>
  <Magnet
    padding={150}
    strength={3}
    activeTransition="transform 0.3s ease-out"
    inactiveTransition="transform 0.6s ease-in-out"
    className="w-full flex justify-center"
  >
    <img
      src="/pngwing.com (29).png"
      alt="Harini D Portfolio Centered Image"
      className="w-full h-auto object-contain drop-shadow-2xl select-none"
    />
  </Magnet>
</FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[280px]"
          >
            an accounting &amp; finance specialist driven by crafting precise and impactful financial solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" onClick={onContactClick || onOpenResume} />
        </FadeIn>
      </div>
    </section>
  );
};
