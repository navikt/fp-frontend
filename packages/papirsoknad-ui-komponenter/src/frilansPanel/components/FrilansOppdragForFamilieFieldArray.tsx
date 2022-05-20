import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, formHooks, InputField, PeriodFieldArray,
} from '@navikt/ft-form-hooks';
import {
  hasValidDate, maxLength,
} from '@navikt/ft-form-validators';

import styles from './frilansOppdragForFamilieFieldArray.less';

export const FRILANS_NAME_PREFIX = 'frilans';

type OppdragPeriode = {
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}

export type FormValues = {
  oppdragPerioder: OppdragPeriode[];
}

export const defaultFrilansPeriode: OppdragPeriode = {
  fomDato: '',
  tomDato: '',
  oppdragsgiver: '',
};

const maxLength50 = maxLength(50);

interface OwnProps {
  readOnly: boolean;
}

/**
 * FrilansOppdragForFamilieFieldArray
 *
 * Viser inputfelter for fra og til dato for frilansperioder.
 */
export const FrilansOppdragForFamilieFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ [FRILANS_NAME_PREFIX]: FormValues}>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${FRILANS_NAME_PREFIX}.oppdragPerioder`,
  });

  return (
    <PeriodFieldArray
      bodyText=""
      fields={fields}
      emptyPeriodTemplate={defaultFrilansPeriode}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(periodeElementFieldId, index, getRemoveButton) => (
        <Row key={periodeElementFieldId}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${periodeElementFieldId}.fomDato`}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' })}
                    validate={[hasValidDate]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${periodeElementFieldId}.tomDato`}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' })}
                    validate={[hasValidDate]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name={`${FRILANS_NAME_PREFIX}.oppdragPerioder.${periodeElementFieldId}.oppdragsgiver`}
                    bredde="S"
                    validate={[maxLength50]}
                    label={intl.formatMessage({ id: 'Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver' })}
                  />
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

 /*
const sortFomDates = (perioder: { periodeFom: string; periodeTom?: string; }[]) => perioder
  .map((p) => p.periodeFom)
  .filter((p) => p && p !== '')
  .sort((periodeFom1, periodeFom2) => moment(periodeFom1, ISO_DATE_FORMAT).diff(moment(periodeFom2, ISO_DATE_FORMAT)));

 
FrilansOppdragForFamilieFieldArray.validate = (values) => {
  if (!values) {
    return null;
  }
  const { oppdragPerioder = [], perioder = [] } = values;

  const sortedFomDates = sortFomDates(perioder);

  const arrayErrors = oppdragPerioder.map(({
    fomDato,
    tomDato,
  }) => {
    if (fomDato || tomDato) {
      const periodeFomDate = moment(fomDato, ISO_DATE_FORMAT);
      const periodeTomDate = moment(tomDato, ISO_DATE_FORMAT);
      const error = dateAfterOrEqual(periodeFomDate)(periodeTomDate);
      if (error) {
        return { tomDato: error };
      }

      if (sortedFomDates.length > 0) {
        const isBefore = moment(sortedFomDates[0]).isSameOrBefore(moment(periodeFomDate));
        if (!isBefore) {
          return { fomDato: [{ id: 'Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation' }] };
        }
      }
    }

    return null;
  });

  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }
  return null;
};*/

export default FrilansOppdragForFamilieFieldArray;
