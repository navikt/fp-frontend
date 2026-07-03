import { use } from 'react';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VilkårType } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../../data/behandlingApi';
import { medPrioritet } from '../../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../../felles/prioritet/PanelDataPrioritetContext';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { InngangsvilkårPanelDataContext } from '../../../felles/prosess/InngangsvilkarDefaultInitWrapper';
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

  const { erPanelValgt } = use(InngangsvilkårPanelDataContext);
  const skalHenteData = useSkalHenteData(PANEL_ID, erPanelValgt, 'inngangsvilkar', skalPanelVisesIMeny);

  const api = getBehandlingApi(standardPanelProps.behandling);

  const { data: medlemskap, isFetching } = useQuery(
    medPrioritet(api.medlemskapOptions(standardPanelProps.behandling), skalHenteData),
  );

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
