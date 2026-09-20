import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  QrCode, 
  CreditCard, 
  FileText, 
  Lock, 
  Copy, 
  Check, 
  Download, 
  Sparkles,
  Zap,
  Flame,
  ArrowRight
} from 'lucide-react';
import { CHECKOUT_URLS } from '../constants/checkout';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlan?: 'basic' | 'complete';
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, selectedPlan = 'complete', onClose }: CheckoutModalProps) {
  const [activePlan, setActivePlan] = useState<'basic' | 'complete'>(selectedPlan);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'boleto'>('pix');
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sync activePlan when modal is opened with specific plan
  useEffect(() => {
    setActivePlan(selectedPlan);
  }, [selectedPlan, isOpen]);

  if (!isOpen) return null;

  const isComplete = activePlan === 'complete';
  const priceFormatted = isComplete ? '37,00' : '19,90';
  const priceOld = isComplete ? '67,00' : '39,90';

  const mockPixKey = isComplete 
    ? "00020126580014br.gov.bcb.pix0136aprende-kids-37-rec-psico-2026520400005303986540537.005802BR5925NEUREDUCAR LTDA6009SAO PAULO62070503***6304E8A2"
    : "00020126580014br.gov.bcb.pix0136aprende-kids-1990-basico-2026520400005303986540519.905802BR5925NEUREDUCAR LTDA6009SAO PAULO62070503***6304D1B9";

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(mockPixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    const checkoutUrl = CHECKOUT_URLS[activePlan];
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      setTimeout(() => {
        setIsProcessing(false);
        setStep('success');
      }, 1000);
    }
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div 
        id="checkout-modal-container"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden my-6 transition-all"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center font-black text-sm">
              ★
            </div>
            <div>
              <h3 className="font-display font-black text-base sm:text-lg leading-none">
                Inscrição Aprende Kids
              </h3>
              <p className="text-[11px] text-blue-100 font-semibold mt-0.5">
                {isComplete 
                  ? 'Kit Completo Oficial + 4 Super Bônus Inclusos' 
                  : 'Pacote Básico • 8 Cadernos de Atividades'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            {/* Plan Switcher Tabs */}
            <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 border border-slate-200 text-xs font-black">
              <button
                type="button"
                onClick={() => setActivePlan('basic')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  !isComplete 
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Básico</span>
                <span className="text-[11px] font-bold text-slate-500">R$ 19,90</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlan('complete')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer relative ${
                  isComplete 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Completo (Mais Escolhido)</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-black ${isComplete ? 'bg-amber-300 text-slate-950' : 'bg-rose-100 text-rose-700'}`}>
                  -45%
                </span>
              </button>
            </div>

            {/* Summary Box */}
            <div className={`rounded-2xl p-4 flex items-center justify-between border ${
              isComplete 
                ? 'bg-blue-50/80 border-blue-200' 
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Plano Selecionado:
                </span>
                <span className="text-sm font-black text-slate-900 block">
                  {isComplete ? 'Kit Completo (+4 Bônus)' : 'Pacote Básico (Sem Bônus)'}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xs font-bold text-slate-400 line-through">
                    R$ {priceOld}
                  </span>
                  <span className="text-2xl font-display font-black text-emerald-600">
                    R$ {priceFormatted}
                  </span>
                </div>
              </div>

              <div>
                {isComplete ? (
                  <div className="text-right">
                    <span className="text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wide block mb-1">
                      45% Desconto
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full block">
                      Mais Escolhido
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActivePlan('complete')}
                    className="text-[11px] font-black text-blue-700 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer text-left block"
                  >
                    <span>Mudar para Completo?</span>
                    <span className="block text-[10px] text-emerald-700 font-bold">+4 Bônus com 45% OFF</span>
                  </button>
                )}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Seu E-mail (Onde você receberá os PDFs)
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: seu-email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  Celular / Telefone com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-sm font-medium"
                />
              </div>
            </div>

            {/* Payment method selector */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Escolha a Forma de Pagamento
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-black">PIX</span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-200/60 px-1.5 rounded">
                    Imediato
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'credit'
                      ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-black">Cartão</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isComplete ? 'Até 5x' : 'Até 2x'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'boleto'
                      ? 'border-amber-500 bg-amber-50 text-amber-800 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <FileText className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-black">Boleto</span>
                  <span className="text-[10px] text-slate-500 font-medium">1-3 dias</span>
                </button>
              </div>
            </div>

            {/* Dynamic payment instructions */}
            {paymentMethod === 'pix' && (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Liberação instantânea com envio imediato dos materiais para o seu e-mail!</span>
              </div>
            )}

            {paymentMethod === 'credit' && (
              <div className="space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs">
                <div className="text-slate-600 font-semibold">Opção de parcelamento:</div>
                {isComplete ? (
                  <>
                    <div className="p-2 rounded-lg bg-white border border-slate-300 flex justify-between font-bold text-slate-800">
                      <span>1x de R$ 37,00 (sem juros)</span>
                      <span className="text-emerald-600">Recomendado</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex justify-between text-slate-600">
                      <span>5x de R$ 8,05</span>
                      <span>Total R$ 40,25</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 rounded-lg bg-white border border-slate-300 flex justify-between font-bold text-slate-800">
                      <span>1x de R$ 19,90 (sem juros)</span>
                      <span className="text-emerald-600">Recomendado</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex justify-between text-slate-600">
                      <span>2x de R$ 10,34</span>
                      <span>Total R$ 20,68</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-display font-black text-base sm:text-lg uppercase tracking-wide shadow-xl hover:shadow-emerald-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isProcessing ? (
                <span>Gerando seu acesso...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Concluir e Liberar Materiais (R$ {priceFormatted})</span>
                </>
              )}
            </button>

            {/* Guarantees */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-semibold pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Pagamento Seguro
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                7 Dias de Garantia
              </span>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-1">
                Pedido Gerado com Sucesso!
              </h4>
              <p className="text-sm text-slate-600">
                Parabéns, <strong className="text-slate-900">{name || 'Educador(a)'}</strong>! Seu pedido do <strong>{isComplete ? 'Kit Completo Aprende Kids' : 'Pacote Básico Aprende Kids'}</strong> está reservado.
              </p>
            </div>

            {paymentMethod === 'pix' ? (
              <div className="bg-slate-50 border-2 border-emerald-200 rounded-2xl p-4 text-center space-y-3">
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wide block">
                  Pague com Pix para liberação imediata:
                </span>
                
                {/* QR Code preview */}
                <div className="w-40 h-40 mx-auto bg-white p-2 rounded-xl border border-slate-300 shadow-sm flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 rounded flex flex-col items-center justify-center text-white p-2 text-center text-xs">
                    <QrCode className="w-20 h-20 text-white mb-1" />
                    <span className="text-[10px] font-mono">PIX R$ {priceFormatted}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={mockPixKey}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-[11px] font-mono text-slate-600 truncate"
                  />
                  <button
                    onClick={handleCopyPix}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900">
                Um comprovante e os links de acesso foram encaminhados para <strong>{email || 'seu e-mail'}</strong>.
              </div>
            )}

            {/* Instant Sample Download Button */}
            <div className="pt-2">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Download de demonstração iniciado! Seus arquivos também foram enviados ao e-mail informado.');
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Amostra Gratuita Agora (PDF)</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Fechar e voltar para a página
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
