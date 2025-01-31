import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Medlemskap, Soknad } from '@navikt/fp-types';

import { MedlemskapInfoPanel } from './components/MedlemskapInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskap: Medlemskap;
  soknad: Soknad;
  submittable: boolean;
}

export const MedlemskapFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <MedlemskapInfoPanel {...props} />
  </RawIntlProvider>
);
