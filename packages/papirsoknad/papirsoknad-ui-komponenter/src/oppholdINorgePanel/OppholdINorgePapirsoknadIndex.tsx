import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk } from '@navikt/fp-types';

import { OppholdINorgePanel } from './components/OppholdINorgePanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  erAdopsjon: boolean;
  alleKodeverk: AlleKodeverk;
  mottattDato?: string;
}

export const OppholdINorgePapirsoknadIndex = ({ readOnly, erAdopsjon, alleKodeverk, mottattDato }: Props) => (
  <RawIntlProvider value={intl}>
    <OppholdINorgePanel
      readOnly={readOnly}
      erAdopsjon={erAdopsjon}
      alleKodeverk={alleKodeverk}
      mottattDato={mottattDato}
    />
  </RawIntlProvider>
);

OppholdINorgePapirsoknadIndex.initialValues = OppholdINorgePanel.initialValues;

OppholdINorgePapirsoknadIndex.transformValues = OppholdINorgePanel.transformValues;
