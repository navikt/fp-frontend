import { type ReactElement, use } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { FormDataProvider, PanelDataProvider } from '@navikt/fp-utils';

import type { FaktaPanelInitProps } from '../typer/faktaPanelInitProps';
import type { StandardFaktaPanelProps } from '../typer/standardFaktaPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { useFaktaMenyRegistrerer } from './useFaktaMenyRegistrerer';

export type Props = {
  standardPanelProps: StandardFaktaPanelProps;
  skalPanelVisesIMeny: boolean;
  faktaPanelKode: FaktaPanelCode;
  faktaPanelMenyTekst: string;
  children: ReactElement;
};

export const FaktaDefaultInitPanel = ({
  standardPanelProps,
  valgtFaktaSteg,
  registrerFaktaPanel,
  skalPanelVisesIMeny,
  faktaPanelKode,
  faktaPanelMenyTekst,
  children,
}: Props & FaktaPanelInitProps) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

  const skalVisePanel = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  return (
    <FormDataProvider behandling={behandling}>
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
    </FormDataProvider>
  );
};
