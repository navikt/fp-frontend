import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Datepicker } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';

interface OwnProps {
  readOnly: boolean;
}

/**
 * MottattDatoPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
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
    <Datepicker
      name="mottattDato"
      validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
      isReadOnly={readOnly}
    />
  </BorderBox>
);

export default MottattDatoPanel;
