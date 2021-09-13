import React, { ReactNode } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface OwnProps<FormValues> {
  formMethods: UseFormReturn<FormValues>
  onSubmit?: SubmitHandler<FormValues>
  children: ReactNode;
  className?: string;
}

const Form = <FormValues, >({
  formMethods,
  onSubmit,
  children,
  className,
}: OwnProps<FormValues>) => {
  const { handleSubmit } = formMethods;
  return (
    <FormProvider {...formMethods}>
      <form className={className} onSubmit={onSubmit ? handleSubmit((values) => onSubmit(values)) : undefined}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
