import React from 'react';

import { AksjonspunktKode, AksjonspunktStatus, VilkarType } from '@navikt/fp-kodeverk';
import { AksessRettigheter, Medlemskap } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
};

interface Props {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

export const MedlemskapForutgaendeInngangsvilkarInitPanel = ({
  behandlingVersjon,
  rettigheter,
  ...props
}: Props & InngangsvilkarPanelInitProps) => (
  <InngangsvilkarDefaultInitPanel<EndepunktPanelData>
    {...props}
    behandlingVersjon={behandlingVersjon}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    vilkarKoder={VILKAR_KODER}
    inngangsvilkarPanelKode="MEDLEMSKAP"
    hentInngangsvilkarPanelTekst={() => ''}
    renderPanel={(data, erOverstyrt, toggleOverstyring) => {
      const harMedlemskapsAksjonspunkt = data.aksjonspunkter.some(
        value =>
          value.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR &&
          value.status !== AksjonspunktStatus.AVBRUTT,
      );
      const harÅpentMedlemskapAksjonspunkt = data.aksjonspunkter.some(
        value =>
          value.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR &&
          value.status == AksjonspunktStatus.OPPRETTET,
      );
      return (
        <>
          {!harÅpentMedlemskapAksjonspunkt && (
            <OverstyringPanelDef
              aksjonspunkter={data.aksjonspunkter}
              aksjonspunktKode={AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE}
              vilkar={data.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
              medlemskap={data.medlemskap}
              toggleOverstyring={toggleOverstyring}
              erOverstyrt={erOverstyrt}
              overrideReadOnly={
                data.isReadOnly ||
                harMedlemskapsAksjonspunkt ||
                (props.harInngangsvilkarApentAksjonspunkt && !(data.isAksjonspunktOpen || erOverstyrt))
              }
              kanOverstyreAccess={rettigheter.kanOverstyreAccess}
            />
          )}
        </>
      );
    }}
  />
);
