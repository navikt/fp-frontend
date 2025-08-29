import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, VilkarType } from '@navikt/fp-kodeverk';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET, AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKARET];

export const MedlemskapInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(standardPanelProps.behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status !== AksjonspunktStatus.AVBRUTT,
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status == AksjonspunktStatus.OPPRETTET,
  );

  return (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="MEDLEMSKAP"
      hentInngangsvilkårPanelTekst=""
      overstyringApKode={AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR}
      overrideReadOnly={harMedlemskapsAksjonspunkt}
    >
      <>
        {!harÅpentMedlemskapAksjonspunkt && !isFetching && (
          <OverstyringPanelDef
            vilkår={standardPanelProps.vilkårForPanel}
            vilkårKoder={VILKAR_KODER}
            panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
            medlemskap={medlemskap}
          />
        )}
      </>
    </InngangsvilkarOverstyringDefaultInitPanel>
  );
};
