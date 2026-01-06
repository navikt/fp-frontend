import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl, oppgaverForAvdelingOptions } from '../data/fplosAvdelingslederApi';
import { NøkkeltallbokserPanel } from './NøkkeltallbokserPanel';

import messages from '../../i18n/nb_NO.json';

const OPPGAVER_FOR_AVDELING = [
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-002',
    tilBehandling: true,
    antall: 10,
  },
  {
    fagsakYtelseType: 'ES',
    behandlingType: 'BT-003',
    tilBehandling: true,
    antall: 4,
  },
  {
    fagsakYtelseType: 'ES',
    behandlingType: 'BT-004',
    tilBehandling: true,
    antall: 14,
  },
  {
    fagsakYtelseType: 'ES',
    behandlingType: 'BT-004',
    tilBehandling: false,
    antall: 4,
  },
  {
    fagsakYtelseType: 'FP',
    behandlingType: 'BT-007',
    tilBehandling: false,
    antall: 6,
  },
];

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/status/NøkkeltallbokserPanel',
  component: NøkkeltallbokserPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_FOR_AVDELING.replace(/ø/g, '%C3%B8'), () =>
          HttpResponse.json(OPPGAVER_FOR_AVDELING),
        ),
      ],
    },
  },
  args: {
    valgtAvdelingEnhet: '1',
    children: <div>Avdelingsvelger</div>,
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    const oppgaverForAvdeling = useQuery(oppgaverForAvdelingOptions(props.valgtAvdelingEnhet)).data;
    return alleKodeverk && oppgaverForAvdeling.length > 0 ? <NøkkeltallbokserPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof NøkkeltallbokserPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
