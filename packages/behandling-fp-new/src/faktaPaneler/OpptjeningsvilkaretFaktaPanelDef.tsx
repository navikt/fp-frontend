import React, {
  FunctionComponent,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningFaktaIndex from '@fpsak-frontend/fakta-opptjening';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import {
  FaktaPanelMenyData, useStandardFaktaProps, faktaPanelHooks, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.OPPTJENING, FpBehandlingApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  opptjening?: Opptjening;
  utlandDokStatus?: {
    dokStatus: string;
  };
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * OpptjeningsvilkaretFaktaPanelDef
 */
const OpptjeningsvilkaretFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder);

  const skalVises = initData
    && initData.vilkar.some((v) => v.vilkarType.kode === vilkarType.OPPTJENINGSVILKARET)
    && initData.vilkar.some((v) => v.vilkarType.kode === vilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus.kode === vilkarUtfallType.OPPFYLT);
  const erAktiv = valgtFaktaSteg === faktaPanelCodes.OPPTJENINGSVILKARET
    || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.OPPTJENINGSVILKARET,
    getPackageIntl().formatMessage({ id: 'OpptjeningInfoPanel.KontrollerFaktaForOpptjening' }),
    skalVises,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <OpptjeningFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...initData}
        {...panelData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default OpptjeningsvilkaretFaktaPanelDef;
