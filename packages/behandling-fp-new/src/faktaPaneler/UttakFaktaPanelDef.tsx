import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personopplysninger, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { FaktaPanelMenyData, faktaPanelHooks, useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
];

const endepunkterInit = [
  FpBehandlingApiKeys.AKSJONSPUNKTER,
  FpBehandlingApiKeys.PERSONOPPLYSNINGER,
  FpBehandlingApiKeys.YTELSEFORDELING,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  personopplysninger: Personopplysninger;
  ytelsefordeling: Ytelsefordeling;
}

const endepunkterPanelData = [
  FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER,
  FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD,
  FpBehandlingApiKeys.FAMILIEHENDELSE,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * UttakFaktaPanelDef
 */
const UttakFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder);

  const skalVises = !!initData?.ytelsefordeling?.endringsdato && !!initData?.personopplysninger;
  const erAktiv = valgtFaktaSteg === faktaPanelCodes.UTTAK || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.UTTAK,
    getPackageIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' }),
    skalVises,
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
    <UttakFaktaIndex
      kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...initData}
      {...panelData}
      {...standardPanelProps}
    />
  );
};

export default UttakFaktaPanelDef;
