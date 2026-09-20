import AprendeKidsLogo from './AprendeKidsLogo';
import { 
  CheckCircle2, 
  ArrowDown, 
  Sparkles, 
  BookOpen, 
  Download,
  FileCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface HeaderHeroProps {
  onCtaClick: () => void;
  onScrollDown: () => void;
}

export default function HeaderHero({ onCtaClick, onScrollDown }: HeaderHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2263d4] via-[#1d57c2] to-[#1a4fad] text-white pt-8 pb-14 px-4 sm:px-6 lg:px-8">
      {/* Decorative colorful background floating bubbles/stars */}
      <div className="absolute top-4 left-6 text-amber-300 opacity-60 text-2xl select-none animate-pulse">✨</div>
      <div className="absolute top-20 right-10 text-yellow-300 opacity-60 text-3xl select-none">⭐</div>
      <div className="absolute bottom-10 left-12 text-sky-200 opacity-40 text-2xl select-none">🎨</div>
      <div className="absolute top-1/2 -right-8 w-40 h-40 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-10 w-44 h-44 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Brand Logo */}
        <div className="mb-4">
          <AprendeKidsLogo size="large" />
        </div>

        {/* Yellow Ribbon / Banner */}
        <div className="relative mb-6 max-w-xl w-full px-2">
          <div className="bg-amber-300 border-2 border-amber-400 text-slate-900 rounded-2xl py-3 px-4 sm:px-6 shadow-xl transform -rotate-0.5 hover:rotate-0 transition-transform">
            <h2 className="font-display font-black text-rose-600 tracking-wide text-lg sm:text-2xl uppercase leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              RECURSOS PSICOPEDAGÓGICOS
            </h2>
            <p className="font-display font-bold text-sky-950 text-sm sm:text-base tracking-normal mt-0.5">
              para a APRENDIZAGEM INFANTIL
            </p>
          </div>
        </div>

        {/* Central Visual Showcase / Original PDF Bundle Mockup */}
        <div className="relative w-full max-w-lg my-2 sm:my-4 flex justify-center items-center">
          <picture>
            <source
              srcSet="/assets/hero-mockup.webp"
              type="image/webp"
            />
            <img
              src="/assets/hero-mockup.png"
              alt="Coleção de Recursos Psicopedagógicos para Aprendizagem Infantil"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              width="1200"
              height="900"
              sizes="(max-width: 640px) 100vw, 512px"
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-2xl"
            />
          </picture>
        </div>

        {/* Feature description card */}
        <div className="mt-3 mb-6 max-w-xl bg-white/95 text-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-white/50 text-center">
          <p className="text-sm sm:text-base font-semibold leading-relaxed text-slate-700 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 shrink-0 hidden sm:inline" />
            <span>
              Coleção completa com <strong className="text-indigo-900 font-black">mais de 50 ferramentas</strong> para desenvolver múltiplas 
              <span className="text-rose-600 font-black"> habilidades nas crianças</span> como <strong className="text-slate-900">memória, atenção, raciocínio, percepção e coordenação motora</strong>.
            </span>
          </p>
        </div>

        {/* High Conversion Green CTA Button */}
        <div className="w-full max-w-md px-2">
          <button
            onClick={onCtaClick}
            id="hero-cta-button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-display font-black text-lg sm:text-xl tracking-wide uppercase shadow-2xl hover:shadow-emerald-500/50 transform active:scale-95 transition-all duration-200 border-2 border-emerald-300 flex items-center justify-center gap-3 animate-pulse-slow cursor-pointer"
          >
            <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
            <span>QUERO MEU KIT AGORA!</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={onScrollDown}
          className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-200 hover:text-white transition-colors cursor-pointer"
        >
          <span>👇 Desça a página</span>
        </button>

      </div>
    </section>
  );
}
