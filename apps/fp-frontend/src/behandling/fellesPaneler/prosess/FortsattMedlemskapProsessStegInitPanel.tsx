import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VilkårStatus } from '@navikt/fp-prosess-felles';
import type { VilkårType } from '@navikt/fp-types';

import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const VILKAR_KODER = ['FP_VK_2_L'] satisfies VilkårType[];
/**
 * Legacy vilkår
 */
export const FortsattMedlemskapProsessStegInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps([], VILKAR_KODER);

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
      skalPanelVisesIMeny={skalViseProsessPanel(
        standardPanelProps.aksjonspunkterForPanel,
        VILKAR_KODER,
        standardPanelProps.vilkårForPanel,
      )}
    >
      <VilkårStatus
        title={intl.formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
        vilkår={standardPanelProps.vilkårForPanel[0]}
        aksjonspunkterForPanel={standardPanelProps.aksjonspunkterForPanel}
        harÅpentAksjonspunkt={standardPanelProps.harÅpentAksjonspunkt}
      />
    </ProsessDefaultInitPanel>
  );
};
