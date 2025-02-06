import { ReactElement, use } from 'react';

import { VilkarType } from '@navikt/fp-kodeverk';
import { FormDataProvider } from '@navikt/fp-utils';

import { InngangsvilkarPanelInitProps } from '../typer/inngangsvilkarPanelInitProps';
import { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
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
  const { behandling } = use(BehandlingDataContext);

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

  return (
    <FormDataProvider behandling={behandling}>
      {!erPanelValgt || !skalVises ? null : renderPanel({ erOverstyrt, toggleOverstyring })}
    </FormDataProvider>
  );
};
