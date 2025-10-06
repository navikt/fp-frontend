import { useIntl } from 'react-intl';

import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5031'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_1', 'FP_VK_11'];

export const FodselInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FODSEL"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      overstyringApKode={standardPanelProps.vilkårForPanel.some(v => v.vilkarType === 'FP_VK_1') ? '6003' : '6009'}
    >
      <OverstyringPanelDef
        vilkår={standardPanelProps.vilkårForPanel}
        vilkårKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FODSEL"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
    >
      <FodselVilkarProsessIndex
        ytelseTypeKode="FP"
        status={standardPanelProps.status}
        vilkår={standardPanelProps.vilkårForPanel}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
