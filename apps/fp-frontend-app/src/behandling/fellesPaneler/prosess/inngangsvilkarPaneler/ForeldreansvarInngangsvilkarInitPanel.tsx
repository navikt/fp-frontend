import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ForeldreansvarVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-foreldreansvar';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const VILKAR_KODER = [VilkarType.FORELDREANSVARSVILKARET_2_LEDD, VilkarType.FORELDREANSVARSVILKARET_4_LEDD];

export const ForeldreansvarInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkarPanelTekst={
        standardPanelProps.aksjonspunkter.length > 0
          ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[standardPanelProps.aksjonspunkter[0].definisjon] })
          : ''
      }
    >
      <ForeldreansvarVilkarProsessIndex
        isEngangsstonad
        isForeldreansvar2Ledd={standardPanelProps.vilkar.some(
          v => v.vilkarType === VilkarType.FORELDREANSVARSVILKARET_2_LEDD,
        )}
        status={standardPanelProps.status}
        readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
