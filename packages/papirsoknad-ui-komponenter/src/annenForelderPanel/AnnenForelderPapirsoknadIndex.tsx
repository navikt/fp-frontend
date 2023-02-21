import React, { FunctionComponent, ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk } from '@navikt/fp-types';

import AnnenForelderPanel from './components/AnnenForelderPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  permisjonRettigheterPanel?: ReactNode;
  fagsakPersonnummer: string;
}

const AnnenForelderPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  alleKodeverk,
  permisjonRettigheterPanel,
  fagsakPersonnummer,
}) => (
  <RawIntlProvider value={intl}>
    <AnnenForelderPanel
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      permisjonRettigheterPanel={permisjonRettigheterPanel}
      fagsakPersonnummer={fagsakPersonnummer}
    />
  </RawIntlProvider>
);

export default AnnenForelderPapirsoknadIndex;
