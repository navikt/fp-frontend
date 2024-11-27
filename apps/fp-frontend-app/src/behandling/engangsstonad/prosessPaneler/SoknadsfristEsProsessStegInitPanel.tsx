import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SoknadsfristVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-soknadsfrist';
import { AksessRettigheter, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { OverstyringPanelDef } from '../../felles/prosess/OverstyringPanelDef';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.SOKNADSFRISTVILKARET, AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR];

const VILKAR_KODER = [VilkarType.SOKNADFRISTVILKARET];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.SOKNAD, BehandlingApiKeys.FAMILIEHENDELSE];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
};

interface Props {
  rettigheter: AksessRettigheter;
}

export const SoknadsfristEsProsessStegInitPanel = ({ rettigheter, ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
      skalPanelVisesIMeny={data => skalViseProsessPanel(data?.aksjonspunkter, VILKAR_KODER, data?.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={data => {
        const harSoknadsfristAp = data.aksjonspunkter.some(
          ap => ap.definisjon === AksjonspunktKode.SOKNADSFRISTVILKARET,
        );
        return (
          <>
            {!harSoknadsfristAp && (
              <OverstyringPanelDef
                aksjonspunkter={data?.aksjonspunkter}
                aksjonspunktKode={AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR}
                vilkar={data.vilkar}
                vilkarKoder={VILKAR_KODER}
                panelTekstKode="Behandlingspunkt.Soknadsfristvilkaret"
                toggleOverstyring={toggleOverstyring}
                erOverstyrt={erOverstyrt}
                overrideReadOnly={data.isReadOnly}
                kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              />
            )}
            {harSoknadsfristAp && <SoknadsfristVilkarProsessIndex {...data} />}
          </>
        );
      }}
    />
  );
};
