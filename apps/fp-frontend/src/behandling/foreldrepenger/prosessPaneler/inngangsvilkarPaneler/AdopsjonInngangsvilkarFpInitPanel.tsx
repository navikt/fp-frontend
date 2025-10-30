import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';
import type { VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE];

const VILKAR_KODER = ['FP_VK_16'] satisfies VilkårType[];

export const AdopsjonInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP}
    >
      <OverstyringPanelDef vilkårKoder={VILKAR_KODER} panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret" />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      vilkårKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
    >
      <AdopsjonVilkarProsessIndex status={standardPanelProps.status} />
    </InngangsvilkarDefaultInitPanel>
  );
};
