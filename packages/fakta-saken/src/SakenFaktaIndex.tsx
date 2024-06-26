import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Fagsak, Soknad, StandardFaktaPanelProps } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import SakenFaktaPanel from './components/SakenFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  soknad?: Soknad;
  fagsak: Fagsak;
  utlandDokStatus?: {
    dokStatus?: string;
  };
  kanOverstyreAccess: boolean;
}

const intl = createIntl(messages);

const SakenFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  aksjonspunkter,
  fagsak,
  soknad,
  utlandDokStatus,
  submitCallback,
  submittable,
  harApneAksjonspunkter,
  readOnly,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
  kanOverstyreAccess,
}) => (
  <RawIntlProvider value={intl}>
    <SakenFaktaPanel
      fagsak={fagsak}
      soknad={soknad}
      aksjonspunkter={aksjonspunkter}
      dokStatus={utlandDokStatus?.dokStatus}
      harApneAksjonspunkter={harApneAksjonspunkter}
      submitCallback={submitCallback}
      readOnly={readOnly}
      submittable={submittable}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      formData={formData}
      setFormData={setFormData}
      kanOverstyreAccess={kanOverstyreAccess}
    />
  </RawIntlProvider>
);

export default SakenFaktaIndex;
