import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Inntektsmelding } from '@navikt/fp-types';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
export const KontaktPerson = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  return (
    <RawIntlProvider value={intl}>
      <InfoBlokk tittel={intl.formatMessage({ id: 'Inntektsmelding.Kontaktperson.heading' })}>
        <span>
          <FormattedMessage id="Inntektsmelding.Kontaktperson.navn" />: {inntektsmelding.kontaktpersonNavn}
        </span>
        <span>
          <FormattedMessage id="Inntektsmelding.Kontaktperson.telefon" />: {inntektsmelding.kontaktpersonNummer}
        </span>
      </InfoBlokk>
    </RawIntlProvider>
  );
};
