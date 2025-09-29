import { type IntlShape, useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.OMSORGSVILKARET];

export const OmsorgInngangsvilkarInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OMSORG"
      hentInngangsvilkårPanelTekst={hentAksjonspunktTekst(intl, standardPanelProps.aksjonspunkterForPanel)}
    >
      <OmsorgVilkarProsessIndex status={standardPanelProps.status} />
    </InngangsvilkarDefaultInitPanel>
  );
};

const AKSJONSPUNKT_TEKST_PER_KODE: Record<string, string> = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'ErOmsorgVilkaarOppfyltForm.Paragraf',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
};

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0]!.definisjon] })
    : '';
