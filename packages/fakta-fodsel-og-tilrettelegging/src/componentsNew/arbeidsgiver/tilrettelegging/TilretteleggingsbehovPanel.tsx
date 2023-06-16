import React, { FunctionComponent } from 'react';

import { ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';
import { Datepicker } from '@navikt/ft-form-hooks';
import { useIntl } from 'react-intl';
import { hasValidDate, required } from '@navikt/ft-form-validators';

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  stateName: string;
  readOnly: boolean;
}

const TilretteleggingsbehovPanel: FunctionComponent<OwnProps> = ({ tilrettelegging, stateName, readOnly }) => {
  const intl = useIntl();
  return (
    <Datepicker
      name={`${stateName}.fom`}
      label={intl.formatMessage({
        id: 'TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging',
      })}
      validate={[required, hasValidDate]}
      isReadOnly={readOnly}
    />
  );
};

export default TilretteleggingsbehovPanel;
