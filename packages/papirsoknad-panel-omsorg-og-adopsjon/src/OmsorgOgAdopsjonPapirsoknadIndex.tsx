import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import OmsorgOgAdopsjonPanel, { FormValues } from './components/OmsorgOgAdopsjonPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  form: string;
  namePrefix: string;
  familieHendelseType: string;
  isForeldrepengerFagsak: boolean;
}

interface StaticFunctions {
  validate: (familieHendelseType: string, otherFodselsdato?: string, values?: FormValues) => any;
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

OmsorgOgAdopsjonPapirsoknadIndex.validate = (familieHendelseType, otherFodselsdato, values) => OmsorgOgAdopsjonPanel
  .validate(values, otherFodselsdato, familieHendelseType);

export default OmsorgOgAdopsjonPapirsoknadIndex;
