import React, { useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const KildeSystem = ({ kildeSystem }: { kildeSystem: string }) => {
  const kilde = useMemo(() => {
    switch (kildeSystem.toUpperCase()) {
      case 'NAV_NO':
        return intl.formatMessage({ id: 'Inntektsmelding.KildeSystem.nav' });
      case 'ALTINN':
        return intl.formatMessage({ id: 'Inntektsmelding.KildeSystem.altinn' });
      default:
        return intl.formatMessage({ id: 'Inntektsmelding.KildeSystem.lps' });
    }
  }, [intl, kildeSystem]);

  return (
    <RawIntlProvider value={intl}>
      <InfoBlokk tittel={intl.formatMessage({ id: 'Inntektsmelding.KildeSystem.heading' })}>{kilde}</InfoBlokk>
    </RawIntlProvider>
  );
};
