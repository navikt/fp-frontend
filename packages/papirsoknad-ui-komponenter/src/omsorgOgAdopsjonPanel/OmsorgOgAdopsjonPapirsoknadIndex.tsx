import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import OmsorgOgAdopsjonPanel, { FormValues, TransformedFormValues } from './components/OmsorgOgAdopsjonPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  familieHendelseType: string;
  isForeldrepengerFagsak: boolean;
  fodselsdato?: string;
}

interface StaticFunctions {
  transformValues: (formValues: FormValues) => TransformedFormValues;
}

const OmsorgOgAdopsjonPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  familieHendelseType,
  isForeldrepengerFagsak,
  fodselsdato,
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      readOnly={readOnly}
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      fodselsdato={fodselsdato}
    />
  </RawIntlProvider>
);

OmsorgOgAdopsjonPapirsoknadIndex.transformValues = OmsorgOgAdopsjonPanel.transformValues;

export default OmsorgOgAdopsjonPapirsoknadIndex;
