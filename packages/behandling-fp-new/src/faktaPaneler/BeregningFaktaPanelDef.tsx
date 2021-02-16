import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningFaktaIndex from '@fpsak-frontend/fakta-beregning';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import {
  FaktaPanelMenyData, useStandardFaktaProps, faktaPanelHooks, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
  aksjonspunktCodes.AVKLAR_AKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * BeregningFaktaPanelDef
 */
const BeregningFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder);

  const skalVises = !!initData?.beregningsgrunnlag;
  const erAktiv = valgtFaktaSteg === faktaPanelCodes.BEREGNING
    || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.BEREGNING,
    getPackageIntl().formatMessage({ id: 'BeregningInfoPanel.Title' }),
    skalVises,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={initState}>
      <BeregningFaktaIndex
        erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...initState}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default BeregningFaktaPanelDef;
