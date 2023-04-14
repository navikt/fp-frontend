import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../../../data/fplosRestApi';
import BehandlingstypeVelger from './BehandlingstypeVelger';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/BehandlingstypeVelger',
  component: BehandlingstypeVelger,
  decorators: [withIntl],
};

const Template: Story<{ verdier: Record<string, boolean> }> = ({ verdier }) => {
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
          valgtAvdelingEnhet="NAV Viken"
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
