import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, useProsessMenyRegistrerer, ProsessPanelInitProps, OverstyringPanelDef, useSkalViseProsessPanel,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

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
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  rettigheter,
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);
  useEffect(() => {
    setOverstyrt(false);
  }, [behandlingVersjon]);

  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, VILKAR_KODER);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, VILKAR_KODER, standardPanelProps.vilkar);

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.FORTSATTMEDLEMSKAP,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' }),
    valgtProsessSteg,
    skalVises,
    erOverstyrt || standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      isLoading={!initData && initState !== RestApiState.SUCCESS}
    >
      <OverstyringPanelDef
        behandling={standardPanelProps.behandling}
        aksjonspunkter={initData?.aksjonspunkter}
        aksjonspunktKoder={AKSJONSPUNKT_KODER}
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
        erMedlemskapsPanel={false}
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={standardPanelProps.isReadOnly}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      />
    </ProsessPanelWrapper>
  );
};

export default FortsattMedlemskapProsessStegInitPanel;
