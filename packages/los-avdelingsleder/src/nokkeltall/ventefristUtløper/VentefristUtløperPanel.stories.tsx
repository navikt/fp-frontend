import React from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { withQueryClient } from '../../data/withQueryClientProvider';
import { VentefristUtløperPanel } from './VentefristUtløperPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const BEHANDLINGER_PÅ_VENT = [
  {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingFrist: dayjs().format(ISO_DATE_FORMAT),
    antall: 10,
  },
  {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingFrist: dayjs().add(5, 'd').format(ISO_DATE_FORMAT),
    antall: 4,
  },
  {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingFrist: dayjs().add(5, 'w').format(ISO_DATE_FORMAT),
    antall: 14,
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
    getValueFromLocalStorage: () => '',
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
