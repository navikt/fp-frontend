import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';
import UttakFaktaForm from './comp/UttakFaktaForm';

const intl = createIntl(messages);

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  kanOverstyre: boolean;
}

const UttakFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  aksjonspunkter,
  submitCallback,
  ytelsefordeling,
  uttakKontrollerFaktaPerioder,
  alleKodeverk,
  readOnly,
  kanOverstyre,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <UttakFaktaForm
      ytelsefordeling={ytelsefordeling}
      uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
      alleKodeverk={alleKodeverk}
      aksjonspunkter={aksjonspunkter}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
      readOnly={readOnly}
      submitCallback={submitCallback}
      kanOverstyre={kanOverstyre}
    />
  </RawIntlProvider>
);

export default UttakFaktaIndex;
