import React, { ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
import { withQueryClient } from '../../data/withQueryClientProvider';
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
  decorators: [withIntl, withQueryClient],
  args: {
    valgtSakslisteId: 1,
    reserverOppgave: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <OppgaverTabell {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<StoryArgs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER)),
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING)),
      ],
    },
  },
  args: {
    antallOppgaver: 4,
  },
};

export const TomOppgaveTabell: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([])),
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, () => HttpResponse.json([])),
      ],
    },
  },
};

const oppdatertId = (oppgaver: Oppgave[], idnumber: number): Oppgave[] => {
  return oppgaver.map(o => ({
    ...o,
    id: o.id + idnumber,
  }));
};

export const VisPagineringNårMerEnn15Oppgaver: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () =>
          HttpResponse.json([
            ...RESERVERTE_OPPGAVER,
            ...oppdatertId(RESERVERTE_OPPGAVER, 10),
            ...oppdatertId(RESERVERTE_OPPGAVER, 20),
            ...oppdatertId(RESERVERTE_OPPGAVER, 30),
            ...oppdatertId(RESERVERTE_OPPGAVER, 40),
            ...oppdatertId(RESERVERTE_OPPGAVER, 50),
            ...oppdatertId(RESERVERTE_OPPGAVER, 60),
            ...oppdatertId(RESERVERTE_OPPGAVER, 70),
          ]),
        ),
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING)),
      ],
    },
  },
  args: {
    antallOppgaver: 4,
  },
};
