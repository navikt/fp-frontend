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

const MAX_PERIODE_LENGDE = 28;

/**
 * Genererer en liste med statistikk. Generering tar for seg de siste 28 dagene(MAX_PERIODE_LENGDE).
 *
 * Det opprettes et element for hver kombinasjon av `behandlingType` og `fagsakYtelseType`.
 * For å oppnå et relativt realistisk tall som blir `antall` bruker vi indexen til både BEHANDLING_TYPES
 * og FAGSAK_YTELSE_TYPES i kalkuleringen av `antall`.
 */
const generateOppgaverPerDato = (): OppgaverForAvdelingPerDato[] => {
  const oppgaver: OppgaverForAvdelingPerDato[] = [];
  const today = dayjs();

  for (let daysAgo = MAX_PERIODE_LENGDE; daysAgo >= 0; daysAgo--) {
    const statistikkDato = today.subtract(daysAgo, 'day').format(ISO_DATE_FORMAT);

    BEHANDLING_TYPES.forEach((behandlingType, behandlingTypeIndex) => {
      FAGSAK_YTELSE_TYPES.forEach((fagsakYtelseType, fagsakYtelseTypeIndex) => {
        /**
         * For å få litt spill i dataen bruker vi indexen til behandlingType og fagsakYtelseType for å beregne antallet.
         * Da vil
         *    FP x førstegangsbehandling  >  SVP x førstegangsbehandling.
         *    ES x klage  >  ES x tilbakebetaling revurdering.
         */
        const behandlingsTypeMultippel = BEHANDLING_TYPES.length - behandlingTypeIndex;
        const fagsakYtelseTypeMultippel = (FAGSAK_YTELSE_TYPES.length - fagsakYtelseTypeIndex) * 10;

        const maxAntallForKombinasjon = behandlingsTypeMultippel * fagsakYtelseTypeMultippel;
        const antall = Math.floor(Math.random() * maxAntallForKombinasjon);

        oppgaver.push({
          fagsakYtelseType,
          behandlingType,
          statistikkDato,
          antall,
          opprettetDato: '',
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
        http.get(encodeURI(LosUrl.HENT_OPPGAVER_PER_DATO), () => HttpResponse.json(generateOppgaverPerDato())),
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
