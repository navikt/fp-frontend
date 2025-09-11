import { type ReactElement, use } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { MellomlagretFormDataProvider, PanelDataProvider } from '@navikt/fp-utils';

import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';
import type { StandardFaktaPanelProps } from './useStandardFaktaPanelProps';

interface Props {
  standardPanelProps: StandardFaktaPanelProps;
  skalPanelVisesIMeny: boolean;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
  children: ReactElement;
}

export const FaktaDefaultInitPanel = ({
  standardPanelProps,
  skalPanelVisesIMeny,
  faktaPanelKode,
  faktaPanelMenyTekst,
  children,
}: Props) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

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
