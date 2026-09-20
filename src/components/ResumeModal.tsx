import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Award, Briefcase, GraduationCap, FolderGit2, Mail, Phone, MapPin, 
  FileSpreadsheet, CheckCircle2, Download, Printer, ExternalLink, Globe, Heart, Languages
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md no-print"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-5xl bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl p-5 sm:p-8 text-[#D7E2EA] shadow-2xl max-h-[92vh] flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer no-print z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Contact Info & Actions */}
            <div className="border-b border-white/10 pb-5 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pr-10 shrink-0">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Official Resume &amp; Credentials
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-white mt-1 tracking-tight">HARINI D</h2>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/80 mt-1">
                  B.Com (International Accounting and Finance) | CGPA: 8.5 / 10.0
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 text-xs text-[#D7E2EA]/80">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#7621B0]" /> Trichy, Tamil Nadu</span>
                  <a href="mailto:hariniharinivarsha@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-3.5 h-3.5 text-[#7621B0]" /> hariniharinivarsha@gmail.com</a>
                  <a href="tel:+918248424446" className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3.5 h-3.5 text-[#7621B0]" /> +91 8248424446</a>
                  <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#7621B0]" /> LinkedIn: Harini</span>
                </div>
              </div>

              {/* ACTION BUTTONS & VIEW MODE TOGGLE */}
              <div className="flex flex-wrap items-center gap-2 no-print pt-2 md:pt-0">
                {/* Mode Toggle */}
                <div className="bg-white/10 p-1 rounded-full flex gap-1 mr-1">
                  <button
                    onClick={() => setActiveTab('interactive')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeTab === 'interactive' 
                        ? 'bg-[#B600A8] text-white shadow' 
                        : 'text-[#D7E2EA]/70 hover:text-white'
                    }`}
                  >
                    View Card
                  </button>
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeTab === 'pdf' 
                        ? 'bg-[#B600A8] text-white shadow' 
                        : 'text-[#D7E2EA]/70 hover:text-white'
                    }`}
                  >
                    View PDF
                  </button>
                </div>

                {/* OPEN IN NEW TAB */}
                <a
                  href="/Harini_D_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/20 text-white font-medium text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                  title="Open PDF in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Fullscreen
                </a>

                {/* DIRECT PDF DOWNLOAD */}
                <a
                  href="/Harini_D_Resume.pdf"
                  download="Harini_D_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>

                {/* PRINT */}
                <button
                  onClick={handlePrint}
                  title="Print Resume"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/20 text-[#D7E2EA] font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto pr-1 flex-1 space-y-6">
              {activeTab === 'pdf' ? (
                <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-white">
                  <iframe
                    src="/Harini_D_Resume.pdf#toolbar=1"
                    title="Harini D Resume PDF"
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Profile Summary */}
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-[#B600A8]" /> Profile
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#D7E2EA]/90 bg-white/5 p-4 rounded-xl border border-white/5">
                      Dedicated B.Com (International Accounting and Finance) student at Karpagam Academy of Higher Education (2025–2028), currently in the second year with a CGPA of 8.5/10. Strong foundation in accounting, financial concepts, MS Excel, and basic data handling, with good analytical and problem-solving skills. Eager to apply academic knowledge in practical finance and accounting roles.
                    </p>
                  </div>

                  {/* Education & Experience Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Education */}
                    <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
                      <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                        <GraduationCap className="w-4 h-4 text-[#7621B0]" /> Education
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-white text-xs sm:text-sm">Bachelor of Commerce (Int. Accounting &amp; Finance)</h4>
                            <span className="text-[11px] bg-[#B600A8]/20 text-[#B600A8] px-2 py-0.5 rounded font-bold whitespace-nowrap ml-2">CGPA: 8.5 / 10.0</span>
                          </div>
                          <p className="text-xs text-[#D7E2EA]/70 mt-0.5">Karpagam Academy of Higher Education, Coimbatore | 2025 – 2028</p>
                        </div>
                        <div className="border-t border-white/10 pt-2.5">
                          <h4 className="font-semibold text-white/90 text-xs">Almighty Vidhyalaya Public School (CBSE), Perambalur</h4>
                          <p className="text-xs text-[#D7E2EA]/70 mt-0.5">Class X: 60.6% &nbsp;|&nbsp; Class XII: 68%</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
                      <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-[#7621B0]" /> Experience
                      </h3>
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white text-xs sm:text-sm">Bravo Technologies</h4>
                          <span className="text-xs text-[#B600A8] font-bold">May 2026</span>
                        </div>
                        <p className="text-xs text-[#D7E2EA]/60 mb-2">Accounting &amp; Finance Intern | Hosur</p>
                        <ul className="text-xs text-[#D7E2EA]/80 space-y-1.5 list-disc list-inside">
                          <li>Assisted with basic accounting and Tally entries.</li>
                          <li>Gained practical exposure to <strong>GST-related work and invoice verification</strong>.</li>
                          <li>Checked invoices for accuracy in amounts, GST details, and other required information.</li>
                          <li>Maintained and organized basic accounting records.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Major Projects */}
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                      <FolderGit2 className="w-4 h-4 text-[#BE4C00]" /> Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <FileSpreadsheet className="w-4 h-4 text-[#B600A8]" />
                          <h4 className="font-bold text-xs sm:text-sm text-white">Personal Budget Tracker</h4>
                        </div>
                        <p className="text-xs text-[#D7E2EA]/80 leading-relaxed mb-2">
                          Developed a budget tracker using basic programming and MS Excel to record income and expenses.
                        </p>
                        <ul className="text-[11px] text-[#D7E2EA]/70 space-y-1 list-disc list-inside">
                          <li>Calculations for total income, expenses &amp; balance.</li>
                          <li>Organized financial data for tracking &amp; analysis.</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <FileSpreadsheet className="w-4 h-4 text-[#7621B0]" />
                          <h4 className="font-bold text-xs sm:text-sm text-white">EMI Calculator</h4>
                        </div>
                        <p className="text-xs text-[#D7E2EA]/80 leading-relaxed mb-2">
                          Developed an EMI calculator using programming concepts and math formulas for monthly loan installments.
                        </p>
                        <ul className="text-[11px] text-[#D7E2EA]/70 space-y-1 list-disc list-inside">
                          <li>Calculated EMI on loan amount, interest &amp; tenure.</li>
                          <li>Applied conditional logic for quick calculations.</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <FileSpreadsheet className="w-4 h-4 text-[#BE4C00]" />
                          <h4 className="font-bold text-xs sm:text-sm text-white">Payroll Management System</h4>
                        </div>
                        <p className="text-xs text-[#D7E2EA]/80 leading-relaxed mb-2">
                          Developed a payroll system to manage employee salary details and payroll calculations.
                        </p>
                        <ul className="text-[11px] text-[#D7E2EA]/70 space-y-1 list-disc list-inside">
                          <li>Calculations for basic salary, deductions &amp; net pay.</li>
                          <li>Organized employee data to simplify processing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Skills, Certifications & Activities Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Technical Skills */}
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-[#B600A8]" /> Technical &amp; Soft Skills
                      </h3>
                      <div className="space-y-2 text-xs text-[#D7E2EA]/80">
                        <p><strong>Accounting &amp; Finance:</strong> Financial Accounting, Cost Accounting, Banking Basics, Financial Reporting</p>
                        <p><strong>Taxation:</strong> GST Basics, Income Tax Fundamentals, Tax Calculation</p>
                        <p><strong>Tools &amp; Software:</strong> MS Excel (Formulas, Pivot Tables, Data Analysis), Tally (Basic), MS Word</p>
                        <p><strong>Data Handling:</strong> Data Entry, Financial Data Analysis, Record Management</p>
                        <p><strong>Soft Skills:</strong> Problem-solving, Quick Learner, Team Collaboration, Adaptability, Communication</p>
                      </div>
                    </div>

                    {/* Certifications, Activities & Languages */}
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-4">
                      {/* Certifications */}
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#BE4C00]" /> Certifications &amp; Courses
                        </h3>
                        <ul className="text-xs text-[#D7E2EA]/80 space-y-1">
                          <li>• <strong>NPTEL</strong> – Soft Skill Development | IIT Kharagpur</li>
                          <li>• <strong>Simplilearn</strong> – Introduction to Financial Management</li>
                          <li>• <strong>NASSCOM</strong> (FutureSkills Prime) – Acquiring Data</li>
                        </ul>
                      </div>

                      {/* Activities & Hobbies */}
                      <div className="border-t border-white/10 pt-3">
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-1.5">
                          <Heart className="w-4 h-4 text-[#7621B0]" /> Activities &amp; Hobbies
                        </h3>
                        <p className="text-xs text-[#D7E2EA]/80 mb-1">
                          <strong>Activities:</strong> Participated in college events, academic activities, and campus learning initiatives.
                        </p>
                        <p className="text-xs text-[#D7E2EA]/80">
                          <strong>Hobbies:</strong> Reading books, Dancing, Singing, Drawing
                        </p>
                      </div>

                      {/* Languages */}
                      <div className="border-t border-white/10 pt-3">
                        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 mb-1.5">
                          <Languages className="w-4 h-4 text-[#B600A8]" /> Languages
                        </h3>
                        <p className="text-xs text-[#D7E2EA]/80">
                          <strong>Tamil:</strong> Native &nbsp;|&nbsp; <strong>English:</strong> Fluent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};