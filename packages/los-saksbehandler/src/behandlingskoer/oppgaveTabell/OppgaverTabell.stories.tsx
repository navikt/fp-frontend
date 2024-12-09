import React, { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys, RestApiPathsKeys } from '../../data/fplosSaksbehandlerRestApi';
import { OppgaverTabell } from './OppgaverTabell';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const OPPGAVER_TIL_BEHANDLING = [
  {
    id: 1,
    status: {
      erReservert: false,
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        uid: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Flyttet fordi...',
      },
    },
    saksnummer: 345325,
    personnummer: '1212',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '1',
  },
] satisfies Oppgave[];

const RESERVERTE_OPPGAVER = [
  {
    id: 2,
    status: {
      erReservert: true,
      reservertTilTidspunkt: '2019-01-01T00:54:25.455',
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        uid: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Dette er en begrunnelse',
      },
    },
    saksnummer: 1234,
    personnummer: '233',
    navn: 'Helge Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.KLAGE,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '2',
  },
  {
    id: 3,
    status: {
      erReservert: true,
      reservertTilTidspunkt: '2023-01-01T00:54:25.455',
    },
    saksnummer: 964545,
    personnummer: '233',
    navn: 'Bjarne Bjærke',
    system: 'SAK',
    behandlingstype: BehandlingType.KLAGE,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2023-01-01',
    behandlingsfrist: '2023-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '2',
  },
  {
    id: 4,
    status: {
      erReservert: true,
      reservertTilTidspunkt: '2024-01-01T00:54:25.455',
    },
    saksnummer: 3454626,
    personnummer: '233',
    navn: 'Borgil Bø',
    system: 'SAK',
    behandlingstype: BehandlingType.REVURDERING,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2024-01-01',
    behandlingsfrist: '2024-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '2',
  },
] satisfies Oppgave[];

type StoryArgs = {
  reserverteOppgaver?: Oppgave[];
  oppgaverTilBehandling?: Oppgave[];
} & ComponentProps<typeof OppgaverTabell>;

const meta = {
  title: 'behandlingskoer/OppgaverTabell',
  component: OppgaverTabell,
  decorators: [withIntl],
  render: ({ reserverteOppgaver = [], oppgaverTilBehandling = [], ...rest }) => {
    const data = [
      { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
      { key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name, data: {} },
      { key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name, data: reserverteOppgaver },
      { key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name, data: oppgaverTilBehandling },
    ];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <OppgaverTabell {...rest} />
      </RestApiMock>
    );
  },
} satisfies Meta<StoryArgs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reserverOppgave: action('button-click'),
    valgtSakslisteId: 1,
    antallOppgaver: 4,
    oppgaverTilBehandling: OPPGAVER_TIL_BEHANDLING,
    reserverteOppgaver: RESERVERTE_OPPGAVER,
  },
};

export const TomOppgaveTabell: Story = {
  args: {
    reserverOppgave: action('button-click'),
    valgtSakslisteId: 1,
  },
};

const oppdatertId = (oppgaver: Oppgave[], idnumber: number): Oppgave[] => {
  return oppgaver.map(o => ({
    ...o,
    id: o.id + idnumber,
  }));
};

export const VisPagineringNårMerEnn15Oppgaver: Story = {
  args: {
    reserverOppgave: action('button-click'),
    valgtSakslisteId: 1,
    antallOppgaver: 4,
    oppgaverTilBehandling: OPPGAVER_TIL_BEHANDLING,
    reserverteOppgaver: [
      ...RESERVERTE_OPPGAVER,
      ...oppdatertId(RESERVERTE_OPPGAVER, 10),
      ...oppdatertId(RESERVERTE_OPPGAVER, 20),
      ...oppdatertId(RESERVERTE_OPPGAVER, 30),
      ...oppdatertId(RESERVERTE_OPPGAVER, 40),
      ...oppdatertId(RESERVERTE_OPPGAVER, 50),
      ...oppdatertId(RESERVERTE_OPPGAVER, 60),
      ...oppdatertId(RESERVERTE_OPPGAVER, 70),
    ],
  },
};
