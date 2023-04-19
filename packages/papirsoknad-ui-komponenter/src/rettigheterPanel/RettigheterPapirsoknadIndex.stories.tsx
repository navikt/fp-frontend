import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { familieHendelseType, foreldreType } from '@navikt/fp-kodeverk';

import RettigheterPapirsoknadIndex from './RettigheterPapirsoknadIndex';
import SoknadData from '../felles/SoknadData';

export default {
  title: 'papirsoknad/ui-komponenter/rettigheter',
  component: RettigheterPapirsoknadIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
  soknadData: SoknadData;
}> = ({ submitCallback, soknadData }) => {
  const formMethods = useForm();

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <RettigheterPapirsoknadIndex readOnly={false} soknadData={soknadData} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const FarAdopterer = Template.bind({});
FarAdopterer.args = {
  soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.FAR),
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
