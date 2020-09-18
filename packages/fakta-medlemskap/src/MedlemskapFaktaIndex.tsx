import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, InntektArbeidYtelse, Soknad, KodeverkMedNavn, Medlemskap, FagsakPerson,
} from '@fpsak-frontend/types';

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
  aksjonspunkter: Aksjonspunkt[];
  fagsakPerson: FagsakPerson;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  isForeldrepengerFagsak: boolean;
  readOnly: boolean;
  readOnlyForStartdatoForForeldrepenger: boolean;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  soknad,
  inntektArbeidYtelse,
  medlemskap,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  fagsakPerson,
  isForeldrepengerFagsak,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  readOnlyForStartdatoForForeldrepenger,
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
      fagsakPerson={fagsakPerson}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      isForeldrepenger={isForeldrepengerFagsak}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
    />
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
