import React, { FunctionComponent } from 'react';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  annenForelderInformertRequired?: boolean;
}

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
const BekreftelsePanel: FunctionComponent<OwnProps> = ({
  readOnly,
  annenForelderInformertRequired = false,
}) => (
  <BorderBox>
    <VerticalSpacer twentyPx />
    <Undertittel>{intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}</Undertittel>
    <VerticalSpacer eightPx />
    <Undertekst>{intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}</Undertekst>
    <VerticalSpacer eightPx />
    <RadioGroupField
      name="annenForelderInformert"
      readOnly={readOnly}
      validate={annenForelderInformertRequired ? [required] : []}
      parse={(value: string) => value === 'true'}
    >
      <RadioOption label={intl.formatMessage({ id: 'Registrering.TheOtherParent.Yes' })} value="true" />
      <RadioOption label={intl.formatMessage({ id: 'Registrering.TheOtherParent.No' })} value="false" />
    </RadioGroupField>
  </BorderBox>
);

export default BekreftelsePanel;
