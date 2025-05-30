import { type ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { AndreKriterierType, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { type Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosSaksbehandlerApi';
import { LedigOppgaveTabell } from './LedigOppgaveTabell';

import messages from '../../../../i18n/nb_NO.json';

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
    saksnummer: '345325',
    personnummer: '1212',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '1',
    andreKriterier: [AndreKriterierType.REVURDERING_INNTEKTSMELDING],
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
          HttpResponse.json({
            status: ApiPollingStatus.PENDING,
            pollIntervalMillis: 100000000,
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
          HttpResponse.json({
            status: ApiPollingStatus.PENDING,
            pollIntervalMillis: 100000000,
          }),
        ),
        http.get('https://www.test.com/api/result', () => HttpResponse.json([])),
      ],
    },
  },
};
