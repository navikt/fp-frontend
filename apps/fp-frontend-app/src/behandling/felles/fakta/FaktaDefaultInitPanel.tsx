import { type ReactElement, use } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { MellomlagretFormDataProvider, PanelDataProvider } from '@navikt/fp-utils';

import type { StandardFaktaPanelProps } from '../typer/standardFaktaPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';

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
    standardPanelProps.harApneAksjonspunkter,
  );

  return (
    <MellomlagretFormDataProvider behandling={behandling}>
      {skalVisePanel ? (
        <PanelDataProvider
          behandling={behandling}
          fagsak={fagsak}
          alleKodeverk={alleKodeverk}
          aksjonspunkterForPanel={standardPanelProps.aksjonspunkter}
          harÅpneAksjonspunkter={standardPanelProps.harApneAksjonspunkter}
          submitCallback={standardPanelProps.submitCallback}
          isReadOnly={standardPanelProps.readOnly}
          alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
        >
          {children}
        </PanelDataProvider>
      ) : null}
    </MellomlagretFormDataProvider>
  );
};
