import React, { FunctionComponent } from 'react';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
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
    <Undertittel>
      {intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}
    </Undertittel>
    <VerticalSpacer sixteenPx />
    <Undertekst>{intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}</Undertekst>
    <VerticalSpacer eightPx />
    <RadioGroupPanel
      name="annenForelderInformert"
      validate={annenForelderInformertRequired ? [required] : []}
      isReadOnly={readOnly}
      isHorizontal
      isTrueOrFalseSelection
      radios={[{
        label: intl.formatMessage({ id: 'Registrering.TheOtherParent.Yes' }),
        value: 'true',
      }, {
        label: intl.formatMessage({ id: 'Registrering.TheOtherParent.No' }),
        value: 'false',
      }]}
    />
  </BorderBox>
);

export default BekreftelsePanel;
