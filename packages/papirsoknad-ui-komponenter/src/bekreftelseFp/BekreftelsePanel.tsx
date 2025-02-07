import { Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { TrueFalseInput } from '../felles/TrueFalseInput';

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
      <TrueFalseInput
        label={intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}
        name="annenForelderInformert"
        isRequired={annenForelderInformertRequired}
        readOnly={readOnly}
      />
    </VStack>
  </BorderBox>
);

BekreftelsePanel.initialValues = (): BekreftelseFormValues => ({
  annenForelderInformert: undefined,
});
BekreftelsePanel.tranformValues = ({ annenForelderInformert }: BekreftelseFormValues) => ({
  annenForelderInformert,
});
