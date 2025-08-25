import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { TestimonialType } from '@/constants/testimonial-data';

const TestimonialCard: React.FC<TestimonialType> = ({
  image,
  name,
  role,
  quote,
  stars,
}) => {
  return (
    <div className='max-w-[361px] rounded-2xl border border-neutral-900 bg-[linear-gradient(150deg,#34144C_0%,#000000_40%)] p-4 md:max-w-[386px] md:p-5'>
      {/* logo company */}
      <Image
        src={image}
        alt={name}
        width={128}
        height={48}
        className='mb-6 h-9 w-24 brightness-0 invert md:mb-8 md:h-12 md:w-32'
      />
      {/* stars */}
      <div className='mb-6 flex gap-1 md:mb-8'>
        {Array(stars)
          .fill(0)
          .map((_, i) => (
            <StarIcon
              key={i}
              className='size-6 fill-[#f3b64c] text-[#f3b64c]'
            />
          ))}
      </div>
      {/* quote */}
      <p className='text-md mb-15 font-medium md:text-lg'>{quote}</p>
      {/* name & role */}
      <p className='md:text-md text-neutral-25 text-sm font-bold'>{name}</p>
      <p className='md:text-md text-sm text-neutral-500'>{role}</p>
    </div>
  );
};

export default TestimonialCard;
