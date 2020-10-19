import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import OmsorgOgAdopsjonPanel, { FormValues } from './components/OmsorgOgAdopsjonPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  namePrefix: string;
  familieHendelseType: string;
  isForeldrepengerFagsak: boolean;
}

interface StaticFunctions {
  validate?: (values: FormValues, rettigheter: string, otherFodselsdato: string) => any;
}

const OmsorgOgAdopsjonPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  namePrefix,
  familieHendelseType,
  isForeldrepengerFagsak,
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      readOnly={readOnly}
      form={form}
      namePrefix={namePrefix}
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
    />
  </RawIntlProvider>
);

OmsorgOgAdopsjonPapirsoknadIndex.validate = (values: FormValues, rettigheter: string, otherFodselsdato: string) => OmsorgOgAdopsjonPanel
  .validate(values, rettigheter, otherFodselsdato);

export default OmsorgOgAdopsjonPapirsoknadIndex;
