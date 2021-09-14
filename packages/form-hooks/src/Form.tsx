import React, { ReactNode, useEffect } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

interface OwnProps<FormValues> {
  formMethods: UseFormReturn<FormValues>
  onSubmit?: SubmitHandler<FormValues>
  children: ReactNode;
  className?: string;
  setDataOnUnmount?: (data?: any) => void;
}

const Form = <FormValues, >({
  formMethods,
  onSubmit,
  children,
  className,
  setDataOnUnmount,
}: OwnProps<FormValues>) => {
  const { handleSubmit, getValues } = formMethods;

  useEffect(() => () => {
    if (setDataOnUnmount) {
      setDataOnUnmount(getValues());
    }
  }, []);

  return (
    <FormProvider {...formMethods}>
      <form className={className} onSubmit={onSubmit ? handleSubmit((values) => onSubmit(values)) : undefined}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
