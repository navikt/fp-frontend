import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilleggsopplysningerFaktaIndex from '@fpsak-frontend/fakta-tilleggsopplysninger';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.TILLEGGSOPPLYSNINGER];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

/**
 * TilleggsopplysningerFaktaInitPanel
 */
const TilleggsopplysningerFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = !!initData?.aksjonspunkter.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0]);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    initState,
    faktaPanelCodes.TILLEGGSOPPLYSNINGER,
    getPackageIntl().formatMessage({ id: 'TilleggsopplysningerInfoPanel.Tilleggsopplysninger' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <TilleggsopplysningerFaktaIndex {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default TilleggsopplysningerFaktaInitPanel;
