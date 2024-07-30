import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { foreldreType as ForeldreType } from '@navikt/fp-kodeverk';

import PermisjonIndex from './PermisjonIndex';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, FormValues } from './components/PermisjonPanel';

export default {
  title: 'papirsoknad/ui-komponenter/permisjon',
  component: PermisjonIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
  foreldreType: string;
  erEndringssøknad: boolean;
}> = ({ submitCallback, foreldreType, erEndringssøknad = false }) => {
  const formMethods = useForm({
    defaultValues: PermisjonIndex.buildInitialValues(),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback({ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: PermisjonIndex.transformValues(values) })
      }
    >
      <PermisjonIndex
        readOnly={false}
        alleKodeverk={alleKodeverk as any}
        foreldreType={foreldreType}
        erEndringssøknad={erEndringssøknad}
      />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>
  );
};

export const SokerErMor = Template.bind({});
SokerErMor.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  foreldreType: ForeldreType.MOR,
};

export const SokerErFar = Template.bind({});
SokerErFar.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  foreldreType: ForeldreType.FAR,
};

export const ErEndringssøknad = Template.bind({});
ErEndringssøknad.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  foreldreType: ForeldreType.MOR,
  erEndringssøknad: true,
};
