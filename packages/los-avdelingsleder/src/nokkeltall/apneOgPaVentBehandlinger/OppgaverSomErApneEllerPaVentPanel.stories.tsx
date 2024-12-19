import React from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosAvdelingslederApi';
import { withQueryClient } from '../../data/withQueryClientProvider';
import { BehandlingVenteStatus } from '../../kodeverk/behandlingVenteStatus';
import { OppgaverSomErApneEllerPaVentPanel } from './OppgaverSomErApneEllerPaVentPanel';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const OPPGAVER_ÅPNE_ELLER_PÅ_VENT = [
  {
    behandlingVenteStatus: BehandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    førsteUttakMåned: dayjs().startOf('month').format(ISO_DATE_FORMAT),
    antall: 2,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    førsteUttakMåned: dayjs().startOf('month').format(ISO_DATE_FORMAT),
    antall: 5,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.REVURDERING,
    førsteUttakMåned: dayjs().startOf('month').subtract(4, 'M').format(ISO_DATE_FORMAT),
    antall: 2,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.KLAGE,
    antall: 2,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.KLAGE,
    antall: 6,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.REVURDERING,
    førsteUttakMåned: dayjs().startOf('month').subtract(4, 'M').format(ISO_DATE_FORMAT),
    antall: 6,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.PA_VENT,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    førsteUttakMåned: dayjs().startOf('month').subtract(10, 'M').format(ISO_DATE_FORMAT),
    antall: 3,
  },
  {
    behandlingVenteStatus: BehandlingVenteStatus.IKKE_PA_VENT,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    førsteUttakMåned: dayjs().startOf('month').subtract(10, 'M').format(ISO_DATE_FORMAT),
    antall: 5,
  },
];

const meta = {
  title: 'los/avdelingsleder/nokkeltall/OppgaverSomErApneEllerPaVentPanel',
  component: OppgaverSomErApneEllerPaVentPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT.replaceAll('ø', '%C3%B8').replaceAll('å', '%C3%A5'), () =>
          HttpResponse.json(OPPGAVER_ÅPNE_ELLER_PÅ_VENT),
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
    return alleKodeverk ? <OppgaverSomErApneEllerPaVentPanel {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof OppgaverSomErApneEllerPaVentPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
