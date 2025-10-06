import { useIntl } from 'react-intl';

import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5031'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_16'];

export const AdopsjonInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      overstyringApKode="6010"
    >
      <OverstyringPanelDef
        vilkår={standardPanelProps.vilkårForPanel}
        vilkårKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
    >
      <AdopsjonVilkarProsessIndex status={standardPanelProps.status} vilkår={standardPanelProps.vilkårForPanel} />
    </InngangsvilkarDefaultInitPanel>
  );
};
