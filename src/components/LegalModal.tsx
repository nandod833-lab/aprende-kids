import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden my-6">
        <div className="bg-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-display font-black text-lg">
              {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-slate-600 text-xs sm:text-sm space-y-4 max-h-[60vh] overflow-y-auto leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                A <strong>Neureducar / Aprende Kids</strong> preza pela segurança e confidencialidade dos seus dados pessoais. Seus dados cadastrais (como nome, e-mail e telefone) são utilizados exclusivamente para a entrega dos arquivos digitais, emissão de comprovantes e comunicação de suporte.
              </p>
              <p>
                Não comercializamos nem compartilhamos suas informações com terceiros para fins publicitários não autorizados. Os pagamentos são processados através de gateways certificados com criptografia de ponta a ponta (SSL 256 bits).
              </p>
              <p>
                Você pode a qualquer momento solicitar a alteração ou remoção dos seus dados da nossa base entrando em contato com nosso time de atendimento.
              </p>
            </>
          ) : (
            <>
              <p>
                Ao adquirir os materiais do <strong>Aprende Kids</strong>, você recebe uma licença individual e intransferível para utilizar os recursos em ambientes familiares, pedagógicos, clínicos e institucionais.
              </p>
              <p>
                <strong>É estritamente proibido:</strong> revender, sublicenciar, compartilhar em grupos públicos de mensagens, comercializar em marketplaces ou distribuir os arquivos de forma gratuita ou onerosa.
              </p>
              <p>
                <strong>Garantia de 7 dias:</strong> Caso deseje solicitar o cancelamento e reembolso do valor pago dentro do prazo legal de 7 dias a contar da aprovação da compra, basta contatar nosso suporte.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
