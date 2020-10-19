import React from 'react';
import { injectIntl } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';

type OwnProps = {
    intl: {};
    readOnly: boolean;
    annenForelderInformertRequired?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof BekreftelsePanel.defaultProps;

/**
 *
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'BekreftelsePanel' implicitly has type 'any' becau... Remove this comment to see the full error message
export const BekreftelsePanel = ({ intl, readOnly, annenForelderInformertRequired }: Props) => (
  <BorderBox>
    <VerticalSpacer twentyPx />
    <Undertittel>{intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}</Undertittel>
    <VerticalSpacer eightPx />
    <Undertekst>{intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}</Undertekst>
    <VerticalSpacer eightPx />
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '{ id: ... Remove this comment to see the full error message */}
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
