'use client';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        {/* logo */}
        <div className='flex-center gap-2'>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={43}
            height={43}
            className='size-6 md:size-[43px]'
          />
          <p className='text-xl font-bold text-white'>Yusuf Masdhuki</p>
        </div>

        {/* navlink */}
        <nav className='hidden md:block'>
          <ul className='flex-center gap-3 lg:gap-8'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  className='text-md hover:text-primary-100 font-medium text-white transition-all duration-300 ease-in-out hover:font-semibold md:px-1'
                  href={data.href}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* button */}
        <Button className='hidden md:flex' asChild>
          <Link href='#contact'>Get in Touch</Link>
        </Button>

        {/* hamburger for mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='block cursor-pointer md:hidden' />
          </SheetTrigger>

          <SheetContent className='w-full bg-black p-4'>
            <SheetTitle asChild>
              <div className='flex-start gap-2'>
                <Image
                  src='/icons/logo.svg'
                  alt='logo'
                  width={43}
                  height={43}
                  className='size-6 md:size-[43px]'
                />
                <p className='text-xl font-bold text-white'>Edwin</p>
              </div>
            </SheetTitle>
            <nav className='mt-4'>
              <ul className='flex flex-col gap-3 pl-2'>
                {navigationData.map((data) => (
                  <li key={data.label} className='mb-2'>
                    <Link
                      href={data.href}
                      className='hover:text-primary-200 text-md font-medium text-white hover:font-semibold'
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <Button className='mt-4 w-full' asChild>
                <Link href='#contact'>Get in Touch</Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
