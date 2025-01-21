import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { getKodeverknavnFn } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
} from '@navikt/fp-types';

import BesteberegningPanel from './components/BesteberegningPanel';
import { FormValues } from './components/KontrollerBesteberegningPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
  formData?: FormValues;
  setFormData: (data: any) => void;
  aksjonspunkter: Aksjonspunkt[];
}

export const BesteberegningFaktaIndex = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
  submitCallback,
  formData,
  setFormData,
  submittable,
}: Props & StandardFaktaPanelProps) => (
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
