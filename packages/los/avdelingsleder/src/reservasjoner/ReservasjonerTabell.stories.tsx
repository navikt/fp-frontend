import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosAvdelingslederApi';
import { ReservasjonerTabell } from './ReservasjonerTabell';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/reservasjoner/ReservasjonerTabell',
  component: ReservasjonerTabell,
  decorators: [withIntl, withQueryClient],

  args: {
    valgtAvdelingEnhet: '1',
  },
} satisfies Meta<typeof ReservasjonerTabell>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ViseAtIngenReservasjonerBleFunnet: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([])),
        http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
};

export const VisTabellMedReservasjoner: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () =>
          HttpResponse.json([
            {
              reservertAvUid: 'wsfwer-sdsfd',
              reservertAvNavn: 'Espen Utvikler',
              reservertTilTidspunkt: '2020-01-10',
              oppgaveId: 1,
              oppgaveSaksNr: '122234',
              behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
            },
            {
              reservertAvUid: 'gtfbrt-tbrtb',
              reservertAvNavn: 'Eirik Utvikler',
              reservertTilTidspunkt: '2020-01-01',
              oppgaveId: 2,
              oppgaveSaksNr: '23454',
              behandlingType: BehandlingType.KLAGE,
            },
          ]),
        ),
        http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
};
