import React, { createContext, JSX, ReactElement, useMemo } from 'react';

import { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';

type InputValues = {
  behandling: Behandling;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
  lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>;
  lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  alleKodeverk: AlleKodeverk;
};

type Props = {
  children: ReactElement;
} & InputValues;

export const StandardPropsStateContext = createContext<InputValues>({} as InputValues);

export const StandardPropsProvider = ({
  children,
  behandling,
  fagsak,
  rettigheter,
  hasFetchError,
  lagreAksjonspunkter,
  lagreOverstyrteAksjonspunkter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  alleKodeverk,
}: Props): JSX.Element => {
  const values = useMemo(
    () => ({
      behandling,
      fagsak,
      rettigheter,
      hasFetchError,
      lagreAksjonspunkter,
      lagreOverstyrteAksjonspunkter,
      oppdaterProsessStegOgFaktaPanelIUrl,
      alleKodeverk,
    }),
    [behandling, fagsak, rettigheter, hasFetchError, oppdaterProsessStegOgFaktaPanelIUrl],
  );
  return <StandardPropsStateContext.Provider value={values}>{children}</StandardPropsStateContext.Provider>;
};
