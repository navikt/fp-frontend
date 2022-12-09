import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

const WithReactHookForm = (Story: any) => {
  const formMethods = useForm();
  return (
    <Form formMethods={formMethods}>
      <Story />
    </Form>
  );
};

export default WithReactHookForm;
