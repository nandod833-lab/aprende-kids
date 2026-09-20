import React, { useState } from 'react';
import { Sparkles, ZoomIn, X, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

interface InsideMaterialSectionProps {
  onCtaClick?: () => void;
}

interface ActivityImage {
  id: string;
  src: string;
  alt: string;
}

interface CarouselImageCardProps {
  key?: string;
  item: ActivityImage;
  onClick: () => void;
}

function CarouselImageCard({ 
  item, 
  onClick 
}: CarouselImageCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 w-48 sm:w-60 bg-white rounded-2xl p-2 shadow-lg border border-slate-700/80 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
    >
      {/* Image Container with aspect ratio */}
      <div className="relative rounded-xl overflow-hidden bg-slate-800 aspect-[3/4] flex items-center justify-center">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
          <ZoomIn className="w-4 h-4 text-amber-300" />
          <span>Clique para ampliar</span>
        </div>
      </div>
    </div>
  );
}

export default function InsideMaterialSection({ onCtaClick }: InsideMaterialSectionProps) {
  const [selectedImage, setSelectedImage] = useState<ActivityImage | null>(null);

  // Row 1 Images
  const row1Images: ActivityImage[] = [
    {
      id: 'esc-01',
      src: '/assets/activities/esc-01.webp',
      alt: 'Atividade Cognitiva 01'
    },
    {
      id: 'esc-02',
      src: '/assets/activities/esc-02.webp',
      alt: 'Atividade Cognitiva 02'
    },
    {
      id: 'esc-03',
      src: '/assets/activities/esc-03.webp',
      alt: 'Atividade Cognitiva 03'
    },
    {
      id: 'esc-06',
      src: '/assets/activities/esc-06.webp',
      alt: 'Atividade Cognitiva 06'
    },
    {
      id: 'ex-01',
      src: '/assets/activities/ex-01.webp',
      alt: 'Exemplo de Exercício 01'
    }
  ];

  // Row 2 Images
  const row2Images: ActivityImage[] = [
    {
      id: 'ex-03',
      src: '/assets/activities/ex-03.webp',
      alt: 'Exemplo de Exercício 03'
    },
    {
      id: 'ex-04',
      src: '/assets/activities/ex-04.webp',
      alt: 'Exemplo de Exercício 04'
    },
    {
      id: 'ex-05',
      src: '/assets/activities/ex-05.webp',
      alt: 'Exemplo de Exercício 05'
    },
    {
      id: 'ex-06',
      src: '/assets/activities/ex-06.webp',
      alt: 'Exemplo de Exercício 06'
    },
    {
      id: 'esc-01-rep',
      src: '/assets/activities/esc-01.webp',
      alt: 'Atividade Cognitiva Extra'
    },
    {
      id: 'esc-02-rep',
      src: '/assets/activities/esc-02.webp',
      alt: 'Atividade Cognitiva 02'
    }
  ];

  // Duplicated arrays to ensure 100% seamless infinite marquee
  const track1 = [...row1Images, ...row1Images];
  const track2 = [...row2Images, ...row2Images];

  return (
    <section id="inside-material-section" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 mb-8 sm:mb-12 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-inner">
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Transparência e Qualidade Pedagógica</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
          VEJA O MATERIAL POR DENTRO
        </h2>
        
        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Atividades coloridas, ilustradas e cientificamente estruturadas para engajar as crianças com prazer, foco e resultados reais.
        </p>

        {/* Helper feature pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Formato A4 pronto para imprimir</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Alta resolução (300 DPI)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Passe o mouse ou toque para pausar</span>
          </div>
        </div>

      </div>

      {/* DUAL INFINITE MARQUEE CONTAINER */}
      <div className="relative w-full space-y-4 sm:space-y-6">
        
        {/* Subtle Edge Fade Gradients for Seamless Look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20" />

        {/* TRACK 1: Moves smoothly to the Left */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-left pause-on-hover flex gap-4 sm:gap-6 items-center py-2">
            {track1.map((item, index) => (
              <CarouselImageCard
                key={`track1-${item.id}-${index}`}
                item={item}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* TRACK 2: Moves smoothly to the Right */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-right pause-on-hover flex gap-4 sm:gap-6 items-center py-2">
            {track2.map((item, index) => (
              <CarouselImageCard
                key={`track2-${item.id}-${index}`}
                item={item}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA to encourage taking action */}
      {onCtaClick && (
        <div className="mt-10 sm:mt-12 text-center relative z-10 px-4">
          <button
            type="button"
            onClick={() => onCtaClick && onCtaClick()}
            id="btn-inside-material-cta"
            className="inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-black text-sm sm:text-base uppercase tracking-wider shadow-xl hover:shadow-amber-400/40 transform active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>QUERO GARANTIR ESTE MATERIAL COMPLETO</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
          <p className="mt-2 text-xs text-slate-400 font-medium">
            Receba todos os 8 cadernos em PDF imediatamente no seu e-mail
          </p>
        </div>
      )}

      {/* LIGHTBOX MODAL TO VIEW HIGH RESOLUTION SHEET */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white text-slate-900 rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col items-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              aria-label="Fechar pré-visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Preview */}
            <div className="w-full max-h-[65vh] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200 shadow-inner mt-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Footer action */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Material diagramado para impressão em tamanho A4
              </span>
              {onCtaClick && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImage(null);
                    onCtaClick();
                  }}
                  className="w-full sm:w-auto py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Garantir Cadernos
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
