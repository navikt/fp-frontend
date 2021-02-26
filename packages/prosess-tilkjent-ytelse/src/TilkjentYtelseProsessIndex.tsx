import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  Fagsak,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import TilkjentYtelsePanel from './components/TilkjentYtelsePanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  beregningresultat: BeregningsresultatFp;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

const TilkjentYtelseProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
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
}) => (
  <RawIntlProvider value={intl}>
    <TilkjentYtelsePanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      beregningresultat={beregningresultat}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      personoversikt={personoversikt}
      soknad={soknad}
      fagsakYtelseTypeKode={fagsak.sakstype.kode}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      readOnly={isReadOnly}
      submitCallback={submitCallback}
      readOnlySubmitButton={readOnlySubmitButton}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      feriepengegrunnlag={feriepengegrunnlag}
    />
  </RawIntlProvider>
);

export default TilkjentYtelseProsessIndex;
