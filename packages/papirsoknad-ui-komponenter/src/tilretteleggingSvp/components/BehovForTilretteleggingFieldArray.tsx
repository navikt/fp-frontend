import { useEffect } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { Box } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqual, hasValidDecimal, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT, removeSpacesFromNumber } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { SvpTilretteleggingType } from '@navikt/fp-types';

import { FieldArrayRow } from '../../felles/FieldArrayRow';
import { type FormValues, type Tilrettelegging } from '../types';

const minValue0 = minValue(0);
const maxValue100 = maxValue(100);

const defaultTilrettelegging: Tilrettelegging = {
  tilretteleggingType: '' as unknown as SvpTilretteleggingType,
  dato: '',
  stillingsprosent: undefined,
};

type TilretteleggingerFieldName =
  | 'tilretteleggingArbeidsforhold.tilretteleggingFrilans.tilrettelegginger'
  | 'tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende.tilrettelegginger'
  | `tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.${number}.tilrettelegginger`;

// Perioden mangler eit eige til og med-felt, så til og med-dato for ein periode er alltid
// neste periodes fra dato minus éin dag. Denne validerer at fra dato ikkje er etter den avleia til og med-datoen.
// Datoane vert henta lazy via getValues ved kvar validering, sidan komponenten ikkje nødvendigvis
// vert re-rendra når naboraden si fra dato vert endra.
const validerFraDatoErFørNestePeriode =
  (intl: IntlShape, getValues: UseFormGetValues<FormValues>, name: TilretteleggingerFieldName, index: number) =>
  (): string | null => {
    const dato = getValues(`${name}.${index}.dato`);
    const nesteDato = getValues(`${name}.${index + 1}.dato`);

    if (!dato || !nesteDato) {
      return null;
    }

    const erEtterNestePeriode = dateBeforeOrEqual(dayjs(nesteDato).subtract(1, 'day').format(ISO_DATE_FORMAT))(dato);

    return erEtterNestePeriode
      ? intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.FraDatoMaaVaereFoerNeste' })
      : null;
  };

interface Props {
  readOnly: boolean;
  name: TilretteleggingerFieldName;
}

export const BehovForTilretteleggingFieldArray = ({ readOnly, name }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<FormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultTilrettelegging);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- legg berre til ein tom rad ved montering; fields.length skal ikkje trigge effekten på nytt
  }, []);

  return (
    <Box
      background="brand-blue-moderateA"
      padding="space-12"
      style={{ borderLeft: '4px solid var(--a-lightblue-700)' }}
    >
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
                <option value={'HEL_TILRETTELEGGING' satisfies SvpTilretteleggingType} key="HEL_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanGjennomfores' })}
                </option>,
                <option value={'DELVIS_TILRETTELEGGING' satisfies SvpTilretteleggingType} key="DELVIS_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.RedusertArbeid' })}
                </option>,
                <option value={'INGEN_TILRETTELEGGING' satisfies SvpTilretteleggingType} key="INGEN_TILRETTELEGGING">
                  {intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores' })}
                </option>,
              ]}
            />

            <RhfDatepicker
              name={`${name}.${index}.dato`}
              control={control}
              readOnly={readOnly}
              label={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.FraDato' })}
              validate={[required, validerFraDatoErFørNestePeriode(intl, getValues, name, index)]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfTextField
              readOnly={readOnly}
              control={control}
              name={`${name}.${index}.stillingsprosent`}
              label={intl.formatMessage({ id: 'BehovForTilrettteleggingFieldArray.Stillingsprosent' })}
              validate={[required, hasValidDecimal, minValue0, maxValue100]}
              normalizeOnBlur={value => removeSpacesFromNumber(value)}
            />
          </FieldArrayRow>
        )}
      </RhfFieldArray>
    </Box>
  );
};
