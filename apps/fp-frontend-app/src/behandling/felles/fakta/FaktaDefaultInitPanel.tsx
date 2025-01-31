import { ReactElement, use } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { StandardFaktaPanelProps } from '@navikt/fp-types';
import { FormDataProvider } from '@navikt/fp-utils';

import { FaktaPanelInitProps } from '../typer/faktaPanelInitProps';
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
  const { behandling } = use(BehandlingDataContext);

  const skalVisePanel = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  return <FormDataProvider behandling={behandling}>{skalVisePanel ? children : null}</FormDataProvider>;
};
