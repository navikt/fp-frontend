import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { BorderBox } from '@navikt/ft-ui-komponenter';
import { DatepickerField } from '@fpsak-frontend/form';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  required,
} from '@navikt/ft-utils';

interface OwnProps {
  readOnly: boolean;
}

/*
 * TerminFodselSvpPanel
 *
 * Form som brukes for registrere termin og fødsel i papirsøknad.
 */
const TerminFodselSvpPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  readOnly,
  intl,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={intl.formatMessage({ id: 'TerminFodselSvpPanel.TerminOgFodsel' })}>
      <Row>
        <Column xs="2">
          <DatepickerField
            name="termindato"
            label={{ id: 'TerminFodselSvpPanel.Termindato' }}
            readOnly={readOnly}
            validate={[required, hasValidDate]}
          />
        </Column>
        <Column xs="3">
          <DatepickerField
            name="foedselsDato"
            label={{ id: 'TerminFodselSvpPanel.Fodselsdato' }}
            readOnly={readOnly}
            validate={[hasValidDate, dateBeforeOrEqualToToday]}
          />
        </Column>
      </Row>
    </SkjemaGruppe>
  </BorderBox>
);

export default injectIntl(TerminFodselSvpPanel);
