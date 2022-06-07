import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import LagreSoknadPanel from './components/LagreSoknadPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitting: boolean;
}

const LagreSoknadPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  onSubmitUfullstendigsoknad,
  submitting,
}) => (
  <RawIntlProvider value={intl}>
    <LagreSoknadPanel
      readOnly={readOnly}
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      submitting={submitting}
    />
  </RawIntlProvider>
);

export default LagreSoknadPapirsoknadIndex;
