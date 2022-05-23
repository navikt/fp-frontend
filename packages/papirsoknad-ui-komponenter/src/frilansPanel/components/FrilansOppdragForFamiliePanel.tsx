import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption, formHooks } from '@navikt/ft-form-hooks';

import FrilansOppdragForFamilieFieldArray, {
  FRILANS_NAME_PREFIX, defaultFrilansPeriode, FormValues as FieldArrayFormValues,
} from './FrilansOppdragForFamilieFieldArray';

export type FormValues = {
  harHattOppdragForFamilie?: boolean;
} & FieldArrayFormValues;

interface StaticFunctions {
  buildInitialValues?: () => FormValues;
}

interface OwnProps {
  readOnly: boolean;
}

const FrilansOppdragForFamiliePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => {
  const { watch } = formHooks.useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues}>();
  const harHattOppdragForFamilie = watch(`${FRILANS_NAME_PREFIX}.harHattOppdragForFamilie`);

  return (
    <>
      <RadioGroupField
        name={`${FRILANS_NAME_PREFIX}.harHattOppdragForFamilie`}
        readOnly={readOnly}
        label={<Undertekst><FormattedMessage id="Registrering.FrilansOppdrag.HarHattOppdragForFamilie" /></Undertekst>}
      >
        <RadioOption label={<FormattedMessage id="Registrering.FrilansOppdrag.Yes" />} value="true" />
        <RadioOption label={<FormattedMessage id="Registrering.FrilansOppdrag.No" />} value="false" />
      </RadioGroupField>
      {harHattOppdragForFamilie && (
        <ArrowBox>
          <Normaltekst><FormattedMessage id="Registrering.FrilansOppdrag.OppgiPeriode" /></Normaltekst>
          <VerticalSpacer fourPx />
          <FrilansOppdragForFamilieFieldArray readOnly={readOnly} />
        </ArrowBox>
      )}
    </>
  );
};

FrilansOppdragForFamiliePanel.buildInitialValues = (): FormValues => ({
  oppdragPerioder: [defaultFrilansPeriode],
});

export default FrilansOppdragForFamiliePanel;
