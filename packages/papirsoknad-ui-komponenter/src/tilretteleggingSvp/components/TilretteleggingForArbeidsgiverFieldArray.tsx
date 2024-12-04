import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, InputField } from '@navikt/ft-form-hooks';
import { hasNoWhiteSpace, hasValidOrgNumberOrFodselsnr, required } from '@navikt/ft-form-validators';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import {
  BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME,
  TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from '../constants';
import { FormValues } from '../types';
import { BehovForTilretteleggingFieldArray } from './BehovForTilretteleggingFieldArray';

const defaultArbeidsgiver = {
  organisasjonsnummer: '',
  behovsdato: '',
};

interface Props {
  readOnly: boolean;
}

const FA_PREFIX = `${TILRETTELEGGING_NAME_PREFIX}.${TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}`;

export const TilretteleggingForArbeidsgiverFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: FA_PREFIX,
  });

  const leggTilArbeidsgiver = () => {
    append(defaultArbeidsgiver);
  };

  useEffect(() => {
    if (fields.length === 0) {
      leggTilArbeidsgiver();
    }
  }, []);

  return (
    <>
      {fields.map((field, index: number) => (
        <div key={field.id}>
          {index > 0 && <AvsnittSkiller spaceUnder spaceAbove />}
          <HStack wrap={false} justify="space-between">
            <VStack>
              <HStack gap="4">
                <InputField
                  readOnly={readOnly}
                  name={`${getPrefix(index)}.organisasjonsnummer`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.OrgNr' })}
                  validate={[required, (value: any) => hasNoWhiteSpace(value.toString()), hasValidOrgNumberOrFodselsnr]}
                  maxLength={99}
                />

                <Datepicker
                  name={`${getPrefix(index)}.behovsdato`}
                  label={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.TilretteleggingFra' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                />
              </HStack>

              <BehovForTilretteleggingFieldArray
                name={`${getPrefix(index)}.${BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME}`}
                readOnly={readOnly}
              />
            </VStack>
            {!readOnly && index > 0 && (
              <div>
                <Button type="button" variant="tertiary-neutral" icon={<XMarkIcon />} onClick={() => remove(index)} />
              </div>
            )}
          </HStack>
        </div>
      ))}

      <Button size="small" variant="secondary" onClick={leggTilArbeidsgiver} type="button">
        <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver" />
      </Button>
    </>
  );
};
