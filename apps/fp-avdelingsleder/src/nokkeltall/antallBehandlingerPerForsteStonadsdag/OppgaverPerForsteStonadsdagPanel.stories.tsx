import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { oppgaverFørsteStønadsdagPerMnd } from '../../../testdata/oppgaverFørsteStønadsdagPerMnd';
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
        http.get(encodeURI(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND), () =>
          HttpResponse.json(oppgaverFørsteStønadsdagPerMnd),
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
