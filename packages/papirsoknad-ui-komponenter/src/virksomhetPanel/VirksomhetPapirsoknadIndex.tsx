import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk } from '@navikt/fp-types';

import { EgenVirksomhetPanel } from './components/EgenVirksomhetPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const VirksomhetPapirsoknadIndex = ({ readOnly, alleKodeverk }: Props) => (
  <RawIntlProvider value={intl}>
    <EgenVirksomhetPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
  </RawIntlProvider>
);

VirksomhetPapirsoknadIndex.initialValues = EgenVirksomhetPanel.initialValues;
VirksomhetPapirsoknadIndex.transformValues = EgenVirksomhetPanel.transformValues;
