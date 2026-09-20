import { Mail, Printer, HeartHandshake } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
            COMO FUNCIONA O APRENDE KIDS?
          </h2>
          <div className="w-20 h-1.5 bg-sky-400 mx-auto rounded-full mt-3" />
        </div>

        {/* 3 Step Cards with original PDF illustrations */}
        <div className="space-y-10 sm:space-y-14">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="w-full max-w-xs flex justify-center mb-4">
              <img
                src="/assets/pdf_extracted/passo-1.png"
                alt="Passo 1 - Receba tudo por e-mail"
                className="w-full max-h-48 object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mb-2">
              Receba tudo por e-mail!
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Após a confirmação da compra, você recebe acesso imediato ao <strong>Aprende Kids</strong> diretamente no seu e-mail. Todos os materiais ficam disponíveis em PDF, com acesso simples, rápido e vitalício.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="w-full max-w-xs flex justify-center mb-4">
              <img
                src="/assets/pdf_extracted/passo-2.png"
                alt="Passo 2 - Baixe os arquivos prontos"
                className="w-full max-h-48 object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mb-2">
              Baixe os arquivos prontos
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Os recursos são organizados por áreas da aprendizagem e estão prontos para impressão. Escolha as atividades mais adequadas para a idade e a necessidade de cada criança e imprima no seu ritmo!
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="w-full max-w-xs flex justify-center mb-4">
              <img
                src="/assets/pdf_extracted/passo-3.png"
                alt="Passo 3 - Aplique com os pequenos"
                className="w-full max-h-48 object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-black text-slate-900 mb-2">
              Aplique com os pequenos!
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Utilize os materiais em casa, na escola, em sessões, atendimentos ou intervenções terapêuticas. Recursos desenvolvidos para tornar o aprendizado mais prazeroso e significativo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
