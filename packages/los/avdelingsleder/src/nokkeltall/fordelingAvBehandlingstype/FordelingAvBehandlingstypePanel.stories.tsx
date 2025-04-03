import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { FordelingAvBehandlingstypePanel } from './FordelingAvBehandlingstypePanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const OPPGAVER_FOR_AVDELING = [
  {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    tilBehandling: true,
    antall: 10,
  },
  {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.KLAGE,
    tilBehandling: true,
    antall: 4,
  },
  {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.REVURDERING,
    tilBehandling: true,
    antall: 14,
  },
  {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.REVURDERING,
    tilBehandling: false,
    antall: 4,
  },
  {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.TILBAKEKREVING,
    tilBehandling: false,
    antall: 6,
  },
];

const meta = {
  title: 'los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel',
  component: FordelingAvBehandlingstypePanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_FOR_AVDELING.replace('ø', '%C3%B8'), () =>
          HttpResponse.json(OPPGAVER_FOR_AVDELING),
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
    return alleKodeverk ? <FordelingAvBehandlingstypePanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof FordelingAvBehandlingstypePanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
