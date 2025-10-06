import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SoknadsfristVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-soknadsfrist';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5007', '6006'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_3'];

export const SoknadsfristEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const harSoknadsfristAp = standardPanelProps.aksjonspunkterForPanel.some(ap => ap.definisjon === '5007');

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, harSoknadsfristAp));

  return (
    <PanelOverstyringProvider
      overstyringApKode="6006"
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
