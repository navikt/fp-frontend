import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { UtvalgskriterierForSakslisteForm } from './UtvalgskriterierForSakslisteForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm',
  component: UtvalgskriterierForSakslisteForm,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
        http.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtAvdelingEnhet: '',
  },
  render: args => {
    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? <UtvalgskriterierForSakslisteForm {...args} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof UtvalgskriterierForSakslisteForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const MedGittNavn: Story = {
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'liste',
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 1,
        til: 4,
        periodefilter: 'RELATIV_PERIODE_DAGER',
      },
      behandlingTyper: ['BT-002'],
      fagsakYtelseTyper: ['FP'],
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      andreKriterie: {
        inkluder: ['TIL_BESLUTTER'],
        ekskluder: ['PAPIRSOKNAD'],
      },
    },
  },
};

export const MedDefaultNavn: Story = {
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: undefined,
      saksbehandlerIdenter: [],
      sortering: {
        sorteringType: 'BEHFRIST',
        fra: 1,
        til: 4,
        periodefilter: 'RELATIV_PERIODE_DAGER',
      },
      behandlingTyper: ['BT-002'],
      fagsakYtelseTyper: ['FP'],
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      andreKriterie: {
        inkluder: ['TIL_BESLUTTER'],
        ekskluder: ['PAPIRSOKNAD'],
      },
    },
  },
};
