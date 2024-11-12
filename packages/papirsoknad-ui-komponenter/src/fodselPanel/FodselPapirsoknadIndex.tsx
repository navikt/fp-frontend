import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { TerminFodselDatoPanel } from './components/TerminFodselDatoPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  erForeldrepenger: boolean;
}

export const FodselPapirsoknadIndex = ({ readOnly, erForeldrepenger }: Props) => (
  <RawIntlProvider value={intl}>
    <TerminFodselDatoPanel readOnly={readOnly} erForeldrepenger={erForeldrepenger} />
  </RawIntlProvider>
);
