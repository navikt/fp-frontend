import React, {
  createContext, FunctionComponent, ReactElement,
} from 'react';

import {
  AksessRettigheter, Behandling, Fagsak, KodeverkMedNavn,
} from '@fpsak-frontend/types';

type InputValues = {
  behandling: Behandling;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

type OwnProps = {
  children: ReactElement;
  initialState: InputValues;
}

export const StandardPropsStateContext = createContext<InputValues>({});

const StandardPropsProvider: FunctionComponent<OwnProps> = ({
  children,
  initialState,
}): JSX.Element => (
  <StandardPropsStateContext.Provider value={initialState}>
    {children}
  </StandardPropsStateContext.Provider>
);

export default StandardPropsProvider;
