import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type {
  foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto,
  InntektArbeidYtelse,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { OmsorgOgForeldreansvarInfoPanel } from './components/OmsorgOgForeldreansvarInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  gjeldendeFamiliehendelse: foreldrepenger_familiehendelse_rest_AvklartDataOmsorgDto;
  soknad: Soknad;
  personoversikt: Personoversikt;
  inntektArbeidYtelse: InntektArbeidYtelse;
  submittable: boolean;
}

export const OmsorgOgForeldreansvarFaktaIndex = ({
  gjeldendeFamiliehendelse,
  soknad,
  personoversikt,
  inntektArbeidYtelse,
  submittable,
}: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgForeldreansvarInfoPanel
      gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
      soknad={soknad}
      personoversikt={personoversikt}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={
        inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder
      }
      submittable={submittable}
    />
  </RawIntlProvider>
);
