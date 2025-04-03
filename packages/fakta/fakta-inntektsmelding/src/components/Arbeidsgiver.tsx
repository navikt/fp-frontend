import { FormattedMessage, useIntl } from 'react-intl';

import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const Arbeidsgiver = ({
  arbeidsgiverOpplysninger,
  arbeidsgiverIdent,
}: {
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysninger;
  arbeidsgiverIdent: string;
}) => {
  const intl = useIntl();
  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.arbeidsgiver.heading' })}>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.navn" />: {arbeidsgiverOpplysninger.navn}
      </span>
      <span>
        <FormattedMessage id="InntektsmeldingFaktaPanel.arbeidsgiver.underenhet" />: {arbeidsgiverIdent}
      </span>
    </InntektsmeldingInfoBlokk>
  );
};
