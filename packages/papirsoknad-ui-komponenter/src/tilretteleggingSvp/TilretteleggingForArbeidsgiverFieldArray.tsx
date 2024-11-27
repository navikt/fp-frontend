import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button } from '@navikt/ds-react';
import { Datepicker, InputField } from '@navikt/ft-form-hooks';
import { hasNoWhiteSpace,hasValidOrgNumberOrFodselsnr, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow,VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  BehovForTilretteleggingFieldArray,
  behovForTilretteleggingFieldArrayName,
} from './BehovForTilretteleggingFieldArray';

const TILRETTELEGGING_NAME_PREFIX = 'tilretteleggingArbeidsforhold';

const tilretteleggingForArbeidsgiverFieldArrayName = 'tilretteleggingForArbeidsgiver';

type FormValues = {
  organisasjonsnummer: string;
  behovsdato: string;
};

const defaultTilrettelegging: FormValues = {
  organisasjonsnummer: '',
  behovsdato: '',
};

interface Props {
  readOnly: boolean;
}

/*
 * TilretteleggingForArbeidsgiverFieldArray
 *
 * Form som brukes for registrere om det er behov for tilrettelegging for arbeidsgiver.
 */
export const TilretteleggingForArbeidsgiverFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<{
    [TILRETTELEGGING_NAME_PREFIX]: { [tilretteleggingForArbeidsgiverFieldArrayName]: FormValues[] };
  }>();
  const { fields, append } = useFieldArray({
    control,
    name: `${TILRETTELEGGING_NAME_PREFIX}.${tilretteleggingForArbeidsgiverFieldArrayName}`,
  });

  const leggTilArbeidsgiver = () => {
    append(defaultTilrettelegging);
  };

  const namePart1 = `${TILRETTELEGGING_NAME_PREFIX}.${tilretteleggingForArbeidsgiverFieldArrayName}`;
  return (
    <>
      {fields.map((field, index: number) => (
        <div key={field.id}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <InputField
                  readOnly={readOnly}
                  name={`${namePart1}.${index}.organisasjonsnummer`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.OrgNr' })}
                  validate={[
                    required,
                    // TODO verdi her bør vel vera string?
                    (value: number) => hasNoWhiteSpace(value.toString()),
                    hasValidOrgNumberOrFodselsnr,
                  ]}
                  maxLength={99}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  name={`${namePart1}.${index}.behovsdato`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
          <VerticalSpacer sixteenPx />
          <BehovForTilretteleggingFieldArray
            name={`${namePart1}.${index}.${behovForTilretteleggingFieldArrayName}`}
            readOnly={readOnly}
          />
          {fields.length > index + 1 && (
            <>
              <hr />
              <VerticalSpacer sixteenPx />
            </>
          )}
          {fields.length === index + 1 && (
            <Button size="small" variant="secondary" onClick={leggTilArbeidsgiver} type="button">
              <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver" />
            </Button>
          )}
        </div>
      ))}
    </>
  );
};
