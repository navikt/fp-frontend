import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, ForeldreType } from '@navikt/fp-types';

import { PermisjonPanel } from './components/PermisjonPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  foreldreType: ForeldreType;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

export const PermisjonIndex = ({ foreldreType, alleKodeverk, erEndringssøknad }: Props) => (
  <RawIntlProvider value={intl}>
    <PermisjonPanel foreldreType={foreldreType} alleKodeverk={alleKodeverk} erEndringssøknad={erEndringssøknad} />
  </RawIntlProvider>
);

PermisjonIndex.transformValues = PermisjonPanel.transformValues;

PermisjonIndex.initialValues = PermisjonPanel.initialValues;
