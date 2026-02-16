import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
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
  render: args => {
    const { data: kodeverkLos } = useQuery(losKodeverkOptions());
    return kodeverkLos ? <ReservasjonerTabell {...args} /> : <LoadingPanel />;
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

const generateReservasjoner = () => {
  const saksbehandlere = [
    { uid: 'espen-001', navn: 'Espen Utvikler' },
    { uid: 'espen-002', navn: 'Espen Tester' },
    { uid: 'eirik-001', navn: 'Eirik Utvikler' },
    { uid: 'jens-otto-001', navn: 'Jens-Otto Techer' },
    { uid: 'tor-001', navn: 'Tor På Spore' },
    { uid: 'siri-001', navn: 'Siri Utvikler' },
    { uid: 'steffen-001', navn: 'Steffen Heffen' },
  ];

  const behandlingTyper = ['BT-002', 'BT-003', 'BT-004', 'BT-005', 'BT-006'];

  const reservasjoner = [];
  let oppgaveId = 1;

  for (let i = 0; i < 40; i++) {
    const saksbehandler = saksbehandlere[i % saksbehandlere.length]!;
    const behandlingType = behandlingTyper[i % behandlingTyper.length]!;
    const reservertTilDato = new Date();
    reservertTilDato.setDate(reservertTilDato.getDate() + Math.floor(Math.random() * 30) + 1);

    reservasjoner.push({
      reservertAvUid: saksbehandler.uid,
      reservertAvNavn: saksbehandler.navn,
      reservertTilTidspunkt: reservertTilDato.toISOString().split('T')[0],
      oppgaveId: oppgaveId++,
      oppgaveSaksNr: `${100000 + i}`,
      behandlingType: behandlingType,
    });
  }

  return reservasjoner;
};

export const VisTabellMedReservasjoner: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json(generateReservasjoner())),
        http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
};
