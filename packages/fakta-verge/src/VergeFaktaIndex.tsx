import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  AlleKodeverk, AlleKodeverkTilbakekreving, StandardFaktaPanelProps, Verge,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import RegistrereVergeInfoPanel from './components/RegistrereVergeInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  verge?: Verge;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
};

const VergeFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  verge,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <RegistrereVergeInfoPanel
      verge={verge}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
      alleKodeverk={alleKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      submittable={submittable}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

VergeFaktaIndex.defaultProps = {
  verge: {},
};

export default VergeFaktaIndex;
