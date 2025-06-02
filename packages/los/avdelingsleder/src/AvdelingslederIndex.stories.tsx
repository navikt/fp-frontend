import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, withQueryClient, withRouter } from '@navikt/fp-storybook-utils';
import type { NavAnsatt } from '@navikt/fp-types';

import { AvdelingslederIndexIntlWrapper } from './AvdelingslederIndex';
import { LosUrl } from './data/fplosAvdelingslederApi';

const HANDLERS = [
  http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
  http.get(LosUrl.SAKSBEHANDLERE_FOR_AVDELING, () => HttpResponse.json([])),
  http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
  http.get(LosUrl.OPPGAVE_AVDELING_ANTALL, () => HttpResponse.json(1)),
  http.get(LosUrl.SAKSLISTER_FOR_AVDELING, () => HttpResponse.json([])),
  http.post(LosUrl.LAGRE_SAKSLISTE_NAVN, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_BEHANDLINGSTYPE, () => new HttpResponse(null, { status: 200 })),
  http.post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, () => new HttpResponse(null, { status: 200 })),
  http.get(LosUrl.HENT_OPPGAVER_FOR_AVDELING, () => HttpResponse.json([])),
  http.get(LosUrl.HENT_OPPGAVER_PER_DATO, () => HttpResponse.json([])),
  http.get(LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, () => HttpResponse.json([])),
  http.get(LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, () => HttpResponse.json([])),
  http.get(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG, () => HttpResponse.json([])),
  http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([])),
];

const meta = {
  title: 'los/avdelingsleder/AvdelingslederIndex',
  component: AvdelingslederIndexIntlWrapper,
  decorators: [withRouter, withQueryClient],
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
  },
} satisfies Meta<typeof AvdelingslederIndexIntlWrapper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat(
        http.get(LosUrl.AVDELINGER, () =>
          HttpResponse.json([
            {
              avdelingEnhet: '1234',
              navn: 'Nav Oslo',
              kreverKode6: true,
            },
            {
              avdelingEnhet: '123',
              navn: 'Nav Vikafossen',
              kreverKode6: false,
            },
          ]),
        ),
      ),
    },
  },
  args: {
    navAnsatt: {
      kanOppgavestyre: true,
      kanBehandleKode6: true,
    } as NavAnsatt,
  },
};

export const LasteIkonFørValgtAvdelingErSatt: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat(http.get(LosUrl.AVDELINGER, () => HttpResponse.json([]))),
    },
  },
  args: {
    navAnsatt: {
      kanOppgavestyre: true,
      kanBehandleKode6: true,
    } as NavAnsatt,
  },
};

export const HarIkkeTilgang: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat(http.get(LosUrl.AVDELINGER, () => HttpResponse.json([]))),
    },
  },
  args: {
    navAnsatt: {
      kanOppgavestyre: false,
      kanBehandleKode6: false,
    } as NavAnsatt,
  },
};

export const SkalFiltrereBortAvdelingerSomKreverKode6: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat(
        http.get(LosUrl.AVDELINGER, () =>
          HttpResponse.json([
            {
              avdelingEnhet: '1234',
              navn: 'Nav Oslo',
              kreverKode6: true,
            },
            {
              avdelingEnhet: '123',
              navn: 'Nav Vikafossen',
              kreverKode6: false,
            },
          ]),
        ),
      ),
    },
  },
  args: {
    navAnsatt: {
      kanOppgavestyre: true,
      kanBehandleKode6: false,
    } as NavAnsatt,
  },
};
