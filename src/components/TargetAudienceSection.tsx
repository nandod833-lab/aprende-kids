import { TARGET_AUDIENCE } from '../data/content';
import { Check, Lightbulb } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section id="target-audience-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
            PARA QUEM É O APRENDE KIDS
          </h2>
          <div className="w-20 h-1.5 bg-rose-400 mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Se você deseja estimular a aprendizagem e apoiar o desenvolvimento infantil de forma prática, estruturada e divertida, o <strong>Aprende Kids</strong> foi criado para você.
          </p>
        </div>

        {/* Card with Original PDF Mockup + Audience checklist */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Real PDF Mockup */}
            <div className="w-full flex justify-center">
              <img 
                src="/assets/pdf_extracted/faixa-etaria-mockup.png" 
                alt="Aprende Kids para crianças de 3 a 11 anos"
                className="w-full max-w-sm h-auto object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-4">
                Desenvolvido especialmente para:
              </h3>

              {TARGET_AUDIENCE.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yellow Highlighted Box */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 shadow-md flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-400 text-slate-900 shrink-0 mt-0.5 shadow-sm">
            <Lightbulb className="w-6 h-6 text-slate-950 fill-amber-300" />
          </div>
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong className="text-amber-950 font-black text-sm sm:text-base block mb-1">
              Faixa Etária & Necessidades Especiais:
            </strong>
            Ideal para aplicar com <strong className="text-slate-950 font-bold">crianças de 3 a 11 anos em fase escolar</strong>, incluindo com 
            <strong className="text-rose-700 font-bold"> TEA, TDAH, AH/SD, Transtornos de Aprendizagem</strong> e outros desafios do neurodesenvolvimento, que apresentam dificuldades em leitura, escrita, atenção, raciocínio e desempenho acadêmico.
          </div>
        </div>

      </div>
    </section>
  );
}
