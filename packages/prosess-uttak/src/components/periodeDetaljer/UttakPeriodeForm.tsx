import React, {
  useCallback, ReactElement, FunctionComponent, useMemo, useEffect,
} from 'react';
import { Alert, Button } from '@navikt/ds-react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import {
  Form, TextAreaField, RadioGroupPanel, SelectField,
} from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, notDash, required,
} from '@navikt/ft-form-validators';
import {
  ArrowBox,
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';

import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import {
  AarsakFilter, AlleKodeverk, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, PeriodeSoker, PeriodeSokerAktivitet,
} from '@fpsak-frontend/types';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import UttakAktiviteterTabell, { finnArbeidsforholdNavnOgProsentArbeid } from './UttakAktiviteterTabell';
import UttakPeriodeInfo from './UttakPeriodeInfo';
import { UttakAktivitet, UttakAktivitetType } from './UttakAktivitetType';

import styles from './uttakPeriodeForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type ArsakKodeverk = {
  sortering: string;
  utfallType?: string;
  uttakTyper?: string[];
  valgbarForKonto?: string[];
  gyldigForLovendringer: string[];
  synligForRolle?: string[];
} & KodeverkMedNavn;

const erPeriodeOppfylt = (
  valgtPeriode: PeriodeSoker,
  utfallKoder: ArsakKodeverk[],
): boolean => {
  if ((valgtPeriode.periodeResultatType && valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET)) {
    return true;
  }

  const kontoIkkeSatt = !valgtPeriode.periodeType && (valgtPeriode.aktiviteter[0].stønadskontoType === '-');
  if (kontoIkkeSatt) {
    return false;
  }
  if (valgtPeriode.periodeResultatType && valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING) {
    // Litt flaky. Bør sende med kodeverket og slå opp utfallType
    const kodeverkKode = utfallKoder.find((kodeItem) => kodeItem.kode === valgtPeriode.periodeResultatÅrsak);
    if ((kodeverkKode && kodeverkKode.utfallType === 'INNVILGET') || valgtPeriode.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
      return true;
    }
    if (kodeverkKode && kodeverkKode.utfallType === 'AVSLÅTT') {
      return false;
    }
    return undefined;
  }
  return false;
};

const sorterÅrsakKodeverk = (a: ArsakKodeverk, b: ArsakKodeverk): number => {
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
};

const getFiltrerPåGyldighetForLovendringer = (
  aarsakFilter: AarsakFilter,
) => (kodeItem: ArsakKodeverk): boolean => {
  if (kodeItem.gyldigForLovendringer === undefined) {
    return true;
  }
  if (aarsakFilter.kreverSammenhengendeUttak) {
    return kodeItem.gyldigForLovendringer.includes('KREVER_SAMMENHENGENDE_UTTAK');
  }
  return aarsakFilter.utenMinsterett
    ? kodeItem.gyldigForLovendringer.includes('FRITT_UTTAK')
    : kodeItem.gyldigForLovendringer.includes('MINSTERETT_2022');
};

const getFiltrerPåSynlighet = (
  aarsakFilter: AarsakFilter,
) => (kodeItem: ArsakKodeverk): boolean => {
  if (kodeItem.synligForRolle === undefined) {
    return true;
  }
  return aarsakFilter.søkerErMor
    ? kodeItem.synligForRolle.includes('MOR')
    : kodeItem.synligForRolle.includes('IKKE_MOR');
};

const lagOptionsTilPeriodeÅrsakSelect = (
  årsakKoder: ArsakKodeverk[],
  utfallType: string,
  aarsakFilter: AarsakFilter,
  utsettelseType?: string,
  periodeType?: string,
  skalFiltrere?: boolean,
): ReactElement[] => {
  årsakKoder.sort(sorterÅrsakKodeverk);

  const filteredNyKodeArray = årsakKoder
    .filter((kodeItem) => !utfallType || kodeItem.utfallType === utfallType)
    .filter(getFiltrerPåGyldighetForLovendringer(aarsakFilter))
    .filter(getFiltrerPåSynlighet(aarsakFilter));

  const mapTilOption = ({ kode, navn }) => <option value={kode} key={kode}>{navn}</option>;

  if (skalFiltrere && utsettelseType) {
    if (utsettelseType !== utsettelseArsakCodes.UDEFINERT) {
      return filteredNyKodeArray
        .filter((kv) => kv.uttakTyper.includes('UTSETTELSE'))
        .map(mapTilOption);
    }
    if (periodeType && utsettelseType === utsettelseArsakCodes.UDEFINERT) {
      return filteredNyKodeArray
        .filter((kv) => kv.uttakTyper.includes('UTTAK'))
        .filter((kv) => kv.valgbarForKonto.includes(periodeType))
        .map(mapTilOption);
    }
  }

  return filteredNyKodeArray.map(mapTilOption);
};

// https://jira.adeo.no/browse/PFP-7937
const finnUker = (
  aktivitet: PeriodeSokerAktivitet,
  valgtPeriode: PeriodeSoker,
): string => {
  if (valgtPeriode.periodeResultatType && !aktivitet.trekkdagerDesimaler && (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return '0';
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return '0';
  }
  return Math.floor(aktivitet.trekkdagerDesimaler / 5).toString();
};

const finnDager = (
  aktivitet: PeriodeSokerAktivitet,
  valgtPeriode: PeriodeSoker,
): string => {
  if (valgtPeriode.periodeResultatType && !aktivitet.trekkdagerDesimaler && (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return '0';
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return '0';
  }
  return parseFloat(((aktivitet.trekkdagerDesimaler % 5).toFixed(1))).toString();
};

const lagOptionsTilGraderingAvslagsårsakerSelect = (
  alleKodeverk: AlleKodeverk,
): ReactElement[] => {
  const årsakKoder = alleKodeverk[KodeverkType.GRADERING_AVSLAG_AARSAK] as ArsakKodeverk[];
  return årsakKoder.sort(sorterÅrsakKodeverk).map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);
};

const hentTekstForÅVurdereUtsettelseVedMindreEnn100ProsentStilling = (
  utsettelseType: string,
  erOppfylt: boolean,
  aktiviteter: PeriodeSokerAktivitet[],
  intl: IntlShape,
): string => {
  if (utsettelseType && utsettelseType === utsettelseArsakCodes.ARBEID && erOppfylt && aktiviteter) {
    const prosentIArbeid = aktiviteter.reduce((total, aktivitet): number => total + aktivitet.prosentArbeid, 0);
    if (prosentIArbeid < 100) {
      return intl.formatMessage({ id: 'UttakActivity.MerEn100ProsentOgOgyldigUtsettlse' });
    }
  }
  return null;
};

const hentTekstNårUtbetalingPlusArbeidsprosentMerEn100 = (
  formAktiviteter: UttakAktivitet[],
  aktiviteter: PeriodeSokerAktivitet[],
  intl: IntlShape,
): string => {
  const harMerEnn100 = formAktiviteter.some((aktivitet, index) => parseFloat(aktivitet.utbetalingsgrad) + aktiviteter[index].prosentArbeid > 100);
  return harMerEnn100
    ? intl.formatMessage({ id: 'UttakActivity.MerEn100Prosent' })
    : null;
};

const hentSorterAktiviteterFn = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
) => (
  aktivitet1: PeriodeSokerAktivitet,
  aktivitet2: PeriodeSokerAktivitet,
) => {
  const data1 = finnArbeidsforholdNavnOgProsentArbeid(aktivitet1, arbeidsgiverOpplysningerPerId, intl);
  const data2 = finnArbeidsforholdNavnOgProsentArbeid(aktivitet2, arbeidsgiverOpplysningerPerId, intl);
  return data1.arbeidsforhold.localeCompare(data2.arbeidsforhold);
};

const byggDefaultValues = (
  valgtPeriode: PeriodeSoker,
  sorterteAktiviteter: PeriodeSokerAktivitet[],
  periodeResultatårsakKoder: ArsakKodeverk[],
): UttakAktivitetType => {
  const kontoIkkeSatt = !valgtPeriode.periodeType
    && (valgtPeriode.aktiviteter[0].stønadskontoType === '-');

  return {
    begrunnelse: valgtPeriode.begrunnelse,
    erOppfylt: erPeriodeOppfylt(valgtPeriode, periodeResultatårsakKoder),
    periodeAarsak: valgtPeriode.periodeResultatÅrsak,
    graderingInnvilget: valgtPeriode.graderingInnvilget,
    samtidigUttak: valgtPeriode.samtidigUttak,
    graderingAvslagAarsak: valgtPeriode.graderingAvslagÅrsak ? valgtPeriode.graderingAvslagÅrsak : '-',
    samtidigUttaksprosent: valgtPeriode.samtidigUttaksprosent ? valgtPeriode.samtidigUttaksprosent.toString() : undefined,
    flerbarnsdager: valgtPeriode.flerbarnsdager,
    oppholdArsak: valgtPeriode.oppholdÅrsak,
    aktiviteter: sorterteAktiviteter.map((a) => ({
      stønadskontoType: a.stønadskontoType,
      weeks: finnUker(a, valgtPeriode),
      days: finnDager(a, valgtPeriode),
      utbetalingsgrad: !kontoIkkeSatt ? a.utbetalingsgrad?.toString() : '0',
    })),
  };
};

const transformValues = (
  values: UttakAktivitetType,
  valgtPeriode: PeriodeSoker,
): PeriodeSoker => ({
  ...valgtPeriode,
  begrunnelse: values.begrunnelse,
  graderingInnvilget: values.erOppfylt ? values.graderingInnvilget : false,
  oppholdÅrsak: values.oppholdArsak,
  periodeResultatType: values.erOppfylt || values.oppholdArsak !== oppholdArsakType.UDEFINERT
    ? periodeResultatType.INNVILGET : periodeResultatType.AVSLATT,
  graderingAvslagÅrsak: values.graderingAvslagAarsak,
  periodeResultatÅrsak: values.periodeAarsak,
  samtidigUttaksprosent: values.samtidigUttaksprosent ? parseFloat(values.samtidigUttaksprosent) : undefined,
  samtidigUttak: values.samtidigUttak,
  flerbarnsdager: values.flerbarnsdager,
  aktiviteter: valgtPeriode.aktiviteter.map((a, index) => {
    const aktivitet = values.aktiviteter[index];
    return {
      ...a,
      stønadskontoType: aktivitet.stønadskontoType,
      utbetalingsgrad: parseFloat(aktivitet.utbetalingsgrad),
      trekkdagerDesimaler: (parseFloat(aktivitet.weeks) * 5) + parseFloat(aktivitet.days),
    };
  }),
});

interface OwnProps {
  valgtPeriode: PeriodeSoker;
  isReadOnly: boolean;
  erHovedsøkersPeriode: boolean;
  oppdaterPeriode: (perioder: PeriodeSoker[]) => void;
  lukkPeriodeVisning: () => void;
  alleKodeverk: AlleKodeverk;
  årsakFilter: AarsakFilter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  harSoktOmFlerbarnsdager: boolean;
  erTilknyttetStortinget: boolean;
}

const UttakPeriodeForm: FunctionComponent<OwnProps> = ({
  valgtPeriode,
  oppdaterPeriode,
  lukkPeriodeVisning,
  isReadOnly,
  erHovedsøkersPeriode,
  alleKodeverk,
  årsakFilter,
  arbeidsgiverOpplysningerPerId,
  harSoktOmFlerbarnsdager,
  erTilknyttetStortinget,
}) => {
  const intl = useIntl();

  const periodeResultatårsakKoder = alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK] as ArsakKodeverk[];

  const sorterteAktiviteter = useMemo(() => {
    const sorterAktiviteter = hentSorterAktiviteterFn(arbeidsgiverOpplysningerPerId, intl);
    return [...valgtPeriode.aktiviteter].sort(sorterAktiviteter);
  }, [valgtPeriode.aktiviteter]);

  const defaultValues = useMemo(() => byggDefaultValues(valgtPeriode, sorterteAktiviteter, periodeResultatårsakKoder),
    [valgtPeriode, sorterteAktiviteter, arbeidsgiverOpplysningerPerId]);

  const formMethods = useForm<UttakAktivitetType>({
    defaultValues,
  });

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const erOppfylt = formMethods.watch('erOppfylt');
  const graderingInnvilget = formMethods.watch('graderingInnvilget');
  const samtidigUttak = formMethods.watch('samtidigUttak');
  const aktiviteter = formMethods.watch('aktiviteter');
  const førsteValgteStønadskonto = aktiviteter[0].stønadskontoType;

  const periodeÅrsakOptions = useMemo(() => lagOptionsTilPeriodeÅrsakSelect(
    periodeResultatårsakKoder,
    erOppfylt ? 'INNVILGET' : 'AVSLÅTT',
    årsakFilter,
    valgtPeriode.utsettelseType,
    førsteValgteStønadskonto || valgtPeriode.periodeType,
    valgtPeriode.aktiviteter.length === 1,
  ), [erOppfylt, årsakFilter, valgtPeriode, førsteValgteStønadskonto]);

  const graderingAvslagsårsakOptions = useMemo(() => lagOptionsTilGraderingAvslagsårsakerSelect(alleKodeverk), []);

  const submit = useCallback((values: UttakAktivitetType) => oppdaterPeriode([transformValues(values, valgtPeriode)]), [valgtPeriode]);

  const warning1 = hentTekstForÅVurdereUtsettelseVedMindreEnn100ProsentStilling(valgtPeriode.utsettelseType, erOppfylt, valgtPeriode.aktiviteter, intl);
  const warning2 = hentTekstNårUtbetalingPlusArbeidsprosentMerEn100(aktiviteter, sorterteAktiviteter, intl);
  const warning = warning1 || warning2;

  return (
    <Form formMethods={formMethods} onSubmit={submit}>
      <UttakPeriodeInfo
        valgtPeriode={valgtPeriode}
        alleKodeverk={alleKodeverk}
        isReadOnly={isReadOnly}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
        graderingInnvilget={graderingInnvilget}
        erSamtidigUttak={samtidigUttak}
        erTilknyttetStortinget={erTilknyttetStortinget}
      />
      {valgtPeriode.oppholdÅrsak === oppholdArsakType.UDEFINERT && (
        <UttakAktiviteterTabell
          isReadOnly={isReadOnly}
          periodeTyper={alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE]}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          aktiviteter={sorterteAktiviteter}
          erOppfylt={erOppfylt}
          utsettelseType={valgtPeriode.utsettelseType}
        />
      )}
      {erHovedsøkersPeriode && (
        <TextAreaField
          name="begrunnelse"
          label={intl.formatMessage({ id: 'UttakActivity.Vurdering' })}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
        />
      )}
      {erHovedsøkersPeriode && !isReadOnly && (
        <>
          <VerticalSpacer sixteenPx />
          <RadioGroupPanel
            name="erOppfylt"
            hideLegend
            validate={[required]}
            isHorizontal
            isTrueOrFalseSelection
            radios={[
              { label: intl.formatMessage({ id: 'UttakActivity.Oppfylt' }), value: 'true' },
              { label: intl.formatMessage({ id: 'UttakActivity.IkkeOppfylt' }), value: 'false' },
            ]}
          />
          {erOppfylt !== undefined && (
            <>
              <VerticalSpacer eightPx />
              <ArrowBox alignOffset={erOppfylt ? 0 : 92}>
                <SelectField
                  name="periodeAarsak"
                  label={intl.formatMessage({ id: erOppfylt ? 'UttakActivity.InnvilgelseAarsaker' : 'UttakActivity.AvslagAarsak' })}
                  selectValues={periodeÅrsakOptions}
                  validate={[required, notDash]}
                />
                {(valgtPeriode.gradertAktivitet && erOppfylt) && (
                  <>
                    <VerticalSpacer sixteenPx />
                    <RadioGroupPanel
                      name="graderingInnvilget"
                      label={intl.formatMessage({ id: 'UttakActivity.Gradering' })}
                      validate={[required]}
                      isHorizontal
                      isTrueOrFalseSelection
                      radios={[
                        { label: intl.formatMessage({ id: 'UttakActivity.Oppfylt' }), value: 'true' },
                        { label: intl.formatMessage({ id: 'UttakActivity.IkkeOppfylt' }), value: 'false' },
                      ]}
                    />
                    {graderingInnvilget === false && (
                      <>
                        <VerticalSpacer sixteenPx />
                        <SelectField
                          name="graderingAvslagAarsak"
                          label={intl.formatMessage({ id: 'UttakActivity.GraderingAvslagAarsaker' })}
                          validate={[required, notDash]}
                          selectValues={graderingAvslagsårsakOptions}
                        />
                      </>
                    )}
                    <VerticalSpacer eightPx />
                  </>
                )}
              </ArrowBox>
            </>
          )}
          <VerticalSpacer twentyPx />
          {warning && (
            <>
              <Alert size="small" variant="info" className={styles.alert}>
                {warning}
              </Alert>
              <VerticalSpacer sixteenPx />
            </>
          )}
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formMethods.formState.isDirty}
                >
                  <FormattedMessage id="UttakActivity.Oppdater" />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button size="small" variant="secondary" onClick={lukkPeriodeVisning} type="button">
                  <FormattedMessage id="UttakActivity.Avbryt" />
                </Button>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </Form>
  );
};

export default UttakPeriodeForm;
