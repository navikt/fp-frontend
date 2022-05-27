import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { Datepicker } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';

export type FormValues = {
  mottattDato: string;
}

interface OwnProps {
  readOnly: boolean;
}

/**
 * MottattDatoPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const MottattDatoPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <BorderBox>
    <Undertittel><FormattedMessage key="regDatoTittel" id="Registrering.Omsoknaden.MottattDato" /></Undertittel>
    <VerticalSpacer sixteenPx />
    <Datepicker
      name="mottattDato"
      label={<FormattedMessage key="regDatoUnder" id="Registrering.Omsoknaden.MottattDato" />}
      validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
      isReadOnly={readOnly}
    />
  </BorderBox>
);

export default MottattDatoPanel;
