import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import {
  useStandardFaktaProps, useFaktaMenyRegistrerer, FaktaPanelWrapper, FaktaPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const ArbeidsforholdFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  behandlingVersjon,
  valgtFaktaSteg,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, AKSJONSPUNKT_KODER);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.ARBEIDSFORHOLD,
    getPackageIntl().formatMessage({ id: 'ArbeidsforholdInfoPanel.Title' }),
    valgtFaktaSteg,
    true,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <ArbeidsforholdFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...panelData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default ArbeidsforholdFaktaInitPanel;
