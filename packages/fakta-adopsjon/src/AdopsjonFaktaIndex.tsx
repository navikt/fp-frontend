import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Behandling, FamilieHendelseSamling, KodeverkMedNavn, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import AdopsjonInfoPanel from './components/AdopsjonInfoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  personopplysninger: Personopplysninger;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  isForeldrepengerFagsak: boolean;
}

const AdopsjonFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  behandling,
  soknad,
  familiehendelse,
  aksjonspunkter,
  personopplysninger,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  isForeldrepengerFagsak,
  harApneAksjonspunkter,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
    <AdopsjonInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      soknad={soknad}
      gjeldendeFamiliehendelse={familiehendelse.gjeldende}
      aksjonspunkter={aksjonspunkter}
      personopplysninger={personopplysninger}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
    />
  </RawIntlProvider>
);

export default AdopsjonFaktaIndex;
