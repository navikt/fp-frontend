import { type IntlShape, useIntl } from 'react-intl';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const KildeSystem = ({ kildeSystem }: { kildeSystem: string }) => {
  const intl = useIntl();

  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.heading' })}>
      {getKilde(kildeSystem, intl)}
    </InntektsmeldingInfoBlokk>
  );
};

const getKilde = (kildeSystem: string, intl: IntlShape) => {
  switch (kildeSystem.toUpperCase()) {
    case '':
      return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.ukjent' });
    case 'NAV_NO':
      return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.nav' });
    case 'ALTINN':
      return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.altinn' });
    default:
      return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.lps' });
  }
};
