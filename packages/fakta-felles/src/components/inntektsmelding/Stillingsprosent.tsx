import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
export const Stillingsprosent = ({ stillingsprosent }: { stillingsprosent: number | undefined }) => {
  return (
    <RawIntlProvider value={intl}>
      <InfoBlokk tittel={<FormattedMessage id="Inntektsmelding.Stillingsprosent.heading" />}>
        <BodyShort>{stillingsprosent ? `${stillingsprosent}%` : '-'}</BodyShort>
      </InfoBlokk>
    </RawIntlProvider>
  );
};
