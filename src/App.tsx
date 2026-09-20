import React, { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import WorkbooksSection from './components/WorkbooksSection';
import InsideMaterialSection from './components/InsideMaterialSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import BonusesSection from './components/BonusesSection';
import OfferPricingSection from './components/OfferPricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import LegalModal from './components/LegalModal';
import { CHECKOUT_URLS } from './constants/checkout';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CHECKOUT_URLS.complete, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToWorkbooks = () => {
    const el = document.getElementById('workbooks-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = (plan?: 'basic' | 'complete' | unknown) => {
    const safePlan: 'basic' | 'complete' = plan === 'basic' ? 'basic' : 'complete';
    const url = CHECKOUT_URLS[safePlan];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedPlan(safePlan);
      setIsCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* 1. Hero Section */}
      <HeaderHero
        onCtaClick={scrollToPricing}
        onScrollDown={scrollToWorkbooks}
      />

      {/* 2. O Que Você Vai Receber (8 Workbooks) */}
      <WorkbooksSection
        onCtaClick={scrollToPricing}
      />

      {/* 2.1 Veja o Material Por Dentro (Carrossel Duplo Infinito) */}
      <InsideMaterialSection
        onCtaClick={scrollToPricing}
      />

      {/* 3. Benefícios do Aprende Kids */}
      <BenefitsSection
        onCtaClick={scrollToPricing}
      />

      {/* 4. Como Funciona o Aprende Kids? */}
      <HowItWorksSection />

      {/* 5. Para Quem é o Aprende Kids */}
      <TargetAudienceSection />

      {/* 6. Receba 4 Super Bônus */}
      <BonusesSection
        onCtaClick={scrollToPricing}
      />

      {/* 7. Oferta Especial & Preço (Plano Básico R$ 19,90 e Kit Completo 45% OFF) */}
      <OfferPricingSection
        onCtaClick={handleOpenCheckout}
      />

      {/* 8. Garantia 7 Dias */}
      <GuaranteeSection />

      {/* 9. Perguntas Frequentes */}
      <FaqSection />

      {/* 10. Rodapé */}
      <Footer
        onPrivacyClick={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onTermsClick={() => setLegalModal({ isOpen: true, type: 'terms' })}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        selectedPlan={selectedPlan}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Legal Privacy / Terms Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
      />
    </div>
  );
}
