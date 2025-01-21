import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, AlleKodeverkTilbakekreving, StandardFaktaPanelProps, Verge } from '@navikt/fp-types';

import RegistrereVergeInfoPanel from './components/RegistrereVergeInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  verge?: Verge;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
};

export const VergeFaktaIndex = ({
  verge = {},
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  formData,
  setFormData,
}: OwnProps & StandardFaktaPanelProps) => (
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
