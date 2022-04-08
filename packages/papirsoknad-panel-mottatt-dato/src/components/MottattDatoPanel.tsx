import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DatepickerField } from '@fpsak-frontend/form';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@fpsak-frontend/utils';

interface OwnProps {
  readOnly: boolean;
}

/**
 * MottattDatoPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
const MottattDatoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <BorderBox>
    <Undertittel><FormattedMessage key="regDatoTittel" id="Registrering.Omsoknaden.MottattDato" /></Undertittel>
    <VerticalSpacer sixteenPx />
    <Undertekst>
      <FormattedMessage key="regDatoUnder" id="Registrering.Omsoknaden.MottattDato" />
    </Undertekst>
    <DatepickerField
      name="mottattDato"
      validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
      readOnly={readOnly}
    />
  </BorderBox>
);

export default MottattDatoPanel;
