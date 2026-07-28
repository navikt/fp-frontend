import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VilkårType } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../../data/behandlingApi';
import { useInngangsvilkårPanelPrioritet } from '../../../felles/prioritet/usePanelPrioritet';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { skalViseProsessPanel } from '../../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
];

const VILKAR_KODER = ['FP_VK_2'] satisfies VilkårType[];

const PANEL_ID = 'MEDLEMSKAP';

export const MedlemskapInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);
  const skalPanelVisesIMeny = skalViseProsessPanel(
    standardPanelProps.aksjonspunkterForPanel,
    VILKAR_KODER,
    standardPanelProps.vilkårForPanel,
  );

  const prioriter = useInngangsvilkårPanelPrioritet({ panelKode: PANEL_ID, skalVisesIMeny: skalPanelVisesIMeny });

  const api = getBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isFetching } = useQuery(prioriter(api.medlemskapOptions(standardPanelProps.behandling)));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status !== 'AVBR',
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET && ap.status === 'OPPR',
  );

  return (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode={PANEL_ID}
      hentInngangsvilkårPanelTekst=""
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET}
      overrideReadOnly={harMedlemskapsAksjonspunkt}
    >
      <>
        {!harÅpentMedlemskapAksjonspunkt && !isFetching && (
          <OverstyringPanelDef
            vilkårKoder={VILKAR_KODER}
            panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
            medlemskap={medlemskap}
          />
        )}
      </>
    </InngangsvilkarOverstyringDefaultInitPanel>
  );
};
