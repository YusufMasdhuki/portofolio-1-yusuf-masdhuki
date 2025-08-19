'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleVisible = (index: number) => {
    if (!activeIndexes.includes(index)) {
      setActiveIndexes((prev) => [...prev, index]);
    }
  };

  return (
    <div ref={containerRef} className='relative mx-auto w-full'>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
          circleRef={(el) => (circleRefs.current[index] = el)}
          onVisible={() => handleVisible(index)}
          isActive={activeIndexes.includes(index)}
        />
      ))}

      {/* Garis animasi segmented */}
      {activeIndexes.map((index) => {
        if (index === 0) return null;
        const prevCircle = circleRefs.current[index - 1];
        const thisCircle = circleRefs.current[index];

        if (!prevCircle || !thisCircle) return null;

        const prevRect = prevCircle.getBoundingClientRect();
        const thisRect = thisCircle.getBoundingClientRect();
        const top =
          prevRect.top +
          prevRect.height / 2 -
          containerRef.current!.getBoundingClientRect().top;
        const bottom =
          thisRect.top +
          thisRect.height / 2 -
          containerRef.current!.getBoundingClientRect().top;

        return (
          <motion.div
            key={index}
            initial={{ height: 0, backgroundColor: '#ff8ceb' }} // primary
            animate={{ height: bottom - top, backgroundColor: '#171717' }} // neutral
            transition={{
              height: { duration: 0.8, ease: 'easeInOut' },
              backgroundColor: { delay: 0.8, duration: 0.4 },
            }}
            className='absolute left-1/2 z-1 w-[1px] -translate-x-1/2'
            style={{ top }}
          />
        );
      })}
    </div>
  );
};

interface TimelineItemProps {
  item: YearsOfBuildingType;
  index: number;
  onVisible: () => void;
  circleRef: (el: HTMLDivElement | null) => void;
  isActive: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  onVisible,
  circleRef,
}) => {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
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
        ref={circleRef}
        initial={{ scale: 0, backgroundColor: '#3b82f6' }}
        animate={inView ? { scale: 1, backgroundColor: '#9839a2' } : {}}
        transition={{ duration: 0.6 }}
        className='absolute top-0 left-1/2 z-10 flex size-12 -translate-x-1/2 transform items-center justify-center rounded-full'
      >
        <div className='bg-primary-100 size-8 rounded-full shadow' />
      </motion.div>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
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

          <ul className='mt-3 space-y-2 text-left text-neutral-400'>
            {item.Description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
