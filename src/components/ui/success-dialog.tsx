import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

type SuccessDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onBackHome?: () => void;
};

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  open,
  onOpenChange,
  onBackHome,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-[361px] border-white/10 bg-neutral-900 text-white md:max-w-[461px]'>
        <DialogHeader>
          <Image
            src='/images/success-mail.png'
            width={129}
            height={129}
            alt='success mail'
            className='absolute -top-13 left-1/2 mx-auto -translate-x-1/2'
          />
          <DialogTitle className='text-neutral-25 mt-24 mb-0.5 text-center text-lg font-bold md:mb-2 md:text-xl'>
            Message Sent Successfully!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='md:text-md mb-6 text-center text-sm text-neutral-400 md:mb-8'>
          Thank you for reaching out.I’ll get back to you as soon as possible
        </DialogDescription>
        <Button
          className='md:text-md w-full text-sm font-semibold'
          onClick={() => (onBackHome ? onBackHome() : onOpenChange(false))}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
