import { Shield, CheckCircle2 } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="guarantee-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-lg text-center relative overflow-hidden">
          
          {/* Golden 7 Days Badge from PDF */}
          <div className="mx-auto mb-6 flex justify-center">
            <img
              src="/assets/pdf_extracted/selo-garantia-7-dias.png"
              alt="Garantia Incondicional de 7 Dias"
              className="w-32 sm:w-40 h-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center justify-center gap-2">
            <Shield className="w-7 h-7 text-amber-500" />
            <span>NÓS ASSUMIMOS O RISCO!</span>
          </h2>

          {/* Guarantee copy from PDF */}
          <div className="max-w-xl mx-auto space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Se você não ficar satisfeito(a) com o kit, <strong className="text-slate-900">devolvemos todo o seu dinheiro</strong> — basta enviar um e-mail, sem burocracia. Você tem <strong className="text-emerald-700 font-bold">7 dias de garantia incondicional</strong> para testar e aprovar o conteúdo.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm italic">
              Temos certeza de que isso não será necessário, porque sabemos a transformação que este material pode trazer para o seu trabalho e para a vida das suas crianças!
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Risco Zero • Devolução 100% Garantida</span>
          </div>

        </div>

      </div>
    </section>
  );
}
