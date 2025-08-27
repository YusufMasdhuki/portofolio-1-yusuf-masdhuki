'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FormEvent, forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import ErrorDialog from '@/components/ui/error-dialog';
import FormInput from '@/components/ui/form-input';
import SuccessDialog from '@/components/ui/success-dialog';

import { fadeInUp, slideInLeft, slideInRight } from '@/lib/motion-variants';
import { ContactSchema, contactSchema } from '@/schemas/contact-schema';

const ContactUsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: ContactSchema) => {
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(await res.text());

      setSuccessOpen(true);
      reset();

      toast.success('Message sent', {
        description: "Thanks! we'll be in touch shortly",
      });
    } catch {
      setErrorOpen(true);
      toast.error('Send failed', {
        description: "We couldn't send your message, please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <ContactForm
            register={register}
            errors={errors}
            loading={loading}
            onSubmit={handleSubmit(onSubmit)}
          />
          <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
          <ErrorDialog open={errorOpen} onOpenChange={setErrorOpen} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUsSection;

type ContactFormProps = {
  register: ReturnType<typeof useForm<ContactSchema>>['register'];
  errors: Record<string, any>;
  loading: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const ContactForm = forwardRef<HTMLFormElement, ContactFormProps>(
  function ContactForm({ register, errors, loading, onSubmit }, ref) {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className='flex flex-col gap-5 md:gap-6'
      >
        <FormInput
          label='Name'
          id='name'
          placeholder='What should I call you?...'
          register={register('name')}
          error={errors.name}
        />

        <FormInput
          label='Email'
          id='email'
          type='email'
          placeholder='Where can I reach you?...'
          register={register('email')}
          error={errors.email}
        />

        <FormInput
          label='Message'
          id='message'
          placeholder='Tell me about your project or just say hi :) ...'
          register={register('message')}
          error={errors.message}
        />

        <Button
          type='submit'
          disabled={loading}
          className='md:text-md w-full text-sm font-semibold text-black'
        >
          {loading ? 'Sending...' : 'Let’s Build Something'}
        </Button>
      </form>
    );
  }
);
