import React from 'react';
import { WORKBOOK_PACKS } from '../data/content';
import BookCover from './BookCover';

interface WorkbooksSectionProps {
  onCtaClick: () => void;
}

export default function WorkbooksSection({ onCtaClick }: WorkbooksSectionProps) {
  // Mapping each area to its exact emoji matching the PDF
  const getEmojiForPack = (id: string) => {
    switch (id) {
      case 'raciocinio-logico': return '🧩';
      case 'memoria-atencao': return '🧠';
      case 'foco-concentracao': return '🎯';
      case 'percepcao-visual': return '👁️';
      case 'funcoes-executivas': return '⚙️';
      case 'orientacao-espacial': return '🧭';
      case 'coordenacao-motora': return '✍️';
      case 'matematica-numeracia': return '🔢';
      default: return '📚';
    }
  };

  return (
    <section id="workbooks-section" className="defer-render py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center justify-center gap-2">
            <span>📦</span>
            <span>O QUE VOCÊ VAI RECEBER</span>
          </h2>

          {/* Intro text from PDF */}
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify sm:text-center max-w-2xl mx-auto">
            Tenha acesso a uma coleção exclusiva de recursos psicopedagógicos organizados em <strong className="text-slate-900 font-extrabold">8 ÁREAS</strong> essenciais da aprendizagem infantil. Fundamentados na <strong className="text-slate-900 font-extrabold">neurociência</strong> e na <strong className="text-slate-900 font-extrabold">psicopedagogia</strong>, os materiais unem ludicidade, criatividade e intencionalidade pedagógica para tornar o aprendizado mais leve, envolvente e eficaz. Veja tudo o que você receberá:
          </p>
        </div>

        {/* The 8 Items in vertical sequence matching the PDF */}
        <div className="space-y-10 sm:space-y-14">
          {WORKBOOK_PACKS.map((pack) => (
            <div 
              key={pack.id} 
              id={`pack-item-${pack.id}`}
              className="flex flex-col items-center text-center max-w-xl mx-auto bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* 1. Capa no topo (EM CIMA) */}
              <div className="w-full flex justify-center mb-4">
                <BookCover pack={pack} />
              </div>

              {/* 2. Título */}
              <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-3 flex items-center justify-center gap-2">
                <span>{getEmojiForPack(pack.id)}</span>
                <span>{pack.title}</span>
              </h3>

              {/* 3. Descrição (EM BAIXO) */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-center max-w-lg">
                {pack.description}
              </p>
            </div>
          ))}
        </div>

        {/* Green CTA Button at the bottom of this section */}
        <div className="mt-14 text-center max-w-md mx-auto">
          <button
            onClick={() => onCtaClick()}
            id="workbooks-cta-button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-display font-black text-lg sm:text-xl tracking-wide uppercase shadow-xl hover:shadow-emerald-500/40 transform active:scale-95 transition-all duration-200 border-2 border-emerald-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>👉</span>
            <span>QUERO TER ACESSO AGORA!</span>
          </button>
        </div>

      </div>
    </section>
  );
}
