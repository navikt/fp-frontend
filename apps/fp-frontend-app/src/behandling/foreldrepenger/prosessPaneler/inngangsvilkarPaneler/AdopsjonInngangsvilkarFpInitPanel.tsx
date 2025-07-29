import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { AdopsjonVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-adopsjon';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN];

const VILKAR_KODER = [VilkarType.ADOPSJONSVILKARET_FORELDREPENGER];

export const AdopsjonInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return standardPanelProps.aksjonspunkter.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      vilkarKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkarPanelKode="ADOPSJON"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP}
    >
      <OverstyringPanelDef
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      vilkarKoder={VILKAR_KODER}
      standardPanelProps={standardPanelProps}
      inngangsvilkarPanelKode="ADOPSJON"
      hentInngangsvilkarPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
    >
      <AdopsjonVilkarProsessIndex
        status={standardPanelProps.status}
        readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
        vilkar={standardPanelProps.vilkar}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
