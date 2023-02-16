import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  FodselOgTilrettelegging,
  StandardProsessPanelProps,
} from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import SvangerskapVilkarForm from './components/SvangerskapVilkarForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';

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
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some((a) => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SvangerskapVilkarProsessIndex;
