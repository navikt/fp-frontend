import { type ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AndreKriterierType, BehandlingTypeEnum, OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import { type Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosSaksbehandlerApi';
import { ReservertOppgaveTabell } from './ReservertOppgaveTabell';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const RESERVERTE_OPPGAVER = [
  {
    id: 2,
    reservasjonStatus: {
      erReservert: true,
      reservertTilTidspunkt: '2019-01-01T00:54:25.455',
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        uid: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Dette er en begrunnelse',
      },
    },
    saksnummer: '1234',
    personnummer: '233',
    navn: 'Helge Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingTypeEnum.KLAGE,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '2',
    andreKriterier: [],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
  },
  {
    id: 3,
    reservasjonStatus: {
      erReservert: true,
      reservertTilTidspunkt: '2023-01-01T00:54:25.455',
    },
    saksnummer: '964545',
    personnummer: '233',
    navn: 'Bjarne Bjærke',
    system: 'SAK',
    behandlingstype: BehandlingTypeEnum.KLAGE,
    opprettetTidspunkt: '2023-01-01',
    behandlingsfrist: '2023-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '2',
    andreKriterier: [],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
  },
  {
    id: 4,
    reservasjonStatus: {
      erReservert: true,
      reservertTilTidspunkt: '2024-01-01T00:54:25.455',
    },
    saksnummer: '3454626',
    personnummer: '233',
    navn: 'Borgil Bø',
    system: 'SAK',
    behandlingstype: BehandlingTypeEnum.REVURDERING,
    opprettetTidspunkt: '2024-01-01',
    behandlingsfrist: '2024-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '2',
    andreKriterier: [AndreKriterierType.REVURDERING_INNTEKTSMELDING],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
  },
] satisfies Oppgave[];

const meta = {
  title: 'behandlingskoer/ReservertOppgaveTabell',
  component: ReservertOppgaveTabell,
  decorators: [withIntl, withQueryClient],
  args: {
    reserverOppgave: action('button-click'),
    brukernavn: 'T232332',
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <ReservertOppgaveTabell {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<ComponentProps<typeof ReservertOppgaveTabell>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER)),
      ],
    },
  },
};

export const TomOppgaveTabell: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([])),
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
      ],
    },
  },
};
