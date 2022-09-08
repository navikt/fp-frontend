import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

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
      <RadioGroupPanel
        name={`${FRILANS_NAME_PREFIX}.harHattOppdragForFamilie`}
        label={<FormattedMessage id="Registrering.FrilansOppdrag.HarHattOppdragForFamilie" />}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[{
          label: <FormattedMessage id="Registrering.FrilansOppdrag.Yes" />,
          value: 'true',
        }, {
          label: <FormattedMessage id="Registrering.FrilansOppdrag.No" />,
          value: 'false',
        }]}
      />
      {harHattOppdragForFamilie && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <Normaltekst><FormattedMessage id="Registrering.FrilansOppdrag.OppgiPeriode" /></Normaltekst>
            <VerticalSpacer fourPx />
            <FrilansOppdragForFamilieFieldArray readOnly={readOnly} />
          </ArrowBox>
        </>
      )}
    </>
  );
};

FrilansOppdragForFamiliePanel.buildInitialValues = (): FormValues => ({
  oppdragPerioder: [defaultFrilansPeriode],
  perioder: undefined,
});

export default FrilansOppdragForFamiliePanel;
