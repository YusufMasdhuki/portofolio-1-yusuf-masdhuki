import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='relative h-[852px] w-full md:h-[945px]'>
      <Image
        src='/images/background-hero.png'
        alt='hero background gradient'
        className='absolute top-0 right-0 left-0 z-0 h-[852px] w-full object-cover md:min-h-[945px]'
        width={1440}
        height={945}
      />
      <p className='absolute top-9 left-1/2 z-2 -translate-x-1/2 text-[56px] leading-[140px] font-bold text-[#D9D9D91A] md:top-23 md:text-8xl lg:top-45 lg:text-[140px]'>
        PORTOFOLIO
      </p>

      {/* Profile */}
      <div className='absolute top-27 left-1/2 z-3 h-full max-h-[414px] w-full max-w-[320px] -translate-x-1/2 md:top-44 md:max-h-[497px] md:max-w-[383px] lg:top-[268px]'>
        <Image
          src='/icons/big-logo.svg'
          alt='big logo'
          width={126}
          height={126}
          className='absolute top-4 -right-3 size-20.5 md:top-10 md:-right-12 md:size-31.5'
        />
        <Image
          src='/images/profil.png'
          alt='hero image'
          width={383}
          height={497}
          className='overflow-hidden rounded-t-full'
        />
        <div className='absolute -right-5 -bottom-10 flex size-24.5 items-center justify-center rounded-full bg-white md:-right-15 md:size-30'>
          <Image
            src='/icons/badge-frontend.svg'
            alt='frontend badge'
            width={88}
            height={88}
            className='size-18 md:size-22'
          />
        </div>
      </div>
      <div className='custom-container absolute top-[467px] z-5 mx-auto flex h-[497px] w-full flex-col gap-3 md:top-155 lg:top-67 lg:left-1/2 lg:-translate-x-1/2 lg:flex-row lg:items-center lg:justify-between lg:gap-20'>
        {/* Name */}
        <div className='text-display-xl z-5 w-[313px] font-bold text-white md:w-full lg:relative lg:left-10 lg:w-[408px] lg:text-6xl lg:leading-18 xl:text-[80px] xl:leading-[92px]'>
          YUSUF MASDHUKI
        </div>

        {/* About me */}
        <div className='w-[313px] md:w-full lg:absolute lg:right-4 lg:w-[313px]'>
          <h4 className='lg:text-display-md mb-1 text-lg font-bold'>
            About me
          </h4>
          <p className='lg:text-md mb-10 text-sm font-semibold'>
            Passionate about frontend development, I focus on crafting digital
            products.
          </p>
          <div className='flex items-center gap-3'>
            <span className='flex size-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-2xl'>
              <Image
                src='/icons/fb-icon.svg'
                alt='fb icon'
                width={13}
                height={24}
              />
            </span>
            <span className='flex size-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-2xl'>
              <Image
                src='/icons/ig-icon.svg'
                alt='ig icon'
                width={24}
                height={24}
              />
            </span>
            <span className='flex size-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-2xl'>
              <Image
                src='/icons/linkedIn-icon.svg'
                alt='linkedIn icon'
                width={20}
                height={20}
              />
            </span>
            <span className='flex size-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-2xl'>
              <Image
                src='/icons/tiktok-icon.svg'
                alt='tiktok icon'
                width={21}
                height={24}
              />
            </span>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 z-10 flex h-15 w-18.5 -translate-x-1/2 items-center justify-center rounded-t-full border border-white/20 md:h-26 md:w-26'>
        <ArrowDown className='size-9 text-white/20' />
      </div>
    </section>
  );
};

export default Hero;
