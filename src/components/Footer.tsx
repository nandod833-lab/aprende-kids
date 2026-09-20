import AprendeKidsLogo from './AprendeKidsLogo';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5">
        
        {/* Brand logo in footer */}
        <div className="opacity-90 scale-90">
          <AprendeKidsLogo size="small" />
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
          <button 
            onClick={onPrivacyClick}
            className="hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
          >
            Política de privacidade
          </button>
          <span>•</span>
          <button 
            onClick={onTermsClick}
            className="hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
          >
            Termos de uso
          </button>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-slate-400 space-y-1">
          <p>© Copyright Neureducar 2026. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-500">
            Aprende Kids® é uma marca registrada voltada para estimulação neurocognitiva e psicopedagógica infantil.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ambiente 100% protegido e criptografado</span>
        </div>

      </div>
    </footer>
  );
}
