import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  placeholder,
  type = 'text',
  register,
  error,
}) => {
  return (
    <div className='flex flex-col gap-1 md:gap-3'>
      <label htmlFor={id} className='md:text-md text-sm font-bold text-white'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        className={`focus:border-primary-100 text-md border-b p-1 placeholder:text-neutral-500 focus:outline-none md:text-lg ${
          error ? 'border-red-500' : 'border-neutral-800'
        }`}
      />
      {error && (
        <span className='text-xs text-red-500 md:text-sm'>{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;
