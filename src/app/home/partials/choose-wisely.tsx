'use client';
import { X } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { ChooseWiselyData } from '@/constants/choose-wisely-data';
import {
  fadeInUp,
  scaleUp,
  slideInLeft,
  slideInRight,
} from '@/lib/motion-variants';
import { useMediaQuery } from '@/lib/use-media-query';

const ChooseWiselySection = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      className='custom-container w-full py-10 lg:py-20'
    >
      <div className='text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Choose Wisely, Get Quality Results
        </h2>
        <p className='text-md mb-6 text-neutral-400 md:mb-16 lg:text-lg'>
          Make the right choice for interfaces that are fast, reliable, and
          visually sharp.
        </p>
      </div>
      <div className='flex w-full flex-1 flex-col gap-6 md:flex-row'>
        {/* left */}
        <motion.div
          variants={isDesktop ? slideInLeft : fadeInUp}
          className='relative min-h-[520px] w-full flex-1 overflow-hidden rounded-2xl border border-neutral-900 md:basis-1/2'
        >
          <Image
            src='/images/background-image.png'
            alt='background image'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 p-4 md:p-6'>
            <h3 className='md:text-display-xs text-neutral-25 mb-3 text-lg font-semibold md:mb-4'>
              With Me
            </h3>
            <div className='flex flex-col gap-2'>
              {ChooseWiselyData.map((item, index) => (
                <motion.div
                  variants={scaleUp}
                  key={index}
                  className='md:text-md text-neutral-25 flex h-14 items-center gap-2 rounded-xl bg-white/10 p-4 text-sm backdrop-blur'
                >
                  <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                  />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          variants={isDesktop ? slideInRight : fadeInUp}
          className='w-full flex-1 rounded-2xl border border-neutral-900 p-4 md:basis-1/2 md:p-6'
        >
          <h3 className='md:text-display-xs text-neutral-25 mb-3 text-lg font-semibold md:mb-4'>
            Other
          </h3>
          <div className='flex flex-col gap-2'>
            {ChooseWiselyData.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className='md:text-md text-neutral-25 flex h-14 items-center gap-2 rounded-xl bg-neutral-900 p-4 text-sm'
              >
                <X className='size-7.5 text-red-500' />
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChooseWiselySection;
