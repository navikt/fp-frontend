import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
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
  behandlingForm,
  behandlingFormValueSelector,
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
  FaktaArbeidsforhold, Kodeverk, KodeverkMedNavn, Personopplysninger,
} from '@fpsak-frontend/types';

import lagVisningsNavn from './utils/uttakVisningsnavnHelper';

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

const mapPeriodeTyper = (typer: any) => typer.filter(({
  kode,
}: any) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const mapOverføringÅrsaker = (typer: any) => typer
  .filter(({
    kode,
  }: any) => gyldigeOverføringÅrsaker.includes(kode))
  .map(({
    kode,
    navn,
  }: any) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const mapUtsettelseÅrsaker = (typer: any) => typer.map(({
  kode,
  navn,
}: any) => (
  <option value={kode} key={kode}>
    {navn}
  </option>
));

const mapArbeidsforhold = (andeler: any, getKodeverknavn: any) => andeler.map((andel: any) => {
  const { arbeidType, arbeidsgiver } = andel;

  let periodeArbeidsforhold = '';
  if (arbeidType && arbeidType.kode !== uttakArbeidType.ORDINÆRT_ARBEID) {
    periodeArbeidsforhold = getKodeverknavn(arbeidType);
  } else {
    periodeArbeidsforhold = lagVisningsNavn(arbeidsgiver);
  }

  const identifikator = (arbeidsgiver || []).identifikator || '-';
  const navn = (arbeidsgiver || []).navn || getKodeverknavn(arbeidType);
  const fixedAktørId = (arbeidsgiver || []).aktørId || '-';
  const virksomhet = (arbeidsgiver || []).virksomhet || '-';

  return (
    <option value={`${identifikator}|${navn}|${fixedAktørId}|${virksomhet}|${arbeidType.kode}`} key={guid()}>
      {periodeArbeidsforhold}
    </option>
  );
});

const periodeTypeTrengerArsak = (sokerKjonn: string, periodeType: string) => (sokerKjonn === navBrukerKjonn.MANN && periodeType === uttakPeriodeType.MODREKVOTE)
  || (sokerKjonn === navBrukerKjonn.KVINNE && periodeType === uttakPeriodeType.FEDREKVOTE);

interface NyPeriode {
  fom: string;
  tom: string;
  periodeType: string;
  periodeOverforingArsak: Kodeverk;
  periodeArsak: Kodeverk;
  samtidigUttakNyPeriode: boolean;
  arbeidsForhold: any;
  arbeidstidprosent: number;
  typeUttak: string;
}

interface OwnProps {
  newPeriodeResetCallback: (...args: any[]) => any;
  utsettelseÅrsaker: KodeverkMedNavn[];
  overføringÅrsaker: KodeverkMedNavn[];
  andeler: FaktaArbeidsforhold[];
  nyPeriode: NyPeriode;
  sokerKjonn: string;
  nyPeriodeDisabledDaysFom: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  periodeTyper?: KodeverkMedNavn[];
}

export const UttakNyPeriode: FunctionComponent<OwnProps & InjectedFormProps> = ({
  newPeriodeResetCallback,
  periodeTyper,
  utsettelseÅrsaker,
  overføringÅrsaker,
  nyPeriode,
  sokerKjonn,
  getKodeverknavn,
  nyPeriodeDisabledDaysFom,
  andeler,
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
                        selectValues={mapPeriodeTyper(periodeTyper)}
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
                      selectValues={mapOverføringÅrsaker(overføringÅrsaker)}
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
                          selectValues={mapArbeidsforhold(andeler, getKodeverknavn)}
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

const getPeriodeData = (periode: string, periodeArray: KodeverkMedNavn[]) => periodeArray.filter(({
  kode,
}: any) => kode === periode);

const transformValues = (
  values: any,
  utsettelseÅrsaker: KodeverkMedNavn[],
  overføringÅrsaker: KodeverkMedNavn[],
  uttakPeriodeVurderingTyper: KodeverkMedNavn[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  periodeTyper?: KodeverkMedNavn[],
) => {
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

  const arbeidsgiver = arbeidsForhold && (arbeidsForhold[0] !== '-' || arbeidsForhold[2] !== '-')
    ? {
      identifikator: arbeidsForhold[0] !== '-' ? arbeidsForhold[0] : undefined,
      navn: arbeidsForhold[1] ? arbeidsForhold[1] : undefined,
      aktørId: arbeidsForhold[2] !== '-' ? arbeidsForhold[2] : undefined,
      virksomhet: arbeidsForhold[3] !== '-',
      arbeidType: arbeidsForhold[4],
    }
    : null;

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

const validateNyPeriodeForm = (values: any) => {
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

interface PureOwnProps {
  newPeriodeCallback: (values: any) => void;
  uttakPeriodeVurderingTyper: KodeverkMedNavn[];
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  behandlingId: number;
  behandlingVersjon: number;
  personopplysninger: Personopplysninger;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const mapStateToPropsFactory = (_initialState: any, ownProps: PureOwnProps) => {
  const {
    newPeriodeCallback,
    uttakPeriodeVurderingTyper,
    getKodeverknavn,
    faktaArbeidsforhold,
    behandlingId,
    behandlingVersjon,
    personopplysninger,
    alleKodeverk,
  } = ownProps;

  const periodeTyper = alleKodeverk[kodeverkTyper.UTTAK_PERIODE_TYPE] || null;
  const utsettelseÅrsaker = alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE];
  const overføringÅrsaker = alleKodeverk[kodeverkTyper.OVERFOERING_AARSAK_TYPE];
  const onSubmit = (values: any) => newPeriodeCallback(
    transformValues(
      values,
      utsettelseÅrsaker,
      overføringÅrsaker,
      uttakPeriodeVurderingTyper,
      getKodeverknavn,
      periodeTyper,
    ),
  );

  return (state: any) => ({
    periodeTyper,
    utsettelseÅrsaker,
    overføringÅrsaker,
    andeler: faktaArbeidsforhold || EMPTY_ARRAY,
    sokerKjonn: personopplysninger.navBrukerKjonn.kode,
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
    nyPeriode: behandlingFormValueSelector('nyPeriodeForm', behandlingId, behandlingVersjon)(
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
  behandlingForm({
    form: 'nyPeriodeForm',
    validate: (values) => validateNyPeriodeForm(values),
    enableReinitialize: true,
  })(UttakNyPeriode),
);
