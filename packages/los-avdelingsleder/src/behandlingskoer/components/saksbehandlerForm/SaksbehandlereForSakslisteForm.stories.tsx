import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import React from 'react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';
import Saksliste from '../../../typer/sakslisteAvdelingTsType';
import SaksbehandlereForSakslisteForm from './SaksbehandlereForSakslisteForm';

import messages from '../../../../i18n/nb_NO.json';
import SaksbehandlereOgSaksbehandlerGrupper from '../../../typer/saksbehandlereOgSaksbehandlerGrupper ';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm',
  component: SaksbehandlereForSakslisteForm,
  decorators: [withIntl],
};

const Template: StoryFn<{
  saksliste: Saksliste;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  hentAvdelingensSakslister: (params: { avdelingEnhet: string }) => void;
  grupperteSaksbehandlere?: SaksbehandlereOgSaksbehandlerGrupper;
}> = ({ saksliste, avdelingensSaksbehandlere, hentAvdelingensSakslister, grupperteSaksbehandlere }) => {
  const data = [
    {
      key: RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER.name,
      data: {},
    },
    {
      key: RestApiPathsKeys.HENT_GRUPPER.name,
      data: grupperteSaksbehandlere,
    },
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
  avdelingensSaksbehandlere: [
    {
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å',
    },
    {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å',
    },
  ],
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
  avdelingensSaksbehandlere: [
    {
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å',
    },
    {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å',
    },
    {
      brukerIdent: 'E24353',
      navn: 'Eirik',
      ansattAvdeling: 'Avdeling Å',
    },
  ],
  hentAvdelingensSakslister: action('button-click'),
};

export const SaksbehandlereSomErGruppert = Template.bind({});
SaksbehandlereSomErGruppert.args = {
  saksliste: {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sistEndret: '2020-01-01',
    saksbehandlerIdenter: ['S34354'],
    antallBehandlinger: 1,
  },
  avdelingensSaksbehandlere: [
    {
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å',
    },
    {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å',
    },
    {
      brukerIdent: 'E24353',
      navn: 'Eirik',
      ansattAvdeling: 'Avdeling Å',
    },
  ],
  grupperteSaksbehandlere: {
    saksbehandlerGrupper: [
      {
        gruppeId: 1,
        gruppeNavn: 'Gruppe 1',
        saksbehandlere: [
          {
            brukerIdent: 'E23232',
            navn: 'Espen Utvikler',
            ansattAvdeling: 'Avdeling Å',
          },
          {
            brukerIdent: 'S34354',
            navn: 'Steffen',
            ansattAvdeling: 'Avdeling Å',
          },
        ],
      },
    ],
  },
  hentAvdelingensSakslister: action('button-click'),
};
