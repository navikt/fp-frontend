import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { Datepicker } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';

export type FormValues = {
  mottattDato?: string;
};

interface OwnProps {
  readOnly: boolean;
}

/**
 * MottattDatoPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const MottattDatoPanel: FunctionComponent<OwnProps> = ({ readOnly }) => (
  <BorderBox>
    <Heading size="small">
      <FormattedMessage key="regDatoTittel" id="Registrering.Omsoknaden.MottattDato" />
    </Heading>
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
