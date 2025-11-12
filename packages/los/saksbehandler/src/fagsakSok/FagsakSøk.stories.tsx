import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import { KjønnkodeEnum } from '@navikt/fp-types';

import { losKodeverkOptions, LosUrl } from '../data/fplosSaksbehandlerApi';
import { FagsakSøk } from './FagsakSøk';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'søk/FagsakSøk',
  component: FagsakSøk,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos))],
    },
  },
  args: {
    kanSaksbehandle: true,
    searchResultReceived: true,
    searchStarted: false,
    searchFagsakCallback: action('button-click'),
    åpneFagsak: action('button-click'),
    selectOppgaveCallback: action('button-click'),
    resetSearch: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <FagsakSøk {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof FagsakSøk>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fagsaker: [
      {
        saksnummer: '12213234',
        fagsakYtelseType: 'FP',
        status: 'UBEH',
        person: {
          navn: 'Espen Utvikler',
          fødselsdato: '1980-10-10',

          fødselsnummer: '1010',
          aktørId: '23',
          kjønn: KjønnkodeEnum.MANN,

          språkkode: 'NB',
        },
        barnFødt: '2019-12-12',
        aktørId: '23',
        opprettet: '',
        relasjonsRolleType: '-',
      },
    ],
    fagsakOppgaver: [
      {
        id: 1,
        reservasjonStatus: {
          erReservert: false,
        },
        saksnummer: '12213234',
        personnummer: '1010',
        navn: 'Espen Utvikler',
        system: 'SAK',
        behandlingstype: 'BT-002',
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: 'FP',
        erTilSaksbehandling: true,
        behandlingId: '12344',
        andreKriterier: [],
      },
      {
        id: 2,
        reservasjonStatus: {
          erReservert: false,
        },
        saksnummer: '12213234',
        personnummer: '1010',
        navn: 'Espen Utvikler',
        system: 'SAK',
        behandlingstype: 'BT-002',
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: 'FP',
        erTilSaksbehandling: true,
        behandlingId: '12344',
        andreKriterier: [],
      },
    ],
  },
};

export const IngentingBleFunnet: Story = {
  args: {
    fagsaker: [],
    fagsakOppgaver: [],
  },
};
