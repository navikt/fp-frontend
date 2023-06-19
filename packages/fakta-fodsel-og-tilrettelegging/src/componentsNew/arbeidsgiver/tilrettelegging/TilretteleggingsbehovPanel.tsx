import React, { FunctionComponent } from 'react';

import { ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { useIntl } from 'react-intl';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  stateName: string;
  readOnly: boolean;
}

const TilretteleggingsbehovPanel: FunctionComponent<OwnProps> = ({ tilrettelegging, stateName, readOnly }) => {
  const intl = useIntl();
  return (
    <div
      style={{
        backgroundColor: 'white',
        marginLeft: '-48px',
        marginTop: '-8px',
        marginBottom: '-8px',
        marginRight: '-48px',
        padding: '30px',
      }}
    >
      <Datepicker
        name={`${stateName}.fom`}
        label={intl.formatMessage({
          id: 'TilretteleggingForArbeidsgiverPanel.DatoForTilrettelegging',
        })}
        validate={[required, hasValidDate]}
        isReadOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name={`${stateName}.type`}
        label={intl.formatMessage({ id: 'TilretteleggingFieldArray.Tilretteleggingsbehov' })}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        radios={[
          {
            label: intl.formatMessage({ id: 'TilretteleggingFieldArray.KanGjennomfores' }),
            value: tilretteleggingType.HEL_TILRETTELEGGING,
          },
          {
            label: intl.formatMessage({ id: 'TilretteleggingFieldArray.RedusertArbeid' }),
            value: tilretteleggingType.DELVIS_TILRETTELEGGING,
          },
          {
            label: intl.formatMessage({ id: 'TilretteleggingFieldArray.KanIkkeGjennomfores' }),
            value: tilretteleggingType.INGEN_TILRETTELEGGING,
          },
        ]}
      />
    </div>
  );
};

export default TilretteleggingsbehovPanel;
