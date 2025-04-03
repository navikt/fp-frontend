import { use } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SoknadsfristVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-soknadsfrist';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SOKNADSFRISTVILKARET, AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR];

const VILKAR_KODER = [VilkarType.SOKNADFRISTVILKARET];

export const SoknadsfristEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const harSoknadsfristAp = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.SOKNADSFRISTVILKARET,
  );

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, harSoknadsfristAp));

  return (
    <PanelOverstyringProvider
      overstyringApKode={AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={standardPanelProps.isReadOnly}
    >
      <ProsessDefaultInitOverstyringPanel
        standardPanelProps={standardPanelProps}
        prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
        skalPanelVisesIMeny={skalViseProsessPanel(
          standardPanelProps.aksjonspunkter,
          VILKAR_KODER,
          standardPanelProps.vilkar,
        )}
      >
        <>
          {!harSoknadsfristAp && (
            <OverstyringPanelDef
              vilkar={standardPanelProps.vilkar}
              vilkarKoder={VILKAR_KODER}
              panelTekstKode="Behandlingspunkt.Soknadsfristvilkaret"
            />
          )}
          {harSoknadsfristAp && søknad && familiehendelse && (
            <SoknadsfristVilkarProsessIndex
              soknad={søknad}
              familiehendelse={familiehendelse}
              status={standardPanelProps.status}
              readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
            />
          )}
        </>
      </ProsessDefaultInitOverstyringPanel>
    </PanelOverstyringProvider>
  );
};
