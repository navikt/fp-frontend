import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Undertekst } from 'nav-frontend-typografi';

import {
  RadioGroupField, RadioOption, SelectField, TextAreaField, behandlingFormValueSelector, behandlingForm,
} from '@fpsak-frontend/form';
import {
  hasValidText,
  isArbeidsProsentVidUtsettelse100,
  isTrekkdagerMerEnnNullUtsettelse,
  isUkerOgDagerVidNullUtbetalningsgrad,
  isUtbetalingMerEnnNullUtsettelse,
  isutbetalingPlusArbeidsprosentMerEn100,
  isUtbetalingsgradMerSamitidigUttaksprosent,
  maxLength,
  minLength,
  notDash,
  omit,
  required,
  requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import oppholdArsakType, { oppholdArsakMapper } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';

import {
  Behandling, Kodeverk, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import RenderUttakTable, { AktivitetFieldArray } from './RenderUttakTable';
import UttakInfo from './UttakInfo';

import styles from './uttakActivity.less';
import { PeriodeMedClassName } from './Uttak';

const uttakActivityForm = 'uttaksresultatActivity';
const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const IKKE_OPPFYLT_AARSAK = 'IKKE_OPPFYLT_AARSAK';
const INNVILGET_AARSAK = 'INNVILGET_AARSAK';
const PERIODE_RESULTAT_TYPE = 'PERIODE_RESULTAT_TYPE';
const innvilgetTekst = 'Innvilget';
const avlsattTekst = 'Avslått';

function sortAlphabetically(a: KodeverkMedNavn, b: KodeverkMedNavn) {
  if (a.navn < b.navn) {
    return -1;
  }
  if (a.navn > b.navn) {
    return 1;
  }
  return 0;
}

type ArsakKodeverk = {
  gyldigFom?: string;
  gyldigTom?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
} & KodeverkMedNavn;

const mapAarsak = (
  innvilgelseAarsakKoder: ArsakKodeverk[],
  starttidspunktForeldrepenger: string,
  utsettelseType?: Kodeverk,
  periodeType?: Kodeverk,
  skalFiltrere?: boolean,
) => {
  innvilgelseAarsakKoder.sort(sortAlphabetically);
  let filteredNyKodeArray = innvilgelseAarsakKoder.filter((kodeItem) => kodeItem.gyldigTom >= starttidspunktForeldrepenger
    && kodeItem.gyldigFom <= starttidspunktForeldrepenger);

  if (!skalFiltrere) {
    return filteredNyKodeArray
      .map(({
        kode,
        navn,
      }) => <option value={kode} key={kode}>{navn}</option>);
  }

  if (utsettelseType && utsettelseType.kode !== utsettelseArsakCodes.UDEFINERT) {
    filteredNyKodeArray = filteredNyKodeArray.filter((kv) => kv.uttakTyper.includes('UTSETTELSE'));
  }

  if (periodeType && utsettelseType && utsettelseType.kode === utsettelseArsakCodes.UDEFINERT) {
    filteredNyKodeArray = filteredNyKodeArray
      .filter((kv) => kv.uttakTyper.includes('UTTAK'))
      .filter((kv) => kv.valgbarForKonto.includes(periodeType.kode));
  }

  return filteredNyKodeArray
    .map(({
      kode,
      navn,
    }) => <option value={kode} key={kode}>{navn}</option>);
};

interface PureOwnProps {
  cancelSelectedActivity: () => void;
  updateActivity: (data: PeriodeMedClassName) => void;
  selectedItemData: PeriodeMedClassName;
  readOnly: boolean;
  harSoktOmFlerbarnsdager: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
}

interface MappedOwnProps {
  hasValidationError: boolean;
  kontoIkkeSatt: boolean;
  periodeTyper: KodeverkMedNavn[];
  oppholdArsakTyper: KodeverkMedNavn[];
  graderingAvslagAarsakKoder: ArsakKodeverk[];
  utsettelseAarsak: KodeverkMedNavn[];
  uttakFieldArray: string;
  erOppfylt: boolean;
  currentlySelectedStønadskonto: Kodeverk;
  avslagAarsakKoder: ArsakKodeverk[];
  innvilgelseAarsakKoder: ArsakKodeverk[];
  graderingInnvilget: boolean;
  erSamtidigUttak: boolean;
  samtidigUttaksprosent: string;
  starttidspunktForeldrepenger: string;
}

export const UttakActivity: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  periodeTyper,
  oppholdArsakTyper,
  readOnly,
  cancelSelectedActivity,
  erOppfylt,
  graderingInnvilget,
  erSamtidigUttak,
  avslagAarsakKoder,
  innvilgelseAarsakKoder,
  graderingAvslagAarsakKoder,
  selectedItemData,
  kontoIkkeSatt,
  starttidspunktForeldrepenger,
  harSoktOmFlerbarnsdager,
  alleKodeverk,
  hasValidationError,
  currentlySelectedStønadskonto,
  ...formProps
}) => (
  <div>
    <Row className={styles.uttakDataWrapper}>
      <UttakInfo
        oppholdArsakTyper={oppholdArsakTyper}
        selectedItemData={selectedItemData}
        kontoIkkeSatt={kontoIkkeSatt}
        readOnly={readOnly}
        graderingInnvilget={graderingInnvilget}
        erSamtidigUttak={erSamtidigUttak}
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        alleKodeverk={alleKodeverk}
      />
    </Row>
    {selectedItemData.oppholdÅrsak.kode === oppholdArsakType.UDEFINERT
        && (
          <Row className={readOnly ? null : styles.marginTop}>
            <Column xs="12">
              <FieldArray
                name="UttakFieldArray"
                component={RenderUttakTable}
                periodeTyper={periodeTyper}
                readOnly={readOnly}
              />
            </Column>
          </Row>
        )}
    <>
      <div className={styles.marginBottom20}>
        <TextAreaField
          name="begrunnelse"
          label={{ id: 'UttakActivity.Vurdering' }}
          validate={[requiredIfNotPristine, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
      </div>
      {!readOnly
          && (
            <div>
              {selectedItemData.oppholdÅrsak.kode === oppholdArsakType.UDEFINERT
                && (
                  <div className={styles.marginBottom}>
                    <RadioGroupField validate={[required]} name="erOppfylt" readOnly={readOnly}>
                      <RadioOption value label={{ id: 'UttakActivity.Oppfylt' }} />
                      <RadioOption value={false} label={{ id: 'UttakActivity.IkkeOppfylt' }} />
                    </RadioGroupField>
                    {erOppfylt !== undefined
                      && (
                        <div className={styles.marginBottom20}>
                          <ArrowBox alignOffset={erOppfylt ? 0 : 98}>
                            {erOppfylt && (
                              <SelectField
                                name="innvilgelseAarsak"
                                selectValues={
                                  mapAarsak(
                                    innvilgelseAarsakKoder,
                                    starttidspunktForeldrepenger,
                                    selectedItemData.utsettelseType,
                                    currentlySelectedStønadskonto || selectedItemData.periodeType,
                                    selectedItemData.aktiviteter.length === 1,
                                  )
                                }
                                validate={[required, notDash]}
                                label={{ id: 'UttakActivity.InnvilgelseAarsaker' }}
                                readOnly={readOnly}
                                bredde="fullbredde"
                              />
                            )}
                            {!erOppfylt && (
                              <SelectField
                                name="avslagAarsak"
                                selectValues={
                                  mapAarsak(
                                    avslagAarsakKoder,
                                    starttidspunktForeldrepenger,
                                    selectedItemData.utsettelseType,
                                    currentlySelectedStønadskonto || selectedItemData.periodeType,
                                    selectedItemData.aktiviteter.length === 1,
                                  )
                                }
                                validate={[required, notDash]}
                                label={{ id: 'UttakActivity.AvslagAarsak' }}
                                readOnly={readOnly}
                                bredde="fullbredde"
                              />
                            )}
                            {(selectedItemData.gradertAktivitet && erOppfylt) && (
                              <div className={styles.marginTop30}>
                                <Undertekst>
                                  <FormattedMessage id="UttakActivity.Gradering" />
                                </Undertekst>
                                <VerticalSpacer eightPx />
                                <RadioGroupField validate={[required]} name="graderingInnvilget" readOnly={readOnly}>
                                  <RadioOption value label={{ id: 'UttakActivity.Oppfylt' }} />
                                  <RadioOption value={false} label={{ id: 'UttakActivity.IkkeOppfylt' }} />
                                </RadioGroupField>
                                {graderingInnvilget === false && (
                                  <SelectField
                                    name="graderingAvslagAarsak"
                                    selectValues={mapAarsak(graderingAvslagAarsakKoder, starttidspunktForeldrepenger)}
                                    validate={[required, notDash]}
                                    label={{ id: 'UttakActivity.GraderingAvslagAarsaker' }}
                                    readOnly={readOnly}
                                    bredde="fullbredde"
                                  />
                                )}
                              </div>
                            )}
                          </ArrowBox>
                        </div>
                      )}
                  </div>
                )}
              {formProps.error}
              {formProps.warning}
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <Hovedknapp
                      mini
                      htmlType="button"
                      onClick={formProps.handleSubmit}
                      disabled={formProps.pristine || hasValidationError}
                    >
                      <FormattedMessage id="UttakActivity.Oppdater" />
                    </Hovedknapp>
                  </FlexColumn>
                  <FlexColumn>
                    <Knapp mini htmlType="button" onClick={cancelSelectedActivity}>
                      <FormattedMessage id="UttakActivity.Avbryt" />
                    </Knapp>
                  </FlexColumn>
                </FlexRow>
              </FlexContainer>
            </div>
          )}
    </>
  </div>
);

export type FormValues = {
  UttakFieldArray: AktivitetFieldArray[];
  begrunnelse?: string;
  flerbarnsdager: boolean;
  samtidigUttak: boolean;
  samtidigUttaksprosent?: string;
  avslagAarsak?: string;
  innvilgelseAarsak?: string;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: string;
  oppholdArsak: string;
  utsettelseType: Kodeverk;
  erOppfylt: boolean;
  selectedItem: PeriodeMedClassName;
}

const erPeriodeOppfylt = (periode: PeriodeMedClassName, kontoIkkeSatt: boolean) => {
  if (periode.erOppfylt === false) {
    return false;
  }
  if (periode.erOppfylt || (periode.periodeResultatType && periode.periodeResultatType.kode === periodeResultatType.INNVILGET)) {
    return true;
  }
  if (kontoIkkeSatt) {
    return false;
  }
  if (periode.periodeResultatType && periode.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING) {
    if (periode.periodeResultatÅrsak.kodeverk === INNVILGET_AARSAK || periode.oppholdÅrsak.kode !== oppholdArsakType.UDEFINERT) {
      return true;
    }
    if (periode.periodeResultatÅrsak.kodeverk === IKKE_OPPFYLT_AARSAK) {
      return false;
    }
    return undefined;
  }
  return false;
};

const resultatTypeObject = (erOppfylt: boolean, oppholdArsak: string) => {
  if (erOppfylt || oppholdArsak !== oppholdArsakType.UDEFINERT) {
    return ({
      kode: periodeResultatType.INNVILGET,
      navn: innvilgetTekst,
      kodeverk: PERIODE_RESULTAT_TYPE,
    });
  }
  return ({
    kode: periodeResultatType.AVSLATT,
    navn: avlsattTekst,
    kodeverk: PERIODE_RESULTAT_TYPE,
  });
};

const warningUttakActivity = (values: FormValues) => {
  let warnings = {};
  const rowArray: number[] = [];
  const touchedaktiviteter = document.getElementsByClassName('tableRowHighlight');
  const invalidArbeidsProsentVidUsettelse = isArbeidsProsentVidUtsettelse100(values, values.UttakFieldArray);
  if (invalidArbeidsProsentVidUsettelse && values.utsettelseType.kode === utsettelseArsakCodes.ARBEID) {
    warnings = {
      _warning:
  <AlertStripe type="advarsel" className={styles.advarsel}>
    <FormattedMessage
      id="ValidationMessage.UtsettelseUtenFullArbeid"
    />
  </AlertStripe>,
    };
  }

  if (touchedaktiviteter) {
    for (let i = 0; i < touchedaktiviteter.length; i += 1) {
      touchedaktiviteter[i].classList.remove('tableRowHighlight');
    }
  }
  if (values.UttakFieldArray) {
    values.UttakFieldArray.forEach((aktivitet, index: number) => {
      // @ts-ignore Fiks
      const utbetalingsgrad = Number.isNaN(aktivitet.utbetalingsgrad) ? aktivitet.utbetalingsgrad : parseFloat(aktivitet.utbetalingsgrad);
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
      if (invalidArbeidsProsentVidUsettelse && values.utsettelseType.kode === utsettelseArsakCodes.ARBEID) {
        warnings = {
          ...warnings,
          _warning:
  <AlertStripe type="advarsel" className={styles.advarsel}>
    <FormattedMessage
      id="ValidationMessage.MerEn100ProsentOgOgyldigUtsettlse"
    />
  </AlertStripe>,
        };
      } else {
        warnings = {
          ...warnings,
          _warning:
  <AlertStripe type="advarsel" className={styles.advarsel}>
    <FormattedMessage
      id="ValidationMessage.MerEn100Prosent"
    />
  </AlertStripe>,
        };
      }
    }
  }
  return warnings;
};

const validateUttakActivity = (values: FormValues) => {
  const errors = {
    UttakFieldArray: [],
  };
  if (values.UttakFieldArray) {
    values.UttakFieldArray.forEach((aktivitet, index: number) => {
      const samtidigUttaksprosent = parseFloat(values.samtidigUttaksprosent);
      // @ts-ignore Fiks
      const utbetalingsgrad = parseFloat(aktivitet.utbetalingsgrad);
      const invalidUtbetalingsgradMerSamitidigUttaksprosent = isUtbetalingsgradMerSamitidigUttaksprosent(samtidigUttaksprosent, utbetalingsgrad);
      const invalidUkerOgDagerVidNullUtbetalningsgrad = isUkerOgDagerVidNullUtbetalningsgrad(aktivitet.weeks, aktivitet.days, utbetalingsgrad);
      if (values.samtidigUttak && invalidUtbetalingsgradMerSamitidigUttaksprosent) {
        errors.UttakFieldArray[index] = {
          utbetalingsgrad: invalidUtbetalingsgradMerSamitidigUttaksprosent,
        };
      }
      if (invalidUkerOgDagerVidNullUtbetalningsgrad) {
        errors.UttakFieldArray[index] = {
          utbetalingsgrad: invalidUkerOgDagerVidNullUtbetalningsgrad,
        };
      }
    });
    if (values.utsettelseType && values.utsettelseType.kode !== '-' && values.erOppfylt) {
      values.UttakFieldArray.forEach((aktivitet, index: number) => {
        const daysInvalid = isTrekkdagerMerEnnNullUtsettelse(aktivitet.days);
        const weeksInvalid = isTrekkdagerMerEnnNullUtsettelse(aktivitet.weeks);
        // @ts-ignore Fiks
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

const getPeriodeResultatÅrsak = (erOppfylt: boolean, avslagAarsakObject: ArsakKodeverk, innvilgelseAarsakObject: ArsakKodeverk) => {
  if (!erOppfylt && avslagAarsakObject) {
    return avslagAarsakObject;
  }
  if (erOppfylt && innvilgelseAarsakObject) {
    return innvilgelseAarsakObject;
  }

  return {
    kode: '-',
    kodeverk: '',
    navn: '',
  };
};

const transformValues = (
  values: FormValues,
  avslagAarsakKoder: ArsakKodeverk[],
  innvilgelseAarsakKoder: ArsakKodeverk[],
  graderingAvslagAarsakKoder: KodeverkMedNavn[],
): PeriodeMedClassName => {
  const { ...transformvalue } = values.selectedItem;
  const { ...nyeVerdier } = omit(values, 'selectedItem');
  const [avslagAarsakObject] = avslagAarsakKoder.filter((a) => a.kode === values.avslagAarsak);
  const [innvilgelseAarsakObject] = innvilgelseAarsakKoder.filter((a) => a.kode === values.innvilgelseAarsak);
  const [graderingAvslagAarsakObject] = graderingAvslagAarsakKoder.filter((a) => a.kode === values.graderingAvslagAarsak);
  if (values.oppholdArsak !== oppholdArsakType.UDEFINERT) {
    nyeVerdier.UttakFieldArray[0].stønadskontoType.kode = oppholdArsakMapper[values.oppholdArsak];
  }
  transformvalue.aktiviteter = nyeVerdier.UttakFieldArray.map((a) => {
    const { ...bekreftetAktivitet } = a;
    bekreftetAktivitet.stønadskontoType.navn = uttakPeriodeNavn[a.stønadskontoType.kode];
    return bekreftetAktivitet;
  });

  return {
    ...values.selectedItem,
    begrunnelse: values.begrunnelse,
    flerbarnsdager: values.flerbarnsdager,
    samtidigUttak: values.samtidigUttak,
    samtidigUttaksprosent: values.samtidigUttaksprosent ? parseFloat(values.samtidigUttaksprosent) : null,
    erOppfylt: values.erOppfylt,
    graderingInnvilget: values.erOppfylt ? values.graderingInnvilget : false,
    oppholdÅrsak: {
      kode: values.oppholdArsak,
      kodeverk: values.selectedItem.oppholdÅrsak.kodeverk,
    },
    periodeResultatType: resultatTypeObject(values.erOppfylt, values.oppholdArsak),
    periodeResultatÅrsak: getPeriodeResultatÅrsak(values.erOppfylt, avslagAarsakObject, innvilgelseAarsakObject),
    graderingAvslagÅrsak: values.erOppfylt && !values.graderingInnvilget && graderingAvslagAarsakObject ? graderingAvslagAarsakObject : {
      kode: '-',
      kodeverk: '',
      navn: '',
    },
  };
};

// https://jira.adeo.no/browse/PFP-7937
const calculateCorrectWeeks = (aktivitet: AktivitetFieldArray, item: PeriodeMedClassName): number => {
  if (item.periodeResultatType && !aktivitet.trekkdagerDesimaler && (item.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return Math.floor(aktivitet.trekkdagerDesimaler / 5);
};

const calculateCorrectDays = (aktivitet: AktivitetFieldArray, item: PeriodeMedClassName): number => {
  if (item.periodeResultatType && !aktivitet.trekkdagerDesimaler && (item.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return parseFloat(((aktivitet.trekkdagerDesimaler % 5).toFixed(1)));
};

const finnUker = (aktivitet: AktivitetFieldArray, selectedItem: PeriodeMedClassName): number => {
  let weeks = typeof aktivitet.weeks !== 'undefined' ? aktivitet.weeks : calculateCorrectWeeks(aktivitet, selectedItem);
  if (aktivitet.weeks === 0 && aktivitet.days === 0 && selectedItem.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING) {
    weeks = undefined;
  }
  if (aktivitet.weeks < 0) {
    weeks = 0;
  }
  return weeks;
};

const finnDager = (aktivitet: AktivitetFieldArray, selectedItem: PeriodeMedClassName): number => {
  let dager = typeof aktivitet.weeks !== 'undefined' ? aktivitet.days : calculateCorrectDays(aktivitet, selectedItem);
  if (aktivitet.weeks === 0 && aktivitet.days === 0 && selectedItem.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING) {
    dager = undefined;
  }
  if (aktivitet.days < 0) {
    dager = 0;
  }
  return dager;
};

export const lagAktiviteter = (selectedItem: PeriodeMedClassName, kontoIkkeSatt: boolean): AktivitetFieldArray[] => selectedItem.aktiviteter
  .map((aktivitet): AktivitetFieldArray => ({
    ...aktivitet,
    utbetalingsgrad: !kontoIkkeSatt ? aktivitet.utbetalingsgrad : '0',
    fom: selectedItem.fom,
    tom: selectedItem.tom,
    weeks: finnUker(aktivitet, selectedItem),
    days: finnDager(aktivitet, selectedItem),
  }));

const buildInitialValues = createSelector(
  [(props: PureOwnProps) => props.selectedItemData],
  (selectedItem): FormValues => {
    const kontoIkkeSatt = !selectedItem.periodeType
      && (selectedItem.aktiviteter[0].stønadskontoType.kode === '-');
    const erOppfylt = erPeriodeOppfylt(selectedItem, kontoIkkeSatt);
    return {
      UttakFieldArray: lagAktiviteter(selectedItem, kontoIkkeSatt),
      begrunnelse: selectedItem.begrunnelse,
      flerbarnsdager: selectedItem.flerbarnsdager,
      samtidigUttak: selectedItem.samtidigUttak,
      samtidigUttaksprosent: selectedItem.samtidigUttaksprosent ? selectedItem.samtidigUttaksprosent.toString() : undefined,
      avslagAarsak: erOppfylt ? undefined : selectedItem.periodeResultatÅrsak.kode,
      innvilgelseAarsak: erOppfylt ? selectedItem.periodeResultatÅrsak.kode : undefined,
      graderingInnvilget: selectedItem.graderingInnvilget,
      graderingAvslagAarsak: selectedItem.graderingAvslagÅrsak ? selectedItem.graderingAvslagÅrsak.kode : '-',
      oppholdArsak: selectedItem.oppholdÅrsak.kode,
      utsettelseType: selectedItem.utsettelseType,
      erOppfylt,
      selectedItem,
    };
  },
);

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    behandlingVersjon, behandlingId, behandlingsresultat, alleKodeverk,
  } = initialOwnProps;
  const avslagAarsaker = alleKodeverk[kodeverkTyper.UTTAK_AVSLAG_ARSAK] as ArsakKodeverk[];
  const innvilgelseAarsaker = alleKodeverk[kodeverkTyper.INNVILGET_AARSAK] as ArsakKodeverk[];
  const graderingAvslagAarsakKoder = alleKodeverk[kodeverkTyper.GRADERING_AVSLAG_AARSAK] as ArsakKodeverk[];
  const utsettelseAarsak = alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE];
  const periodeTyper = alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE];
  const oppholdArsakTyper = alleKodeverk[kodeverkTyper.OPPHOLD_ARSAK];

  const validate = (values: FormValues) => validateUttakActivity(values);
  const warn = (values: FormValues) => warningUttakActivity(values);
  const onSubmit = (values: FormValues) => initialOwnProps.updateActivity(transformValues(
    values,
    avslagAarsaker,
    innvilgelseAarsaker,
    graderingAvslagAarsakKoder,
  ));

  return (state: any, ownProps: PureOwnProps) => {
    const erOppfylt = behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'erOppfylt');
    const begrunnelse = behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'begrunnelse');
    const arsak = behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, erOppfylt ? 'innvilgelseAarsak' : 'avslagAarsak');
    const uttakFieldArray = behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'UttakFieldArray');
    const hasValidationError = erOppfylt === undefined || !begrunnelse || !arsak;
    const currentlySelectedActivity = uttakFieldArray && uttakFieldArray.length > 0 ? uttakFieldArray[0] : undefined;
    const currentlySelectedStønadskonto = currentlySelectedActivity ? currentlySelectedActivity.stønadskontoType : undefined;

    return {
      hasValidationError,
      validate,
      warn,
      onSubmit,
      kontoIkkeSatt: !ownProps.selectedItemData.periodeType && (ownProps.selectedItemData.aktiviteter[0].stønadskontoType.kode === '-'),
      periodeTyper,
      oppholdArsakTyper,
      graderingAvslagAarsakKoder,
      utsettelseAarsak,
      uttakFieldArray,
      erOppfylt,
      currentlySelectedStønadskonto,
      initialValues: buildInitialValues(ownProps),
      avslagAarsakKoder: avslagAarsaker,
      innvilgelseAarsakKoder: innvilgelseAarsaker,
      graderingInnvilget: behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'graderingInnvilget'),
      erSamtidigUttak: behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'samtidigUttak'),
      samtidigUttaksprosent: behandlingFormValueSelector(uttakActivityForm, behandlingId, behandlingVersjon)(state, 'samtidigUttaksprosent'),
      starttidspunktForeldrepenger: behandlingsresultat.skjæringstidspunkt ? behandlingsresultat.skjæringstidspunkt.dato : undefined,
    };
  };
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: uttakActivityForm,
  enableReinitialize: true,
})(UttakActivity)));
