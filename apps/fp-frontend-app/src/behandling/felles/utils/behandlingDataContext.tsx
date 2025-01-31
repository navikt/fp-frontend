import { createContext, JSX, ReactElement, useMemo } from 'react';

import { AksessRettigheter, AlleKodeverk, Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';

type ContextData = {
  behandling: Behandling;
  alleBehandlinger: BehandlingAppKontekst[];
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>;
  lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>;
  setSkalOppdatereEtterBekreftelseAvAp: (skalOppdatere: boolean) => void;
  alleKodeverk: AlleKodeverk;
  hentOgSettBehandling: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
};

type Props = {
  children: ReactElement;
} & ContextData;

export const BehandlingDataContext = createContext<ContextData>({} as ContextData);

export const BehandlingDataProvider = (props: Props): JSX.Element => {
  const { children, ...otherProps } = props;

  const values = useMemo(() => otherProps, [otherProps]);

  return <BehandlingDataContext.Provider value={values}>{children}</BehandlingDataContext.Provider>;
};
