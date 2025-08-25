'use client';
import { motion } from 'motion/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import TestimonialCard from '@/components/testimonial-card';
import { Marquee } from '@/components/ui/marquee';

import { testimonials } from '@/constants/testimonial-data';
import { fadeInUp } from '@/lib/motion-variants';

const TrustedByTeams = () => {
  const [ref, Inview] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial='hidden'
      animate={Inview ? 'visible' : 'hidden'}
      id='testimonials'
      className='custom-container relative py-10 lg:py-20'
    >
      <div className='relative z-20 text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Trusted by Teams, Valued by Clients
        </h2>
        <p className='text-md mb-6 text-neutral-400 md:mb-16 lg:text-lg'>
          A few kind words from the people behind the projects Yusuf helped
          bring to life.
        </p>
      </div>

      {/* gradient decorations */}
      <div className='pointer-events-none absolute inset-y-0 left-[15px] z-10 w-[15%] bg-gradient-to-r from-black to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-[15px] z-10 w-[15%] bg-gradient-to-l from-black to-transparent' />

      <Marquee className='[--gap:20px]'>
        {testimonials.map((item, i) => (
          <TestimonialCard
            key={i}
            image={item.image}
            name={item.name}
            role={item.role}
            quote={item.quote}
            stars={item.stars}
          />
        ))}
      </Marquee>
    </motion.section>
  );
};

export default TrustedByTeams;
