'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { yearsOfBuilding } from '@/constants/years-of-building-data';

const YearsOfBuilding = () => {
  return (
    <section className='custom-container py-10 lg:py-20'>
      <div className='text-center'>
        <h2 className='text-display-sm lg:text-display-2xl text-neutral-25 mb-4 font-bold'>
          Years of Building, Learning, and Shipping
        </h2>
        <p className='text-md mb-6 text-neutral-400 md:mb-16 lg:text-lg'>
          Each role has sharpened my ability to build better digital
          experiences, faster.
        </p>
      </div>
      <div>
        <Timeline items={yearsOfBuilding} />
      </div>
    </section>
  );
};

export default YearsOfBuilding;

// components/Timeline.tsx

export type YearsOfBuildingType = {
  years: string;
  logo: string;
  Description: string[];
};

interface TimelineProps {
  items: YearsOfBuildingType[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <div className='relative mx-auto w-full'>
      {/* Garis tengah container */}
      <div className='absolute top-10 left-1/2 h-full w-[2px] -translate-x-1/2'>
        {/* layer dasar abu2 */}
        <div className='absolute inset-0 bg-neutral-700 opacity-30' />

        {/* layer animasi primary → putih */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${(visibleCount / items.length) * 100}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='absolute top-0 left-0 w-full bg-white'
        />
      </div>

      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
          onVisible={() => setVisibleCount((prev) => Math.max(prev, index + 1))}
        />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  item: YearsOfBuildingType;
  index: number;
  onVisible: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  onVisible,
}) => {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) onVisible();
  }, [inView, onVisible]);

  return (
    <div
      ref={ref}
      className={`relative mb-16 flex w-full ${
        isLeft ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Bulatan */}
      <motion.div
        initial={{ scale: 0, backgroundColor: '#3b82f6' }}
        animate={inView ? { scale: 1, backgroundColor: '#ffffff' } : {}}
        transition={{ duration: 0.6 }}
        className='absolute top-2 left-1/2 z-10 flex size-12 -translate-x-1/2 transform items-center justify-center rounded-full'
      >
        <div className='size-8 rounded-full bg-white shadow' />
      </motion.div>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`w-1/2 px-6 ${
          isLeft ? 'pr-12 text-right' : 'pl-12 text-left'
        }`}
      >
        <div className='border-primary-900 relative rounded-lg border bg-neutral-900 p-6 shadow-lg'>
          <div className='flex items-center justify-between'>
            <h2 className='text-neutral-25 text-lg font-semibold'>
              {item.years}
            </h2>
            <Image
              src={item.logo}
              alt={`${item.years}-logo`}
              width={128}
              height={48}
            />
          </div>

          <ul className='mt-3 list-disc space-y-2 text-left text-neutral-400'>
            {item.Description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
