import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/fp-types';

import { AndreYtelserPanel } from './components/AndreYtelserPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  kunMiliterEllerSiviltjeneste?: boolean;
}

export const AndreYtelserPapirsoknadIndex = ({ readOnly, alleKodeverk, kunMiliterEllerSiviltjeneste }: Props) => (
  <RawIntlProvider value={intl}>
    <AndreYtelserPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
    />
  </RawIntlProvider>
);

AndreYtelserPapirsoknadIndex.initialValues = AndreYtelserPanel.initialValues;

AndreYtelserPapirsoknadIndex.transformValues = AndreYtelserPanel.transformValues;
