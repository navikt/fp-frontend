import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Box } from '@navikt/ds-react';
import { PeriodFieldArray, RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { maxValue, required } from '@navikt/ft-form-validators';

import { TilretteleggingType } from '@navikt/fp-kodeverk';

import { FieldArrayRow } from '../../felles/FieldArrayRow';
import { type Tilrettelegging } from '../types';

const maxValue3 = maxValue(100);

const defaultTilrettelegging: Tilrettelegging = {
  tilretteleggingType: '',
  dato: '',
  stillingsprosent: '',
};

interface Props {
  readOnly: boolean;
  name: string;
}

export const BehovForTilretteleggingFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();

  // TODO (TOR) Manglar type
  const { control } = useFormContext();

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
    <Box background="surface-action-subtle" padding="3" style={{ borderLeft: '4px solid var(--a-lightblue-700)' }}>
      <PeriodFieldArray
        fields={fields}
        emptyPeriodTemplate={defaultTilrettelegging}
        bodyText={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov' })}
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
                <option value={TilretteleggingType.HEL_TILRETTELEGGING} key={TilretteleggingType.HEL_TILRETTELEGGING}>
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                </option>,
                <option
                  value={TilretteleggingType.DELVIS_TILRETTELEGGING}
                  key={TilretteleggingType.DELVIS_TILRETTELEGGING}
                >
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                </option>,
                <option
                  value={TilretteleggingType.INGEN_TILRETTELEGGING}
                  key={TilretteleggingType.INGEN_TILRETTELEGGING}
                >
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                </option>,
              ]}
            />

            <RhfDatepicker
              name={`${name}.${index}.dato`}
              control={control}
              isReadOnly={readOnly}
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
      </PeriodFieldArray>
    </Box>
  );
};
