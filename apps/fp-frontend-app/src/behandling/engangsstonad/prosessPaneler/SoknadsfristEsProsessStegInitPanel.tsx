import { use, useState } from 'react';
import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SoknadsfristVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-soknadsfrist';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SOKNADSFRISTVILKARET, AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR];

const VILKAR_KODER = [VilkarType.SOKNADFRISTVILKARET];

export const SoknadsfristEsProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const intl = useIntl();
  const [erOverstyrt, setOverstyrt] = useState(false);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling));

  const harSoknadsfristAp = standardPanelProps.aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.SOKNADSFRISTVILKARET,
  );

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
      skalPanelVisesIMeny={skalViseProsessPanel(
        standardPanelProps.aksjonspunkter,
        VILKAR_KODER,
        standardPanelProps.vilkar,
      )}
      erOverstyrt={erOverstyrt}
    >
      <>
        {!harSoknadsfristAp && (
          <OverstyringPanelDef
            aksjonspunkter={standardPanelProps.aksjonspunkter}
            aksjonspunktKode={AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR}
            vilkar={standardPanelProps.vilkar}
            vilkarKoder={VILKAR_KODER}
            panelTekstKode="Behandlingspunkt.Soknadsfristvilkaret"
            toggleOverstyring={() => setOverstyrt(!erOverstyrt)}
            erOverstyrt={erOverstyrt}
            overrideReadOnly={standardPanelProps.isReadOnly}
            kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          />
        )}
        {harSoknadsfristAp && søknad && familiehendelse && (
          <SoknadsfristVilkarProsessIndex {...standardPanelProps} soknad={søknad} familiehendelse={familiehendelse} />
        )}
      </>
    </ProsessDefaultInitPanel>
  );
};
