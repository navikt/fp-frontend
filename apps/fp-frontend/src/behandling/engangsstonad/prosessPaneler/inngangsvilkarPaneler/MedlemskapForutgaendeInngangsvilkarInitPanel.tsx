import { use } from 'react';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VilkårType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../../felles/prioritet/PanelDataPrioritetContext';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { InngangsvilkårPanelDataContext } from '../../../felles/prosess/InngangsvilkarDefaultInitWrapper';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { skalViseProsessPanel } from '../../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

const VILKAR_KODER = ['FP_VK_2_F'] satisfies VilkårType[];

const PANEL_ID = 'MEDLEMSKAP_FORUTGAENDE';

export const MedlemskapForutgaendeInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);
  const skalPanelVisesIMeny = skalViseProsessPanel(
    standardPanelProps.aksjonspunkterForPanel,
    VILKAR_KODER,
    standardPanelProps.vilkårForPanel,
  );

  const { behandling } = useBehandlingDataContext();

  const { erPanelValgt } = use(InngangsvilkårPanelDataContext);
  const skalHenteData = useSkalHenteData(PANEL_ID, erPanelValgt, 'inngangsvilkar', skalPanelVisesIMeny);

  const api = getBehandlingApi(behandling);

  const { data: medlemskap, isFetching } = useQuery(medPrioritet(api.medlemskapOptions(behandling), skalHenteData));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR && ap.status !== 'AVBR',
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR && erAksjonspunktÅpent(ap),
  );

  return (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="MEDLEMSKAP"
      hentInngangsvilkårPanelTekst=""
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR}
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
