import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { Modal } from '@navikt/ds-react';
import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import SaksbehandlereTabell from './SaksbehandlereTabell';
import { RestApiPathsKeys, requestApi } from '../../data/fplosRestApi';

import messages from '../../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/saksbehandlere/SaksbehandlereTabell',
  component: SaksbehandlereTabell,
  decorators: [withIntl],
};

const Template: Story<{
  saksbehandlere?: Saksbehandler[],
  hentAvdelingensSaksbehandlere: (params: {avdelingEnhet: string}) => void
}> = ({
  saksbehandlere,
  hentAvdelingensSaksbehandlere,
}) => {
  const data = [
    { key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name, data: undefined },
  ];

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
  saksbehandlere: [{
    brukerIdent: 'R12122',
    navn: 'Espen Utvikler',
    avdelingsnavn: ['NAV Viken'],
  }, {
    brukerIdent: 'S53343',
    navn: 'Steffen',
    avdelingsnavn: ['NAV Oslo'],
  }],
  hentAvdelingensSaksbehandlere: () => undefined,
};

export const TomTabell = Template.bind({});
Template.args = {
  hentAvdelingensSaksbehandlere: () => undefined,
};
