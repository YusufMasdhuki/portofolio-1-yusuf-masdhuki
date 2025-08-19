import Image from 'next/image';
import React from 'react';

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
  return (
    <div className='relative mx-auto w-full'>
      {/* Garis tengah */}
      <div className='absolute top-10 left-1/2 h-full w-[1px] -translate-x-1/2 bg-white' />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`relative mb-12 flex w-full ${
              isLeft ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Icon */}
            <div className='bg-primary-100 absolute top-2 left-1/2 flex size-12 -translate-x-1/2 transform items-center justify-center rounded-full'>
              <div className='size-8 rounded-full bg-white' />
            </div>

            {/* Content box */}
            <div
              className={`w-1/2 px-6 ${
                isLeft ? 'pr-12 text-right' : 'pl-12 text-left'
              }`}
            >
              <div className='border-primary-900 relative rounded-lg border bg-transparent p-6 shadow-lg'>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
