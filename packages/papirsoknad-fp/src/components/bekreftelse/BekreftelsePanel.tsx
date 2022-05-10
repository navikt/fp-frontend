import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@navikt/ft-form-validators';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

interface OwnProps {
  readOnly: boolean;
  annenForelderInformertRequired?: boolean;
}

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const BekreftelsePanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  annenForelderInformertRequired,
}) => (
  <BorderBox>
    <VerticalSpacer twentyPx />
    <Undertittel>{intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}</Undertittel>
    <VerticalSpacer eightPx />
    <Undertekst>{intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}</Undertekst>
    <VerticalSpacer eightPx />
    <RadioGroupField name="annenForelderInformert" readOnly={readOnly} validate={annenForelderInformertRequired ? [required] : []}>
      <RadioOption label={{ id: 'Registrering.TheOtherParent.Yes' }} value />
      <RadioOption label={{ id: 'Registrering.TheOtherParent.No' }} value={false} />
    </RadioGroupField>
  </BorderBox>
);

BekreftelsePanel.defaultProps = {
  annenForelderInformertRequired: false,
};

export default injectIntl(BekreftelsePanel);
