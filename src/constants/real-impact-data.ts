interface RealImpactItemType {
  from: number;
  to: number;
  suffix: string;
  duration: number;
  label: string;
  image: string;
}

export const realImpactData: RealImpactItemType[] = [
  {
    from: 0,
    to: 2,
    suffix: '+',
    duration: 5,
    label: 'Years Experience',
    image: '/images/real-impact-1.png',
  },
  {
    from: 0,
    to: 99,
    suffix: '%',
    duration: 5,
    label: 'Client Satisfaction',
    image: '/images/real-impact-2.png',
  },
  {
    from: 0,
    to: 12,
    suffix: '+',
    duration: 5,
    label: 'Project Delivered',
    image: '/images/real-impact-3.png',
  },
];
