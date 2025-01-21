import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { StandardProsessPanelProps } from '@navikt/fp-types';

import ErOmsorgVilkaarOppfyltForm from './components/ErOmsorgVilkaarOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const OmsorgVilkarProsessIndex = ({
  behandling,
  aksjonspunkter,
  status,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
}: StandardProsessPanelProps) => (
  <RawIntlProvider value={intl}>
    <ErOmsorgVilkaarOppfyltForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      alleKodeverk={alleKodeverk}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);
