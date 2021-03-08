import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personoversikt,
  UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, FaktaPanelWrapper, useFaktaMenyRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK, aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK];

const ENDEPUNKTER_INIT_DATA = [
  FpBehandlingApiKeys.AKSJONSPUNKTER,
  FpBehandlingApiKeys.YTELSEFORDELING,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  ytelsefordeling: Ytelsefordeling;
}

const ENDEPUNKTER_PANEL_DATA = [
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
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  personoversikt: Personoversikt;
}

/**
 * UttakFaktaInitPanel
 */
const UttakFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  registrerFaktaPanel,
  personoversikt,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER, [], OVERSTYRING_AP_CODES);

  const skalVises = !!initData?.ytelsefordeling?.endringsdato !== undefined;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.UTTAK,
    getPackageIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <UttakFaktaIndex
        kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        {...initData}
        {...panelData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default UttakFaktaInitPanel;
