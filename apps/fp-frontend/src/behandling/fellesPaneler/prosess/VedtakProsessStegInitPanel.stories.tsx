import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  getIntlDecorator,
  lagAksjonspunkt,
  lagBehandling,
  lagFagsak,
  lagVilkår,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type {
  BehandlingFpSak,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Fagsak,
} from '@navikt/fp-types';

import { BehandlingDataProvider } from '../../felles/context/BehandlingDataContext';
import { ProsessMenyContext } from '../../felles/prosess/ProsessMeny';
import { VedtakProsessStegInitPanel } from './VedtakProsessStegInitPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const lagLenke = (rel: string) => ({ href: `/fpsak/api/storybook/${rel}`, rel, type: 'GET' as const });

const lagRevurdering = (behandlingsresultatType: 'INNVILGET' | 'AVSLÅTT', rels: string[]): BehandlingFpSak =>
  lagBehandling({
    type: 'BT-004',
    aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.FORESLÅ_VEDTAK)],
    vilkår: [lagVilkår('FP_VK_1', { vilkarStatus: 'OPPFYLT' })],
    behandlingsresultat: { id: 1, type: behandlingsresultatType, vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES' },
    behandlingÅrsaker: [{ behandlingArsakType: 'RE-ANNET', erAutomatiskRevurdering: false, manueltOpprettet: true }],
    links: rels.map(lagLenke),
  });

const handler = (rel: string, svar: unknown) =>
  http.get(`*${lagLenke(rel).href}`, () => HttpResponse.json(svar as Record<string, unknown>));

const ES_RESULTAT = 'beregningsresultat-engangsstonad';
const ES_ORIGINAL = 'beregningsresultat-engangsstonad-original-behandling';
const FP_ORIGINAL = 'beregningsresultat-dagytelse-original-behandling';

const esResultat: BeregningsresultatEs = { antallBarn: 1, beregnetTilkjentYtelse: 92648, satsVerdi: 92648 };
const fpResultat: BeregningsresultatDagytelse = { perioder: [] };

type Args = { behandling: BehandlingFpSak; fagsak: Fagsak; erEngangsstønad: boolean };

const meta = {
  title: 'behandling/VedtakProsessStegInitPanel',
  decorators: [withQueryClient, withRouter, withIntl],
  render: ({ behandling, fagsak, erEngangsstønad }) => (
    <ProsessMenyContext
      value={{ valgtProsessSteg: 'vedtak', settProsessPanelMenyData: () => undefined, prosessPanelMenyData: [] }}
    >
      <BehandlingDataProvider
        behandling={behandling}
        alleBehandlinger={[]}
        fagsak={fagsak}
        rettigheter={{
          writeAccess: { isEnabled: true, employeeHasAccess: true },
          kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
        }}
        alleKodeverk={alleKodeverk}
        lagreAksjonspunkter={() => Promise.resolve(behandling)}
        lagreOverstyrteAksjonspunkter={() => Promise.resolve(behandling)}
        setSkalOppdatereEtterBekreftelseAvAp={action('setSkalOppdatereEtterBekreftelseAvAp')}
        hentOgSettBehandling={action('hentOgSettBehandling')}
        oppdaterProsessStegOgFaktaPanelIUrl={action('oppdaterProsessStegOgFaktaPanelIUrl')}
      >
        <VedtakProsessStegInitPanel erEngangsstønad={erEngangsstønad} />
      </BehandlingDataProvider>
    </ProsessMenyContext>
  ),
} satisfies Meta<Args>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EngangsstønadRevurderingUtenEndring: Story = {
  parameters: {
    msw: {
      handlers: [
        handler(ES_RESULTAT, esResultat),
        handler(ES_ORIGINAL, esResultat),
      ],
    },
  },
  args: {
    erEngangsstønad: true,
    fagsak: lagFagsak({ fagsakYtelseType: 'ES' }),
    behandling: lagRevurdering('INNVILGET', [ES_RESULTAT, ES_ORIGINAL]),
  },
};

export const ForeldrepengerRevurderingAvslagEtterInnvilget: Story = {
  parameters: {
    msw: {
      handlers: [handler(FP_ORIGINAL, fpResultat)],
    },
  },
  args: {
    erEngangsstønad: false,
    fagsak: lagFagsak({ fagsakYtelseType: 'FP' }),
    behandling: lagRevurdering('AVSLÅTT', [FP_ORIGINAL]),
  },
};
