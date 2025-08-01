import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { AndreKriterierType, BehandlingType, FagsakYtelseType, KøSortering } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { EndreSakslisterPanel } from './EndreSakslisterPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'test',
    saksbehandlerIdenter: [],
    sortering: {
      sorteringType: KøSortering.BEHANDLINGSFRIST,
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
    fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
    andreKriterier: [
      {
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true,
      },
      {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false,
      },
    ],
  },
] satisfies SakslisteAvdeling[];

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/EndreSakslisterPanel',
  component: EndreSakslisterPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
        http.get(LosUrl.SAKSLISTER_FOR_AVDELING, () => HttpResponse.json(SAKSLISTER)),
        http.post(LosUrl.LAGRE_SAKSLISTE_NAVN, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_BEHANDLINGSTYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  render: args => {
    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? <EndreSakslisterPanel {...args} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof EndreSakslisterPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valgtAvdelingEnhet: 'NAV Oslo',
    avdelingensSaksbehandlere: [],
  },
};
