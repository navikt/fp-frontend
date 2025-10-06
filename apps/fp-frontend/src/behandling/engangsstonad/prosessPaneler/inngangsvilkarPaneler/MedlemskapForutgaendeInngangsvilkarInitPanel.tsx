import { use } from 'react';

import { useQuery } from '@tanstack/react-query';

import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { BehandlingDataContext } from '../../../felles/context/BehandlingDataContext';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5102', '6017'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_2_F'];

export const MedlemskapForutgaendeInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(behandling));

  const harMedlemskapsAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === '5102' && ap.status !== 'AVBR',
  );
  const harÅpentMedlemskapAksjonspunkt = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === '5102' && erAksjonspunktÅpent(ap),
  );

  return (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="MEDLEMSKAP"
      hentInngangsvilkårPanelTekst=""
      overstyringApKode="6017"
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
