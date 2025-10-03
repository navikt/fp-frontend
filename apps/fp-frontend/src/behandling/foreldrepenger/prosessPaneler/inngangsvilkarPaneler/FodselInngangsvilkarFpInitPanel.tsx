import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import type { VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN];

const VILKAR_KODER = ['FP_VK_1', 'FP_VK_11'] satisfies VilkårType[];

export const FodselInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FODSEL"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      overstyringApKode={
        standardPanelProps.vilkårForPanel.some(v => v.vilkarType === 'FP_VK_1')
          ? AksjonspunktKode.OVERSTYR_FODSELSVILKAR
          : AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR
      }
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
