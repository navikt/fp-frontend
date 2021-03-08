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
  useFaktaMenyRegistrerer, useStandardFaktaPanelProps, FaktaPanelWrapper, FaktaPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
  aksjonspunktCodes.AVKLAR_AKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * BeregningFaktaInitPanel
 */
const BeregningFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER, [], OVERSTYRING_AP_CODES);

  const skalVises = !!initData?.beregningsgrunnlag;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.BEREGNING,
    getPackageIntl().formatMessage({ id: 'BeregningInfoPanel.Title' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={initState}>
      <BeregningFaktaIndex
        erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...initData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default BeregningFaktaInitPanel;
