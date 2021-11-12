import React, {
  createContext, FunctionComponent, ReactElement, useMemo,
} from 'react';

import {
  AksessRettigheter, Behandling, Fagsak, AlleKodeverk,
} from '@fpsak-frontend/types';

type InputValues = {
  behandling: Behandling;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling | undefined>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<Behandling>,
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  alleKodeverk: AlleKodeverk;
}

type OwnProps = {
  children: ReactElement;
} & InputValues;

export const StandardPropsStateContext = createContext<InputValues>({} as InputValues);

const StandardPropsProvider: FunctionComponent<OwnProps> = ({
  children,
  behandling,
  fagsak,
  rettigheter,
  hasFetchError,
  lagreAksjonspunkter,
  lagreOverstyrteAksjonspunkter,
  oppdaterProsessStegOgFaktaPanelIUrl,
  alleKodeverk,
}): JSX.Element => {
  const values = useMemo(() => ({
    behandling,
    fagsak,
    rettigheter,
    hasFetchError,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
    alleKodeverk,
  }), [behandling, fagsak, rettigheter, hasFetchError, oppdaterProsessStegOgFaktaPanelIUrl]);
  return (
    <StandardPropsStateContext.Provider value={values}>
      {children}
    </StandardPropsStateContext.Provider>
  );
};

export default StandardPropsProvider;
