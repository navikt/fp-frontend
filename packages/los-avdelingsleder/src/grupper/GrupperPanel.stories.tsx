import { Meta, StoryObj } from '@storybook/react/*';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosAvdelingslederApi';
import { withQueryClient } from '../data/withQueryClientProvider';
import { SaksbehandlereOgSaksbehandlerGrupper } from '../typer/saksbehandlereOgSaksbehandlerGrupper';
import { GrupperPanel } from './GrupperPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const AVDELING_SAKSBEHANDLERE = [
  {
    brukerIdent: 'ident1',
    navn: 'Anders Utvikler',
    ansattAvdeling: null,
  },
  {
    brukerIdent: 'ident12',
    navn: 'Espen Utvikler',
    ansattAvdeling: 'Avdeling Å',
  },
  {
    brukerIdent: 'ident4',
    navn: 'Olga Utvikler',
    ansattAvdeling: 'Avdeling Å',
  },
  {
    brukerIdent: 'ident3',
    navn: 'Klara Utvikler',
    ansattAvdeling: 'Avdeling Å',
  },
];

const SAKSBEHANDLERE_OG_SAKSBEHANDLER_GRUPPER = {
  saksbehandlerGrupper: [
    {
      gruppeId: 1,
      gruppeNavn: 'Dette er navnet på en gruppe',
      saksbehandlere: [
        {
          brukerIdent: 'ident1',
          navn: 'Anders Utvikler',
        },
      ],
    },
  ],
} as SaksbehandlereOgSaksbehandlerGrupper;

const meta = {
  title: 'los/avdelingsleder/grupper/GrupperPanel',
  component: GrupperPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json(SAKSBEHANDLERE_OG_SAKSBEHANDLER_GRUPPER)),
        http.post(LosUrl.OPPRETT_GRUPPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LEGG_SAKSBEHANDLER_TIL_GRUPPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.SLETT_GRUPPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.FJERN_SAKSBEHANDLER_FRA_GRUPPE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtAvdelingEnhet: '1',
    avdelingensSaksbehandlere: AVDELING_SAKSBEHANDLERE,
  },
} satisfies Meta<typeof GrupperPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
