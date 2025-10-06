import { useIntl } from 'react-intl';

import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5031'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_5'];

export const OmsorgInngangsvilkarFpInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OMSORG"
      hentInngangsvilkårPanelTekst={intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
    >
      <OmsorgVilkarProsessIndex status={standardPanelProps.status} />
    </InngangsvilkarDefaultInitPanel>
  );
};
