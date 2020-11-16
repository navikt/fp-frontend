import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { formValueSelector, FieldArray } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { RadioGroupField, RadioOption, DatepickerField } from '@fpsak-frontend/form';
import { BorderBox, ArrowBox } from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';

import BehovForTilrettteleggingFieldArray from './BehovForTilrettteleggingFieldArray';
import TilretteleggingForArbeidsgiverFieldArray from './TilretteleggingForArbeidsgiverFieldArray';

const selvstendigNaringsdrivendeFieldArrayName = 'tilretteleggingSelvstendigNaringsdrivende';
const frilansFieldArrayName = 'tilretteleggingFrilans';
const tilretteleggingForArbeidsgiverFieldArrayName = 'tilretteleggingForArbeidsgiver';

interface OwnProps {
  readOnly: boolean;
  sokForSelvstendigNaringsdrivende?: boolean;
  sokForFrilans?: boolean;
  sokForArbeidsgiver?: boolean;
  formName: string;
  namePrefix: string;
}

interface StaticFunctions {
  buildInitialValues?: () => {
    [tilretteleggingForArbeidsgiverFieldArrayName]: {
      organisasjonsnummer?: string;
      behovsdato?: string;
    }[];
  },
}

/*
 * BehovForTilretteleggingPanel
 *
 * Form som brukes for registrere om det er behov for tilrettelegging.
 */
export const BehovForTilretteleggingPanelImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  sokForSelvstendigNaringsdrivende,
  sokForFrilans,
  sokForArbeidsgiver,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={<FormattedMessage id="BehovForTilretteleggingPanel.BehovForTilrettelegging" />}>
      <RadioGroupField
        name="sokForSelvstendigNaringsdrivende"
        label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende" />}
        validate={[required]}
        readOnly={readOnly}
      >
        <RadioOption value label={{ id: 'BehovForTilretteleggingPanel.Ja' }} />
        <RadioOption value={false} label={{ id: 'BehovForTilretteleggingPanel.Nei' }} />
      </RadioGroupField>
      {sokForSelvstendigNaringsdrivende && (
        <ArrowBox>
          <DatepickerField
            name="behovsdatoSN"
            label={{ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' }}
            validate={[required]}
            readOnly={readOnly}
          />
          <FieldArray
            name={selvstendigNaringsdrivendeFieldArrayName}
            component={BehovForTilrettteleggingFieldArray}
            readOnly={readOnly}
          />
        </ArrowBox>
      )}
      <RadioGroupField
        name="sokForFrilans"
        label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForFrilans" />}
        validate={[required]}
        readOnly={readOnly}
      >
        <RadioOption value label={{ id: 'BehovForTilretteleggingPanel.Ja' }} />
        <RadioOption value={false} label={{ id: 'BehovForTilretteleggingPanel.Nei' }} />
      </RadioGroupField>
      {sokForFrilans && (
        <ArrowBox>
          <DatepickerField
            name="behovsdatoFrilans"
            label={{ id: 'BehovForTilretteleggingPanel.TilretteleggingFra' }}
            validate={[required]}
            readOnly={readOnly}
          />
          <FieldArray
            name={frilansFieldArrayName}
            component={BehovForTilrettteleggingFieldArray}
            readOnly={readOnly}
          />
        </ArrowBox>
      )}
      <RadioGroupField
        name="sokForArbeidsgiver"
        label={<FormattedMessage id="BehovForTilretteleggingPanel.SokForArbeidsgiver" />}
        validate={[required]}
        readOnly={readOnly}
      >
        <RadioOption value label={{ id: 'BehovForTilretteleggingPanel.Ja' }} />
        <RadioOption value={false} label={{ id: 'BehovForTilretteleggingPanel.Nei' }} />
      </RadioGroupField>
      {sokForArbeidsgiver && (
        <ArrowBox>
          <FieldArray
            name={tilretteleggingForArbeidsgiverFieldArrayName}
            component={TilretteleggingForArbeidsgiverFieldArray}
            readOnly={readOnly}
          />
        </ArrowBox>
      )}
    </SkjemaGruppe>
  </BorderBox>
);

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  ...formValueSelector(ownProps.formName)(state, ownProps.namePrefix),
});

const BehovForTilretteleggingPanel = connect(mapStateToProps)(BehovForTilretteleggingPanelImpl);

BehovForTilretteleggingPanel.buildInitialValues = () => ({
  [tilretteleggingForArbeidsgiverFieldArrayName]: [{}],
});

export default BehovForTilretteleggingPanel;
