import React, {
  FunctionComponent,
} from 'react';

import BesteberegningFaktaIndex from '@fpsak-frontend/fakta-besteberegning';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktInitData = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * BesteberegningFaktaInitPanel
 */
const BesteberegningFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps();

  const skalVises = !!initData?.beregningsgrunnlag?.ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.BESTEBEREGNING,
    getPackageIntl().formatMessage({ id: 'BesteberegningInfoPanel.Title' }),
    valgtFaktaSteg,
    skalVises,
    false,
  );

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={initState}>
      <BesteberegningFaktaIndex arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId} {...initData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default BesteberegningFaktaInitPanel;
