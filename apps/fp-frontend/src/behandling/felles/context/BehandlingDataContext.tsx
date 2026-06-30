import { createContext, type JSX, type ReactElement, use, useMemo } from 'react';

import type {
  AksessRettigheter,
  AlleKodeverk,
  Behandling,
  BehandlingFpSak,
  Fagsak,
  FagsakBehandlingDto,
} from '@navikt/fp-types';

import type { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';

type ContextData<T extends Behandling> = {
  behandling: T;
  alleBehandlinger: FagsakBehandlingDto[];
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<T>;
  lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<T>;
  setSkalOppdatereEtterBekreftelseAvAp: (skalOppdatere: boolean) => void;
  alleKodeverk: AlleKodeverk;
  hentOgSettBehandling: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
};

type Props<T extends Behandling> = {
  children: ReactElement;
} & ContextData<T>;

const BehandlingDataContext = createContext<unknown>(null);

export const BehandlingDataProvider = <T extends Behandling>(props: Props<T>): JSX.Element => {
  const {
    children,
    behandling,
    alleBehandlinger,
    fagsak,
    rettigheter,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    setSkalOppdatereEtterBekreftelseAvAp,
    alleKodeverk,
    hentOgSettBehandling,
    oppdaterProsessStegOgFaktaPanelIUrl,
  } = props;

  const values = useMemo<ContextData<T>>(
    () => ({
      behandling,
      alleBehandlinger,
      fagsak,
      rettigheter,
      lagreAksjonspunkter,
      lagreOverstyrteAksjonspunkter,
      setSkalOppdatereEtterBekreftelseAvAp,
      alleKodeverk,
      hentOgSettBehandling,
      oppdaterProsessStegOgFaktaPanelIUrl,
    }),
    [
      behandling,
      alleBehandlinger,
      fagsak,
      rettigheter,
      lagreAksjonspunkter,
      lagreOverstyrteAksjonspunkter,
      setSkalOppdatereEtterBekreftelseAvAp,
      alleKodeverk,
      hentOgSettBehandling,
      oppdaterProsessStegOgFaktaPanelIUrl,
    ],
  );

  return <BehandlingDataContext value={values}>{children}</BehandlingDataContext>;
};

export const useBehandlingDataContext = <T extends Behandling = BehandlingFpSak>() => {
  const context = use(BehandlingDataContext);
  if (!context) {
    throw new Error('BehandlingDataContext er ikke satt opp');
  }
  return context as ContextData<T>;
};
