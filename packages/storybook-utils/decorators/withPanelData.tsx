import { action } from '@storybook/addon-actions';
import { type ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import {
  AksjonspunktStatus,
  BehandlingStatus,
  BehandlingType,
  FagsakYtelseType,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import { PanelDataProvider } from '@navikt/fp-utils';

import alleKodeverk from '../mocks/alleKodeverk.json';

export type PanelDataArgs = {
  fagsak?: Fagsak;
  behandling?: Behandling;
  aksjonspunkterForPanel?: Aksjonspunkt[];
  isReadOnly?: boolean;
  submitCallback?: (data: any) => Promise<void>;
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
};

const promiseAction =
  () =>
  (...args: any): Promise<any> => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const DEFAULT_BEHANDLING = {
  uuid: '1223-2323-2323-22332',
  versjon: 1,
  språkkode: 'NB',
  type: BehandlingType.FORSTEGANGSSOKNAD,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  behandlingPaaVent: false,
  behandlingHenlagt: false,
} as Behandling;

const DEFAULT_FAGSAK = {
  saksnummer: '1234567',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  bruker: { navn: 'Kari Nordmann' },
  annenPart: { navn: 'Ola Nordmann' },
  relasjonsRolleType: RelasjonsRolleType.MOR,
  annenpartBehandling: {
    relasjonsRolleType: RelasjonsRolleType.FAR,
  },
} as Fagsak;

const DEFAULT_AKSJONSPUNKTER = [] as Aksjonspunkt[];

export const withPanelData: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { fagsak, behandling, aksjonspunkterForPanel, isReadOnly, submitCallback, alleMerknaderFraBeslutter } =
    context.args as PanelDataArgs;

  const aksjonspunkter = aksjonspunkterForPanel ?? DEFAULT_AKSJONSPUNKTER;

  return (
    <PanelDataProvider
      fagsak={fagsak ?? DEFAULT_FAGSAK}
      behandling={behandling ?? DEFAULT_BEHANDLING}
      aksjonspunkterForPanel={aksjonspunkter}
      harÅpneAksjonspunkter={aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET)}
      alleKodeverk={alleKodeverk as any}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter ?? {}}
      isReadOnly={isReadOnly ?? false}
      submitCallback={submitCallback ?? promiseAction()}
    >
      <Story />
    </PanelDataProvider>
  );
};
