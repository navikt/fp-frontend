import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import { SoknadData } from '@fpsak-frontend/papirsoknad-ui-komponenter';

import SvangerskapspengerForm from './components/SvangerskapspengerForm';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

const SvangerskapspengerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <SvangerskapspengerForm
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      onSubmit={onSubmit}
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default SvangerskapspengerPapirsoknadIndex;
