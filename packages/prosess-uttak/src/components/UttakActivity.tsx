import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import {
  formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { Alert, Button } from '@navikt/ds-react';

<<<<<<< HEAD
import {
  RadioGroupField, RadioOption, SelectField, TextAreaField,
} from '@fpsak-frontend/form';
import {
  hasValidText,
  maxLength,
  minLength,
  notDash,
  required,
  requiredIfNotPristine,
} from '@navikt/ft-form-validators';
import { omit, createIntl } from '@navikt/ft-utils';
=======
>>>>>>> aaf75f737 (div)
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';

import { Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';
import { AarsakFilter } from '@fpsak-frontend/types/src/uttaksresultatPeriodeTsType';

import styles from './uttakActivity.less';
<<<<<<< HEAD
import { PeriodeMedClassName } from './Uttak';
import messages from '../../i18n/nb_NO.json';

const uttakActivityForm = 'uttaksresultatActivity';
const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const intl = createIntl(messages);

const merEn100ProsentMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.MerEn100Prosent' });
const arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.UtsettelseUtenFullArbeid' });

const isTrekkdagerMerEnnNullUtsettelse = (
  value: number,
): string | null => (value > 0 ? intl.formatMessage({ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' }) : null);

const isUkerOgDagerVidNullUtbetalningsgrad = (
  weeks: number,
  days: number,
  utbetalingsgrad: number,
): string | null => {
  if (weeks === 0 && days === 0 && utbetalingsgrad > 0) {
    return intl.formatMessage({ id: 'ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage' });
  }
  return null;
};

const isUtbetalingMerEnnNullUtsettelse = (
  value: number,
): string | null => (value > 0 ? intl.formatMessage({ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' }) : null);

const isUtbetalingsgradMerSamitidigUttaksprosent = (
  samtidigUttaksProsent: number,
  utbetalingsgrad: number,
): string | null => {
  if (samtidigUttaksProsent < utbetalingsgrad) {
    return intl.formatMessage({
      id: 'ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent',
    });
  }
  return null;
};

function sortAlphabetically(a: ArsakKodeverk, b: ArsakKodeverk): number {
  if (a.sortering < b.sortering) {
    return -1;
  }
  if (a.sortering > b.sortering) {
    return 1;
  }
  if (a.navn < b.navn) {
    return -1;
  }
  if (a.navn > b.navn) {
    return 1;
  }
  return 0;
}
=======

const uttakActivityForm = 'uttaksresultatActivity';
>>>>>>> aaf75f737 (div)

export type ArsakKodeverk = {
  sortering: string;
  utfallType?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
  gyldigForLovendringer: string[];
  synligForRolle?: string[];
} & KodeverkMedNavn;



export type FormValues = {
  UttakFieldArray?: any;
  begrunnelse?: string;
  flerbarnsdager?: boolean;
  samtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
  periodeAarsak?: string;
  graderingInnvilget?: boolean;
  graderingAvslagAarsak?: string;
  oppholdArsak?: string;
  utsettelseType?: string;
  erOppfylt?: boolean;
  selectedItem?: PeriodeMedClassName;
}

interface PureOwnProps {
  cancelSelectedActivity: () => void;
  updateActivity: (data: PeriodeMedClassName) => void;
  selectedItemData: PeriodeMedClassName;
  readOnly: boolean;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aarsakFilter: AarsakFilter;
  reduxFormChange: (...args: any[]) => any;
}

interface MappedOwnProps {
  hasValidationError: boolean;
  periodeTyper: KodeverkMedNavn[];
  graderingAvslagAarsakKoder: ArsakKodeverk[];
  utsettelseAarsak: KodeverkMedNavn[];
  uttakFieldArray: string;
  erOppfylt: boolean;
  currentlySelectedStønadskonto: string;
  periodeAarsakKoder: ArsakKodeverk[];
  graderingInnvilget: boolean;
  samtidigUttaksprosent: string;
  validate: (formValues: FormValues) => any;
  warn: (formValues: FormValues) => any;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

export const UttakActivity: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  readOnly,
  hasValidationError,
  ...formProps
}) => (
  <div>
    {!readOnly
          && (
            <div>
              {formProps.error}
              {formProps.warning}
              <Button
                size="small"
                variant="primary"
                onClick={formProps.handleSubmit}
                disabled={formProps.pristine || hasValidationError}
                type="button"
              >
                <FormattedMessage id="UttakActivity.Oppdater" />
              </Button>
            </div>
          )}
  </div>
);

const isutbetalingPlusArbeidsprosentMerEn100 = (utbetalingsgrad: number, prosentArbeid: number): string => {
  if (utbetalingsgrad + prosentArbeid > 100) {
    return intl.formatMessage({ id: 'ValidationMessage.MerEn100Prosent' });
  }
  return null;
};

const getSum = (total: number, num: number): number => total + num;

const lagFeilmeldinger = (values: FormValues, rowArray: number[], invalidArbeidsProsentVidUsettelse: string) => {
  values.UttakFieldArray.forEach((aktivitet, index: number) => {
    // @ts-ignore Fiks
    const utbetalingsgrad = Number.isNaN(aktivitet.utbetalingsgrad) ? aktivitet.utbetalingsgrad : parseFloat(aktivitet.utbetalingsgrad);
    // @ts-ignore Fiks
    const utbetalingPlusArbeidsprosentMerEn100 = isutbetalingPlusArbeidsprosentMerEn100(utbetalingsgrad, aktivitet.prosentArbeid);
    if (utbetalingPlusArbeidsprosentMerEn100) {
      rowArray.push(index);
    }
  });
  if (rowArray.length > 0) {
    const aktiviteter = document.querySelectorAll('[class^=renderUttakTable] tr');
    if (aktiviteter.length > 0) {
      rowArray.forEach((item) => {
        aktiviteter[item + 1].classList.add('tableRowHighlight');
      });
    }
    if (invalidArbeidsProsentVidUsettelse && values.utsettelseType === utsettelseArsakCodes.ARBEID) {
      return (
        <Alert size="small" variant="warning" className={styles.advarsel}>
          <FormattedMessage id="UttakActivity.MerEn100ProsentOgOgyldigUtsettlse" />
        </Alert>
      );
    }
    return (
      <Alert size="small" variant="warning" className={styles.advarsel}>
        <FormattedMessage id="UttakActivity.MerEn100Prosent" />
      </Alert>
    );
  }

  return undefined;
};

const isArbeidsProsentVidUtsettelse100 = (
  values: FormValues,
  aktivitetArray: any[],
): string => {
  const andelIArbeid = [0];
  if (values.utsettelseType && values.erOppfylt && aktivitetArray) {
    aktivitetArray.forEach((aktivitet) => {
      andelIArbeid.push(aktivitet.prosentArbeid);
    });
    const prosentIArbeid = andelIArbeid.reduce(getSum);
    if (prosentIArbeid < 100) {
      return intl.formatMessage({ id: 'ValidationMessage.UtsettelseUtenFullArbeid' });
    }
    return null;
  }
  return null;
};

const warningUttakActivity = (values: FormValues): any => {
  let warnings = {};
  const rowArray: number[] = [];
  const touchedaktiviteter = document.getElementsByClassName('tableRowHighlight');
  const invalidArbeidsProsentVidUsettelse = isArbeidsProsentVidUtsettelse100(values, values.UttakFieldArray);
  if (invalidArbeidsProsentVidUsettelse && values.utsettelseType === utsettelseArsakCodes.ARBEID) {
    warnings = {
      _warning:
  <Alert size="small" variant="warning" className={styles.advarsel}>
    <FormattedMessage
      id="UttakActivity.UtsettelseUtenFullArbeid"
    />
  </Alert>,
    };
  }

  if (touchedaktiviteter) {
    for (let i = 0; i < touchedaktiviteter.length; i += 1) { // NOSONAR
      touchedaktiviteter[i].classList.remove('tableRowHighlight');
    }
  }
  if (values.UttakFieldArray) {
    const feilmelding = lagFeilmeldinger(values, rowArray, invalidArbeidsProsentVidUsettelse);
    if (feilmelding) {
      return {
        ...warnings,
        _warning: feilmelding,
      };
    }
  }
  return warnings;
};

export const isTrekkdagerMerEnnNullUtsettelse = (value: number): FormValidationResult =>
  value > 0 ? intl.formatMessage({ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' }) : null;

  export const isUtbetalingMerEnnNullUtsettelse = (value: number): FormValidationResult =>
  value > 0 ? intl.formatMessage({ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' }) : null;

const validateUttakActivity = (values: FormValues): any => {
  const errors = {
    UttakFieldArray: [],
  };
  if (values.UttakFieldArray) {
    if (values.utsettelseType && values.utsettelseType !== '-' && values.erOppfylt) {
      values.UttakFieldArray.forEach((aktivitet, index: number) => {
        const daysInvalid = isTrekkdagerMerEnnNullUtsettelse(aktivitet.days);
        const weeksInvalid = isTrekkdagerMerEnnNullUtsettelse(aktivitet.weeks);
        const utbetalingsgradInvalid = isUtbetalingMerEnnNullUtsettelse(parseFloat(aktivitet.utbetalingsgrad));
        errors.UttakFieldArray[index] = {
          days: daysInvalid,
          weeks: weeksInvalid,
          utbetalingsgrad: utbetalingsgradInvalid,
        };
      });
    }
  }

  return errors;
};

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const { alleKodeverk } = initialOwnProps;
  const periodeAarsaker = alleKodeverk[kodeverkTyper.PERIODE_RESULTAT_AARSAK] as ArsakKodeverk[];
  const graderingAvslagAarsakKoder = alleKodeverk[kodeverkTyper.GRADERING_AVSLAG_AARSAK] as ArsakKodeverk[];
  const utsettelseAarsak = alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE];
  const periodeTyper = alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE];

  const validate = (values: FormValues) => validateUttakActivity(values);
  const warn = (values: FormValues) => warningUttakActivity(values);
  const onSubmit = (values: FormValues) => initialOwnProps.updateActivity(transformValues(
    values,
    periodeAarsaker,
    graderingAvslagAarsakKoder,
  ));

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const erOppfylt = formValueSelector(uttakActivityForm)(state, 'erOppfylt');
    const begrunnelse = formValueSelector(uttakActivityForm)(state, 'begrunnelse');
    const arsak = formValueSelector(uttakActivityForm)(state, 'periodeAarsak');
    const uttakFieldArray = formValueSelector(uttakActivityForm)(state, 'UttakFieldArray');
    const hasValidationError = erOppfylt === undefined || !begrunnelse || !arsak;
    const currentlySelectedActivity = uttakFieldArray && uttakFieldArray.length > 0 ? uttakFieldArray[0] : undefined;
    const currentlySelectedStønadskonto = currentlySelectedActivity ? currentlySelectedActivity.stønadskontoType : undefined;

    return {
      hasValidationError,
      validate,
      warn,
      onSubmit,
      periodeTyper,
      graderingAvslagAarsakKoder,
      utsettelseAarsak,
      uttakFieldArray,
      erOppfylt,
      currentlySelectedStønadskonto,
      initialValues: buildInitialValues(ownProps),
      periodeAarsakKoder: periodeAarsaker,
      graderingInnvilget: formValueSelector(uttakActivityForm)(state, 'graderingInnvilget'),
      samtidigUttaksprosent: formValueSelector(uttakActivityForm)(state, 'samtidigUttaksprosent'),
    };
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: uttakActivityForm,
  enableReinitialize: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(injectIntl(UttakActivity)));
