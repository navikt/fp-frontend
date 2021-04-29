import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import SoknadsfristVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-soknadsfrist';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  ProsessDefaultInitPanel, ProsessPanelInitProps, OverstyringPanelDef, skalViseProsessPanel,
} from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.SOKNADSFRISTVILKARET,
  aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR,
];

const VILKAR_KODER = [vilkarType.SOKNADFRISTVILKARET];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.SOKNAD, EsBehandlingApiKeys.FAMILIEHENDELSE];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const SoknadsfristProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  ...props
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestEsApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
      skalPanelVisesIMeny={(data) => skalViseProsessPanel(data?.aksjonspunkter, VILKAR_KODER, data?.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => {
        const harSoknadsfristAp = data.aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.SOKNADSFRISTVILKARET);
        return (
          <>
            {!harSoknadsfristAp && (
              <OverstyringPanelDef
                behandling={data.behandling}
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

export default SoknadsfristProsessStegInitPanel;
