import { type IntlShape, useIntl } from 'react-intl';

import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';
import type { Aksjonspunkt, AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5011', '5031'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_5'];

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

const AKSJONSPUNKT_TEKST_PER_KODE: Partial<Record<AksjonspunktKode, string>> = {
  ['5011']: 'ErOmsorgVilkaarOppfyltForm.Paragraf',
  ['5031']: 'SRBVilkarForm.VurderSammeBarn',
};

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0]!.definisjon] })
    : '';
