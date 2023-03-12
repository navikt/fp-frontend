import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import SakenFaktaPanel from './components/SakenFaktaPanel';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-fakta-felles/dist/style.css';

interface OwnProps {
  soknad?: Soknad;
  erSvangerskapspenger: boolean;
  utlandDokStatus?: {
    dokStatus?: string;
    utlandMarkering?: string
  };
}

const intl = createIntl(messages);

const SakenFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  aksjonspunkter,
  erSvangerskapspenger,
  soknad,
  utlandDokStatus,
  submitCallback,
  submittable,
  harApneAksjonspunkter,
  readOnly,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <SakenFaktaPanel
      erSvangerskapspenger={erSvangerskapspenger}
      soknad={soknad}
      aksjonspunkter={aksjonspunkter}
      dokStatus={utlandDokStatus?.dokStatus}
      utlandMarkering={utlandDokStatus?.utlandMarkering}
      harApneAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      submittable={submittable}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SakenFaktaIndex;
