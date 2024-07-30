import React from 'react';
import { StoryFn } from '@storybook/react';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import SaksbehandlereTabell from './SaksbehandlereTabell';
import { RestApiPathsKeys, requestApi } from '../../data/fplosRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/saksbehandlere/SaksbehandlereTabell',
  component: SaksbehandlereTabell,
  decorators: [withIntl],
};

const Template: StoryFn<{
  saksbehandlere?: Saksbehandler[];
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void;
}> = ({ saksbehandlere, hentAvdelingensSaksbehandlere }) => {
  const data = [{ key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name, data: undefined }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereTabell
        saksbehandlere={saksbehandlere || []}
        hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
        valgtAvdelingEnhet="NAV Viken"
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  saksbehandlere: [
    {
      brukerIdent: 'R12122',
      navn: 'Espen Utvikler',
    },
    {
      brukerIdent: 'S53343',
      navn: 'Steffen',
    },
  ],
  hentAvdelingensSaksbehandlere: () => undefined,
};

export const TomTabell = Template.bind({});
Template.args = {
  hentAvdelingensSaksbehandlere: () => undefined,
};
