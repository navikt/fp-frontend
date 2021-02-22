import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import {
  FaktaPanelMenyData, useStandardFaktaProps, faktaPanelHooks, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
];

const overstyringApCodes = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}

/**
 * SakenFaktaPanelDef
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder, [], overstyringApCodes);

  const erAktiv = valgtFaktaSteg === faktaPanelCodes.SAKEN
    || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.SAKEN,
    getPackageIntl().formatMessage({ id: 'SakenFaktaPanel.Title' }),
    true,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <SakenFaktaIndex {...initData} {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default SakenFaktaPanelDef;
