import { ReactElement } from 'react';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { StandardFaktaPanelProps } from '@navikt/fp-types';

import { FaktaPanelInitProps } from '../typer/faktaPanelInitProps';
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
  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelKode,
    faktaPanelMenyTekst,
    skalPanelVisesIMeny,
    standardPanelProps.harApneAksjonspunkter,
    valgtFaktaSteg,
  );

  return erPanelValgt ? children : null;
};
