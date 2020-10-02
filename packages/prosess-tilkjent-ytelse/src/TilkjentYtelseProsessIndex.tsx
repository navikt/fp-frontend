import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, BeregningsresultatFp, Fagsak, FamilieHendelseSamling, KodeverkMedNavn, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import TilkjentYtelsePanel from './components/TilkjentYtelsePanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  beregningresultat: BeregningsresultatFp;
  familiehendelse: FamilieHendelseSamling;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  fagsak: Fagsak;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  isReadOnly: boolean;
  submitCallback: (data: any) => Promise<any>;
  readOnlySubmitButton: boolean;
}

const TilkjentYtelseProsessIndex: FunctionComponent<OwnProps> = ({
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
