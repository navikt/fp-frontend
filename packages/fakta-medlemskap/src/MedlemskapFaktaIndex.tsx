import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Behandling, InntektArbeidYtelse, Soknad, KodeverkMedNavn, Medlemskap, ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  medlemskap: Medlemskap;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  isForeldrepengerFagsak: boolean;
  readOnlyForStartdatoForForeldrepenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  soknad,
  inntektArbeidYtelse,
  medlemskap,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  isForeldrepengerFagsak,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  readOnlyForStartdatoForForeldrepenger,
  arbeidsgiverOpplysningerPerId,
}) => (
  <RawIntlProvider value={intl}>
    <MedlemskapInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingType={behandling.type}
      behandlingStatus={behandling.status}
      behandlingPaaVent={behandling.behandlingPaaVent}
      soknad={soknad}
      inntektArbeidYtelse={inntektArbeidYtelse}
      medlemskap={medlemskap}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      isForeldrepenger={isForeldrepengerFagsak}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
