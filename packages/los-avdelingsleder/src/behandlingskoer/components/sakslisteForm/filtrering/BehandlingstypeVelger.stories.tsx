import React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos,getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys, RestApiPathsKeys } from '../../../../data/fplosRestApi';
import BehandlingstypeVelger from './BehandlingstypeVelger';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/BehandlingstypeVelger',
  component: BehandlingstypeVelger,
  decorators: [withIntl],
};

const Template: StoryFn<{ verdier: Record<string, boolean> }> = ({ verdier }) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name, data: undefined },
  ];

  const formMethods = useForm({
    defaultValues: verdier,
  });

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <BehandlingstypeVelger
          valgtSakslisteId={1}
          valgtAvdelingEnhet="Nav Vikafossen"
          hentAvdelingensSakslister={action('button-click')}
          hentAntallOppgaver={action('button-click')}
        />
      </Form>
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  verdier: {
    [BehandlingType.FORSTEGANGSSOKNAD]: true,
  },
};
