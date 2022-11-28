import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk } from '@fpsak-frontend/types';

import PermisjonPanel, { FormValues } from './components/PermisjonPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  transformValues: (values: FormValues) => any;
}

const PermisjonIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  foreldreType,
  readOnly,
  alleKodeverk,
  erEndringssøknad,
}) => (
  <RawIntlProvider value={intl}>
    <PermisjonPanel
      readOnly={readOnly}
      foreldreType={foreldreType}
      alleKodeverk={alleKodeverk}
      erEndringssøknad={erEndringssøknad}
    />
  </RawIntlProvider>
);

PermisjonIndex.transformValues = PermisjonPanel.transformValues;

PermisjonIndex.buildInitialValues = PermisjonPanel.buildInitialValues;

export default PermisjonIndex;
