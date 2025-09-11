import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { BehandlingTypeEnum, FagsakStatusEnum, OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import { KjønnkodeEnum } from '@navikt/fp-types';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
import { SøkResultat } from './SøkResultat';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'søk/SøkResultat',
  component: SøkResultat,
  decorators: [withIntl, withQueryClient],
  args: {
    åpneFagsak: action('onÅpneFagsak'),
    selectOppgaveCallback: action('onSelectOppgave'),
  },
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos))],
    },
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <SøkResultat {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof SøkResultat>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fagsaker: [
      {
        saksnummer: '12213234',
        aktørId: '',
        fagsakYtelseType: 'FP',
        status: FagsakStatusEnum.UNDER_BEHANDLING,
        person: {
          navn: 'Espen Utvikler',
          fødselsdato: '1980-10-10',
          aktørId: '1234',

          fødselsnummer: '1010',
          kjønn: KjønnkodeEnum.MANN,

          språkkode: 'NB',
        },
        barnFødt: '2019-12-12',
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
        behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: 'FP',
        erTilSaksbehandling: true,
        behandlingId: '12344',
        andreKriterier: [],
        oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
      },
    ],
  },
};
