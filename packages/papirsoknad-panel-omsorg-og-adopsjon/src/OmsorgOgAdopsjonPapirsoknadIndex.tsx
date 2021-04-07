import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';

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
  validate?: (values: FormValues, otherFodselsdato: string, familieHendelseType: string) => any;
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

OmsorgOgAdopsjonPapirsoknadIndex.validate = (values: FormValues, otherFodselsdato: string, familieHendelseType: string) => OmsorgOgAdopsjonPanel
  .validate(values, otherFodselsdato, familieHendelseType);

export default OmsorgOgAdopsjonPapirsoknadIndex;
