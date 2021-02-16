import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { FaktaPanelMenyData, useStandardFaktaProps, faktaPanelHooks } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdFaktaPanelDef
 *
 * Dette faktapanelet skal alltid vises
 */
const ArbeidsforholdFaktaPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  valgtFaktaSteg,
  arbeidsgiverOpplysningerPerId,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder);

  const erAktiv = valgtFaktaSteg === faktaPanelCodes.ARBEIDSFORHOLD
  || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.ARBEIDSFORHOLD,
    getPackageIntl().formatMessage({ id: 'ArbeidsforholdInfoPanel.Title' }),
    true,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  if (!erPanelValgt) {
    return null;
  }
  if (panelDataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }
  return (
    <ArbeidsforholdFaktaIndex
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...initData}
      {...panelData}
      {...standardPanelProps}
    />
  );
};

export default ArbeidsforholdFaktaPanelDef;
