import { useQuery } from '@tanstack/react-query';

import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5101', '6005'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_2'];

export const MedlemskapInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(standardPanelProps.behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === '5101' && ap.status !== 'AVBR',
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === '5101' && ap.status == 'OPPR',
  );

  return (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="MEDLEMSKAP"
      hentInngangsvilkårPanelTekst=""
      overstyringApKode="6005"
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
