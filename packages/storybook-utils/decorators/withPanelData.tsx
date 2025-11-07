import { type ReactRenderer } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import type { Aksjonspunkt, BehandlingFpSak, Fagsak, Vilkar } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent, PanelDataProvider } from '@navikt/fp-utils';

import { alleKodeverk } from '../mocks/alleKodeverk';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

export type PanelDataArgs = {
  fagsak?: Fagsak;
  behandling?: BehandlingFpSak;
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel?: Aksjonspunkt[];
  vilkårForPanel?: Vilkar[];
  isReadOnly?: boolean;
  isSubmittable?: boolean;
  submitCallback?: (data: AksjonspunktType) => Promise<void>;
};

const promiseAction =
  () =>
  (...args: [AksjonspunktType]): Promise<void> => {
    action('submit')(...args);
    return Promise.resolve();
  };

const DEFAULT_BEHANDLING = {
  uuid: '1223-2323-2323-22332',
  versjon: 1,
  språkkode: 'NB',
  type: 'BT-002',
  status: 'UTRED',
  behandlingPåVent: false,
  behandlingHenlagt: false,
  behandlendeEnhetId: '',
  behandlendeEnhetNavn: '',
  erAktivPapirsoknad: false,
  behandlingÅrsaker: [],
  vilkår: [],
  links: [],
  aksjonspunkt: [],
  harSøknad: false,
  harSattEndringsdato: false,
} satisfies BehandlingFpSak;

const DEFAULT_FAGSAK = {
  saksnummer: '1234567',
  fagsakYtelseType: 'FP',
  bruker: {
    navn: 'Kari Nordmann',
    fødselsnummer: '',
    kjønn: '-',
    fødselsdato: '',
    språkkode: 'NB',
  },
  annenPart: {
    navn: 'Ola Nordmann',
    fødselsnummer: '',
    kjønn: '-',
    fødselsdato: '',
    språkkode: 'NB',
  },
  relasjonsRolleType: 'MORA',
  annenpartBehandling: {
    relasjonsRolleType: 'FARA',
    saksnummer: '',
    behandlingUuid: '',
  },
  status: 'OPPR',
  aktørId: '',
  sakSkalTilInfotrygd: false,
  dekningsgrad: 0,
  brukerManglerAdresse: false,
  fagsakMarkeringer: [],
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
  historikkinnslag: [],
  notater: [],
  kontrollResultat: {
    kontrollresultat: '-',
    iayFaresignaler: undefined,
    medlFaresignaler: undefined,
    faresignalVurdering: undefined,
  },
  harVergeIÅpenBehandling: false,
} satisfies Fagsak;

export const withPanelData: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const {
    fagsak,
    behandling,
    alleMerknaderFraBeslutter,
    aksjonspunkterForPanel,
    vilkårForPanel,
    isReadOnly,
    isSubmittable,
    submitCallback,
  } = context.args as PanelDataArgs;

  const aksjonspunkter = aksjonspunkterForPanel ?? [];

  return (
    <PanelDataProvider
      fagsak={fagsak ?? DEFAULT_FAGSAK}
      behandling={behandling ?? DEFAULT_BEHANDLING}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter ?? {}}
      aksjonspunkterForPanel={aksjonspunkter}
      vilkårForPanel={vilkårForPanel ?? []}
      harÅpentAksjonspunkt={aksjonspunkter.some(erAksjonspunktÅpent)}
      isReadOnly={isReadOnly ?? false}
      isSubmittable={isSubmittable ?? true}
      submitCallback={submitCallback ?? promiseAction()}
    >
      <Story />
    </PanelDataProvider>
  );
};
