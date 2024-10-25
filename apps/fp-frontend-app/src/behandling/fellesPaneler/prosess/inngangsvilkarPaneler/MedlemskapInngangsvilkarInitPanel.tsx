import React, { FunctionComponent } from 'react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, aksjonspunktStatus, VilkarType } from '@navikt/fp-kodeverk';
import { AksessRettigheter, Medlemskap } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';
import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET, AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
};

interface OwnProps {
  behandlingVersjon: number;
  rettigheter: AksessRettigheter;
}

const MedlemskapInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  rettigheter,
  ...props
}) => (
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
          value.definisjon === AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET &&
          value.status !== aksjonspunktStatus.AVBRUTT,
      );
      const harÅpentMedlemskapAksjonspunkt = data.aksjonspunkter.some(
        value =>
          value.definisjon === AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET &&
          value.status == aksjonspunktStatus.OPPRETTET,
      );
      return (
        <>
          {!harÅpentMedlemskapAksjonspunkt && (
            <>
              <OverstyringPanelDef
                aksjonspunkter={data.aksjonspunkter}
                aksjonspunktKode={AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR}
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
              <VerticalSpacer thirtyTwoPx />)
            </>
          )}
        </>
      );
    }}
  />
);

export default MedlemskapInngangsvilkarInitPanel;
