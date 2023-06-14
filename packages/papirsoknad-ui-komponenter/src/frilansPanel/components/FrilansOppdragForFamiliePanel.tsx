import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { useFormContext } from 'react-hook-form';
import FrilansOppdragForFamilieFieldArray, {
  FRILANS_NAME_PREFIX,
  defaultFrilansPeriode,
  FormValues as FieldArrayFormValues,
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

const FrilansOppdragForFamiliePanel: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const { watch } = useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues }>();
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
        radios={[
          {
            label: <FormattedMessage id="Registrering.FrilansOppdrag.Yes" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="Registrering.FrilansOppdrag.No" />,
            value: 'false',
          },
        ]}
      />
      {harHattOppdragForFamilie && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <Label size="small">
              <FormattedMessage id="Registrering.FrilansOppdrag.OppgiPeriode" />
            </Label>
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
