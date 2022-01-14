import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  FodselOgTilrettelegging,
  StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import SvangerskapVilkarForm from './components/SvangerskapVilkarForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

const SvangerskapVilkarProsessIndex: FunctionComponent<StandardProsessPanelProps & OwnProps> = ({
  behandling,
  aksjonspunkter,
  status,
  vilkar,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  svangerskapspengerTilrettelegging,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm
      behandlingsresultat={behandling.behandlingsresultat}
      aksjonspunkter={aksjonspunkter}
      status={status}
      vilkar={vilkar}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      isApOpen={isAksjonspunktOpen}
      alleKodeverk={alleKodeverk}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon.kode]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SvangerskapVilkarProsessIndex;
