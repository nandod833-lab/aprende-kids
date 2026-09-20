import React from 'react';
import { WorkbookPack } from '../types';

interface BookCoverProps {
  pack: WorkbookPack;
  className?: string;
}

// Maps each pack id to the exact high-res image extracted from the PDF
const PACK_IMAGE_MAP: Record<string, string> = {
  'raciocinio-logico': '/assets/pdf_extracted/caderno-2-memoria-atencao.png',
  'memoria-atencao': '/assets/pdf_extracted/caderno-3-foco-concentracao.png',
  'foco-concentracao': '/assets/pdf_extracted/caderno-1-raciocinio-logico.png',
  'percepcao-visual': '/assets/pdf_extracted/caderno-4-percepcao-visual.png',
  'funcoes-executivas': '/assets/pdf_extracted/caderno-6-orientacao-espacial.png',
  'orientacao-espacial': '/assets/pdf_extracted/caderno-5-funcoes-executivas.png',
  'coordenacao-motora': '/assets/pdf_extracted/caderno-7-coordenacao-motora.png',
  'matematica-numeracia': '/assets/pdf_extracted/caderno-8-matematica-numeracia.png'
};

export default function BookCover({ pack, className = '' }: BookCoverProps) {
  const imageSrc = PACK_IMAGE_MAP[pack.id] || '/assets/pdf_extracted/caderno-1-raciocinio-logico.png';

  return (
    <div className={`relative flex flex-col items-center justify-center my-2 ${className}`}>
      {/* Exact PDF Mockup image with alpha transparency */}
      <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
        <img
          src={imageSrc}
          alt={pack.title}
          className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain drop-shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
}
