import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FieldArray, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import FrilansOppdragForFamilieFieldArray, { defaultFrilansPeriode, FormValues as FieldArrayFormValues } from './FrilansOppdragForFamilieFieldArray';

interface PureOwnProps {
  readOnly: boolean;
  formName: string;
  namePrefix: string;
}

interface MappedOwnProps {
  harHattOppdragForFamilie?: boolean;
}

export type FieldValues = FieldArrayFormValues;

interface StaticFunctions {
  buildInitialValues?: () => FieldValues;
  validate?: (values: FieldValues) => {
    oppdragPerioder: {
      tomDato?: any;
      fomDato?: any;
    }[] | null;
  };
}

/**
 * FrilansOppdragForFamiliePanel
 *
 * Presentasjonskomponent.
 */
export const FrilansOppdragForFamiliePanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  harHattOppdragForFamilie,
}) => (
  <>
    <RadioGroupField
      name="harHattOppdragForFamilie"
      readOnly={readOnly}
      label={<FormattedMessage id="Registrering.FrilansOppdrag.HarHattOppdragForFamilie" />}
    >
      <RadioOption label={<FormattedMessage id="Registrering.FrilansOppdrag.Yes" />} value />
      <RadioOption label={<FormattedMessage id="Registrering.FrilansOppdrag.No" />} value={false} />
    </RadioGroupField>
    {harHattOppdragForFamilie
      && (
      <ArrowBox>
        <Normaltekst><FormattedMessage id="Registrering.FrilansOppdrag.OppgiPeriode" /></Normaltekst>
        <VerticalSpacer fourPx />
        <FieldArray name="oppdragPerioder" component={FrilansOppdragForFamilieFieldArray} readOnly={readOnly} />
      </ArrowBox>
      )}
  </>
);

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  harHattOppdragForFamilie: formValueSelector(ownProps.formName)(state, ownProps.namePrefix).harHattOppdragForFamilie,
});

const FrilansOppdragForFamiliePanel = connect(mapStateToProps)(FrilansOppdragForFamiliePanelImpl);

FrilansOppdragForFamiliePanel.buildInitialValues = (): FieldValues => ({
  oppdragPerioder: [defaultFrilansPeriode],
});

FrilansOppdragForFamiliePanel.validate = (values: FieldValues): any => ({
  oppdragPerioder: FrilansOppdragForFamilieFieldArray.validate(values),
});

export default FrilansOppdragForFamiliePanel;
