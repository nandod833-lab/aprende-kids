import React from 'react';
import { BONUSES } from '../data/content';
import { Gift, CheckCircle2 } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

const BONUS_IMAGE_MAP: Record<number, string> = {
  1: '/assets/pdf_extracted/bonus-1-mapa-habilidades.png',
  2: '/assets/pdf_extracted/bonus-2-pdi.png',
  3: '/assets/pdf_extracted/bonus-3-guia-dificuldades.png',
  4: '/assets/pdf_extracted/bonus-4-catalogo-jogos.png'
};

export default function BonusesSection({ onCtaClick }: BonusesSectionProps) {
  return (
    <section id="bonuses-section" className="defer-render py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-black mb-3">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>PRESENTES EXCLUSIVOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
            RECEBA 4 SUPER BÔNUS
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mt-3 mb-3" />
          <p className="text-slate-700 font-bold text-base sm:text-lg">
            Comprando agora, você leva presentes especiais!
          </p>
        </div>

        {/* 4 Bonuses in vertical stack matching PDF */}
        <div className="space-y-12 sm:space-y-16">
          {BONUSES.map((bonus) => {
            const imageSrc = BONUS_IMAGE_MAP[bonus.bonusNumber];

            return (
              <div
                key={bonus.id}
                id={`bonus-item-${bonus.bonusNumber}`}
                className="flex flex-col items-center text-center max-w-lg mx-auto bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm"
              >
                {/* Real PDF Bonus Mockup Image */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={imageSrc}
                    alt={bonus.title}
                    className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain drop-shadow-md"
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-3">
                  <span className="text-amber-600 font-black">BÔNUS {bonus.bonusNumber}: </span>
                  <span>{bonus.title}</span>
                </h3>

                {/* Description from PDF */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Pricing comparison: DE 45 REAIS -> POR APENAS R$ 0 */}
                <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl">
                  <span className="text-xs sm:text-sm font-bold text-rose-500 line-through">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-emerald-700 tracking-wide uppercase">
                    {bonus.currentPrice}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Green CTA Button */}
        <div className="mt-12 text-center max-w-md mx-auto">
          <button
            onClick={onCtaClick}
            id="bonuses-cta-button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-display font-black text-lg sm:text-xl tracking-wide uppercase shadow-xl hover:shadow-emerald-500/40 transform active:scale-95 transition-all duration-200 border-2 border-emerald-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
            <span>QUERO GARANTIR MEUS BÔNUS!</span>
          </button>
        </div>

      </div>
    </section>
  );
}
