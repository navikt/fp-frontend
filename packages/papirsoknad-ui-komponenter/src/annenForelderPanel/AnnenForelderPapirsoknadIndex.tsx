import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk } from '@navikt/fp-types';

import { OppgiAnnenForelderPanel } from './components/OppgiAnnenForelderPanel';
import { PermisjonRettigheterPanel } from './components/PermisjonRettigheterPanel';
import { ANNEN_FORELDER_NAME_PREFIX } from './constant';
import type { AnnenForelderFormValues } from './types';

import messages from '../../i18n/nb_NO.json';

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
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="Registrering.TheOtherParent.Title" />
        </Heading>
        <OppgiAnnenForelderPanel
          readOnly={readOnly}
          fagsakPersonnummer={fagsakPersonnummer}
          alleKodeverk={alleKodeverk}
        />
        <PermisjonRettigheterPanel readOnly={readOnly} sokerErMor={sokerErMor} />
      </VStack>
    </BorderBox>
  </RawIntlProvider>
);

AnnenForelderPapirsoknadIndex.initialValues = (): AnnenForelderFormValues => ({
  [ANNEN_FORELDER_NAME_PREFIX]: {},
});

AnnenForelderPapirsoknadIndex.transformValues = ({
  annenForelder,
}: AnnenForelderFormValues): AnnenForelderFormValues => ({
  [ANNEN_FORELDER_NAME_PREFIX]: {
    ...PermisjonRettigheterPanel.transformValues(annenForelder),
    ...OppgiAnnenForelderPanel.transformValues(annenForelder),
  },
});
