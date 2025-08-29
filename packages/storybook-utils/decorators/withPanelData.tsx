import { type ReactRenderer } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { BehandlingStatusEnum, BehandlingTypeEnum, erAksjonspunktÅpent, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { PanelDataProvider } from '@navikt/fp-utils';

import { alleKodeverk } from '../mocks/alleKodeverk';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

export type PanelDataArgs = {
  fagsak?: Fagsak;
  behandling?: Behandling;
  aksjonspunkterForPanel?: Aksjonspunkt[];
  isReadOnly?: boolean;
  submitCallback?: (data: AksjonspunktType) => Promise<void>;
  alleMerknaderFraBeslutter?: { [key: string]: { notAccepted?: boolean } };
};

const promiseAction =
  () =>
  (...args: [AksjonspunktType]): Promise<AksjonspunktType> => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const DEFAULT_BEHANDLING = {
  uuid: '1223-2323-2323-22332',
  versjon: 1,
  språkkode: 'NB',
  type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
  status: BehandlingStatusEnum.BEHANDLING_UTREDES,
  behandlingPåVent: false,
  behandlingHenlagt: false,
} as Behandling;

const DEFAULT_FAGSAK = {
  saksnummer: '1234567',
  fagsakYtelseType: 'FP',
  bruker: { navn: 'Kari Nordmann' },
  annenPart: { navn: 'Ola Nordmann' },
  relasjonsRolleType: RelasjonsRolleType.MOR,
  annenpartBehandling: {
    relasjonsRolleType: RelasjonsRolleType.FAR,
  },
} as Fagsak;

export const withPanelData: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const { fagsak, behandling, aksjonspunkterForPanel, isReadOnly, submitCallback, alleMerknaderFraBeslutter } =
    context.args as PanelDataArgs;

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
      submitCallback={submitCallback ?? promiseAction()}
    >
      <Story />
    </PanelDataProvider>
  );
};
