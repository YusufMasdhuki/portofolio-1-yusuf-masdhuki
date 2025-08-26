'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { FormEvent, forwardRef, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import ErrorDialog from '@/components/ui/error-dialog';
import SuccessDialog from '@/components/ui/success-dialog';

import { fadeInUp, slideInLeft, slideInRight } from '@/lib/motion-variants';

const ContactUsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());

      setSuccessOpen(true);
      form.reset();

      toast.success('Message sent', {
        description: "Thanks! we'll be in touch shortly",
      });
    } catch {
      setErrorOpen(true);
      toast.error('Send failed', {
        description: "We could't send your message, please try again later",
        action: {
          label: 'Retry',
          onClick: () => {
            formRef.current?.requestSubmit();
          },
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      id='contact'
      className='custom-container overflow-hidden rounded-2xl py-10 lg:py-20'
    >
      <div className='flex w-full flex-col flex-wrap overflow-hidden rounded-2xl md:flex-row'>
        <motion.div variants={slideInLeft} className='w-full flex-5 basis-80'>
          <Image
            src='/images/contact-us-profile.png'
            alt='contact us profile'
            width={600}
            height={642}
            className='h-full w-full object-cover'
          />
        </motion.div>
        <motion.div
          variants={slideInRight}
          className='flex w-full flex-5 basis-80 flex-col justify-between bg-black px-4 py-6 md:px-5 md:py-8'
        >
          <h2 className='text-display-sm md:text-display-2xl font-bold text-white'>
            Start a Conversation
          </h2>
          <p className='text-md mb-6 text-neutral-400 md:mb-8 md:text-lg'>
            I’m open to freelance gigs, collaborations, or even just a casual
            chat.
          </p>
          <ContactForm onSubmit={onSubmit} loading={loading} ref={formRef} />
          <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
          <ErrorDialog
            open={errorOpen}
            onOpenChange={setErrorOpen}
            onRetry={() => formRef.current?.requestSubmit()}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;

const ContactForm = forwardRef<
  HTMLFormElement,
  {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
  }
>(function ContactForm({ onSubmit, loading }, ref) {
  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className='flex flex-col gap-5 md:gap-6'
    >
      {/* name */}
      <div className='flex flex-col gap-1 md:gap-3'>
        <label
          htmlFor='name'
          className='md:text-md text-sm font-bold text-white'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='What should I call you?...'
          required
          className='focus:border-primary-100 text-md border-b border-neutral-800 p-1 placeholder:text-neutral-500 focus:outline-none md:text-lg'
        />
      </div>

      {/* email */}
      <div className='flex flex-col gap-1 md:gap-3'>
        <label
          htmlFor='email'
          className='md:text-md text-sm font-bold text-white'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Where can I reach you? ...'
          required
          className='focus:border-primary-100 text-md border-b border-neutral-800 p-1 placeholder:text-neutral-500 focus:outline-none md:text-lg'
        />
      </div>

      {/* message */}
      <div className='flex flex-col gap-1 md:gap-3'>
        <label
          htmlFor='message'
          className='md:text-md text-sm font-bold text-white'
        >
          Message
        </label>
        <input
          type='text'
          id='message'
          name='message'
          placeholder='Tell me about your project or just say hi :) ...'
          required
          className='focus:border-primary-100 text-md border-b border-neutral-800 p-1 placeholder:text-neutral-500 focus:outline-none md:text-lg'
        />
      </div>

      <Button
        type='submit'
        disabled={loading}
        className='md:text-md w-full text-sm font-semibold text-black'
      >
        {loading ? 'Sending...' : 'Let’s Build Something'}
      </Button>
    </form>
  );
});
