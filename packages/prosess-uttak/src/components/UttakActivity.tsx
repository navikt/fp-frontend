import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import {
  FieldArray, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import AlertStripe from 'nav-frontend-alertstriper';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Undertekst } from 'nav-frontend-typografi';

import {
  RadioGroupField, RadioOption, SelectField, TextAreaField,
} from '@fpsak-frontend/form';
import {
  merEn100ProsentMessage,
  arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage,
  hasValidText,
  isTrekkdagerMerEnnNullUtsettelse,
  isUkerOgDagerVidNullUtbetalningsgrad,
  isUtbetalingMerEnnNullUtsettelse,
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
  ArbeidsgiverOpplysningerPerId, AlleKodeverk, Behandling, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import RenderUttakTable, { AktivitetFieldArray } from './RenderUttakTable';
import UttakInfo from './UttakInfo';

import styles from './uttakActivity.less';
import { PeriodeMedClassName } from './Uttak';

const uttakActivityForm = 'uttaksresultatActivity';
const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

function sortAlphabetically(a: KodeverkMedNavn, b: KodeverkMedNavn): number {
  if (a.navn < b.navn) {
    return -1;
  }
  if (a.navn > b.navn) {
    return 1;
  }
  return 0;
}

export type ArsakKodeverk = {
  utfallType?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
  gyldigForLovendringer: string[];
} & KodeverkMedNavn;

const mapAarsak = (
  årsakKoder: ArsakKodeverk[],
  utfallType: string,
  kreverSammenhengendeUttak: boolean,
  utsettelseType?: string,
  periodeType?: string,
  skalFiltrere?: boolean,
): ReactElement[] => {
  årsakKoder.sort(sortAlphabetically);
  let filteredNyKodeArray = årsakKoder
    .filter((kodeItem) => !utfallType || kodeItem.utfallType === utfallType)
    .filter((kodeItem) => {
      if (kodeItem.gyldigForLovendringer === undefined) {
        return true;
      }
      return kreverSammenhengendeUttak
        ? kodeItem.gyldigForLovendringer.includes('KREVER_SAMMENHENGENDE_UTTAK')
        : kodeItem.gyldigForLovendringer.includes('FRITT_UTTAK');
    });

  if (!skalFiltrere) {
    return filteredNyKodeArray
      .map(({
        kode,
        navn,
      }) => <option value={kode} key={kode}>{navn}</option>);
  }

  if (utsettelseType && utsettelseType !== utsettelseArsakCodes.UDEFINERT) {
    filteredNyKodeArray = filteredNyKodeArray.filter((kv) => kv.uttakTyper.includes('UTSETTELSE'));
  }

  if (periodeType && utsettelseType && utsettelseType === utsettelseArsakCodes.UDEFINERT) {
    filteredNyKodeArray = filteredNyKodeArray
      .filter((kv) => kv.uttakTyper.includes('UTTAK'))
      .filter((kv) => kv.valgbarForKonto.includes(periodeType));
  }

  return filteredNyKodeArray
    .map(({
      kode,
      navn,
    }) => <option value={kode} key={kode}>{navn}</option>);
};

const mapGraderingAarsak = (
  årsakKoder: ArsakKodeverk[],
): ReactElement[] => {
  årsakKoder.sort(sortAlphabetically);

  return årsakKoder
    .map(({
      kode,
      navn,
    }) => <option value={kode} key={kode}>{navn}</option>);
};

export type FormValues = {
  UttakFieldArray?: AktivitetFieldArray[];
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
  harSoktOmFlerbarnsdager: boolean;
  alleKodeverk: AlleKodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kreverSammenhengendeUttak: boolean;
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
  currentlySelectedStønadskonto: string;
  periodeAarsakKoder: ArsakKodeverk[];
  graderingInnvilget: boolean;
  erSamtidigUttak: boolean;
  samtidigUttaksprosent: string;
  validate: (formValues: FormValues) => any;
  warn: (formValues: FormValues) => any;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

export const UttakActivity: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  periodeTyper,
  oppholdArsakTyper,
  readOnly,
  cancelSelectedActivity,
  erOppfylt,
  graderingInnvilget,
  erSamtidigUttak,
  periodeAarsakKoder,
  graderingAvslagAarsakKoder,
  selectedItemData,
  kontoIkkeSatt,
  harSoktOmFlerbarnsdager,
  alleKodeverk,
  hasValidationError,
  currentlySelectedStønadskonto,
  arbeidsgiverOpplysningerPerId,
  kreverSammenhengendeUttak,
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
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </Row>
    {selectedItemData.oppholdÅrsak === oppholdArsakType.UDEFINERT
        && (
          <Row className={readOnly ? null : styles.marginTop}>
            <Column xs="12">
              <FieldArray
                name="UttakFieldArray"
                component={RenderUttakTable}
                periodeTyper={periodeTyper}
                readOnly={readOnly}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            </Column>
          </Row>
        )}
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
              {selectedItemData.oppholdÅrsak === oppholdArsakType.UDEFINERT
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
                            <SelectField
                              name="periodeAarsak"
                              selectValues={
                                mapAarsak(
                                  periodeAarsakKoder,
                                  erOppfylt ? 'INNVILGET' : 'AVSLÅTT',
                                  kreverSammenhengendeUttak,
                                  selectedItemData.utsettelseType,
                                  currentlySelectedStønadskonto || selectedItemData.periodeType,
                                  selectedItemData.aktiviteter.length === 1,
                                )
                              }
                              validate={[required, notDash]}
                              label={erOppfylt ? { id: 'UttakActivity.InnvilgelseAarsaker' } : { id: 'UttakActivity.AvslagAarsak' }}
                              readOnly={readOnly}
                              bredde="fullbredde"
                            />
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
                                    selectValues={mapGraderingAarsak(graderingAvslagAarsakKoder)}
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
  </div>
);

const erPeriodeOppfylt = (periode: PeriodeMedClassName, utfallKoder: ArsakKodeverk[], kontoIkkeSatt: boolean): boolean => {
  if (periode.erOppfylt === false) {
    return false;
  }
  if (periode.erOppfylt || (periode.periodeResultatType && periode.periodeResultatType === periodeResultatType.INNVILGET)) {
    return true;
  }
  if (kontoIkkeSatt) {
    return false;
  }
  if (periode.periodeResultatType && periode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING) {
    // Litt flaky. Bør sende med kodeverket og slå opp utfallType
    const kodeverkKode = utfallKoder.find((kodeItem) => kodeItem.kode === periode.periodeResultatÅrsak);
    if ((kodeverkKode && kodeverkKode.utfallType === 'INNVILGET') || periode.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
      return true;
    }
    if (kodeverkKode && kodeverkKode.utfallType === 'AVSLÅTT') {
      return false;
    }
    return undefined;
  }
  return false;
};

const resultatTypeObject = (erOppfylt: boolean, oppholdArsak: string): string => {
  if (erOppfylt || oppholdArsak !== oppholdArsakType.UDEFINERT) {
    return periodeResultatType.INNVILGET;
  }
  return periodeResultatType.AVSLATT;
};

const isutbetalingPlusArbeidsprosentMerEn100 = (utbetalingsgrad: number, prosentArbeid: number): string => {
  if (utbetalingsgrad + prosentArbeid > 100) {
    return merEn100ProsentMessage();
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
        <AlertStripe type="advarsel" className={styles.advarsel}>
          <FormattedMessage id="UttakActivity.MerEn100ProsentOgOgyldigUtsettlse" />
        </AlertStripe>
      );
    }
    return (
      <AlertStripe type="advarsel" className={styles.advarsel}>
        <FormattedMessage id="UttakActivity.MerEn100Prosent" />
      </AlertStripe>
    );
  }

  return undefined;
};

const isArbeidsProsentVidUtsettelse100 = (
  values: FormValues,
  aktivitetArray: AktivitetFieldArray[],
): string => {
  const andelIArbeid = [0];
  if (values.utsettelseType && values.erOppfylt && aktivitetArray) {
    aktivitetArray.forEach((aktivitet) => {
      andelIArbeid.push(aktivitet.prosentArbeid);
    });
    const prosentIArbeid = andelIArbeid.reduce(getSum);
    if (prosentIArbeid < 100) {
      return arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage();
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
  <AlertStripe type="advarsel" className={styles.advarsel}>
    <FormattedMessage
      id="UttakActivity.UtsettelseUtenFullArbeid"
    />
  </AlertStripe>,
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

const validateUttakActivity = (values: FormValues): any => {
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
    if (values.utsettelseType && values.utsettelseType !== '-' && values.erOppfylt) {
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

const transformValues = (
  values: FormValues,
  periodeAarsakKoder: ArsakKodeverk[],
  graderingAvslagAarsakKoder: KodeverkMedNavn[],
): PeriodeMedClassName => {
  const { ...nyeVerdier } = omit(values, 'selectedItem');
  const [periodeAarsakObject] = periodeAarsakKoder.filter((a) => a.kode === values.periodeAarsak);
  const [graderingAvslagAarsakObject] = graderingAvslagAarsakKoder.filter((a) => a.kode === values.graderingAvslagAarsak);
  if (values.oppholdArsak !== oppholdArsakType.UDEFINERT) {
    nyeVerdier.UttakFieldArray[0].stønadskontoType = oppholdArsakMapper[values.oppholdArsak];
  }
  const aktiviteter = nyeVerdier.UttakFieldArray.map((a) => {
    const { ...bekreftetAktivitet } = a;
    const kode = a.stønadskontoType === '' ? uttakPeriodeNavn.UDEFINERT : a.stønadskontoType;
    bekreftetAktivitet.stønadskontoType = kode;
    return bekreftetAktivitet;
  });

  return {
    ...values.selectedItem,
    aktiviteter,
    begrunnelse: values.begrunnelse,
    flerbarnsdager: values.flerbarnsdager,
    samtidigUttak: values.samtidigUttak,
    samtidigUttaksprosent: values.samtidigUttaksprosent ? parseFloat(values.samtidigUttaksprosent) : null,
    erOppfylt: values.erOppfylt,
    graderingInnvilget: values.erOppfylt ? values.graderingInnvilget : false,
    oppholdÅrsak: values.oppholdArsak,
    periodeResultatType: resultatTypeObject(values.erOppfylt, values.oppholdArsak),
    periodeResultatÅrsak: periodeAarsakObject ? periodeAarsakObject.kode : '-',
    graderingAvslagÅrsak: values.erOppfylt && !values.graderingInnvilget && graderingAvslagAarsakObject ? graderingAvslagAarsakObject.kode : '-',
  };
};

// https://jira.adeo.no/browse/PFP-7937
const calculateCorrectWeeks = (aktivitet: AktivitetFieldArray, item: PeriodeMedClassName): number => {
  if (item.periodeResultatType && !aktivitet.trekkdagerDesimaler && (item.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return Math.floor(aktivitet.trekkdagerDesimaler / 5);
};

const calculateCorrectDays = (aktivitet: AktivitetFieldArray, item: PeriodeMedClassName): number => {
  if (item.periodeResultatType && !aktivitet.trekkdagerDesimaler && (item.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return parseFloat(((aktivitet.trekkdagerDesimaler % 5).toFixed(1)));
};

const finnUker = (aktivitet: AktivitetFieldArray, selectedItem: PeriodeMedClassName): number => {
  let weeks = typeof aktivitet.weeks !== 'undefined' ? aktivitet.weeks : calculateCorrectWeeks(aktivitet, selectedItem);
  if (aktivitet.weeks === 0 && aktivitet.days === 0 && selectedItem.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING) {
    weeks = undefined;
  }
  if (aktivitet.weeks < 0) {
    weeks = 0;
  }
  return weeks;
};

const finnDager = (aktivitet: AktivitetFieldArray, selectedItem: PeriodeMedClassName): number => {
  let dager = typeof aktivitet.weeks !== 'undefined' ? aktivitet.days : calculateCorrectDays(aktivitet, selectedItem);
  if (aktivitet.weeks === 0 && aktivitet.days === 0 && selectedItem.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING) {
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
  }))
  .sort((a1, a2) => (a1.arbeidsgiverReferanse && a2.arbeidsgiverReferanse ? a1.arbeidsgiverReferanse.localeCompare(a2.arbeidsgiverReferanse) : 0));

const buildInitialValues = createSelector(
  [(props: PureOwnProps) => props.selectedItemData, (props: PureOwnProps) => props.alleKodeverk[kodeverkTyper.PERIODE_RESULTAT_AARSAK] as ArsakKodeverk[]],
  (selectedItem, utfallKoder): FormValues => {
    const kontoIkkeSatt = !selectedItem.periodeType
      && (selectedItem.aktiviteter[0].stønadskontoType === '-');
    const erOppfylt = erPeriodeOppfylt(selectedItem, utfallKoder, kontoIkkeSatt);
    return {
      UttakFieldArray: lagAktiviteter(selectedItem, kontoIkkeSatt),
      begrunnelse: selectedItem.begrunnelse,
      flerbarnsdager: selectedItem.flerbarnsdager,
      samtidigUttak: selectedItem.samtidigUttak,
      samtidigUttaksprosent: selectedItem.samtidigUttaksprosent ? selectedItem.samtidigUttaksprosent.toString() : undefined,
      periodeAarsak: selectedItem.periodeResultatÅrsak,
      graderingInnvilget: selectedItem.graderingInnvilget,
      graderingAvslagAarsak: selectedItem.graderingAvslagÅrsak ? selectedItem.graderingAvslagÅrsak : '-',
      oppholdArsak: selectedItem.oppholdÅrsak,
      utsettelseType: selectedItem.utsettelseType,
      erOppfylt,
      selectedItem,
    };
  },
);

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const { alleKodeverk } = initialOwnProps;
  const periodeAarsaker = alleKodeverk[kodeverkTyper.PERIODE_RESULTAT_AARSAK] as ArsakKodeverk[];
  const graderingAvslagAarsakKoder = alleKodeverk[kodeverkTyper.GRADERING_AVSLAG_AARSAK] as ArsakKodeverk[];
  const utsettelseAarsak = alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE];
  const periodeTyper = alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE];
  const oppholdArsakTyper = alleKodeverk[kodeverkTyper.OPPHOLD_ARSAK];

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
      kontoIkkeSatt: !ownProps.selectedItemData.periodeType && (ownProps.selectedItemData.aktiviteter[0].stønadskontoType === '-'),
      periodeTyper,
      oppholdArsakTyper,
      graderingAvslagAarsakKoder,
      utsettelseAarsak,
      uttakFieldArray,
      erOppfylt,
      currentlySelectedStønadskonto,
      initialValues: buildInitialValues(ownProps),
      periodeAarsakKoder: periodeAarsaker,
      graderingInnvilget: formValueSelector(uttakActivityForm)(state, 'graderingInnvilget'),
      erSamtidigUttak: formValueSelector(uttakActivityForm)(state, 'samtidigUttak'),
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
