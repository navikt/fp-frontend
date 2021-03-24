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
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

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
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  familiehendelse: FamilieHendelseSamling;
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
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  personoversikt,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={faktaPanelCodes.UTTAK}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' })}
    skalPanelVisesIMeny={(initData) => initData && initData.ytelsefordeling && initData.ytelsefordeling.endringsdato !== undefined}
    renderPanel={(data) => (
      <UttakFaktaIndex
        kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        {...data}
      />
    )}
  />
);

export default UttakFaktaInitPanel;
