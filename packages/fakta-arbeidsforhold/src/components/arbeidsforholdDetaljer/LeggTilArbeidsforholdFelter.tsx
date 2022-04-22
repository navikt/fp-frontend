import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';
import moment from 'moment';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import {
  DDMMYYYY_DATE_FORMAT, hasValidDate, hasValidInteger, maxValue, minValue, required,
} from '@navikt/ft-utils';
import { DatepickerField, InputField } from '@fpsak-frontend/form';

import BehandlingFormFieldCleaner from '../../util/BehandlingFormFieldCleaner';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';

import styles from './leggTilArbeidsforholdFelter.less';

// ----------------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------------
const sluttdatoErrorMsg = (intl: IntlShape, dato: string): string => intl
  .formatMessage({ id: 'PersonArbeidsforholdDetailForm.DateNotAfterOrEqual' }, { dato });

const startdatoErrorMsg = (intl: IntlShape, dato: string): string => intl
  .formatMessage({ id: 'PersonArbeidsforholdDetailForm.DateNotBeforeOrEqual' }, { dato });

const formatDate = (dato: string): string => moment(dato).format(DDMMYYYY_DATE_FORMAT);

interface OwnProps {
  readOnly: boolean;
  formName: string;
}

interface StaticFunctions {
  validate?: (values: CustomArbeidsforhold, intl: IntlShape) => {
    tomDato: string;
    fomDato: string;
  } | null;
}

// ----------------------------------------------------------------------------------
// Component : LeggTilArbeidsforholdFelter
// ----------------------------------------------------------------------------------
const LeggTilArbeidsforholdFelter: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  formName,
}) => (
  /* @ts-ignore Fiks cannot be used as a JSX component */
  <BehandlingFormFieldCleaner
    formName={formName}
    fieldNames={['arbeidsgiverNavn', 'startdato', 'sluttdato', 'stillingsprosent']}
  >
    <FlexContainer>
      <FlexRow wrap>
        <FlexColumn className={styles.navnColumn}>
          <InputField
            name="navn"
            label={{ id: 'PersonArbeidsforholdDetailForm.ArbeidsgiverNavn' }}
            validate={[required]}
            bredde="XXL"
            readOnly={readOnly}
          />
        </FlexColumn>
        <FlexColumn className={styles.columnItem}>
          <DatepickerField
            name="fomDato"
            label={{ id: 'PersonArbeidsforholdDetailForm.ArbeidsforholdStartdato' }}
            validate={[required, hasValidDate]}
            readOnly={readOnly}
          />
        </FlexColumn>
        <FlexColumn className={styles.columnItem}>
          <DatepickerField
            name="tomDato"
            label={{ id: 'PersonArbeidsforholdDetailForm.ArbeidsforholdSluttdato' }}
            validate={[hasValidDate]}
            readOnly={readOnly}
          />
        </FlexColumn>
        <FlexColumn className={styles.columnItem}>
          <InputField
            name="stillingsprosent"
            label={{ id: 'PersonArbeidsforholdDetailForm.Stillingsprosent' }}
            validate={[required, minValue(1), maxValue(100), hasValidInteger]}
            readOnly={readOnly}
            defaultValue={100}
            bredde="S"
            parse={(value) => {
              const parsedValue = parseInt(value, 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
          />
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </BehandlingFormFieldCleaner>
);

LeggTilArbeidsforholdFelter.validate = (values: CustomArbeidsforhold, intl: IntlShape): {
  tomDato: string;
  fomDato: string;
} | null => {
  if (values === undefined || values === null) {
    return null;
  }

  const { fomDato, tomDato } = values;

  if (fomDato && tomDato && moment(fomDato).isAfter(moment(tomDato))) {
    return ({
      tomDato: sluttdatoErrorMsg(intl, formatDate(fomDato)),
      fomDato: startdatoErrorMsg(intl, formatDate(tomDato)),
    });
  }
  return null;
};

export default LeggTilArbeidsforholdFelter;
