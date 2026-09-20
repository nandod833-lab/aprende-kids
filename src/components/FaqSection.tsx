import { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  // Allow toggling accordion
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-black mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mt-3" />
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left font-display font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-blue-600 font-black">?</span>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
