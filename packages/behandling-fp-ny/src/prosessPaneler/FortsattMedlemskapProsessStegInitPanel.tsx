import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import {
  skalViseProsessPanel, ProsessDefaultInitPanel, ProsessPanelInitProps, OverstyringPanelDef,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const FortsattMedlemskapProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  ...props
}) => {
  const { behandlingVersjon } = props;
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);
  useEffect(() => {
    setOverstyrt(false);
  }, [behandlingVersjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestFpApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={prosessStegCodes.FORTSATTMEDLEMSKAP}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
      skalPanelVisesIMeny={(initData) => skalViseProsessPanel(initData.aksjonspunkter, VILKAR_KODER, initData.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => (
        <OverstyringPanelDef
          behandling={data.behandling}
          aksjonspunkter={data?.aksjonspunkter}
          aksjonspunktKoder={AKSJONSPUNKT_KODER}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
          erMedlemskapsPanel={false}
          toggleOverstyring={toggleOverstyring}
          erOverstyrt={erOverstyrt}
          overrideReadOnly={data.isReadOnly}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
        />
      )}
    />
  );
};

export default FortsattMedlemskapProsessStegInitPanel;
