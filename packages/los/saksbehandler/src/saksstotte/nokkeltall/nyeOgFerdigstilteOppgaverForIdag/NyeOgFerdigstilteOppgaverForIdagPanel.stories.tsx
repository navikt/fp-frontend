import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../../data/fplosSaksbehandlerApi';
import { NyeOgFerdigstilteOppgaverForIdagPanel } from './NyeOgFerdigstilteOppgaverForIdagPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel',
  component: NyeOgFerdigstilteOppgaverForIdagPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos))],
    },
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <NyeOgFerdigstilteOppgaverForIdagPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof NyeOgFerdigstilteOppgaverForIdagPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 300,
    nyeOgFerdigstilteOppgaver: [
      {
        behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
        antallNye: 10,
        antallFerdigstilte: 20,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingTypeEnum.KLAGE,
        antallNye: 23,
        antallFerdigstilte: 2,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingTypeEnum.REVURDERING,
        antallNye: 3,
        antallFerdigstilte: 24,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingTypeEnum.DOKUMENTINNSYN,
        antallNye: 23,
        antallFerdigstilte: 12,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
    ],
  },
};

export const IngenBehandlinger: Story = {
  args: {
    height: 300,
  },
};
