import { type ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, Button, HStack, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, SelectField, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, notDash, required } from '@navikt/ft-form-validators';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { KodeverkType, OppholdArsakType, PeriodeResultatType, UtsettelseArsakCode } from '@navikt/fp-kodeverk';
import type {
  AarsakFilter,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn,
  PeriodeSoker,
  PeriodeSokerAktivitet,
} from '@navikt/fp-types';

import { finnArbeidsforholdNavnOgProsentArbeid, UttakAktiviteterTabell } from './UttakAktiviteterTabell';
import type { UttakAktivitet, UttakAktivitetType } from './UttakAktivitetType';
import { UttakPeriodeInfo } from './UttakPeriodeInfo';

import styles from './uttakPeriodeForm.module.css';

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

const erPeriodeOppfylt = (valgtPeriode: PeriodeSoker, utfallKoder: ArsakKodeverk[]): boolean | undefined => {
  if (valgtPeriode.periodeResultatType && valgtPeriode.periodeResultatType === PeriodeResultatType.INNVILGET) {
    return true;
  }

  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';
  if (kontoIkkeSatt) {
    return false;
  }
  if (valgtPeriode.periodeResultatType && valgtPeriode.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING) {
    // Litt flaky. Bør sende med kodeverket og slå opp utfallType
    const kodeverkKode = utfallKoder.find(kodeItem => kodeItem.kode === valgtPeriode.periodeResultatÅrsak);
    if (
      (kodeverkKode && kodeverkKode.utfallType === 'INNVILGET') ||
      valgtPeriode.oppholdÅrsak !== OppholdArsakType.UDEFINERT
    ) {
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

const getFiltrerPåGyldighetForLovendringer =
  (aarsakFilter: AarsakFilter, periodeFom: string) =>
  (kodeItem: ArsakKodeverk): boolean => {
    if (kodeItem.gyldigForLovendringer === undefined) {
      return true;
    }
    if (!dayjs(periodeFom).isAfter(aarsakFilter.kreverSammenhengendeUttakTom)) {
      return kodeItem.gyldigForLovendringer.includes('KREVER_SAMMENHENGENDE_UTTAK');
    }
    return aarsakFilter.utenMinsterett
      ? kodeItem.gyldigForLovendringer.includes('FRITT_UTTAK')
      : kodeItem.gyldigForLovendringer.includes('MINSTERETT_2022');
  };

const getFiltrerPåSynlighet =
  (aarsakFilter: AarsakFilter) =>
  (kodeItem: ArsakKodeverk): boolean => {
    if (kodeItem.synligForRolle === undefined) {
      return true;
    }
    return aarsakFilter.søkerErMor
      ? kodeItem.synligForRolle.includes('MOR')
      : kodeItem.synligForRolle.includes('IKKE_MOR');
  };

const lagOptionsTilPeriodeÅrsakSelect = (
  årsakKoder: ArsakKodeverk[],
  periodeFom: string,
  utfallType: string,
  aarsakFilter: AarsakFilter,
  utsettelseType?: string,
  periodeType?: string,
  skalFiltrere?: boolean,
): ReactElement[] => {
  årsakKoder.sort(sorterÅrsakKodeverk);

  const filteredNyKodeArray = årsakKoder
    .filter(kodeItem => !utfallType || kodeItem.utfallType === utfallType)
    .filter(getFiltrerPåGyldighetForLovendringer(aarsakFilter, periodeFom))
    .filter(getFiltrerPåSynlighet(aarsakFilter));

  const mapTilOption = (kodeverk: KodeverkMedNavn) => (
    <option value={kodeverk.kode} key={kodeverk.kode}>
      {kodeverk.navn}
    </option>
  );

  if (skalFiltrere && utsettelseType) {
    if (utsettelseType !== UtsettelseArsakCode.UDEFINERT) {
      return filteredNyKodeArray.filter(kv => kv.uttakTyper?.includes('UTSETTELSE')).map(mapTilOption);
    }
    if (periodeType && utsettelseType === UtsettelseArsakCode.UDEFINERT) {
      return filteredNyKodeArray
        .filter(kv => kv.uttakTyper?.includes('UTTAK'))
        .filter(kv => kv.valgbarForKonto?.includes(periodeType))
        .map(mapTilOption);
    }
  }

  return filteredNyKodeArray.map(mapTilOption);
};

// https://jira.adeo.no/browse/PFP-7937
const finnUker = (aktivitet: PeriodeSokerAktivitet, valgtPeriode: PeriodeSoker): string => {
  if (
    valgtPeriode.periodeResultatType &&
    !aktivitet.trekkdagerDesimaler &&
    valgtPeriode.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING
  ) {
    return '0';
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return '0';
  }
  return aktivitet.trekkdagerDesimaler ? Math.floor(aktivitet.trekkdagerDesimaler / 5).toString() : '0';
};

const finnDager = (aktivitet: PeriodeSokerAktivitet, valgtPeriode: PeriodeSoker): string => {
  if (
    valgtPeriode.periodeResultatType &&
    !aktivitet.trekkdagerDesimaler &&
    valgtPeriode.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING
  ) {
    return '0';
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return '0';
  }
  return aktivitet.trekkdagerDesimaler ? parseFloat((aktivitet.trekkdagerDesimaler % 5).toFixed(1)).toString() : '0';
};

const lagOptionsTilGraderingAvslagsårsakerSelect = (alleKodeverk: AlleKodeverk): ReactElement[] => {
  const årsakKoder = alleKodeverk[KodeverkType.GRADERING_AVSLAG_AARSAK] as ArsakKodeverk[];
  return [...årsakKoder].sort(sorterÅrsakKodeverk).map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));
};

const hentTekstForÅVurdereUtsettelseVedMindreEnn100ProsentStilling = (
  utsettelseType: string,
  aktiviteter: PeriodeSokerAktivitet[],
  intl: IntlShape,
  erOppfylt?: boolean,
): string | undefined => {
  if (utsettelseType && utsettelseType === UtsettelseArsakCode.ARBEID && erOppfylt && aktiviteter) {
    const prosentIArbeid = aktiviteter.reduce((total, aktivitet): number => total + (aktivitet.prosentArbeid || 0), 0);
    if (prosentIArbeid < 100) {
      return intl.formatMessage({ id: 'UttakActivity.MerEn100ProsentOgOgyldigUtsettlse' });
    }
  }
  return undefined;
};

const hentTekstNårUtbetalingPlusArbeidsprosentMerEn100 = (
  formAktiviteter: UttakAktivitet[],
  aktiviteter: PeriodeSokerAktivitet[],
  intl: IntlShape,
): string | undefined => {
  const harMerEnn100 = formAktiviteter.some(
    (aktivitet, index) => parseFloat(aktivitet.utbetalingsgrad) + (aktiviteter[index].prosentArbeid || 0) > 100,
  );
  return harMerEnn100 ? intl.formatMessage({ id: 'UttakActivity.MerEn100Prosent' }) : undefined;
};

const hentSorterAktiviteterFn =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, intl: IntlShape) =>
  (aktivitet1: PeriodeSokerAktivitet, aktivitet2: PeriodeSokerAktivitet) => {
    const data1 = finnArbeidsforholdNavnOgProsentArbeid(aktivitet1, arbeidsgiverOpplysningerPerId, intl);
    const data2 = finnArbeidsforholdNavnOgProsentArbeid(aktivitet2, arbeidsgiverOpplysningerPerId, intl);
    return data1.arbeidsforhold.localeCompare(data2.arbeidsforhold);
  };

const byggDefaultValues = (
  valgtPeriode: PeriodeSoker,
  sorterteAktiviteter: PeriodeSokerAktivitet[],
  periodeResultatårsakKoder: ArsakKodeverk[],
): UttakAktivitetType => {
  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';

  return {
    begrunnelse: valgtPeriode.begrunnelse,
    erOppfylt: erPeriodeOppfylt(valgtPeriode, periodeResultatårsakKoder),
    periodeAarsak: valgtPeriode.periodeResultatÅrsak,
    graderingInnvilget: valgtPeriode.graderingInnvilget,
    samtidigUttak: valgtPeriode.samtidigUttak,
    graderingAvslagAarsak: valgtPeriode.graderingAvslagÅrsak ? valgtPeriode.graderingAvslagÅrsak : '-',
    samtidigUttaksprosent: valgtPeriode.samtidigUttaksprosent
      ? valgtPeriode.samtidigUttaksprosent.toString()
      : undefined,
    flerbarnsdager: valgtPeriode.flerbarnsdager,
    oppholdArsak: valgtPeriode.oppholdÅrsak,
    aktiviteter: sorterteAktiviteter.map(a => ({
      stønadskontoType: a.stønadskontoType!,
      weeks: finnUker(a, valgtPeriode),
      days: finnDager(a, valgtPeriode),
      utbetalingsgrad: !kontoIkkeSatt && a.utbetalingsgrad ? a.utbetalingsgrad.toString() : '0',
    })),
  };
};

const transformValues = (
  values: UttakAktivitetType,
  valgtPeriode: PeriodeSoker,
  filtrerteAktiviteter: PeriodeSokerAktivitet[],
): PeriodeSoker => ({
  ...valgtPeriode,
  begrunnelse: values.begrunnelse,
  graderingInnvilget: values.erOppfylt ? values.graderingInnvilget : false,
  oppholdÅrsak: values.oppholdArsak,
  periodeResultatType:
    values.erOppfylt || values.oppholdArsak !== OppholdArsakType.UDEFINERT
      ? PeriodeResultatType.INNVILGET
      : PeriodeResultatType.AVSLATT,
  graderingAvslagÅrsak: values.graderingAvslagAarsak,
  periodeResultatÅrsak: values.periodeAarsak,
  samtidigUttaksprosent: values.samtidigUttaksprosent ? parseFloat(values.samtidigUttaksprosent) : undefined,
  samtidigUttak: values.samtidigUttak,
  flerbarnsdager: values.flerbarnsdager,
  aktiviteter: filtrerteAktiviteter.map((a, index) => {
    const aktivitet = values.aktiviteter[index];
    return {
      ...a,
      stønadskontoType: aktivitet.stønadskontoType,
      utbetalingsgrad: parseFloat(aktivitet.utbetalingsgrad),
      trekkdagerDesimaler: parseFloat(aktivitet.weeks) * 5 + parseFloat(aktivitet.days),
    };
  }),
});

interface Props {
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

export const UttakPeriodeForm = ({
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
}: Props) => {
  const intl = useIntl();

  const periodeResultatårsakKoder = alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK] as ArsakKodeverk[];

  const sorterteAktiviteter = useMemo(() => {
    const sorterAktiviteter = hentSorterAktiviteterFn(arbeidsgiverOpplysningerPerId, intl);
    return [...valgtPeriode.aktiviteter].sort(sorterAktiviteter);
  }, [valgtPeriode.aktiviteter]);

  const defaultValues = useMemo(
    () => byggDefaultValues(valgtPeriode, sorterteAktiviteter, periodeResultatårsakKoder),
    [valgtPeriode, sorterteAktiviteter, arbeidsgiverOpplysningerPerId],
  );

  const formMethods = useForm<UttakAktivitetType>({
    defaultValues,
  });

  useEffect(() => {
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const erOppfylt = formMethods.watch('erOppfylt');
  const graderingInnvilget = formMethods.watch('graderingInnvilget');
  const samtidigUttak = formMethods.watch('samtidigUttak');
  const valgtInnvilgelsesÅrsak = formMethods.watch('periodeAarsak');
  const aktiviteter = formMethods.watch('aktiviteter');
  const førsteValgteStønadskonto = aktiviteter.length > 0 ? aktiviteter[0].stønadskontoType : undefined;

  const periodeÅrsakOptions = useMemo(
    () =>
      lagOptionsTilPeriodeÅrsakSelect(
        periodeResultatårsakKoder,
        valgtPeriode.fom,
        erOppfylt ? 'INNVILGET' : 'AVSLÅTT',
        årsakFilter,
        valgtPeriode.utsettelseType,
        førsteValgteStønadskonto || valgtPeriode.periodeType,
        valgtPeriode.aktiviteter.length === 1,
      ),
    [erOppfylt, årsakFilter, valgtPeriode, førsteValgteStønadskonto],
  );

  const graderingAvslagsårsakOptions = useMemo(() => lagOptionsTilGraderingAvslagsårsakerSelect(alleKodeverk), []);

  const submit = useCallback(
    (values: UttakAktivitetType) => oppdaterPeriode([transformValues(values, valgtPeriode, sorterteAktiviteter)]),
    [valgtPeriode],
  );

  const warning1 = hentTekstForÅVurdereUtsettelseVedMindreEnn100ProsentStilling(
    valgtPeriode.utsettelseType,
    valgtPeriode.aktiviteter,
    intl,
    erOppfylt,
  );
  const warning2 = hentTekstNårUtbetalingPlusArbeidsprosentMerEn100(aktiviteter, sorterteAktiviteter, intl);
  const warning = warning1 ?? warning2;

  return (
    <Form formMethods={formMethods} onSubmit={submit}>
      <VStack gap="4">
        <UttakPeriodeInfo
          valgtPeriode={valgtPeriode}
          alleKodeverk={alleKodeverk}
          isReadOnly={isReadOnly}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
          graderingInnvilget={graderingInnvilget}
          erSamtidigUttak={samtidigUttak}
          erTilknyttetStortinget={erTilknyttetStortinget}
          erOppfylt={erOppfylt}
          valgtInnvilgelsesÅrsak={valgtInnvilgelsesÅrsak}
        />
        {valgtPeriode.oppholdÅrsak === OppholdArsakType.UDEFINERT && (
          <UttakAktiviteterTabell
            isReadOnly={isReadOnly}
            periodeTyper={alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE]}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            aktiviteter={sorterteAktiviteter}
            erOppfylt={erOppfylt}
            valgtPeriode={valgtPeriode}
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
              <ArrowBox alignOffset={erOppfylt ? 0 : 92}>
                <SelectField
                  name="periodeAarsak"
                  label={intl.formatMessage({
                    id: erOppfylt ? 'UttakActivity.InnvilgelseAarsaker' : 'UttakActivity.AvslagAarsak',
                  })}
                  selectValues={periodeÅrsakOptions}
                  validate={[required, notDash]}
                />
                {valgtPeriode.gradertAktivitet && erOppfylt && (
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
            )}
            {warning && (
              <Alert size="small" variant="info" className={styles.alert}>
                {warning}
              </Alert>
            )}
            <HStack gap="2">
              <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty}>
                <FormattedMessage id="UttakActivity.Oppdater" />
              </Button>
              <Button size="small" variant="secondary" onClick={lukkPeriodeVisning} type="button">
                <FormattedMessage id="UttakActivity.Avbryt" />
              </Button>
            </HStack>
          </>
        )}
      </VStack>
    </Form>
  );
};
