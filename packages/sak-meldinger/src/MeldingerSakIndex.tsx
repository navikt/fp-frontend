import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import Messages, { FormValues, Template } from './components/Messages';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  submitCallback: (values: FormValues) => void;
  templates?: Template[];
  sprakKode: string;
  previewCallback: (brevmalkode?: string, fritekst?: string, arsakskode?: string) => void;
  isKontrollerRevurderingApOpen?: boolean;
  revurderingVarslingArsak: KodeverkMedNavn[];
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: any,
  setMeldingForData: (data?: any) => void,
}

const MeldingerSakIndex: FunctionComponent<OwnProps> = ({
  submitCallback,
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
    <Messages
      submitCallback={submitCallback}
      templates={templates}
      sprakKode={sprakKode}
      previewCallback={previewCallback}
      isKontrollerRevurderingApOpen={isKontrollerRevurderingApOpen}
      revurderingVarslingArsak={revurderingVarslingArsak}
      fagsakYtelseType={fagsakYtelseType}
      kanVeilede={kanVeilede}
      meldingFormData={meldingFormData}
      setMeldingForData={setMeldingForData}
    />
  </RawIntlProvider>
);

export default MeldingerSakIndex;
