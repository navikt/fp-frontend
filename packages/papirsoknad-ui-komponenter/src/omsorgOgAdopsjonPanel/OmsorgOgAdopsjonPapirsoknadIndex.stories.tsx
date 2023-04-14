import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { familieHendelseType as fht } from '@navikt/fp-kodeverk';

import OmsorgOgAdopsjonPapirsoknadIndex from './OmsorgOgAdopsjonPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/omsorg-og-adopsjon',
  component: OmsorgOgAdopsjonPapirsoknadIndex,
};

const Template: Story<{
  isForeldrepengerFagsak: boolean;
  familieHendelseType: string;
  submitCallback: (data: any) => Promise<void>;
}> = ({ isForeldrepengerFagsak, familieHendelseType, submitCallback }) => {
  const formMethods = useForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={values => submitCallback(OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values.omsorg))}
    >
      <OmsorgOgAdopsjonPapirsoknadIndex
        readOnly={false}
        familieHendelseType={familieHendelseType}
        isForeldrepengerFagsak={isForeldrepengerFagsak}
        fodselsdato="2022-05-27"
      />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>
  );
};

export const ForFodsel = Template.bind({});
ForFodsel.args = {
  isForeldrepengerFagsak: false,
  familieHendelseType: fht.FODSEL,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ForAdopsjon = Template.bind({});
ForAdopsjon.args = {
  isForeldrepengerFagsak: false,
  familieHendelseType: fht.ADOPSJON,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
