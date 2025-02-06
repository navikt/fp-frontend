import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import { OmsorgInfoPanel } from './components/OmsorgInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
  submittable: boolean;
}

export const OmsorgFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgInfoPanel {...props} />
  </RawIntlProvider>
);
