import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { createIntl } from '@navikt/ft-utils';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { Datepicker } from '@navikt/ft-form-hooks';
import {
  dateBeforeOrEqualToToday,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type FormValues = {
  termindato?: string;
  foedselsDato?: string;
}

interface OwnProps {
  readOnly: boolean;
}

/*
 * TerminFodselSvpPanel
 *
 * Form som brukes for registrere termin og fødsel i papirsøknad.
 */
const TerminFodselSvpPanel: FunctionComponent<OwnProps> = ({
  readOnly,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={intl.formatMessage({ id: 'TerminFodselSvpPanel.TerminOgFodsel' })}>
      <Row>
        <Column xs="3">
          <Datepicker
            name="termindato"
            label={intl.formatMessage({ id: 'TerminFodselSvpPanel.Termindato' })}
            isReadOnly={readOnly}
            validate={[required, hasValidDate]}
          />
        </Column>
        <Column xs="3">
          <Datepicker
            name="foedselsDato"
            label={intl.formatMessage({ id: 'TerminFodselSvpPanel.Fodselsdato' })}
            isReadOnly={readOnly}
            validate={[hasValidDate, dateBeforeOrEqualToToday]}
          />
        </Column>
      </Row>
    </SkjemaGruppe>
  </BorderBox>
);

export default TerminFodselSvpPanel;
