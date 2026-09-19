import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectItem {
  number: string;
  category: string;
  name: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
}

const projectsData: ProjectItem[] = [
  {
    number: "01",
    category: "Financial Tool",
    name: "Personal Budget Tracker",
    description: "Automated income-expense spreadsheet & formula system calculating net cash flow, balance tracking, and spending trends.",
    img1: "https://i.pinimg.com/1200x/c5/22/8a/c5228a94550299748f994a5d9c81fc8e.jpg",
    img2: "https://i.pinimg.com/1200x/be/e9/47/bee947687b5710ff51bd4d5b704eb663.jpg",
    img3: "https://i.pinimg.com/736x/38/11/d7/3811d7e9715f4756dfeebdffe2f94ac3.jpg",
  },
  {
    number: "02",
    category: "Loan Analytics",
    name: "EMI Loan Calculator",
    description: "Mathematical loan installment engine calculating monthly payment schedules, interest ratios, and tenure conditional logic.",
    img1: "https://i.pinimg.com/1200x/16/9e/25/169e2578688d712b6d9abd74d839a016.jpg",
    img2: "https://i.pinimg.com/1200x/70/73/5f/70735f7c4d07f7762a0321d6581d9793.jpg",
    img3: "https://i.pinimg.com/736x/0a/35/74/0a357469a09dc49c04e57f4edce847a4.jpg",
  },
  {
    number: "03",
    category: "Corporate Finance",
    name: "Payroll Management System",
    description: "Employee compensation framework managing base salary structures, statutory tax deductions, and automated net payouts.",
    img1: "https://i.pinimg.com/736x/75/48/49/7548499e75923b372e75fdf75291e4bf.jpg",
    img2: "https://i.pinimg.com/736x/51/74/f4/5174f41e9cad68dcf22d3eca2e3782c1.jpg",
    img3: "https://i.pinimg.com/1200x/d0/7e/a5/d07ea57c0be4305ffafeb23e84efd90f.jpg",
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: any;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center mb-12 sm:mb-16"
      style={{ top: `calc(96px + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top Row Header */}
        <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-6 border-b border-[#D7E2EA]/20 gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
            >
              {project.number}
            </span>
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/60 block">
                [{project.category}]
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton label="Live Project" />
        </div>

        {/* Bottom Row Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 sm:mt-6 h-full items-stretch">
          {/* Left Column (40% width / 5 cols) - 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={project.img1}
                alt={`${project.name} Preview 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={project.img2}
                alt={`${project.name} Preview 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - 1 Tall Image */}
          <div className="md:col-span-7 h-full min-h-[280px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5 border border-white/10 relative group">
            <img
              src={project.img3}
              alt={`${project.name} Showcase`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/90 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 select-none"
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Cards Stacking */}
        <div className="relative">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projectsData.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
