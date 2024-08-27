import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, Soknad, Medlemskap } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap: Medlemskap;
  soknad: Soknad;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  soknad,
  medlemskap,
  aksjonspunkter,
  submittable,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <MedlemskapInfoPanel
      soknad={soknad}
      medlemskap={medlemskap}
      aksjonspunkter={aksjonspunkter}
      submittable={submittable}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
