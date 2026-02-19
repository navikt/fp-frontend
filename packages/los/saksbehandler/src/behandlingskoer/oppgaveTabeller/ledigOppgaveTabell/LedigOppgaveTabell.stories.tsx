import { type ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { AsyncPollingStatus } from '@navikt/fp-types';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosSaksbehandlerApi';
import { type Oppgave } from '../../../typer/oppgaveTsType';
import { LedigOppgaveTabell } from './LedigOppgaveTabell';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const OPPGAVER_TIL_BEHANDLING = [
  {
    id: 1,
    reservasjonStatus: {
      erReservert: false,
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        flyttetAvIdent: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Flyttet fordi...',
      },
    },
    saksnummer: '345325',
    personnummer: '1212',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: 'BT-002',
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '1',
    andreKriterier: ['REVURDERING_INNTEKTSMELDING'],
  },
] satisfies Oppgave[];

const meta = {
  title: 'behandlingskoer/LedigOppgaveTabell',
  component: LedigOppgaveTabell,
  decorators: [withIntl, withQueryClient],
  args: {
    valgtSakslisteId: 1,
    reserverOppgave: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <LedigOppgaveTabell {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<ComponentProps<typeof LedigOppgaveTabell>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
          const doPolling = t.request.url.includes('oppgaveIder');
          return doPolling
            ? new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/status' } })
            : new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/result' } });
        }),
        http.get('https://www.test.com/api/status', () =>
          HttpResponse.json<AsyncPollingStatus>({
            status: 'PENDING',
            pollIntervalMillis: 100000000,
            message: 'Venter på prosesstask [behandlingskontroll.fortsettBehandling][id: 1000020]',
          }),
        ),
        http.get('https://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING)),
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
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
          const doPolling = t.request.url.includes('oppgaveIder');
          return doPolling
            ? new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/status' } })
            : new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/result' } });
        }),
        http.get('https://www.test.com/api/status', () =>
          HttpResponse.json<AsyncPollingStatus>({
            status: 'PENDING',
            pollIntervalMillis: 100000000,
            message: 'Venter på prosesstask [behandlingskontroll.fortsettBehandling][id: 1000020]',
          }),
        ),
        http.get('https://www.test.com/api/result', () => HttpResponse.json([])),
      ],
    },
  },
};
