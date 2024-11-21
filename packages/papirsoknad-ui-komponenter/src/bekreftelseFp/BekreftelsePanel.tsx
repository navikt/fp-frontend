import React from 'react';
import { Heading, VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  annenForelderInformertRequired?: boolean;
}

export type BekreftelseFormValues = {
  annenForelderInformert?: boolean;
};

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const BekreftelsePanel = ({ readOnly, annenForelderInformertRequired = false }: Props) => (
  <BorderBox>
    <VStack gap="4">
      <Heading size="small">{intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}</Heading>
      <RadioGroupPanel
        label={intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}
        name="annenForelderInformert"
        validate={annenForelderInformertRequired ? [required] : []}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[
          {
            label: intl.formatMessage({ id: 'Registrering.Yes' }),
            value: 'true',
          },
          {
            label: intl.formatMessage({ id: 'Registrering.No' }),
            value: 'false',
          },
        ]}
      />
    </VStack>
  </BorderBox>
);

BekreftelsePanel.tranformValues = ({ annenForelderInformert }: BekreftelseFormValues) => ({
  annenForelderInformert,
});
