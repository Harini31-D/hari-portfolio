import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Briefcase, GraduationCap, FolderGit2, Mail, Phone, MapPin, FileSpreadsheet, CheckCircle2, Download, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md no-print"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-10 text-[#D7E2EA] shadow-2xl max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer no-print"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header / Contact Info & Actions */}
            <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pr-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">Verified Portfolio Profile</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-1">HARINI D</h2>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-1">
                  B.Com (International Accounting &amp; Finance) | CGPA: 8.5 / 10.0
                </p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm text-[#D7E2EA]/80">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#7621B0]" /> Trichy, Tamil Nadu</span>
                  <a href="mailto:hariniharinivarsha@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-4 h-4 text-[#7621B0]" /> hariniharinivarsha@gmail.com</a>
                  <a href="tel:+918248424446" className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-4 h-4 text-[#7621B0]" /> +91 8248424446</a>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-2.5 no-print">
                {/* DIRECT PDF DOWNLOAD */}
                <a
                  href="/Harini_D_Resume.pdf"
                  download="Harini_D_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>

                {/* BROWSER PRINT / SAVE AS PDF */}
                <button
                  onClick={handlePrint}
                  title="Print or Save as PDF via Browser"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 text-[#D7E2EA] font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#D7E2EA]" /> Print
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="space-y-8">
              {/* Profile Summary */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-[#B600A8]" /> Profile Summary
                </h3>
                <p className="text-sm leading-relaxed text-[#D7E2EA]/80 bg-white/5 p-4 rounded-xl border border-white/5">
                  Dedicated B.Com (International Accounting and Finance) student at Karpagam Academy of Higher Education (2025–2028), currently in second year with a CGPA of 8.5/10. Strong foundation in accounting, financial concepts, MS Excel, and data analysis with proven analytical and problem-solving skills.
                </p>
              </div>

              {/* Education & Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-md font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-[#7621B0]" /> Education
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white">Bachelor of Commerce (Int. Accounting &amp; Finance)</h4>
                      <p className="text-xs text-[#D7E2EA]/70">Karpagam Academy of Higher Education | 2025 – 2028</p>
                      <span className="inline-block mt-1 text-xs bg-[#B600A8]/20 text-[#B600A8] px-2 py-0.5 rounded font-medium">CGPA: 8.5 / 10.0</span>
                    </div>
                    <div className="border-t border-white/10 pt-2">
                      <h4 className="font-medium text-white/90 text-xs">Almighty Vidhyalaya Public School (CBSE)</h4>
                      <p className="text-xs text-[#D7E2EA]/60">Class X: 60.6% | Class XII: 68%</p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-md font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-[#7621B0]" /> Internship Experience
                  </h3>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-white">Bravo Technologies</h4>
                      <span className="text-xs text-[#D7E2EA]/60">May 2026 – Aug 2026</span>
                    </div>
                    <p className="text-xs text-[#B600A8] font-medium mb-2">Accounting &amp; Finance Intern | Hosur</p>
                    <ul className="text-xs text-[#D7E2EA]/80 space-y-1.5 list-disc list-inside">
                      <li>Learned and assisted with basic accounting and GST-related compliance.</li>
                      <li>Handled Tally ERP entries and invoice verification workflows.</li>
                      <li>Organized financial ledger documentation and data validation.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Major Projects */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-4">
                  <FolderGit2 className="w-5 h-5 text-[#BE4C00]" /> Portfolio Projects &amp; Applications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="w-4 h-4 text-[#B600A8]" />
                      <h4 className="font-bold text-sm text-white">Personal Budget Tracker</h4>
                    </div>
                    <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">
                      Developed automated budget tracker using MS Excel and programming formulas to compute income, expenses, and balance.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="w-4 h-4 text-[#7621B0]" />
                      <h4 className="font-bold text-sm text-white">EMI Calculator</h4>
                    </div>
                    <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">
                      Calculates monthly loan installments, interest rates, and loan tenure with dynamic mathematical conditional formulas.
                    </p>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="w-4 h-4 text-[#BE4C00]" />
                      <h4 className="font-bold text-sm text-white">Payroll System</h4>
                    </div>
                    <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">
                      Managed employee payroll calculations, basic salary allocations, tax deductions, and net payout structures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B600A8]" /> Technical &amp; Software Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Financial Accounting', 'Cost Accounting', 'GST Calculation', 'Taxation Basics', 'MS Excel (Pivot, Formulas)', 'Tally ERP', 'Data Handling', 'Problem Solving'].map((skill, i) => (
                      <span key={i} className="text-xs bg-white/10 hover:bg-white/20 text-[#D7E2EA] px-3 py-1 rounded-full transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-[#BE4C00]" /> Certifications &amp; Courses
                  </h3>
                  <ul className="text-xs text-[#D7E2EA]/80 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5" />
                      <span><strong>NPTEL</strong> – Soft Skill Development | IIT Kharagpur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7621B0] mt-1.5" />
                      <span><strong>Simplilearn</strong> – Introduction to Financial Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE4C00] mt-1.5" />
                      <span><strong>NASSCOM</strong> (FutureSkills Prime) – Acquiring Data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};