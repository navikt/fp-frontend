import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { SakslisteDto } from '@navikt/fp-types';

import { kriterieFilter } from '../../testdata/kriterieFilter';
import { lagNySaksliste } from '../../testdata/lagNySaksliste';
import { statistikkOppgaveFilter } from '../../testdata/statistikkOppgaveFilter';
import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import { EndreSakslisterPanel } from './EndreSakslisterPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const lagHandlersMedSakslister = (initialSakslister: SakslisteDto[]) => {
  const SAKSLISTER = initialSakslister;
  return [
    http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
    http.get(LosUrl.OPPGAVE_AVDELING_ANTALL, () => HttpResponse.json(1)),
    http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
    http.get(LosUrl.SAKSLISTER_FOR_AVDELING, () => HttpResponse.json(SAKSLISTER)),
    http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json({ saksbehandlerGrupper: [] })),
    http.get(encodeURI(LosUrl.OPPGAVE_FILTER_STATISTIKK), () => HttpResponse.json(statistikkOppgaveFilter)),
    http.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, () => new HttpResponse(null, { status: 204 })),
    http.post(LosUrl.SLETT_SAKSLISTE, () => new HttpResponse(null, { status: 204 })),
    http.get(LosUrl.KODEVERK_KRITERIE_FILTER, () => HttpResponse.json(kriterieFilter)),
    http.post(LosUrl.OPPRETT_NY_SAKSLISTE, () => {
      const nySakslisteId = (SAKSLISTER.at(-1)?.sakslisteId ?? 0) + 1;
      SAKSLISTER.push(lagNySaksliste({ sakslisteId: nySakslisteId }));
      return HttpResponse.json({ sakslisteId: nySakslisteId });
    }),
  ];
};

const meta = {
  component: EndreSakslisterPanel,
  decorators: [withIntl, withQueryClient],
  args: {
    valgtAvdelingEnhet: '5555',
    avdelingensSaksbehandlere: [
      {
        brukerIdent: 'R23233',
        navn: 'Ola Nordmann',
        ansattAvdeling: '1234',
      },
    ],
  },
  render: function Render(args) {
    const { data: kodeverkLos } = useQuery(losKodeverkOptions());
    return kodeverkLos ? <EndreSakslisterPanel {...args} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof EndreSakslisterPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ToSakslister: Story = {
  parameters: {
    msw: {
      handlers: lagHandlersMedSakslister([
        lagNySaksliste({
          sakslisteId: 1,
          navn: 'A00 Hurtig kø',
          sortering: {
            sorteringType: 'BEHFRIST',
            fra: 1,
            til: 4,
            periodefilter: 'RELATIV_PERIODE_DAGER',
          },
          behandlingTyper: ['BT-002'],
          fagsakYtelseTyper: ['FP'],
          sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO' }],
          andreKriterie: {
            inkluder: [],
            ekskluder: ['PAPIRSOKNAD', 'TIL_BESLUTTER'],
          },
          gjeldendeStatistikk: {
            alleOppgaver: 33,
            tilgjengeligeOppgaver: 25,
            behandlingerPåVent: 22,
          },
        }),
        lagNySaksliste({
          sakslisteId: 2,
          navn: 'A02 - Registrere papirsøknad',
          gjeldendeStatistikk: {
            alleOppgaver: 12,
            tilgjengeligeOppgaver: 8,
            behandlingerPåVent: 10,
          },
        }),
      ]),
    },
  },
};

export const IngenSakslister: Story = {
  parameters: {
    msw: {
      handlers: lagHandlersMedSakslister([]),
    },
  },
};
