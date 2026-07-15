import { type ReactElement, use, useState } from 'react';

import { type OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';
import type { BehandlingFpSak, VilkårType } from '@navikt/fp-types';
import { MellomlagretFormDataProvider, PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { BehandlingPanelDataProvider } from '../panelData/BehandlingPanelDataProvider';
import { InngangsvilkårPanelDataContext } from './InngangsvilkarDefaultInitWrapper';
import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useInngangsvilkarRegistrerer } from './useInngangsvilkarRegistrerer';
import type { StandardProsessPanelProps } from './useStandardProsessPanelProps';

interface Props {
  standardPanelProps: StandardProsessPanelProps<BehandlingFpSak>;
  vilkårKoder?: VilkårType[];
  inngangsvilkårPanelKode: string;
  hentInngangsvilkårPanelTekst: string;
  children: ReactElement;
}

export const InngangsvilkarOverstyringDefaultInitPanel = (
  props: Props & {
    overstyringApKode: OverstyringAksjonspunkter;
    overrideReadOnly?: boolean;
  },
) => {
  const { behandling, rettigheter } = useBehandlingDataContext<BehandlingFpSak>();
  const { harÅpentInngangsvilkårAksjonspunkt } = use(InngangsvilkårPanelDataContext);

  const [erOverstyrt, setErOverstyrt] = useState(false);
  const toggleOverstyring = () => setErOverstyrt(!erOverstyrt);

  const [forrigeVersjon, setForrigeVersjon] = useState(behandling.versjon);
  if (behandling.versjon !== forrigeVersjon) {
    setForrigeVersjon(behandling.versjon);
    setErOverstyrt(false);
  }

  return (
    <PanelOverstyringProvider
      overstyringApKode={props.overstyringApKode}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={
        props.standardPanelProps.isReadOnly ||
        props.overrideReadOnly ||
        (harÅpentInngangsvilkårAksjonspunkt && !(props.standardPanelProps.harÅpentAksjonspunkt || erOverstyrt))
      }
      toggleOverstyring={toggleOverstyring}
    >
      <InngangsvilkarDefaultInitPanel {...props} erOverstyrt={erOverstyrt} />
    </PanelOverstyringProvider>
  );
};

export const InngangsvilkarDefaultInitPanel = ({
  standardPanelProps,
  vilkårKoder,
  inngangsvilkårPanelKode,
  hentInngangsvilkårPanelTekst,
  erOverstyrt = false,
  children,
}: Props & { erOverstyrt?: boolean }) => {
  const { erPanelValgt } = use(InngangsvilkårPanelDataContext);

  const skalVises = skalViseProsessPanel(
    standardPanelProps.aksjonspunkterForPanel,
    vilkårKoder,
    standardPanelProps.vilkårForPanel,
  );

  useInngangsvilkarRegistrerer(
    inngangsvilkårPanelKode,
    hentInngangsvilkårPanelTekst,
    skalVises,
    standardPanelProps.harÅpentAksjonspunkt,
    standardPanelProps.status,
    erOverstyrt,
  );

  const skalViseVilkårIPanel = erPanelValgt && skalVises;

  return (
    <MellomlagretFormDataProvider behandling={standardPanelProps.behandling}>
      <BehandlingPanelDataProvider panelData={standardPanelProps}>
        {skalViseVilkårIPanel ? children : null}
      </BehandlingPanelDataProvider>
    </MellomlagretFormDataProvider>
  );
};
