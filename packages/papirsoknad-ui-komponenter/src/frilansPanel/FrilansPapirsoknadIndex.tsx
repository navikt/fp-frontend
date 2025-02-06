import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FrilansPanel } from './components/FrilansPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

export const FrilansPapirsoknadIndex = ({ readOnly }: Props) => (
  <RawIntlProvider value={intl}>
    <FrilansPanel readOnly={readOnly} />
  </RawIntlProvider>
);

FrilansPapirsoknadIndex.initialValues = FrilansPanel.initialValues;

FrilansPapirsoknadIndex.transformValues = FrilansPanel.transformValues;
