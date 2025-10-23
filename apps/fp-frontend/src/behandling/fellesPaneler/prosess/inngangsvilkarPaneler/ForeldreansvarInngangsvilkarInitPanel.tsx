import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ForeldreansvarVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-foreldreansvar';
import type { VilkårType } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
  AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
];

const AKSJONSPUNKT_TEKST_PER_KODE: Record<string, string> = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE]: 'SRBVilkarForm.VurderSammeBarn',
};

const VILKAR_KODER = ['FP_VK_8', 'FP_VK_33'] satisfies VilkårType[];

export const ForeldreansvarInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkårPanelTekst={
        standardPanelProps.aksjonspunkterForPanel.length > 0
          ? intl.formatMessage({
              id: AKSJONSPUNKT_TEKST_PER_KODE[standardPanelProps.aksjonspunkterForPanel[0]!.definisjon],
            })
          : ''
      }
    >
      <ForeldreansvarVilkarProsessIndex
        isEngangsstonad
        status={standardPanelProps.status}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
