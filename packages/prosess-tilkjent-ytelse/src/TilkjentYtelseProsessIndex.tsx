import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  Fagsak,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
  StandardProsessPanelProps,
} from '@fpsak-frontend/types';

import TilkjentYtelsePanel from './components/TilkjentYtelsePanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  beregningresultat: BeregningsresultatFp;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

const TilkjentYtelseProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  beregningresultat,
  familiehendelse,
  personoversikt,
  soknad,
  fagsak,
  aksjonspunkter,
  alleKodeverk,
  isReadOnly,
  submitCallback,
  readOnlySubmitButton,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <TilkjentYtelsePanel
      beregningresultat={beregningresultat}
      familieHendelseSamling={familiehendelse}
      personoversikt={personoversikt}
      soknad={soknad}
      fagsakYtelseTypeKode={fagsak.fagsakYtelseType}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      readOnly={isReadOnly}
      submitCallback={submitCallback}
      readOnlySubmitButton={readOnlySubmitButton}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      feriepengegrunnlag={feriepengegrunnlag}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default TilkjentYtelseProsessIndex;
