import { type IntlShape, useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';
import type { Aksjonspunkt, VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE];

const VILKAR_KODER = ['FP_VK_4'] satisfies VilkårType[];

export const AdopsjonInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const paneltekst = hentAksjonspunktTekst(intl, standardPanelProps.aksjonspunkterForPanel);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={paneltekst}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET}
    >
      <OverstyringPanelDef vilkårKoder={VILKAR_KODER} panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret" />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="ADOPSJON"
      hentInngangsvilkårPanelTekst={paneltekst}
    >
      <AdopsjonVilkarProsessIndex status={standardPanelProps.status} vilkår={standardPanelProps.vilkårForPanel} />
    </InngangsvilkarDefaultInitPanel>
  );
};

const AKSJONSPUNKT_TEKST_PER_KODE: Record<string, string> = {
  [AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE]: 'SRBVilkarForm.VurderSammeBarn',
};

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0]!.definisjon] })
    : '';
