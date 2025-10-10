import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { VilkårType } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODE = AksjonspunktKode.UTGÅTT_6012;

const VILKAR_KODER = ['FP_VK_2_L'] satisfies VilkårType[];

export const FortsattMedlemskapProsessStegInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps([AKSJONSPUNKT_KODE], VILKAR_KODER);

  return (
    <PanelOverstyringProvider
      overstyringApKode={AKSJONSPUNKT_KODE}
      kanOverstyreAccess={{ isEnabled: false, employeeHasAccess: false }}
      overrideReadOnly={true}
    >
      <ProsessDefaultInitOverstyringPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
        skalPanelVisesIMeny={skalViseProsessPanel(
          standardPanelProps.aksjonspunkterForPanel,
          VILKAR_KODER,
          standardPanelProps.vilkårForPanel,
        )}
      >
        <OverstyringPanelDef
          vilkår={standardPanelProps.vilkårForPanel}
          vilkårKoder={VILKAR_KODER}
          panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
        />
      </ProsessDefaultInitOverstyringPanel>
    </PanelOverstyringProvider>
  );
};
