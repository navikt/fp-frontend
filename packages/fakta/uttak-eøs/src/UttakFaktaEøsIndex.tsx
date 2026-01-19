import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import { UttakEøsFaktaForm } from './components/UttakEøsFaktaForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[];
  kanOverstyre: boolean;
}

export const UttakFaktaEøsIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <UttakEøsFaktaForm {...props} />
  </RawIntlProvider>
);
