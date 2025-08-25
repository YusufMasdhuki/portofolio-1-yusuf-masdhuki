export interface TestimonialType {
  image: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export const testimonials: TestimonialType[] = [
  {
    image: '/images/airbnb-logo.png',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
    quote:
      '"Yusuf delivered clean and efficient code that made our app load faster and feel smoother. He’s a pleasure to work with."',
    stars: 5,
  },
  {
    image: '/images/coinbase-logo.png',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
    quote:
      '"Yusuf delivered clean and efficient code that made our app load faster and feel smoother. He’s a pleasure to work with."',
    stars: 5,
  },
  {
    image: '/images/webflow-logo.png',
    name: 'Sarah Liem',
    role: 'Product Manager at Techlynk',
    quote:
      '"Yusuf delivered clean and efficient code that made our app load faster and feel smoother. He’s a pleasure to work with."',
    stars: 5,
  },
];
