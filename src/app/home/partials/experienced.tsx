'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';

import { experiencedData } from '@/constants/experienced-data';
import {
  fadeInUp,
  scaleUp,
  slideInLeft,
  slideInRight,
} from '@/lib/motion-variants';

const ExperiencedSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      id='skill'
      className='custom-container overflow-x-hidden py-10 lg:py-20'
    >
      <div className='text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Experienced in Web & App Development
        </h2>
        <p className='text-md mb-6 text-neutral-400 md:mb-16 lg:text-lg'>
          I create user-focused websites that look good, work well, and feel
          right.
        </p>
      </div>
      <div className='flex min-h-70 flex-col gap-4.5 overflow-hidden md:flex-row'>
        {/* left */}
        <motion.div variants={slideInLeft} className='flex-[6.5] basis-80'>
          <ExperiencedList />
        </motion.div>

        {/* right */}
        <motion.div className='flex-[3.5] basis-80' variants={slideInRight}>
          <div className='relative h-full w-full overflow-hidden rounded-2xl'>
            <Image
              src='/images/experienced-card-bg.png'
              alt='background image'
              width={509}
              height={445}
              className='absolute h-full w-full overflow-hidden object-cover'
            />
            <div className='absolute z-5 flex h-full w-full flex-col justify-between p-6'>
              <div className='flex flex-col gap-5 lg:gap-10'>
                <p className='lg:text-display-md text-xl font-bold'>
                  &quot;Programming is the art of telling another human what you
                  want the computer to do.&quot;
                </p>
                <p className='text-md'>— Donald Knuth</p>
              </div>
              <Button className='md:text-md text-sm font-semibold text-black'>
                Let’s Build Something
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperiencedSection;

const ExperiencedList = () => {
  return (
    <div className='grid h-full grid-cols-2 gap-4 md:grid-cols-3'>
      {experiencedData.map((item, index) => (
        <motion.div
          variants={scaleUp}
          key={index}
          className='flex aspect-square h-full w-full flex-col items-center justify-center rounded-2xl border border-neutral-900 lg:gap-2'
        >
          <Image
            src={item.image}
            alt={item.label}
            width={90}
            height={90}
            className='size-22.5'
          />
          <p className='text-md text-neutral-25 font-medium lg:text-lg'>
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
