import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  BeregningsresultatFp, Fagsak, FamilieHendelseSamling, Personopplysninger, Soknad,
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
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  fagsak: Fagsak;
}

const TilkjentYtelseProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  beregningresultat,
  familiehendelse,
  personopplysninger,
  soknad,
  fagsak,
  aksjonspunkter,
  alleKodeverk,
  isReadOnly,
  submitCallback,
  readOnlySubmitButton,
}) => (
  <RawIntlProvider value={intl}>
    <TilkjentYtelsePanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      beregningresultat={beregningresultat}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      personopplysninger={personopplysninger}
      soknad={soknad}
      fagsakYtelseTypeKode={fagsak.sakstype.kode}
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk}
      readOnly={isReadOnly}
      submitCallback={submitCallback}
      readOnlySubmitButton={readOnlySubmitButton}
    />
  </RawIntlProvider>
);

export default TilkjentYtelseProsessIndex;
