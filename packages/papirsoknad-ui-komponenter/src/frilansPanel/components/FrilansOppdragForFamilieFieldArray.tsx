import React, { FunctionComponent, useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import moment from 'moment';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Datepicker, InputField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { dateAfterOrEqual, dateBeforeOrEqual, hasValidDate, maxLength } from '@navikt/ft-form-validators';

import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import styles from './frilansOppdragForFamilieFieldArray.module.css';

export const FRILANS_NAME_PREFIX = 'frilans';

type OppdragPeriode = {
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
};

type Periode = {
  periodeFom: string;
  periodeTom?: string;
};

export type FormValues = {
  oppdragPerioder?: OppdragPeriode[];
  perioder?: Periode[];
};

const getValue = (
  getValues: UseFormGetValues<{ [FRILANS_NAME_PREFIX]: FormValues }>,
  fieldName: string,
  // @ts-ignore
): string => getValues(fieldName);

const sortFomDates = (perioder: Periode[]) =>
  perioder
    .map(p => p.periodeFom)
    .filter(p => p && p !== '')
    .sort((periodeFom1, periodeFom2) =>
      moment(periodeFom1, ISO_DATE_FORMAT).diff(moment(periodeFom2, ISO_DATE_FORMAT)),
    );

export const defaultFrilansPeriode: OppdragPeriode = {
  fomDato: '',
  tomDato: '',
  oppdragsgiver: '',
};

const maxLength50 = maxLength(50);

const getValiderAtFomDatoErFørFørstePeriode =
  (
    getValues: UseFormGetValues<{
      frilans: FormValues;
    }>,
    namePart1: string,
    sorterteFomDatoer: string[],
    intl: IntlShape,
  ) =>
  () => {
    const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
    if (sorterteFomDatoer.length > 0 && sorterteFomDatoer[0] && fomVerdi) {
      const isBefore = moment(sorterteFomDatoer[0]).isSameOrBefore(moment(fomVerdi));
      if (!isBefore) {
        return intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation' });
      }
    }
    return null;
  };

interface OwnProps {
  readOnly: boolean;
}

/**
 * FrilansOppdragForFamilieFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder.
 */
export const FrilansOppdragForFamilieFieldArray: FunctionComponent<OwnProps> = ({ readOnly }) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    watch,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues }>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.oppdragPerioder`,
  });

  const perioder = watch(`${FRILANS_NAME_PREFIX}.perioder`);
  const sorterteFomDatoer = useMemo(() => sortFomDates(perioder), [perioder]);

  return (
    <PeriodFieldArray
      bodyText={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.NyPeriode' })}
      fields={fields}
      emptyPeriodTemplate={defaultFrilansPeriode}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => {
        const namePart1 = `${FRILANS_NAME_PREFIX}.oppdragPerioder.${index}`;
        return (
          <div key={field.id} className={index !== fields.length - 1 ? styles.notLastRow : ''}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name={`${namePart1}.fomDato`}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' })}
                    validate={[
                      hasValidDate,
                      getValiderAtFomDatoErFørFørstePeriode(getValues, namePart1, sorterteFomDatoer, intl),
                      () => {
                        const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
                        const tomVerdi = getValue(getValues, `${namePart1}.tomDato`);
                        return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                      },
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${namePart1}.tomDato`}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' })}
                    validate={[
                      hasValidDate,
                      () => {
                        const fomVerdi = getValue(getValues, `${namePart1}.fomDato`);
                        const tomVerdi = getValue(getValues, `${namePart1}.tomDato`);
                        return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                      },
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name={`${namePart1}.oppdragsgiver`}
                    validate={[maxLength50]}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver' })}
                  />
                </FlexColumn>
                {getRemoveButton && <FlexColumn>{getRemoveButton()}</FlexColumn>}
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

export default FrilansOppdragForFamilieFieldArray;
