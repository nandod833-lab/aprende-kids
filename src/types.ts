export interface WorkbookPack {
  id: string;
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  badgeBg: string;
  description: string;
  coverTitle: string;
  sampleCount: number;
  previewImages: string[];
  skills: string[];
}

export interface Benefit {
  id: string;
  title: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  description: string;
}

export interface BonusItem {
  id: string;
  bonusNumber: number;
  title: string;
  icon: string;
  description: string;
  originalPrice: string;
  currentPrice: string;
  tagColor: string;
  color: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
