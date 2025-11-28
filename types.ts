import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Food' | 'Beauty' | 'Living' | 'Tech';
  imageUrl: string;
  description: string;
  beforeUrl?: string;
  increase?: string; // e.g., "매출 200% 증가"
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  client: string;
  content: string;
  role: string;
}