import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SoknadsfristVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-soknadsfrist';
import type { VilkårType } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
  AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET,
];

const VILKAR_KODER = ['FP_VK_3'] satisfies VilkårType[];

export const SoknadsfristEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const harSoknadsfristAp = standardPanelProps.aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
  );

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, harSoknadsfristAp));

  return (
    <PanelOverstyringProvider
      overstyringApKode={AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={standardPanelProps.isReadOnly}
    >
      <ProsessDefaultInitOverstyringPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
        skalPanelVisesIMeny={skalViseProsessPanel(
          standardPanelProps.aksjonspunkterForPanel,
          VILKAR_KODER,
          standardPanelProps.vilkårForPanel,
        )}
      >
        <>
          {!harSoknadsfristAp && (
            <OverstyringPanelDef
              vilkår={standardPanelProps.vilkårForPanel}
              vilkårKoder={VILKAR_KODER}
              panelTekstKode="Behandlingspunkt.Soknadsfristvilkaret"
            />
          )}
          {harSoknadsfristAp && søknad && familiehendelse && (
            <SoknadsfristVilkarProsessIndex
              soknad={søknad}
              familiehendelse={familiehendelse}
              status={standardPanelProps.status}
            />
          )}
        </>
      </ProsessDefaultInitOverstyringPanel>
    </PanelOverstyringProvider>
  );
};
