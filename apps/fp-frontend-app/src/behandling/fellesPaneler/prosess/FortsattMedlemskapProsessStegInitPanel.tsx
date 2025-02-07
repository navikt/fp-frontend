import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import type { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODE = AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR;

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

export const FortsattMedlemskapProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps([AKSJONSPUNKT_KODE], VILKAR_KODER);

  return (
    <PanelOverstyringProvider
      overstyringApKode={AKSJONSPUNKT_KODE}
      kanOverstyreAccess={{ isEnabled: false, employeeHasAccess: false }}
      overrideReadOnly={true}
    >
      <ProsessDefaultInitOverstyringPanel
        {...props}
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
        skalPanelVisesIMeny={skalViseProsessPanel(
          standardPanelProps.aksjonspunkter,
          VILKAR_KODER,
          standardPanelProps.vilkar,
        )}
      >
        <OverstyringPanelDef
          vilkar={standardPanelProps.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
        />
      </ProsessDefaultInitOverstyringPanel>
    </PanelOverstyringProvider>
  );
};
