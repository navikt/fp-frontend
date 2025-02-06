import { type ReactElement, use } from 'react';

import { VilkarType } from '@navikt/fp-kodeverk';
import { FormDataProvider, PanelDataProvider } from '@navikt/fp-utils';

import type { InngangsvilkarPanelInitProps } from '../typer/inngangsvilkarPanelInitProps';
import type { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
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
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

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
      {!erPanelValgt || !skalVises ? null : (
        <PanelDataProvider
          behandling={behandling}
          fagsak={fagsak}
          aksjonspunkterForPanel={standardPanelProps.aksjonspunkter}
          harÅpneAksjonspunkter={standardPanelProps.isAksjonspunktOpen}
          alleKodeverk={alleKodeverk}
          submitCallback={standardPanelProps.submitCallback}
          isReadOnly={standardPanelProps.isReadOnly}
          alleMerknaderFraBeslutter={standardPanelProps.alleMerknaderFraBeslutter}
        >
          {renderPanel({ erOverstyrt, toggleOverstyring })}
        </PanelDataProvider>
      )}
    </FormDataProvider>
  );
};
