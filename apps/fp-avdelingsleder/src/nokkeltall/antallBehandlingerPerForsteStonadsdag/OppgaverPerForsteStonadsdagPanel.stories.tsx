import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { OppgaverPerForsteStonadsdagPanel } from './OppgaverPerForsteStonadsdagPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/nokkeltall/OppgaverPerForsteStonadsdagPanel',
  component: OppgaverPerForsteStonadsdagPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND.replaceAll('ø', '%C3%B8'), () =>
          HttpResponse.json([
            {
              fagsakYtelseType: 'FP',
              førsteStønadsdag: dayjs().subtract(4, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 10,
            },
            {
              fagsakYtelseType: 'FP',
              førsteStønadsdag: dayjs().subtract(3, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 9,
            },
            {
              fagsakYtelseType: 'ES',
              førsteStønadsdag: dayjs().subtract(2, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 2,
            },
            {
              fagsakYtelseType: 'FP',
              førsteStønadsdag: dayjs().subtract(1, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 6,
            },
            {
              fagsakYtelseType: 'SVP',
              førsteStønadsdag: dayjs().subtract(1, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 2,
            },
            {
              fagsakYtelseType: 'FP',
              førsteStønadsdag: dayjs().startOf('month').format(ISO_DATE_FORMAT),
              antall: 11,
            },
            {
              fagsakYtelseType: 'SVP',
              førsteStønadsdag: dayjs().startOf('month').format(ISO_DATE_FORMAT),
              antall: 4,
            },
            {
              fagsakYtelseType: 'ES',
              førsteStønadsdag: dayjs().startOf('month').format(ISO_DATE_FORMAT),
              antall: 6,
            },
            {
              fagsakYtelseType: 'FP',
              førsteStønadsdag: dayjs().add(1, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 15,
            },
            {
              fagsakYtelseType: 'SVP',
              førsteStønadsdag: dayjs().add(1, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 4,
            },
            {
              fagsakYtelseType: 'ES',
              førsteStønadsdag: dayjs().add(2, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 20,
            },
            {
              fagsakYtelseType: 'ES',
              førsteStønadsdag: dayjs().add(2, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 5,
            },
            {
              fagsakYtelseType: 'ES',
              førsteStønadsdag: dayjs().add(3, 'months').startOf('month').format(ISO_DATE_FORMAT),
              antall: 13,
            },
          ]),
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
    return alleKodeverk ? <OppgaverPerForsteStonadsdagPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof OppgaverPerForsteStonadsdagPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
