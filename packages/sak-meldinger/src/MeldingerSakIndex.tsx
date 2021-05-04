import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import Messages, { FormValues, Template } from './components/Messages';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  submitCallback: (values: FormValues) => void;
  recipients: string[];
  templates?: Template[];
  sprakKode: Kodeverk;
  previewCallback: (mottaker: string, brevmalkode: string, fritekst: string, arsakskode: string) => void;
  isKontrollerRevurderingApOpen?: boolean;
  revurderingVarslingArsak: KodeverkMedNavn[];
  fagsakYtelseType: Kodeverk;
  kanVeilede: boolean;
  meldingFormData?: any,
  setMeldingForData: (data?: any) => void,
}

const MeldingerSakIndex: FunctionComponent<OwnProps> = ({
  submitCallback,
  recipients,
  templates = [],
  sprakKode,
  previewCallback,
  isKontrollerRevurderingApOpen = false,
  revurderingVarslingArsak,
  fagsakYtelseType,
  kanVeilede,
  meldingFormData,
  setMeldingForData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="MeldingerSakIndex" formData={meldingFormData} setFormData={setMeldingForData}>
      <Messages
        submitCallback={submitCallback}
        recipients={recipients}
        templates={templates}
        sprakKode={sprakKode}
        previewCallback={previewCallback}
        isKontrollerRevurderingApOpen={isKontrollerRevurderingApOpen}
        revurderingVarslingArsak={revurderingVarslingArsak}
        fagsakYtelseType={fagsakYtelseType}
        kanVeilede={kanVeilede}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default MeldingerSakIndex;
