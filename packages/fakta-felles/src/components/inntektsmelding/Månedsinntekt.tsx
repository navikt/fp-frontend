import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { createIntl } from '@navikt/ft-utils';

import { Inntektsmelding } from '@navikt/fp-types';

import { InfoBlokk } from './InfoBlokk';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);
export const Månedsinntekt = ({ inntektsmelding }: { inntektsmelding: Inntektsmelding }) => {
  return (
    <RawIntlProvider value={intl}>
      <InfoBlokk tittel={intl.formatMessage({ id: 'Inntektsmelding.Månedsinntekt.heading' })}>
        <span>{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</span>
        {/*TODO: Få inn endringsgrunn når dette er med i data-modellen*/}
      </InfoBlokk>
    </RawIntlProvider>
  );
};
