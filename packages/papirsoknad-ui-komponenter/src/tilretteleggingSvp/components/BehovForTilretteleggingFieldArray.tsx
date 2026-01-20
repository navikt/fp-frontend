import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Box } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { maxValue, required } from '@navikt/ft-form-validators';

import { FieldArrayRow } from '../../felles/FieldArrayRow';
import { type FormValues, type Tilrettelegging } from '../types';

const maxValue3 = maxValue(100);

const defaultTilrettelegging: Tilrettelegging = {
  tilretteleggingType: '',
  dato: '',
  stillingsprosent: '',
};

interface Props {
  readOnly: boolean;
  name:
    | 'tilretteleggingArbeidsforhold.tilretteleggingFrilans'
    | 'tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende'
    | `tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.${number}.tilretteleggingArbeidsgiver`;
}

export const BehovForTilretteleggingFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<FormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultTilrettelegging);
    }
  }, []);

  return (
    <Box background="brand-blue-moderateA" padding="space-12" style={{ borderLeft: '4px solid var(--a-lightblue-700)' }}>
      <RhfFieldArray
        fields={fields}
        emptyTemplate={defaultTilrettelegging}
        addButtonText={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
        readOnly={readOnly}
        append={append}
        remove={remove}
      >
        {(field, index) => (
          <FieldArrayRow key={field.id} readOnly={readOnly} remove={remove} index={index}>
            <RhfSelect
              name={`${name}.${index}.tilretteleggingType`}
              control={control}
              readOnly={readOnly}
              label={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.BehovForTilrettelegging' })}
              validate={[required]}
              selectValues={[
                <option value="HEL_TILRETTELEGGING" key="HEL_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                </option>,
                <option value="DELVIS_TILRETTELEGGING" key="DELVIS_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                </option>,
                <option value="INGEN_TILRETTELEGGING" key="INGEN_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                </option>,
              ]}
            />

            <RhfDatepicker
              name={`${name}.${index}.dato`}
              control={control}
              readOnly={readOnly}
              label={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.FraDato' })}
              validate={[required]}
            />

            <RhfTextField
              readOnly={readOnly}
              control={control}
              name={`${name}.${index}.stillingsprosent`}
              label={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.Stillingsprosent' })}
              validate={[required, maxValue3]}
              maxLength={99}
            />
          </FieldArrayRow>
        )}
      </RhfFieldArray>
    </Box>
  );
};
