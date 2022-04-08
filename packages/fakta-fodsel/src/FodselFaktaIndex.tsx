import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, FamilieHendelse, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import FodselInfoPanel from './components/FodselInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
}

const FodselFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  familiehendelse,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  alleMerknaderFraBeslutter,
  submitCallback,
  readOnly,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <FodselInfoPanel
      behandlingType={behandling.type}
      soknad={soknad}
      familiehendelse={familiehendelse}
      soknadOriginalBehandling={soknadOriginalBehandling}
      familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      aksjonspunkter={aksjonspunkter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      submittable={submittable}
      submitCallback={submitCallback}
      readOnly={readOnly}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default FodselFaktaIndex;
