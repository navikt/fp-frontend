import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  AlleKodeverk,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { getKodeverknavnFn } from '@navikt/fp-kodeverk';

import messages from '../i18n/nb_NO.json';
import BesteberegningPanel from './components/BesteberegningPanel';
import { FormValues } from './components/KontrollerBesteberegningPanel';

import '@navikt/fp-fakta-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
  formData?: FormValues;
  setFormData: (data: any) => void;
  aksjonspunkter: Aksjonspunkt[];
}

const BesteberegningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
  submitCallback,
  formData,
  setFormData,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
    <BesteberegningPanel
      beregningsgrunnlag={beregningsgrunnlag}
      arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
      getKodeverkNavn={getKodeverknavnFn(alleKodeverk)}
      aksjonspunkter={aksjonspunkter}
      readOnly={readOnly}
      submitCallback={submitCallback}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default BesteberegningFaktaIndex;
