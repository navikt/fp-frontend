import { action } from '@storybook/addon-actions';
import { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import {
  AksjonspunktStatus,
  BehandlingStatus,
  BehandlingType,
  FagsakYtelseType,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import { PanelProvider } from '@navikt/fp-utils';

import alleKodeverk from '../mocks/alleKodeverk.json';

export type PanelContextArgs = {
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
  sprakkode: 'NO',
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

export const withPanelContext: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { fagsak, behandling, aksjonspunkterForPanel, isReadOnly, submitCallback, alleMerknaderFraBeslutter } =
    context.args as PanelContextArgs;

  const aksjonspunkter = aksjonspunkterForPanel ?? DEFAULT_AKSJONSPUNKTER;

  return (
    <PanelProvider
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
    </PanelProvider>
  );
};
