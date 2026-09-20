import { BENEFITS } from '../data/content';
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Zap, 
  Sparkles, 
  Star, 
  Smartphone 
} from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export default function BenefitsSection({ onCtaClick }: BenefitsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-emerald-600" />;
      case 'Target': return <Target className="w-7 h-7 text-amber-600" />;
      case 'Zap': return <Zap className="w-7 h-7 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-purple-600" />;
      case 'Star': return <Star className="w-7 h-7 text-amber-500 fill-amber-400" />;
      case 'Smartphone':
      case 'TvOff': 
        return (
          <div className="relative">
            <Smartphone className="w-7 h-7 text-rose-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-rose-600 rotate-45" />
            </div>
          </div>
        );
      default: return <CheckCircle2 className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <section id="benefits-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-100/60 border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 mb-3 shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 uppercase tracking-tight">
            BENEFÍCIOS DO APRENDE KIDS
          </h2>
          <div className="w-20 h-1.5 bg-emerald-400 mx-auto rounded-full mt-3" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              id={`benefit-${item.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className={`p-3 rounded-2xl ${item.iconBg} shrink-0 mt-0.5 shadow-sm`}>
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center max-w-md mx-auto">
          <button
            onClick={() => onCtaClick()}
            id="benefits-cta-button"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-display font-black text-lg sm:text-xl tracking-wide uppercase shadow-xl hover:shadow-emerald-500/40 transform active:scale-95 transition-all duration-200 border-2 border-emerald-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
            <span>QUERO OS BENEFÍCIOS DO KIT!</span>
          </button>
        </div>

      </div>
    </section>
  );
}
