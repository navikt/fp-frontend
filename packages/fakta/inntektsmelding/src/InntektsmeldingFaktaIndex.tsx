import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, FagsakBehandlingDto, Inntektsmelding } from '@navikt/fp-types';

import { InntektsmeldingPanel } from './components/InntektsmeldingPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export type InntektsmeldingFaktaProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  alleBehandlinger: FagsakBehandlingDto[];
};

export const InntektsmeldingFaktaIndex = (
  props: { inntektsmeldinger: Inntektsmelding[] } & InntektsmeldingFaktaProps,
) => (
  <RawIntlProvider value={intl}>
    <InntektsmeldingPanel {...props} />
  </RawIntlProvider>
);
