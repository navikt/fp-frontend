import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { KjønnkodeEnum } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import { FagsakSøk } from './FagsakSøk';
import { RestApiGlobalStatePathsKeys, requestApi } from '../data/fplosSaksbehandlerRestApi';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/søk/FagsakSøk',
  component: FagsakSøk,
  decorators: [withIntl],
  render: props => {
    const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakSøk {...props} />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof FagsakSøk>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchFagsakCallback: action('button-click'),
    searchResultReceived: true,
    åpneFagsak: action('button-click'),
    selectOppgaveCallback: action('button-click'),
    searchStarted: false,
    resetSearch: action('button-click'),
    kanSaksbehandle: true,
    fagsaker: [
      {
        saksnummer: '12213234',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        status: FagsakStatus.UNDER_BEHANDLING,
        person: {
          navn: 'Espen Utvikler',
          fødselsdato: '1980-10-10',
          fødselsnummer: '1010',
          kjønn: KjønnkodeEnum.MANN,
        },
        barnFødt: '2019-12-12',
        aktørId: '23',
        opprettet: '',
      },
    ],
    fagsakOppgaver: [
      {
        id: 1,
        status: {
          erReservert: false,
        },
        saksnummer: 12213234,
        personnummer: '1010',
        navn: 'Espen Utvikler',
        system: 'SAK',
        behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
        behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        erTilSaksbehandling: true,
        behandlingId: '12344',
      },
      {
        id: 2,
        status: {
          erReservert: false,
        },
        saksnummer: 12213234,
        personnummer: '1010',
        navn: 'Espen Utvikler',
        system: 'SAK',
        behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
        behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        erTilSaksbehandling: true,
        behandlingId: '12344',
      },
    ],
  },
};

export const IngentingBleFunnet: Story = {
  args: {
    ...Default.args,
    fagsaker: [],
    fagsakOppgaver: [],
  },
};
