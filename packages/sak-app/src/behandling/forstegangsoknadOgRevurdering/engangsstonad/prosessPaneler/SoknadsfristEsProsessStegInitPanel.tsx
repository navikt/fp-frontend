import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import SoknadsfristVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-soknadsfrist';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.SOKNADSFRISTVILKARET,
  aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR,
];

const VILKAR_KODER = [vilkarType.SOKNADFRISTVILKARET];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.SOKNAD, BehandlingFellesApiKeys.FAMILIEHENDELSE];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const SoknadsfristEsProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  ...props
}) => {
  const intl = useIntl();
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
      skalPanelVisesIMeny={(data) => skalViseProsessPanel(data?.aksjonspunkter, VILKAR_KODER, data?.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => {
        const harSoknadsfristAp = data.aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.SOKNADSFRISTVILKARET);
        return (
          <>
            {!harSoknadsfristAp && (
              <OverstyringPanelDef
                aksjonspunkter={data?.aksjonspunkter}
                aksjonspunktKode={aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR}
                vilkar={data.vilkar}
                vilkarKoder={VILKAR_KODER}
                panelTekstKode="Behandlingspunkt.Soknadsfristvilkaret"
                erMedlemskapsPanel={false}
                toggleOverstyring={toggleOverstyring}
                erOverstyrt={erOverstyrt}
                overrideReadOnly={data.isReadOnly}
                kanOverstyreAccess={rettigheter.kanOverstyreAccess}
              />
            )}
            {harSoknadsfristAp && (
              <SoknadsfristVilkarProsessIndex {...data} />
            )}
          </>
        );
      }}
    />
  );
};

export default SoknadsfristEsProsessStegInitPanel;
