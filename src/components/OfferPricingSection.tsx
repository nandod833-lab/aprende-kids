import { 
  Check, 
  X, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { CHECKOUT_URLS } from '../constants/checkout';

interface OfferPricingSectionProps {
  onCtaClick?: (plan: 'basic' | 'complete') => void;
}

export default function OfferPricingSection({ onCtaClick }: OfferPricingSectionProps) {
  return (
    <section id="pricing-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2 block">
            Planos Disponíveis
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto">
            Acesso vitalício e imediato aos materiais em formato digital (PDF), prontos para imprimir e aplicar.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* ========================================================================= */}
          {/* PLANO 1: PACOTE BÁSICO (R$ 19,90)                                         */}
          {/* ========================================================================= */}
          <div 
            id="plan-basic"
            className="bg-white text-slate-900 rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-display font-black text-xl text-slate-900">
                  Pacote Básico
                </h3>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  Apenas os Cadernos
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-5">
                Ideal para quem precisa somente das atividades práticas essenciais.
              </p>

              {/* Price */}
              <div className="pb-5 border-b border-slate-100 text-center">
                <span className="text-xs font-semibold text-slate-400 block line-through">
                  De R$ 39,90
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg font-bold text-slate-700">R$</span>
                  <span className="text-4xl font-display font-black text-slate-900 tracking-tight">
                    19
                  </span>
                  <span className="text-lg font-bold text-slate-900">,90</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  Pagamento único • Sem mensalidades
                </span>
              </div>

              {/* Checklist */}
              <div className="py-5 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>8 Cadernos de Atividades:</strong> Raciocínio Lógico, Memória e Atenção, Foco e Concentração, Percepção Visual, Funções Executivas, Orientação Espacial, Coordenação Motora e Matemática.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mais de 50 atividades em alta resolução (PDF)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pronto para impressão em folha A4</span>
                </div>
                <div className="flex items-start gap-2.5 text-rose-500 font-medium line-through decoration-rose-500 decoration-2">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Não inclui os 4 Super Bônus de apoio</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URLS.basic}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-choose-basic"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center text-center cursor-pointer shadow-md"
              >
                Escolher Pacote Básico
              </a>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PLANO 2: KIT COMPLETO (R$ 37,00 COM 45% OFF) - DESTAQUE                   */}
          {/* ========================================================================= */}
          <div 
            id="plan-complete"
            className="bg-gradient-to-b from-blue-700 to-indigo-800 text-white rounded-2xl p-5 sm:p-7 border-2 border-amber-300 shadow-2xl flex flex-col justify-between relative"
          >
            {/* Tag Mais Escolhido */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="bg-amber-300 text-slate-950 font-display font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm">
                ★ Mais Escolhido
              </span>
              <span className="bg-rose-500/90 text-white text-xs font-bold uppercase px-2.5 py-0.5 rounded-full">
                45% OFF
              </span>
            </div>

            <div>
              {/* Header */}
              <h3 className="font-display font-black text-2xl text-amber-300 leading-tight">
                Kit Completo + 4 Bônus
              </h3>
              <p className="text-xs text-blue-100 mt-0.5 mb-3">
                A coleção completa com todos os cadernos e materiais exclusivos de intervenção.
              </p>

              {/* Clean Mockup Image */}
              <div className="my-4 flex justify-center">
                <img
                  src="/assets/pdf_extracted/offer-mockup.png"
                  alt="Aprende Kids Kit Completo"
                  className="w-full max-w-[280px] sm:max-w-[340px] h-48 sm:h-60 object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Price */}
              <div className="py-3 border-y border-white/15 text-center sm:text-left">
                <span className="text-xs font-semibold text-blue-200 block line-through">
                  De R$ 67,00 por apenas
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                    37
                  </span>
                  <span className="text-xl font-bold text-white">,00</span>
                </div>
                <span className="text-[11px] text-amber-200 font-medium block mt-0.5">
                  ou até 5x de R$ 8,05 no cartão • Acesso vitalício
                </span>
              </div>

              {/* Checklist */}
              <div className="py-4 space-y-2.5 text-xs sm:text-sm text-blue-50">
                <div className="flex items-start gap-2.5 font-bold text-white">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Todos os 8 Cadernos de Atividades (+50 ferramentas em PDF)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bônus 1:</strong> Mapa de Habilidades Cognitivas</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bônus 2:</strong> Modelo Estruturado de PDI (Word Editável)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bônus 3:</strong> Guia Prático de Dificuldades de Aprendizagem</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bônus 4:</strong> Catálogo com +30 Jogos Cognitivos Caseiros</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URLS.complete}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-choose-complete"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-300 hover:bg-amber-400 text-slate-950 font-display font-black text-sm uppercase tracking-wide shadow-lg transition-all flex items-center justify-center text-center cursor-pointer"
              >
                Garantir Kit Completo (45% OFF)
              </a>
              <span className="text-[11px] text-blue-200 text-center block mt-1.5 font-medium">
                Liberação imediata no seu e-mail após a compra
              </span>
            </div>
          </div>

        </div>

        {/* Minimal Trust Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia incondicional de 7 dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-sky-400" />
            <span>Ambiente seguro e criptografado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Envio imediato dos materiais</span>
          </div>
        </div>

      </div>
    </section>
  );
}
