import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { OppgaverForAvdelingPerDato } from '@navikt/fp-types';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { TilBehandlingPanel } from './TilBehandlingPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const BEHANDLING_TYPES: OppgaverForAvdelingPerDato['behandlingType'][] = [
  'BT-002',
  'BT-003',
  'BT-004',
  'BT-006',
  'BT-007',
  'BT-008',
  'BT-009',
];
const FAGSAK_YTELSE_TYPES: OppgaverForAvdelingPerDato['fagsakYtelseType'][] = ['FP', 'ES', 'SVP'];

const generateOppgaverPerDato = (): OppgaverForAvdelingPerDato[] => {
  const oppgaver: OppgaverForAvdelingPerDato[] = [];
  const today = dayjs();
  const periodeDaysBack = 28; // 4 weeks (matches default display period)

  // Generate for each date in the period (4 weeks back to today)
  for (let daysAgo = periodeDaysBack; daysAgo >= 0; daysAgo--) {
    const dato = today.subtract(daysAgo, 'day').format(ISO_DATE_FORMAT);

    // Generate for each combination of behandlingType and fagsakYtelseType
    BEHANDLING_TYPES.forEach((behandlingType, typeIndex) => {
      FAGSAK_YTELSE_TYPES.forEach(fagsakYtelseType => {
        // Higher antall for earlier treatment types (lower index)
        // typeIndex 0 gets max 25, typeIndex 6 gets max ~6
        const maxAntall = Math.max(1, Math.round(25 - typeIndex * 3.2));
        const antall = Math.floor(Math.random() * (maxAntall + 1));

        oppgaver.push({
          fagsakYtelseType,
          behandlingType,
          statistikkDato: dato,
          opprettetDato: dato,
          antall,
        });
      });
    });
  }

  return oppgaver;
};

const meta = {
  title: 'los/avdelingsleder/nokkeltall/TilBehandlingPanel',
  component: TilBehandlingPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_PER_DATO.replace('ø', '%C3%B8'), () =>
          HttpResponse.json(generateOppgaverPerDato()),
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
    return alleKodeverk ? <TilBehandlingPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof TilBehandlingPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
