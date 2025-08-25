interface FaqType {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqType[] = [
  {
    id: 'q1',
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 'q2',
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Absolutely! I’m open to **freelance and remote collaborations** worldwide. Share your project details, and we can discuss how to bring your ideas to life efficiently and on time.',
  },
  {
    id: 'q3',
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Yes! I can take your **Figma or Sketch designs** and turn them into **pixel-perfect, responsive, and high-performance websites or applications** with clean, maintainable code.',
  },
  {
    id: 'q4',
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Definitely. I enjoy working in **collaborative environments**, integrating front-end solutions seamlessly with backend APIs or systems to deliver smooth and reliable products.',
  },
  {
    id: 'q5',
    question: 'Are you available for full-time roles?',
    answer:
      'Yes, I’m open to **full-time opportunities** where I can contribute to building innovative products, grow with a passionate team, and deliver meaningful solutions to users.',
  },
];
