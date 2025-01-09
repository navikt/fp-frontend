import React from 'react';
import { FormattedMessage, RawIntlProvider, useIntl } from 'react-intl';

import { createIntl, dateFormat } from '@navikt/ft-utils';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  arbeidsgiverNavn?: string;
  arbeidsgiverFødselsdato?: string;
  arbeidsgiverIdent?: string;
}

export const Arbeidsgiver = ({ arbeidsgiverFødselsdato, arbeidsgiverNavn, arbeidsgiverIdent }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <InfoBlokk tittel={intl.formatMessage({ id: 'Inntektsmelding.Arbeidsgiver.heading' })}>
        <span>
          <FormattedMessage id="Inntektsmelding.Arbeidsgiver.navn" />: {arbeidsgiverNavn ?? '-'}
        </span>
        {!arbeidsgiverFødselsdato && (
          <span>
            <FormattedMessage id="Inntektsmelding.Arbeidsgiver.underenhet" />: {arbeidsgiverIdent}
          </span>
        )}
        {arbeidsgiverFødselsdato && (
          <span>
            <FormattedMessage id="Inntektsmelding.Arbeidsgiver.fodselsdato" />: {dateFormat(arbeidsgiverFødselsdato)}
          </span>
        )}
      </InfoBlokk>
    </RawIntlProvider>
  );
};
