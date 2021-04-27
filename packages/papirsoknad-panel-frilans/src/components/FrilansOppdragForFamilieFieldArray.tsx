import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import {
  dateAfterOrEqual, hasValidDate, ISO_DATE_FORMAT, maxLength,
} from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField, PeriodFieldArray } from '@fpsak-frontend/form';

import styles from './frilansOppdragForFamilieFieldArray.less';

export const defaultFrilansPeriode = {
  fomDato: '',
  tomDato: '',
};

const maxLength50 = maxLength(50);

interface OwnProps {
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  readOnly: boolean;
}

export type FormValues = {
  oppdragPerioder: {
    fomDato: string;
    tomDato: string;
  }[];
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
}

interface StaticFunctions {
  validate?: (values: FormValues) => {
    tomDato?: any;
    fomDato?: any;
  }[] | null,
}

/**
 *  FrilansOppdragForFamilieFieldArray
 *
 * Presentasjonskomponent: Viser inputfelter for fra og til dato for frilansperioder
 * Komponenten må rendres som komponenten til et FieldArray.
 */
export const FrilansOppdragForFamilieFieldArray: FunctionComponent<OwnProps> & StaticFunctions = ({
  fields,
  meta,
  readOnly,
}) => (
  <PeriodFieldArray fields={fields} meta={meta} emptyPeriodTemplate={defaultFrilansPeriode} readOnly={readOnly}>
    {(periodeElementFieldId, index, getRemoveButton) => (
      <Row key={periodeElementFieldId}>
        <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.fomDato`}
                  label={{ id: 'Registrering.FrilansOppdrag.FieldArray.periodeFom' }}
                  validate={[hasValidDate]}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name={`${periodeElementFieldId}.tomDato`}
                  label={{ id: 'Registrering.FrilansOppdrag.FieldArray.periodeTom' }}
                  validate={[hasValidDate]}
                />
              </FlexColumn>
              <FlexColumn>
                <InputField
                  name={`${periodeElementFieldId}.oppdragsgiver`}
                  bredde="S"
                  validate={[maxLength50]}
                  label={{ id: 'Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver' }}
                />
              </FlexColumn>
              <FlexColumn>
                {getRemoveButton()}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Column>
      </Row>
    )}
  </PeriodFieldArray>
);

const sortFomDates = (perioder: { periodeFom: string; periodeTom?: string; }[]) => perioder
  .map((p) => p.periodeFom)
  .filter((p) => p && p !== '')
  .sort((periodeFom1, periodeFom2) => moment(periodeFom1, ISO_DATE_FORMAT).diff(moment(periodeFom2, ISO_DATE_FORMAT)));

FrilansOppdragForFamilieFieldArray.validate = (values: FormValues): any => {
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
};

export default FrilansOppdragForFamilieFieldArray;
