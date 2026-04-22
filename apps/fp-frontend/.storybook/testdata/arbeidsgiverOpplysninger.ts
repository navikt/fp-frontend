import { lagArbeidsgiver } from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysningerWrapper } from '@navikt/fp-types';

export const arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerWrapper = {
  arbeidsgivere: {
    '342352362': lagArbeidsgiver('342352362', 'Lagt til av saksbehandler'),
    '992260475': lagArbeidsgiver('992260475', 'NAV FAMILIE- OG PENSJONSYTELSER STORD'),
    '992257822': lagArbeidsgiver('992257822', 'NAV FAMILIE- OG PENSJONSYTELSER OSLO'),
  },
};
