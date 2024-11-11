import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/fp-types';

import { PermisjonPanel } from './components/PermisjonPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

export const PermisjonIndex = ({ foreldreType, readOnly, alleKodeverk, erEndringssøknad }: Props) => (
  <RawIntlProvider value={intl}>
    <PermisjonPanel
      readOnly={readOnly}
      foreldreType={foreldreType}
      alleKodeverk={alleKodeverk}
      erEndringssøknad={erEndringssøknad}
    />
  </RawIntlProvider>
);

PermisjonIndex.transformValues = PermisjonPanel.transformValues;

PermisjonIndex.buildInitialValues = PermisjonPanel.buildInitialValues;
