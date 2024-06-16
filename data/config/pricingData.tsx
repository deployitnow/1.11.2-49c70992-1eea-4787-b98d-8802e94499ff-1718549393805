import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Your all in one AI platform. For free.',
    features: ['Multiple AI Platforms ', '2nd Best Result', 'Limited Access'],
    featured: false,
    highlighted: true,
    cta: 'Sign up',
  },
  {
    name: 'Freedom',
    id: 'tier-2',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$19.99', '2': '$49.99' },
    description:
      'Unparalleled results & easy automations to give back the freedom you deserve.',
    features: [
      'Top Results',
      'Premium AI Platforms',
      'Prompt Helper',
      'Executions',
      'Automations',
      'AI Agents',
    ],
    featured: true,
    highlighted: false,
    cta: 'Get started',
    soldOut: false,
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '7b2bd1c9-df27-4c93-8a53-3f8d10132822',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
];
