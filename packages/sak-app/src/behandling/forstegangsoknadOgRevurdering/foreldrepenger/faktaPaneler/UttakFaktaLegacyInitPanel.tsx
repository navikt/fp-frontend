import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak-legacy';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personoversikt, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK, aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK];

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER,
  FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD,
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  familiehendelse: FamilieHendelseSamling;
  ytelsefordeling: Ytelsefordeling;
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
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.UTTAK}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' })}
    skalPanelVisesIMeny={() => props.behandling.harSattEndringsdato && !props.requestApi.hasPath(FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2.name)}
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
