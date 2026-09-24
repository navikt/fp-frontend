import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import type { Medlemskap } from '@navikt/fp-types';

import { MedlemskapInfoPanel } from './components/MedlemskapInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  medlemskap: Medlemskap;
}

export const MedlemskapFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FaktaPanelTittel />
    <MedlemskapInfoPanel {...props} />
  </RawIntlProvider>
);
