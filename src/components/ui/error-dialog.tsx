import { DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from './dialog';

type ErrorDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onRetry?: () => void;
};

const ErrorDialog: React.FC<ErrorDialogProps> = ({
  open,
  onOpenChange,
  onRetry,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-[361px] border-none bg-black text-white md:max-w-[461px]'>
        <DialogHeader>
          <Image
            src='/images/error-mail.png'
            width={129}
            height={129}
            alt='error mail'
            className='absolute -top-13 left-1/2 mx-auto -translate-x-1/2 grayscale filter'
          />
          <DialogTitle className='text-neutral-25 mt-24 mb-0.5 text-center text-lg font-bold md:mb-2 md:text-xl'>
            Send Failed
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='md:text-md mb-6 text-center text-sm text-neutral-400 md:mb-8'>
          Something broke along the way. Let&apos;s try resending it.
        </DialogDescription>
        <Button
          onClick={() => (onRetry ? onRetry() : onOpenChange(false))}
          className='md:text-md w-full text-sm font-semibold'
        >
          Try Again
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorDialog;
