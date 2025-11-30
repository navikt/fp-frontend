import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { VentefristUtløperPanel } from './VentefristUtløperPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const BEHANDLINGER_PÅ_VENT = [
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-29',
    antall: 50,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-28',
    antall: 10,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-31',
    antall: 125,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-33',
    antall: 25,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-34',
    antall: 40,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-32',
    antall: 75,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-35',
    antall: 20,
  },
  {
    fagsakYtelseType: 'FP',
    fristUke: '2025-30',
    antall: 20,
  },
  {
    fagsakYtelseType: 'ES',
    fristUke: '2025-35',
    antall: 14,
  },
  {
    fagsakYtelseType: 'ES',
    fristUke: '2025-29',
    antall: 4,
  },
];

const meta = {
  title: 'los/avdelingsleder/nokkeltall/VentefristUtløperPanel',
  component: VentefristUtløperPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_BEHANDLINGER_FRISTUTLOP.replaceAll('ø', '%C3%B8'), () =>
          HttpResponse.json(BEHANDLINGER_PÅ_VENT),
        ),
      ],
    },
  },
  args: {
    height: 300,
    valgtAvdelingEnhet: '1',
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <VentefristUtløperPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof VentefristUtløperPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
