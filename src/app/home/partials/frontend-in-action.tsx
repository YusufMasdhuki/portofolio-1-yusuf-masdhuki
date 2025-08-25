'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { portofolioData } from '@/constants/portofolio-data';
import { fadeInUp, scaleUp } from '@/lib/motion-variants';

const FrontendInAction = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      id='projects'
      className='custom-container py-10 lg:py-20'
    >
      <div className='text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Frontend in Action
        </h2>
        <p className='text-md mb-6 text-neutral-400 md:mb-16 lg:text-lg'>
          These are hands-on projects where I delivered clean, responsive user
          interfaces.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {portofolioData.map((item, index) => (
          <motion.div
            variants={scaleUp}
            key={index}
            className='mx-auto flex w-full max-w-[361px] flex-col items-center justify-center gap-4 rounded-lg lg:max-w-[373px] lg:gap-6'
          >
            <Image
              src={item.image}
              alt={item.title}
              width={373}
              height={373}
              className='w-full object-cover transition-all duration-300 ease-out hover:scale-105'
            />
            <div className='flex w-full items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <h3 className='lg:text-display-sm text-xl font-bold text-white'>
                  {item.title}
                </h3>
                <p className='lg:text-md text-sm text-neutral-400'>
                  {item.year}
                </p>
              </div>
              <Link
                href={item.url}
                target='_blank'
                className='hover:text-primary-100 flex-center hover:border-primary-100 size-10 rounded-full border border-neutral-800 text-white transition-all duration-300 ease-out'
              >
                <ArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FrontendInAction;
