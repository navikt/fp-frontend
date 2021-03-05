import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER, [], OVERSTYRING_AP_CODES);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.SAKEN,
    getPackageIntl().formatMessage({ id: 'SakenFaktaPanel.Title' }),
    valgtFaktaSteg,
    true,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} isLoading={!panelData && panelDataState !== RestApiState.SUCCESS}>
      <SakenFaktaIndex {...initData} {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default SakenFaktaInitPanel;
