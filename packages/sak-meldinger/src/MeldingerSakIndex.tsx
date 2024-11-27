import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KodeverkMedNavn } from '@navikt/fp-types';

import { FormValues, Messages, Template } from './components/Messages';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  submitCallback: (values: FormValues) => void;
  templates?: Template[];
  sprakKode?: string;
  previewCallback: (brevmalkode?: string, fritekst?: string, arsakskode?: string) => void;
  isKontrollerRevurderingApOpen?: boolean;
  revurderingVarslingArsak: KodeverkMedNavn[];
  fagsakYtelseType: string;
  kanVeilede: boolean;
  meldingFormData?: any;
  setMeldingFormData: (data?: any) => void;
  brukerManglerAdresse: boolean;
}

export const MeldingerSakIndex = ({ templates = [], isKontrollerRevurderingApOpen = false, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    <Messages templates={templates} isKontrollerRevurderingApOpen={isKontrollerRevurderingApOpen} {...rest} />
  </RawIntlProvider>
);
