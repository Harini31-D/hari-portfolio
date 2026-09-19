import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenResume?: () => void;
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onContactClick }) => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative 3D Corner Assets */}
      
      {/* Top-Left Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0"
      >
        <img
          src="spiderwoman.png"
          alt="Decorative 3D Element"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-80"
        />
      </FadeIn>

      {/* Bottom-Left 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0"
      >
        <img
          src="panda.png"
          alt="Decorative 3D Element"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none opacity-80"
        />
      </FadeIn>

      {/* Top-Right Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0"
      >
        <img
          src="spiderman.png"
          alt="Decorative 3D Element"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-80"
        />
      </FadeIn>

      {/* Bottom-Right 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0"
      >
        <img
          src="cat.png"
          alt="Decorative 3D Element"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none opacity-80"
        />
      </FadeIn>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Text Paragraph aligned with Harini's Resume */}
        <AnimatedText
          text="With a strong background in international accounting, financial management, and data analysis, i focus on financial modeling, automated budget tracking, and payroll systems, i truly enjoy working with businesses to optimize accounts and present their best financial insights. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Gap between text & contact button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-col items-center gap-4">
            <ContactButton label="Contact Me" onClick={onContactClick || onOpenResume} />
            <button
              onClick={onOpenResume}
              className="text-xs text-[#D7E2EA]/70 hover:text-[#B600A8] transition-colors underline tracking-widest uppercase font-semibold mt-2 cursor-pointer"
            >
              Open Verified Resume &amp; Credentials
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
