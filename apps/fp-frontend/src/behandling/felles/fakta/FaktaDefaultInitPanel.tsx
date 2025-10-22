import { type ReactElement } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Behandling, BehandlingFpSak } from '@navikt/fp-types';
import { MellomlagretFormDataProvider, PanelDataProvider } from '@navikt/fp-utils';

import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';
import type { StandardFaktaPanelProps } from './useStandardFaktaPanelProps';

interface Props<T extends Behandling> {
  standardPanelProps: StandardFaktaPanelProps<T>;
  skalPanelVisesIMeny: boolean;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
  children: ReactElement;
}

export const FaktaDefaultInitPanel = <T extends Behandling = BehandlingFpSak>({
  standardPanelProps,
  skalPanelVisesIMeny,
  faktaPanelKode,
  faktaPanelMenyTekst,
  children,
}: Props<T>) => {
  const { behandling, fagsak, alleKodeverk } = useBehandlingDataContext<T>();

  const skalVisePanel = useFaktaMenyRegistrerer(
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );

  return (
    <MellomlagretFormDataProvider behandling={behandling}>
      {skalVisePanel ? (
        <PanelDataProvider
          behandling={behandling}
          fagsak={fagsak}
          alleKodeverk={alleKodeverk}
          aksjonspunkterForPanel={standardPanelProps.aksjonspunkterForPanel}
          harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
          submitCallback={standardPanelProps.submitCallback}
          isReadOnly={standardPanelProps.isReadOnly}
          alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
          isSubmittable={standardPanelProps.isSubmittable}
        >
          {children}
        </PanelDataProvider>
      ) : null}
    </MellomlagretFormDataProvider>
  );
};
