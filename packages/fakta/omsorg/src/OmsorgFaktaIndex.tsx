import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import type { Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import { OmsorgInfoPanel } from './components/OmsorgInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt | undefined;
}

export const OmsorgFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FaktaPanelTittel />
    <OmsorgInfoPanel {...props} />
  </RawIntlProvider>
);
