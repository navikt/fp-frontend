import React, { createContext, JSX, ReactElement, useMemo } from 'react';

import { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

type InputValues = {
  behandling: Behandling;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling | undefined>;
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<Behandling | undefined>;
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
