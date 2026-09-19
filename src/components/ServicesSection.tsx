import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    name: "Financial Accounting",
    description: "Creation of structured ledger systems, cost accounting frameworks, and financial reporting tailored to specific business requirements."
  },
  {
    number: "02",
    name: "Taxation & Compliance",
    description: "Accurate GST basics calculation, income tax preparation, invoice auditing, and compliance verification."
  },
  {
    number: "03",
    name: "Financial Data Modeling",
    description: "Building interactive Excel models, EMI calculators, and automated income-expense tracking systems for rapid decision making."
  },
  {
    number: "04",
    name: "Payroll Management",
    description: "Designing automated employee salary systems, tax deduction engines, and net pay computation frameworks."
  },
  {
    number: "05",
    name: "Data Analysis & Analytics",
    description: "Transforming raw financial numbers into clear dashboards, pivot table reports, and record management systems."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
          >
            Experience
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="max-w-5xl mx-auto divide-y divide-[#D7E2EA]/15 border-t border-b border-[#D7E2EA]/15">
          {servicesData.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 gap-4 md:gap-8 group hover:bg-white/[0.03] transition-colors duration-300 rounded-2xl px-4">
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#D7E2EA] leading-none select-none tracking-tight md:w-1/3"
                >
                  {item.number}
                </div>

                {/* Name + Description Stack */}
                <div className="flex flex-col gap-2 md:w-2/3">
                  <h3
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed max-w-2xl text-[#D7E2EA]/70"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
