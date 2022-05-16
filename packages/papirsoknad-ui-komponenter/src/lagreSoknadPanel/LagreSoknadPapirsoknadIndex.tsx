import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import LagreSoknadPanel from './components/LagreSoknadPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  form: string;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitting: boolean;
}

const LagreSoknadPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
  onSubmitUfullstendigsoknad,
  submitting,
}) => (
  <RawIntlProvider value={intl}>
    { /* @ts-ignore Fiks cannot be used as a JSX component */ }
    <LagreSoknadPanel
      readOnly={readOnly}
      form={form}
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      submitting={submitting}
    />
  </RawIntlProvider>
);

export default LagreSoknadPapirsoknadIndex;
