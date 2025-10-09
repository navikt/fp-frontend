import { use } from 'react';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { VilkårType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../../data/behandlingApi';
import { BehandlingDataContext } from '../../../felles/context/BehandlingDataContext';
import { InngangsvilkarOverstyringDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

const VILKAR_KODER = ['FP_VK_2_F'] satisfies VilkårType[];

export const MedlemskapForutgaendeInngangsvilkarInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap, isFetching } = useQuery(api.medlemskapOptions(behandling));

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
