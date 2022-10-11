import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import Saksliste from '../../../typer/sakslisteAvdelingTsType';
import SaksbehandlerAvdeling from '../../../typer/saksbehandlerAvdelingTsType';
import { RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';
import SaksbehandlereForSakslisteForm from './SaksbehandlereForSakslisteForm';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm',
  component: SaksbehandlereForSakslisteForm,
  decorators: [withIntl],
};

const Template: Story<{
  saksliste: Saksliste,
  avdelingensSaksbehandlere: SaksbehandlerAvdeling[],
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
}> = ({
  saksliste,
  avdelingensSaksbehandlere,
  hentAvdelingensSakslister,
}) => {
  const data = [
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name, data: {} },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereForSakslisteForm
        valgtSaksliste={saksliste}
        avdelingensSaksbehandlere={avdelingensSaksbehandlere}
        hentAvdelingensSakslister={hentAvdelingensSakslister}
        valgtAvdelingEnhet="NAV Viken"
      />
    </RestApiMock>
  );
};

export const IngenSaksbehandlere = Template.bind({});
IngenSaksbehandlere.args = {
  saksliste: {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: ['S34354'],
    antallBehandlinger: 1,
  },
  avdelingensSaksbehandlere: [],
  hentAvdelingensSakslister: action('button-click'),
};

export const ToSaksbehandlere = Template.bind({});
ToSaksbehandlere.args = {
  saksliste: {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: ['S34354'],
    antallBehandlinger: 1,
  },
  avdelingensSaksbehandlere: [{
    brukerIdent: 'E23232',
    navn: 'Espen Utvikler',
    avdelingsnavn: ['NAV Viken'],
  }, {
    brukerIdent: 'S34354',
    navn: 'Steffen',
    avdelingsnavn: ['NAV Viken'],
  }],
  hentAvdelingensSakslister: action('button-click'),
};

export const TreSaksbehandlere = Template.bind({});
TreSaksbehandlere.args = {
  saksliste: {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: ['S34354'],
    antallBehandlinger: 1,
  },
  avdelingensSaksbehandlere: [{
    brukerIdent: 'E23232',
    navn: 'Espen Utvikler',
    avdelingsnavn: ['NAV Viken'],
  }, {
    brukerIdent: 'S34354',
    navn: 'Steffen',
    avdelingsnavn: ['NAV Viken'],
  }, {
    brukerIdent: 'E24353',
    navn: 'Eirik',
    avdelingsnavn: ['NAV Viken'],
  }],
  hentAvdelingensSakslister: action('button-click'),
};
