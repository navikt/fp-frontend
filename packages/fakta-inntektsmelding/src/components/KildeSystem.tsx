import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';

export const KildeSystem = ({ kildeSystem }: { kildeSystem: string }) => {
  const intl = useIntl();
  const kilde = useMemo(() => {
    switch (kildeSystem.toUpperCase()) {
      case 'NAV_NO':
        return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.nav' });
      case 'ALTINN':
        return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.altinn' });
      default:
        return intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.lps' });
    }
  }, [intl, kildeSystem]);

  return (
    <InntektsmeldingInfoBlokk tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.kilde.heading' })}>
      {kilde}
    </InntektsmeldingInfoBlokk>
  );
};
