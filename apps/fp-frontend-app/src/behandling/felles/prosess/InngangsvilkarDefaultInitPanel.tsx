import { type ReactElement, use, useEffect, useState } from 'react';

import { type OverstyringAksjonspunkter, VilkarType } from '@navikt/fp-kodeverk';
import { FormDataProvider, PanelDataProvider, PanelOverstyringProvider } from '@navikt/fp-utils';

import type { StandardProsessPanelProps } from '../typer/standardProsessPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { InngangsvilkårPanelDataContext } from './InngangsvilkarDefaultInitWrapper';
import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useInngangsvilkarRegistrerer } from './useInngangsvilkarRegistrerer';

export type Props = {
  standardPanelProps: StandardProsessPanelProps;
  vilkarKoder?: VilkarType[];
  inngangsvilkarPanelKode: string;
  hentInngangsvilkarPanelTekst: string;
  children: ReactElement;
};

export const InngangsvilkarOverstyringDefaultInitPanel = (
  props: Props & {
    overstyringApKode: OverstyringAksjonspunkter;
    overrideReadOnly?: boolean;
  },
) => {
  const { behandling, rettigheter } = use(BehandlingDataContext);
  const { harÅpentInngangsvilkårAksjonspunkt } = use(InngangsvilkårPanelDataContext);

  const [erOverstyrt, setErOverstyrt] = useState(false);
  const toggleOverstyring = () => setErOverstyrt(!erOverstyrt);

  useEffect(() => {
    setErOverstyrt(false);
  }, [behandling.versjon]);

  return (
    <PanelOverstyringProvider
      overstyringApKode={props.overstyringApKode}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={
        props.standardPanelProps.isReadOnly ||
        props.overrideReadOnly ||
        (harÅpentInngangsvilkårAksjonspunkt && !(props.standardPanelProps.isAksjonspunktOpen || erOverstyrt))
      }
      toggleOverstyring={toggleOverstyring}
    >
      <InngangsvilkarDefaultInitPanel {...props} erOverstyrt={erOverstyrt} />
    </PanelOverstyringProvider>
  );
};

export const InngangsvilkarDefaultInitPanel = ({
  standardPanelProps,
  vilkarKoder,
  inngangsvilkarPanelKode,
  hentInngangsvilkarPanelTekst,
  erOverstyrt = false,
  children,
}: Props & { erOverstyrt?: boolean }) => {
  const { behandling, fagsak, alleKodeverk } = use(BehandlingDataContext);

  const { erPanelValgt } = use(InngangsvilkårPanelDataContext);

  const skalVises = skalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  useInngangsvilkarRegistrerer(
    inngangsvilkarPanelKode,
    hentInngangsvilkarPanelTekst,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
    erOverstyrt,
  );

  const skalViseVilkårIPanel = erPanelValgt && skalVises;

  return (
    <FormDataProvider behandling={behandling}>
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
        {skalViseVilkårIPanel ? children : null}
      </PanelDataProvider>
    </FormDataProvider>
  );
};
