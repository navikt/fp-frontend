import React, { FunctionComponent, ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk } from '@fpsak-frontend/types';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { createIntl } from '@navikt/ft-utils';

import AnnenForelderPanel, { FormValues } from './components/AnnenForelderPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  form: string;
  soknadData: SoknadData;
  namePrefix: string;
  alleKodeverk: AlleKodeverk;
  permisjonRettigheterPanel?: ReactNode;
}

interface StaticFunctions {
  validate: (sokerPersonnummer: string, values?: FormValues) => any,
}

const AnnenForelderPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  soknadData,
  namePrefix,
  alleKodeverk,
  permisjonRettigheterPanel,
}) => (
  <RawIntlProvider value={intl}>
    { /* @ts-ignore Fiks cannot be used as a JSX component */ }
    <AnnenForelderPanel
      readOnly={readOnly}
      form={form}
      soknadData={soknadData}
      namePrefix={namePrefix}
      alleKodeverk={alleKodeverk}
      permisjonRettigheterPanel={permisjonRettigheterPanel}
    />
  </RawIntlProvider>
);

AnnenForelderPapirsoknadIndex.validate = (sokerPersonnummer, values) => AnnenForelderPanel.validate
  && AnnenForelderPanel.validate(sokerPersonnummer, values);

export default AnnenForelderPapirsoknadIndex;
