import { use, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODE = AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR;

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

export const FortsattMedlemskapProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = () => setOverstyrt(!erOverstyrt);

  useEffect(() => {
    setOverstyrt(false);
  }, [behandling.versjon]);

  const standardPanelProps = useStandardProsessPanelProps([AKSJONSPUNKT_KODE], VILKAR_KODER);

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
      skalPanelVisesIMeny={skalViseProsessPanel(
        standardPanelProps.aksjonspunkter,
        VILKAR_KODER,
        standardPanelProps.vilkar,
      )}
      erOverstyrt={erOverstyrt}
    >
      <OverstyringPanelDef
        aksjonspunkter={standardPanelProps.aksjonspunkter}
        aksjonspunktKode={AKSJONSPUNKT_KODE}
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={true}
        kanOverstyreAccess={{ isEnabled: false, employeeHasAccess: false }}
      />
    </ProsessDefaultInitPanel>
  );
};
