import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage, Table, VStack } from '@navikt/ds-react';

import { TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME, TILRETTELEGGING_NAME_PREFIX } from '../constants';
import type { FormValues } from '../types';
import { RegistrerArbeidsgiverRad } from './RegistrerArbeidgiverRad';

const defaultArbeidsgiver = {
  organisasjonsnummer: '',
  behovsdato: '',
};

interface Props {
  readOnly: boolean;
}

const FA_PREFIX = `${TILRETTELEGGING_NAME_PREFIX}.${TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME}`;

export const TilretteleggingForArbeidsgiverFieldArray = ({ readOnly }: Props) => {
  const intl = useIntl();
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: FA_PREFIX,
    rules: {
      required: intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength' }),
    },
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
    <VStack gap="4">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={{ width: '48px' }} />
            <Table.HeaderCell>
              <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.Title" />
            </Table.HeaderCell>
            <Table.HeaderCell style={{ width: '48px' }} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index: number) => (
            <RegistrerArbeidsgiverRad
              key={field.id}
              index={index}
              open={index + 1 === fields.length}
              remove={() => remove(index)}
              readOnly={readOnly}
            />
          ))}
        </Table.Body>
      </Table>

      {errors[TILRETTELEGGING_NAME_PREFIX]?.[TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?.root?.message && (
        <ErrorMessage>
          {errors[TILRETTELEGGING_NAME_PREFIX]?.[TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME].root?.message}
        </ErrorMessage>
      )}
      <div>
        <Button
          size="small"
          variant="tertiary"
          onClick={leggTilArbeidsgiver}
          type="button"
          icon={<PlusCircleIcon aria-hidden />}
        >
          <FormattedMessage id="TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver" />
        </Button>
      </div>
    </VStack>
  );
};
