import { ReactElement } from 'react';

import { VilkarType } from '@navikt/fp-kodeverk';
import { StandardProsessPanelProps } from '@navikt/fp-types';

import { InngangsvilkarPanelInitProps } from '../typer/inngangsvilkarPanelInitProps';
import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useInngangsvilkarRegistrerer } from './useInngangsvilkarRegistrerer';

export type Props = {
  behandlingVersjon: number;
  standardPanelProps: StandardProsessPanelProps;
  vilkarKoder?: VilkarType[];
  renderPanel: (args: { erOverstyrt: boolean; toggleOverstyring: () => void }) => ReactElement;
  inngangsvilkarPanelKode: string;
  hentInngangsvilkarPanelTekst: string;
};

export const InngangsvilkarDefaultInitPanel = ({
  erPanelValgt,
  behandlingVersjon,
  registrerInngangsvilkarPanel,
  standardPanelProps,
  vilkarKoder,
  renderPanel,
  inngangsvilkarPanelKode,
  hentInngangsvilkarPanelTekst,
}: Props & InngangsvilkarPanelInitProps) => {
  const skalVises = skalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    registrerInngangsvilkarPanel,
    behandlingVersjon,
    inngangsvilkarPanelKode,
    hentInngangsvilkarPanelTekst,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  return renderPanel({ erOverstyrt, toggleOverstyring });
};
