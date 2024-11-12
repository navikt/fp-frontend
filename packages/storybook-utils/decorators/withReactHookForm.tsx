import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

export const withReactHookForm = (Story: any) => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <Story />
    </Form>
  );
};
