'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { yearsOfBuilding } from '@/constants/years-of-building-data';
import {
  TimelineItemProps,
  TimelineProps,
} from '@/interfaces/years-of-building';

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
    <div
      ref={containerRef}
      className='relative mx-auto flex w-full flex-col gap-6'
    >
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

      {/* Segmented animation lines */}
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
            initial={{ height: 0, backgroundColor: '#ff8ceb' }}
            animate={{ height: bottom - top, backgroundColor: '#171717' }}
            transition={{
              height: { duration: 0.8, ease: 'easeInOut' },
              backgroundColor: { delay: 0.8, duration: 0.4 },
            }}
            className='absolute left-3 z-0 w-[1px] bg-neutral-900 md:left-4'
            style={{ top }}
          />
        );
      })}
    </div>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  onVisible,
  circleRef,
  index,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) onVisible();
  }, [inView, onVisible]);

  return (
    <div ref={ref} className='relative flex w-full'>
      {/* Bulatan */}
      <motion.div
        ref={circleRef}
        initial={{ scale: 0, backgroundColor: '#3b82f6' }}
        animate={inView ? { scale: 1, backgroundColor: '#9839a2' } : {}}
        transition={{ duration: 0.6 }}
        className={`absolute top-0 left-0 z-10 flex size-6 items-center justify-center rounded-full md:size-8`}
      >
        <div className='bg-primary-100 size-4 rounded-full shadow lg:size-5' />
      </motion.div>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='w-full pl-9 md:pl-14'
      >
        <div
          className={`relative flex flex-col gap-4 divide-y divide-neutral-900 rounded-2xl border border-neutral-900 ${index === 0 ? 'bg-[linear-gradient(173deg,#34144C_0%,#000000_35%)]' : 'bg-black'} p-6 shadow-lg lg:flex-row lg:gap-6 lg:divide-x lg:divide-y-0`}
        >
          <div className='flex flex-col gap-2 pb-4 lg:pr-6'>
            <h2 className='text-neutral-25 text-md font-bold lg:text-lg'>
              {item.years}
            </h2>
            <Image
              src={item.logo}
              alt={`${item.years}-logo`}
              width={128}
              height={48}
              className='h-8 w-21.5 md:h-12 md:w-32'
            />
          </div>

          <ul className='text-neutral-25 flex flex-col gap-4 text-left'>
            {item.Description.map((desc, i) => (
              <li
                key={i}
                className='lg:text-md flex items-center gap-2 text-sm'
              >
                <Image
                  src='/icons/logo-purple.svg'
                  alt='logo purple'
                  width={30}
                  height={30}
                />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
