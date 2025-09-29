import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { TilBehandlingPanel } from './TilBehandlingPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const OPPGAVER_PER_DATO = [
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-002',
    opprettetDato: dayjs().format(ISO_DATE_FORMAT),
    antall: 1,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-002',
    opprettetDato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
    antall: 2,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-003',
    opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
    antall: 2,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-002',
    opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
    antall: 6,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-006',
    opprettetDato: dayjs().subtract(10, 'd').format(ISO_DATE_FORMAT),
    antall: 3,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-006',
    opprettetDato: dayjs().subtract(16, 'd').format(ISO_DATE_FORMAT),
    antall: 3,
  },
];

const meta = {
  title: 'los/avdelingsleder/nokkeltall/TilBehandlingPanel',
  component: TilBehandlingPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_PER_DATO.replace('ø', '%C3%B8'), () => HttpResponse.json(OPPGAVER_PER_DATO)),
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
    return alleKodeverk ? <TilBehandlingPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof TilBehandlingPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
