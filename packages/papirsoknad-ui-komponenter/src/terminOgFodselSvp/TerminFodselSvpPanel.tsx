import React, { FunctionComponent } from 'react';
import { createIntl } from '@navikt/ft-utils';
import { Heading } from '@navikt/ds-react';
import {
  BorderBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
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
    <Heading size="small">
      {intl.formatMessage({ id: 'TerminFodselSvpPanel.TerminOgFodsel' })}
    </Heading>
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Datepicker
            name="termindato"
            label={intl.formatMessage({ id: 'TerminFodselSvpPanel.Termindato' })}
            isReadOnly={readOnly}
            validate={[required, hasValidDate]}
          />
        </FlexColumn>
        <FlexColumn>
          <Datepicker
            name="foedselsDato"
            label={intl.formatMessage({ id: 'TerminFodselSvpPanel.Fodselsdato' })}
            isReadOnly={readOnly}
            validate={[hasValidDate, dateBeforeOrEqualToToday]}
          />
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </BorderBox>
);

export default TerminFodselSvpPanel;
