import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk } from '@navikt/fp-types';

import { AnnenForelderPanel } from './components/AnnenForelderPanel';

import messages from '../../i18n/nb_NO.json';
import { PermisjonRettigheterPanel } from './components/PermisjonRettigheterPanel';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { Heading, VStack } from '@navikt/ds-react';
import { AnnenForelderFormValues } from './types';
import { ANNEN_FORELDER_NAME_PREFIX } from './constant';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  sokerErMor: boolean;
}

export const AnnenForelderPapirsoknadIndex = ({ readOnly, alleKodeverk, fagsakPersonnummer, sokerErMor }: Props) => (
  <RawIntlProvider value={intl}>
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.TheOtherParent.Title" />
        </Heading>
        <AnnenForelderPanel readOnly={readOnly} fagsakPersonnummer={fagsakPersonnummer} alleKodeverk={alleKodeverk} />
        <PermisjonRettigheterPanel readOnly={readOnly} sokerErMor={sokerErMor} />
      </VStack>
    </BorderBox>
  </RawIntlProvider>
);

AnnenForelderPapirsoknadIndex.PREFIX = ANNEN_FORELDER_NAME_PREFIX;

AnnenForelderPapirsoknadIndex.initialValues = (): AnnenForelderFormValues => ({
  [ANNEN_FORELDER_NAME_PREFIX]: {},
});

AnnenForelderPapirsoknadIndex.transformValues = ({
  annenForelder,
}: AnnenForelderFormValues): AnnenForelderFormValues => ({
  [ANNEN_FORELDER_NAME_PREFIX]: {
    ...PermisjonRettigheterPanel.transformValues(annenForelder),
    ...AnnenForelderPanel.transformValues(annenForelder),
  },
});
