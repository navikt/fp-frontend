import { type ReactRenderer } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { RelasjonsRolleType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent, PanelDataProvider } from '@navikt/fp-utils';

import { alleKodeverk } from '../mocks/alleKodeverk';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

export type PanelDataArgs = {
  fagsak?: Fagsak;
  behandling?: Behandling;
  aksjonspunkterForPanel?: Aksjonspunkt[];
  isReadOnly?: boolean;
  submitCallback?: (data: AksjonspunktType) => Promise<void>;
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
  isSubmittable?: boolean;
};

const promiseAction =
  () =>
  (...args: [AksjonspunktType]): Promise<AksjonspunktType> => {
    action('button-click')(...args);
    // @ts-expect-error Johannes ser på denne - feil etter fiks av ft-types
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
  opprettet: '',
  behandlendeEnhetId: '',
  behandlendeEnhetNavn: '',
  erAktivPapirsoknad: false,
  gjeldendeVedtak: false,
  behandlingKøet: false,
  toTrinnsBehandling: false,
  behandlingÅrsaker: [],
  vilkår: [],
  links: [],
  aksjonspunkt: [],
  harSøknad: false,
  harSattEndringsdato: false,
} satisfies Behandling;

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
  relasjonsRolleType: RelasjonsRolleType.MOR,
  annenpartBehandling: {
    relasjonsRolleType: RelasjonsRolleType.FAR,
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
    aksjonspunkterForPanel,
    isReadOnly,
    submitCallback,
    alleMerknaderFraBeslutter,
    isSubmittable,
  } = context.args as PanelDataArgs;

  const aksjonspunkter = aksjonspunkterForPanel ?? [];

  return (
    <PanelDataProvider
      fagsak={fagsak ?? DEFAULT_FAGSAK}
      behandling={behandling ?? DEFAULT_BEHANDLING}
      aksjonspunkterForPanel={aksjonspunkter}
      harÅpentAksjonspunkt={aksjonspunkter.some(erAksjonspunktÅpent)}
      alleKodeverk={alleKodeverk}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter ?? {}}
      isReadOnly={isReadOnly ?? false}
      // @ts-expect-error Johannes ser på denne - feil etter fiks av ft-types
      submitCallback={submitCallback ?? promiseAction()}
      isSubmittable={isSubmittable ?? true}
    >
      <Story />
    </PanelDataProvider>
  );
};
