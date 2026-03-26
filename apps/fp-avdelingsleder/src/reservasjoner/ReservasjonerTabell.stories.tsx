import type { ComponentProps } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import { ReservasjonerTabell } from './ReservasjonerTabell';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

type StoryProps = ComponentProps<typeof ReservasjonerTabell>;

const RenderReservasjonerTabell = (args: StoryProps) => {
  const { data: kodeverkLos } = useQuery(losKodeverkOptions());
  return kodeverkLos ? <ReservasjonerTabell {...args} /> : <LoadingPanel />;
};

const meta = {
  title: 'los/avdelingsleder/reservasjoner/ReservasjonerTabell',
  component: ReservasjonerTabell,
  decorators: [withIntl, withQueryClient],

  args: {
    valgtAvdelingEnhet: '1',
  },
  render: args => <RenderReservasjonerTabell {...args} />,
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
        http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
};

const generateReservasjoner = () => {
  const saksbehandlere = [
    { brukerIdent: 'espen-001', navn: 'Espen Utvikler' },
    { brukerIdent: 'espen-002', navn: 'Espen Tester' },
    { brukerIdent: 'eirik-001', navn: 'Eirik Utvikler' },
    { brukerIdent: 'jens-otto-001', navn: 'Jens-Otto Techer' },
    { brukerIdent: 'tor-001', navn: 'Tor På Spore' },
    { brukerIdent: 'siri-001', navn: 'Siri Utvikler' },
    { brukerIdent: 'steffen-001', navn: 'Steffen Heffen' },
  ];

  const behandlingTyper = ['BT-002', 'BT-003', 'BT-004', 'BT-006', 'BT-007'];
  const ytelseTyper = ['ES', 'FP', 'SVP'];
  const kriterier = [
    'BARE_FAR_RETT',
    'MOR_UKJENT_UTLAND',
    'UTBETALING_TIL_BRUKER',
    'NÆRING',
    'DØD',
    'NYTT_VEDTAK',
    'UTLANDSSAK',
    'TIL_BESLUTTER',
    'SAMMENSATT_KONTROLL',
    'EØS_SAK',
    'KODE7_SAK',
    'RETURNERT_FRA_BESLUTTER',
    'HASTER',
  ];

  const reservasjoner = [];
  let oppgaveId = 1;

  for (let i = 0; i < 40; i++) {
    const saksbehandler = saksbehandlere[i % saksbehandlere.length]!;
    const behandlingType = behandlingTyper[i % behandlingTyper.length]!;
    const ytelseType = ytelseTyper[i % ytelseTyper.length]!;
    const andreKriterierCount = i % 2 === 0 ? 3 : 2;
    const andreKriterier = Array.from(
      { length: andreKriterierCount },
      (_, j) => kriterier[(i + j) % kriterier.length]!,
    );

    const reservertTilTidspunkt = dayjs()
      .add(i + 1, 'day')
      .format(ISO_DATE_FORMAT);

    reservasjoner.push({
      reservertAvIdent: saksbehandler.brukerIdent,
      reservertAvNavn: saksbehandler.navn,
      reservertTilTidspunkt,
      oppgaveId: oppgaveId++,
      oppgaveSaksNr: `${100000 + i}`,
      behandlingType: behandlingType,
      ytelseType: ytelseType,
      andreKriterier: andreKriterier,
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
        http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
};
