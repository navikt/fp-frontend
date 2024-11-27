import React from 'react';

import { Detail, Heading } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  annenForelderInformertRequired?: boolean;
}

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const BekreftelsePanel = ({ readOnly, annenForelderInformertRequired = false }: Props) => (
  <BorderBox>
    <Heading size="small">{intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}</Heading>
    <VerticalSpacer sixteenPx />
    <Detail>{intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}</Detail>
    <VerticalSpacer eightPx />
    <RadioGroupPanel
      name="annenForelderInformert"
      validate={annenForelderInformertRequired ? [required] : []}
      isReadOnly={readOnly}
      isHorizontal
      isTrueOrFalseSelection
      radios={[
        {
          label: intl.formatMessage({ id: 'Registrering.TheOtherParent.Yes' }),
          value: 'true',
        },
        {
          label: intl.formatMessage({ id: 'Registrering.TheOtherParent.No' }),
          value: 'false',
        },
      ]}
    />
  </BorderBox>
);
