import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { VilkårStatus } from '@navikt/fp-prosess-felles';
import type { VilkårType } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const VILKAR_KODER = ['FP_VK_6'] satisfies VilkårType[];
const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET];

export const OmsorgsovertakelseInngangsvilkårInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="OMSORGOVERTAKELSE"
      hentInngangsvilkårPanelTekst=""
    >
      <VilkårStatus
        title={intl.formatMessage({ id: 'FaktaInitPanel.Title.Omsorgsovertakelse' })}
        aksjonspunkterForPanel={standardPanelProps.aksjonspunkterForPanel}
        vilkår={standardPanelProps.vilkårForPanel[0]}
        harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
