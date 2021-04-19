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
import { ReduxWrapper } from '@fpsak-frontend/form';

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
  behandling,
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
    <ReduxWrapper formName="TilkjentYtelseProsessIndex" formData={formData} setFormData={setFormData}>
      <TilkjentYtelsePanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        beregningresultat={beregningresultat}
        familieHendelseSamling={familiehendelse}
        personoversikt={personoversikt}
        soknad={soknad}
        fagsakYtelseTypeKode={fagsak.fagsakYtelseType.kode}
        aksjonspunkter={aksjonspunkter}
        alleKodeverk={alleKodeverk}
        readOnly={isReadOnly}
        submitCallback={submitCallback}
        readOnlySubmitButton={readOnlySubmitButton}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        feriepengegrunnlag={feriepengegrunnlag}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default TilkjentYtelseProsessIndex;
