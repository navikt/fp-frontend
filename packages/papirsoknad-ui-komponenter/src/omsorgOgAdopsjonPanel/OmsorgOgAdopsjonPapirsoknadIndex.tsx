import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { OmsorgOgAdopsjonPanel } from './components/OmsorgOgAdopsjonPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  familieHendelseType: string;
  isForeldrepengerFagsak: boolean;
  fodselsdato?: string | string[];
}

export const OmsorgOgAdopsjonPapirsoknadIndex = ({
  readOnly,
  familieHendelseType,
  isForeldrepengerFagsak,
  fodselsdato,
}: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      readOnly={readOnly}
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      fodselsdatoer={fodselsdato}
    />
  </RawIntlProvider>
);

OmsorgOgAdopsjonPapirsoknadIndex.initialValues = OmsorgOgAdopsjonPanel.initialValues;
OmsorgOgAdopsjonPapirsoknadIndex.transformValues = OmsorgOgAdopsjonPanel.transformValues;
