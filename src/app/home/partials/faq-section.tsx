'use client';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { faqData } from '@/constants/faq-data';
import { fadeInUp } from '@/lib/motion-variants';

const FaqSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      id='faq'
      className='custom-container pt-10 pb-6 lg:pt-20 lg:pb-12'
    >
      <div className='text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Frequently Asked Questions
        </h2>
        <p className='text-md mb-2 text-neutral-400 md:mb-8 lg:text-lg'>
          Got questions? Here are the answers to the ones we get asked the most.
        </p>
      </div>

      <FaqView />
    </motion.section>
  );
};

export default FaqSection;

const FaqView = () => {
  return (
    <div className='w-full'>
      <Accordion type='single' collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className='hover:text-primary-100 text-neutral-25 cursor-pointer hover:no-underline'>
              <span className='md:text-display-sm text-lg font-semibold'>
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className='md:text-md pl-10 text-sm text-neutral-400'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
