import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  CheckboxField,
  DecimalField,
  PeriodpickerField,
  RadioGroupField,
  RadioOption,
  SelectField,
  TextAreaField,
} from '@fpsak-frontend/form';
import {
  calcDaysAndWeeks,
  guid,
  hasValidDate,
  hasValidDecimal,
  hasValidPeriod,
  hasValidText,
  maxLength,
  maxValue,
  minLength,
  required,
  requiredIfNotPristine,
} from '@fpsak-frontend/utils';
import uttakArbeidType from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import overforingArsak from '@fpsak-frontend/kodeverk/src/overforingArsak';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import {
  ArbeidsgiverOpplysningerPerId,
  FaktaArbeidsforhold, Kodeverk, KodeverkMedNavn, Personoversikt,
} from '@fpsak-frontend/types';

import lagVisningsNavn from './utils/lagVisningsNavn';

import styles from './uttakNyPeriode.less';

const maxValue100 = maxValue(100);
const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const gyldigeUttakperioder = [
  uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE,
];

const gyldigeOverføringÅrsaker = [
  overforingArsak.INSTITUSJONSOPPHOLD_ANNEN_FORELDER,
  overforingArsak.SYKDOM_ANNEN_FORELDER,
  overforingArsak.IKKE_RETT_ANNEN_FORELDER,
  overforingArsak.ALENEOMSORG,
];

const lagOptions = (typer: KodeverkMedNavn[], kodeverkVerdier: string[]): ReactElement[] => typer
  .filter(({ kode }) => kodeverkVerdier.includes(kode))
  .map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const mapUtsettelseÅrsaker = (typer: KodeverkMedNavn[]): ReactElement[] => typer.map(({
  kode,
  navn,
}) => (
  <option value={kode} key={kode}>
    {navn}
  </option>
));

const mapArbeidsforhold = (
  andeler: FaktaArbeidsforhold[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => andeler.map((andel) => {
  const { arbeidType, arbeidsgiverReferanse } = andel;

  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  let periodeArbeidsforhold = '';
  if (arbeidType && arbeidType.kode !== uttakArbeidType.ORDINÆRT_ARBEID) {
    periodeArbeidsforhold = getKodeverknavn(arbeidType);
  } else {
    periodeArbeidsforhold = lagVisningsNavn(arbeidsgiverOpplysninger);
  }

  const identifikator = arbeidsgiverOpplysninger?.identifikator || '-';
  const navn = arbeidsgiverOpplysninger?.navn || getKodeverknavn(arbeidType);
  const fixedAktørId = arbeidsgiverOpplysninger?.referanse || '-';
  const virksomhet = !arbeidsgiverOpplysninger?.erPrivatPerson || '-';

  return (
    <option value={`${identifikator}|${navn}|${fixedAktørId}|${virksomhet}|${arbeidType.kode}`} key={guid()}>
      {periodeArbeidsforhold}
    </option>
  );
});

const periodeTypeTrengerArsak = (sokerKjonn: string, periodeType: string): boolean => (sokerKjonn === navBrukerKjonn.MANN
  && periodeType === uttakPeriodeType.MODREKVOTE) || (sokerKjonn === navBrukerKjonn.KVINNE && periodeType === uttakPeriodeType.FEDREKVOTE);

export type NyPeriode = {
  fom: string;
  tom: string;
  periodeType: string;
  periodeOverforingArsak: Kodeverk;
  periodeArsak: Kodeverk;
  samtidigUttakNyPeriode: boolean;
  arbeidsForhold: string;
  arbeidstidprosent: number;
  typeUttak: string;
}

type FormValues = {
  fom?: string;
  tom?: string;
  periodeType?: string;
  periodeOverforingArsak?: string;
  periodeArsak?: string;
  arbeidsForhold?: string;
  arbeidstidprosent?: number;
  typeUttak?: string;
  flerbarnsdager?: boolean;
  samtidigUttakNyPeriode?: boolean;
  samtidigUttaksprosentNyPeriode?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  newPeriodeCallback: (values: FormValues) => void;
  uttakPeriodeVurderingTyper: KodeverkMedNavn[];
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  personoversikt: Personoversikt;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  newPeriodeResetCallback: (...args: any[]) => any;
  nyPeriodeDisabledDaysFom: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  periodeTyper?: KodeverkMedNavn[];
  utsettelseÅrsaker: KodeverkMedNavn[];
  overføringÅrsaker: KodeverkMedNavn[];
  andeler: FaktaArbeidsforhold[];
  sokerKjonn: string;
  initialValues: FormValues;
  nyPeriode: NyPeriode;
  onSubmit: (values: FormValues) => any;
}

export const UttakNyPeriode: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  newPeriodeResetCallback,
  periodeTyper,
  utsettelseÅrsaker,
  overføringÅrsaker,
  nyPeriode,
  sokerKjonn,
  getKodeverknavn,
  nyPeriodeDisabledDaysFom,
  andeler,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => {
  const numberOfDaysAndWeeks = calcDaysAndWeeks(nyPeriode.fom, nyPeriode.tom);

  return (
    <div className={styles.periodeContainer}>
      <div className={styles.periodeType}>
        <div className={styles.headerWrapper}>
          <Element>
            <FormattedMessage id="UttakInfoPanel.NyPeriode" />
          </Element>
        </div>
      </div>
      <div className={styles.periodeInnhold}>
        <VerticalSpacer eightPx />
        <FlexContainer wrap>
          <FlexRow wrap>
            <FlexColumn>
              <FlexRow>
                <FlexColumn>
                  <PeriodpickerField
                    names={['fom', 'tom']}
                    label={{ id: 'UttakInfoPanel.Periode' }}
                    validate={[required, hasValidDate]}
                    disabledDays={{ before: moment(nyPeriodeDisabledDaysFom).toDate() }}
                  />
                </FlexColumn>
                <FlexColumn className={styles.suffix}>
                  <div id="antallDager">
                    {nyPeriode.fom && (
                      <FormattedMessage
                        id={numberOfDaysAndWeeks.id.toString()}
                        values={{
                          weeks: numberOfDaysAndWeeks.weeks.toString(),
                          days: numberOfDaysAndWeeks.days.toString(),
                        }}
                      />
                    )}
                  </div>
                </FlexColumn>
              </FlexRow>
              <FlexColumn>
                <FlexRow wrap>
                  <FlexColumn>
                    <FlexRow>
                      <SelectField
                        label={{ id: 'UttakInfoPanel.StonadsKonto' }}
                        bredde="m"
                        name="periodeType"
                        validate={nyPeriode.typeUttak !== 'utsettelse' ? [required] : []}
                        selectValues={lagOptions(periodeTyper, gyldigeUttakperioder)}
                      />
                    </FlexRow>
                  </FlexColumn>
                  <FlexColumn className={styles.alignRightHorizontalBottom}>
                    <CheckboxField
                      name="flerbarnsdager"
                      label={<FormattedMessage id="UttakInfoPanel.Flerbarnsdager" />}
                    />
                    <CheckboxField
                      name="samtidigUttakNyPeriode"
                      label={<FormattedMessage id="UttakInfoPanel.SamtidigUttak" />}
                    />
                    {nyPeriode.samtidigUttakNyPeriode && (
                      <FlexColumn>
                        <FlexRow>
                          <FlexColumn>
                            <DecimalField
                              className={styles.fieldHorizontal}
                              name="samtidigUttaksprosentNyPeriode"
                              bredde="XS"
                              label={{ id: 'UttakInfoPanel.SamtidigUttakProsentandel' }}
                              validate={[required, maxValue100, hasValidDecimal]}
                              // @ts-ignore Fiks
                              normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                              inputClassName={styles.textAlignRight}
                            />
                          </FlexColumn>
                          <FlexColumn className={styles.suffixAligAuto}>%</FlexColumn>
                        </FlexRow>
                      </FlexColumn>
                    )}
                  </FlexColumn>
                </FlexRow>
              </FlexColumn>
              <FlexColumn>
                {periodeTypeTrengerArsak(sokerKjonn, nyPeriode.periodeType) && (
                  <FlexRow>
                    <SelectField
                      label={{ id: 'UttakInfoPanel.AngiArsakforOverforing' }}
                      bredde="m"
                      name="periodeOverforingArsak"
                      selectValues={lagOptions(overføringÅrsaker, gyldigeOverføringÅrsaker)}
                      validate={[required]}
                    />
                  </FlexRow>
                )}
              </FlexColumn>
            </FlexColumn>
          </FlexRow>
          <FlexRow wrap className={styles.typeUttakStyle}>
            <FlexColumn>
              <div>
                <Undertekst>
                  <FormattedMessage id="UttakInfoPanel.TypeUttak" />
                </Undertekst>
                <VerticalSpacer eightPx />
              </div>
              <div>
                <RadioGroupField name="typeUttak" validate={[required]} direction="vertical">
                  <RadioOption label={<FormattedMessage id="UttakInfoPanel.FulltUttak" />} value="fullt" />
                  <RadioOption label={<FormattedMessage id="UttakInfoPanel.GradertUttak" />} value="gradert" />
                  <RadioOption label={<FormattedMessage id="UttakInfoPanel.Utsettelse" />} value="utsettelse" />
                </RadioGroupField>
              </div>
            </FlexColumn>
            <FlexColumn>
              {nyPeriode.typeUttak !== null && nyPeriode.typeUttak !== 'fullt' && (
                <ArrowBox
                  alignLeft
                  marginTop={nyPeriode.typeUttak === 'utsettelse' ? 80 : 0}
                  alignOffset={nyPeriode.typeUttak === 'utsettelse' ? 52 : 92}
                >
                  {nyPeriode.typeUttak === 'gradert' && (
                    <div>
                      <div>
                        <SelectField
                          label={{ id: 'UttakInfoPanel.Aktivitet' }}
                          bredde="xl"
                          name="arbeidsForhold"
                          validate={[requiredIfNotPristine, required]}
                          selectValues={mapArbeidsforhold(andeler, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
                        />
                      </div>
                      <FlexRow>
                        <FlexColumn>
                          <DecimalField
                            name="arbeidstidprosent"
                            label={{ id: 'UttakInfoPanel.AndelIArbeid' }}
                            bredde="XS"
                            validate={[required, maxValue100, hasValidDecimal]}
                            // @ts-ignore Fiks
                            normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                            inputClassName={styles.textAlignRight}
                          />
                        </FlexColumn>
                        <FlexColumn className={styles.suffix}>%</FlexColumn>
                      </FlexRow>
                    </div>
                  )}

                  {nyPeriode.typeUttak === 'utsettelse' && (
                    <SelectField
                      label={{ id: 'UttakInfoPanel.ArsakUtsettelse' }}
                      bredde="xl"
                      name="periodeArsak"
                      selectValues={mapUtsettelseÅrsaker(utsettelseÅrsaker)}
                      validate={[required]}
                    />
                  )}
                </ArrowBox>
              )}
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <div className={styles.textAreaStyle}>
                <TextAreaField
                  name="begrunnelse"
                  label={{ id: 'UttakInfoPanel.BegrunnEndringene' }}
                  validate={[required, minLength3, maxLength4000, hasValidText]}
                  maxLength={4000}
                  autoFocus
                />
              </div>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer twentyPx />
        <Hovedknapp
          className={styles.oppdaterMargin}
          htmlType="button"
          mini
          onClick={formProps.handleSubmit}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="UttakInfoPanel.Oppdater" />
        </Hovedknapp>
        <Knapp htmlType="button" mini onClick={newPeriodeResetCallback}>
          <FormattedMessage id="UttakInfoPanel.Avbryt" />
        </Knapp>
      </div>
    </div>
  );
};

const getPeriodeData = (periode: string, periodeArray: KodeverkMedNavn[]): KodeverkMedNavn[] => periodeArray.filter(({
  kode,
}) => kode === periode);

const lagArbeidsgiver = (arbeidsForhold: string[]) => (arbeidsForhold
  && (arbeidsForhold[0] !== '-' || arbeidsForhold[2] !== '-')
  ? {
    identifikator: arbeidsForhold[0] !== '-' && arbeidsForhold[3] !== '-' ? arbeidsForhold[0] : undefined,
    navn: arbeidsForhold[1] ? arbeidsForhold[1] : undefined,
    aktørId: arbeidsForhold[2] !== '-' && arbeidsForhold[3] === '-' ? arbeidsForhold[2] : undefined,
    virksomhet: arbeidsForhold[3] !== '-',
    arbeidType: arbeidsForhold[4],
  } : null);

const transformValues = (
  values: FormValues,
  utsettelseÅrsaker: KodeverkMedNavn[],
  overføringÅrsaker: KodeverkMedNavn[],
  uttakPeriodeVurderingTyper: KodeverkMedNavn[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  periodeTyper?: KodeverkMedNavn[],
): any => {
  const periodeObjekt = getPeriodeData(values.periodeType, periodeTyper)[0] || null;
  const utsettelseÅrsakObjekt = getPeriodeData(values.periodeArsak, utsettelseÅrsaker)[0];
  const overføringÅrsakObjekt = getPeriodeData(values.periodeOverforingArsak, overføringÅrsaker)[0];

  const utsettelseÅrsak = utsettelseÅrsakObjekt !== undefined
    ? {
      kode: utsettelseÅrsakObjekt.kode,
      kodeverk: utsettelseÅrsakObjekt.kodeverk,
      navn: getKodeverknavn(utsettelseÅrsakObjekt),
    }
    : undefined;
  const overføringÅrsak = overføringÅrsakObjekt !== undefined
    ? {
      kode: overføringÅrsakObjekt.kode,
      kodeverk: overføringÅrsakObjekt.kodeverk,
      navn: getKodeverknavn(overføringÅrsakObjekt),
    }
    : undefined;

  const resultat = uttakPeriodeVurderingTyper.find((type: any) => type.kode === uttakPeriodeVurdering.PERIODE_OK);
  const arbeidsForhold = values.arbeidsForhold ? values.arbeidsForhold.split('|') : null;

  const arbeidsgiver = lagArbeidsgiver(arbeidsForhold);

  const dokumentertePerioder = values.periodeArsak === utsettelseArsakCodes.ARBEID || values.periodeArsak === utsettelseArsakCodes.LOVBESTEMT_FERIE ? null : [
    {
      fom: values.fom,
      tom: values.tom,
    },
  ];

  return {
    id: guid(),
    arbeidstidsprosent: values.arbeidstidprosent ? +values.arbeidstidprosent : null,
    updated: false,
    bekreftet: true,
    openForm: false,
    samtidigUttak: values.samtidigUttakNyPeriode,
    samtidigUttaksprosent: values.samtidigUttaksprosentNyPeriode,
    flerbarnsdager: values.flerbarnsdager,
    erArbeidstaker: arbeidsForhold && arbeidsForhold[4] === uttakArbeidType.ORDINÆRT_ARBEID,
    erFrilanser: arbeidsForhold && arbeidsForhold[4] === uttakArbeidType.FRILANS,
    erSelvstendig: arbeidsForhold && arbeidsForhold[4] === uttakArbeidType.SELVSTENDIG_NÆRINGSDRIVENDE,
    dokumentertePerioder:
      resultat && resultat.kode !== uttakPeriodeVurdering.PERIODE_IKKE_VURDERT ? dokumentertePerioder : null,
    fom: values.fom,
    tom: values.tom,
    isFromSøknad: false,
    begrunnelse: values.begrunnelse,
    saksebehandlersBegrunnelse: values.begrunnelse,
    uttakPeriodeType: periodeObjekt
      ? {
        kode: periodeObjekt.kode,
        kodeverk: periodeObjekt.kodeverk,
        navn: getKodeverknavn(periodeObjekt),
      }
      : { kode: '-' },
    arbeidsgiver,
    utsettelseÅrsak,
    overføringÅrsak,
    resultat,
  };
};

const validateNyPeriodeForm = (values: FormValues): any => {
  const errors = {};
  if (!values) {
    return errors;
  }

  const invalid = required(values.fom) || hasValidPeriod(values.fom, values.tom);

  if (invalid) {
    return {
      fom: invalid,
    };
  }

  return errors;
};

const EMPTY_ARRAY = [];

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const {
    newPeriodeCallback,
    uttakPeriodeVurderingTyper,
    getKodeverknavn,
    faktaArbeidsforhold,
    personoversikt,
    alleKodeverk,
  } = ownProps;

  const periodeTyper = alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE] || null;
  const utsettelseÅrsaker = alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE];
  const overføringÅrsaker = alleKodeverk[kodeverkTyper.OVERFOERING_AARSAK_TYPE];
  const onSubmit = (values: FormValues) => newPeriodeCallback(
    transformValues(
      values,
      utsettelseÅrsaker,
      overføringÅrsaker,
      uttakPeriodeVurderingTyper,
      getKodeverknavn,
      periodeTyper,
    ),
  );

  return (state: any): MappedOwnProps => ({
    periodeTyper,
    utsettelseÅrsaker,
    overføringÅrsaker,
    andeler: faktaArbeidsforhold || EMPTY_ARRAY,
    sokerKjonn: personoversikt.bruker.kjønn.kode,
    initialValues: {
      fom: null,
      tom: null,
      periodeType: null,
      periodeOverforingArsak: null,
      periodeArsak: null,
      arbeidsForhold: null,
      arbeidstidprosent: null,
      typeUttak: null,
      flerbarnsdager: false,
      samtidigUttakNyPeriode: false,
      samtidigUttaksprosentNyPeriode: null,
    },
    nyPeriode: formValueSelector('nyPeriodeForm')(
      state,
      'fom',
      'tom',
      'periodeType',
      'periodeOverforingArsak',
      'periodeArsak',
      'samtidigUttakNyPeriode',
      'arbeidsForhold',
      'arbeidstidprosent',
      'typeUttak',
    ),
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(
  reduxForm({
    form: 'nyPeriodeForm',
    validate: (values: FormValues) => validateNyPeriodeForm(values),
    enableReinitialize: true,
    destroyOnUnmount: false,
  })(UttakNyPeriode),
);
