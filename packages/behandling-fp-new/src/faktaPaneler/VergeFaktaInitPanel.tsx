import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Verge } from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_VERGE];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.VERGE];
type EndepunktPanelData = {
  verge: Verge;
}

/**
 * VergeFaktaInitPanel
 */
const VergeFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = !!initData?.aksjonspunkter.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0]);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.VERGE,
    getPackageIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <VergeFaktaIndex {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default VergeFaktaInitPanel;
