import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad, UttakPeriodeGrense } from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, useProsessMenyRegistrerer, ProsessPanelInitProps, useSkalViseProsessPanel,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE, FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  soknad: Soknad;
}

const SoknadsfristProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter);

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.SOEKNADSFRIST,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      dataState={panelDataState}
    >
      <VurderSoknadsfristForeldrepengerIndex
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default SoknadsfristProsessStegInitPanel;
