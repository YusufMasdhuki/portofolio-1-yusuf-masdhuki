import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { ContactSchema } from '@/schemas/contact-schema';

export type ContactFormProps = {
  register: ReturnType<typeof useForm<ContactSchema>>['register'];
  errors: Record<string, any>;
  loading: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
