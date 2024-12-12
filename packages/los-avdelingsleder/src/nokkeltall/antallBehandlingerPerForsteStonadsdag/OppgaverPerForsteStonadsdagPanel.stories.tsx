import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react/*';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../../data/fplosAvdelingslederApi';
import { withQueryClient } from '../../data/withQueryClientProvider';
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
        http.get(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.replaceAll('ø', '%C3%B8'), () =>
          HttpResponse.json([
            {
              forsteStonadsdag: dayjs().subtract(14, 'd').format(ISO_DATE_FORMAT),
              antall: 10,
            },
            {
              forsteStonadsdag: dayjs().subtract(13, 'd').format(ISO_DATE_FORMAT),
              antall: 9,
            },
            {
              forsteStonadsdag: dayjs().subtract(12, 'd').format(ISO_DATE_FORMAT),
              antall: 6,
            },
            {
              forsteStonadsdag: dayjs().subtract(11, 'd').format(ISO_DATE_FORMAT),
              antall: 11,
            },
            {
              forsteStonadsdag: dayjs().subtract(10, 'd').format(ISO_DATE_FORMAT),
              antall: 15,
            },
            {
              forsteStonadsdag: dayjs().subtract(9, 'd').format(ISO_DATE_FORMAT),
              antall: 20,
            },
            {
              forsteStonadsdag: dayjs().subtract(8, 'd').format(ISO_DATE_FORMAT),
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
} satisfies Meta<typeof OppgaverPerForsteStonadsdagPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
