'use client';

import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { realImpactData } from '@/constants/real-impact-data';
import { CounterProps } from '@/interfaces/counter-props';

const Counter: React.FC<CounterProps> = ({ from, to, duration, suffix }) => {
  const [currentValue, setCurrentValue] = useState(from);
  const controls = useAnimation();
  const [ref, Inview] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (Inview) {
      let start = from;
      const end = to;
      const frameRate = 60;
      const increment = (end - start) / (duration * frameRate);
      let currentFrame = 0;
      const totalFrames = duration * frameRate;

      const interval = setInterval(() => {
        start += increment;
        currentFrame++;
        if (currentFrame >= totalFrames) {
          start = end;
          clearInterval(interval);
        }
        setCurrentValue(Math.round(start));
      }, 1000 / frameRate);
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      return () => clearInterval(interval);
    }
  }, [Inview, controls, from, to, duration]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      style={{ opacity: 0, y: 20 }}
      className='text-[40px] leading-10.5 font-bold md:text-[80px] md:leading-21.5'
    >
      {currentValue}
      {suffix}
    </motion.span>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 10 },
  },
};

const RealImpactSection = () => {
  const [ref, inview] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={inview ? 'visible' : 'hidden'}
      className='custom-container py-10 lg:py-20'
    >
      <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
        Proven Numbers. Real Impact.
      </h2>
      <p className='text-md mb-16 text-neutral-400 lg:text-xl'>
        From shipped products to years of experience
      </p>

      <RealImpactList />
    </motion.section>
  );
};

export default RealImpactSection;

const RealImpactList = () => {
  return (
    <motion.div
      variants={sectionVariants}
      className='flex flex-col items-center gap-6 divide-y divide-neutral-900'
    >
      {realImpactData.map(
        ({ from, to, suffix, duration, label, image }, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className='flex w-full items-center justify-between gap-4 pb-6'
          >
            <span className='flex w-[115px] items-center gap-2 md:w-[210px]'>
              <Image
                src='/icons/logo-purple.svg'
                alt='logo purple'
                width={44}
                height={44}
                className='size-7 md:size-11'
              />
              <Counter
                from={from}
                to={to}
                duration={duration}
                suffix={suffix}
              />
            </span>
            <span className='text-md md:text-display-md text-neutral-25 w-[112px] font-medium md:w-[200px]'>
              {label}
            </span>

            <Image
              src={image}
              alt={label}
              width={120}
              height={120}
              className='size-20 md:size-30'
            />
          </motion.div>
        )
      )}
    </motion.div>
  );
};
