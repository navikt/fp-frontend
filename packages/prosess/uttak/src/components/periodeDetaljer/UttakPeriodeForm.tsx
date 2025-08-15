import { type ReactElement, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, Button, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroupNew, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, notDash, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { OppholdArsakType, PeriodeResultatType, StonadskontoType, UtsettelseArsakCode } from '@navikt/fp-kodeverk';
import type {
  AarsakFilter,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  GraderingAvslagÅrsakKodeverk,
  KodeverkMedNavn,
  PeriodeResultatÅrsakKodeverk,
  PeriodeSoker,
  PeriodeSokerAktivitet,
} from '@navikt/fp-types';

import { finnArbeidsforholdNavnOgProsentArbeid, UttakAktiviteterTabell } from './UttakAktiviteterTabell';
import type { UttakAktivitet, UttakAktivitetType } from './UttakAktivitetType';
import { UttakPeriodeInfo } from './UttakPeriodeInfo';

import styles from './uttakPeriodeForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const erPeriodeOppfylt = (
  valgtPeriode: PeriodeSoker,
  utfallKoder: PeriodeResultatÅrsakKodeverk[],
): boolean | undefined => {
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

const sorterÅrsakKodeverk = (a: PeriodeResultatÅrsakKodeverk, b: PeriodeResultatÅrsakKodeverk): number => {
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

const lagOptionsTilPeriodeÅrsakSelect = (
  årsakKoder: PeriodeResultatÅrsakKodeverk[],
  periodeFom: string,
  utfallType: string,
  aarsakFilter: AarsakFilter,
  periodeType: string,
  utsettelseType?: string,
): ReactElement[] => {
  årsakKoder.sort(sorterÅrsakKodeverk);

  const filteredNyKodeArray = årsakKoder
    .filter(kodeItem => !utfallType || kodeItem.utfallType === utfallType)
    .filter(getFiltrerPåGyldighetForLovendringer(aarsakFilter, periodeFom))
    .filter(getFiltrerPåSynlighet(aarsakFilter));

  const mapTilOption = (kodeverk: KodeverkMedNavn<'PeriodeResultatÅrsak'>) => (
    <option value={kodeverk.kode} key={kodeverk.kode}>
      {kodeverk.navn}
    </option>
  );

  if (utsettelseType && utsettelseType !== '-') {
    return filteredNyKodeArray.filter(kv => kv.uttakTyper?.includes('UTSETTELSE')).map(mapTilOption);
  }
  return filteredNyKodeArray
    .filter(kv => kv.uttakTyper?.includes('UTTAK'))
    .filter(kv => periodeType === '-' || kv.valgbarForKonto?.includes(periodeType))
    .map(mapTilOption);
};

const getFiltrerPåGyldighetForLovendringer =
  (aarsakFilter: AarsakFilter, periodeFom: string) =>
  (kodeItem: PeriodeResultatÅrsakKodeverk): boolean => {
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
  (kodeItem: PeriodeResultatÅrsakKodeverk): boolean => {
    if (kodeItem.synligForRolle === undefined) {
      return true;
    }
    return aarsakFilter.søkerErMor
      ? kodeItem.synligForRolle.includes('MOR')
      : kodeItem.synligForRolle.includes('IKKE_MOR');
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

const sorterGradering = (a: GraderingAvslagÅrsakKodeverk, b: GraderingAvslagÅrsakKodeverk): number => {
  if (a.navn < b.navn) {
    return -1;
  }
  if (a.navn > b.navn) {
    return 1;
  }
  return 0;
};

const lagOptionsTilGraderingAvslagsårsakerSelect = (alleKodeverk: AlleKodeverk): ReactElement[] => {
  const årsakKoder = alleKodeverk['GraderingAvslagÅrsak'];
  return [...årsakKoder].sort(sorterGradering).map(({ kode, navn }) => (
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
    const prosentIArbeid = aktiviteter.reduce((total, aktivitet): number => total + (aktivitet.prosentArbeid ?? 0), 0);
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
    (aktivitet, index) => parseFloat(aktivitet.utbetalingsgrad) + (aktiviteter[index].prosentArbeid ?? 0) > 100,
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
  periodeResultatårsakKoder: PeriodeResultatÅrsakKodeverk[],
): UttakAktivitetType => {
  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';

  return {
    begrunnelse: valgtPeriode.begrunnelse,
    erOppfylt: erPeriodeOppfylt(valgtPeriode, periodeResultatårsakKoder),
    periodeAarsak: valgtPeriode.periodeResultatÅrsak,
    graderingInnvilget: valgtPeriode.graderingInnvilget,
    samtidigUttak: valgtPeriode.samtidigUttak,
    graderingAvslagAarsak: valgtPeriode.graderingAvslagÅrsak ?? '-',
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

  const periodeResultatårsakKoder = alleKodeverk['PeriodeResultatÅrsak'];

  // Her er det noko rart. Denne må ha useMemo, ellers blir testen aldri ferdig
  const sorterteAktiviteter = useMemo(() => {
    const sorterAktiviteter = hentSorterAktiviteterFn(arbeidsgiverOpplysningerPerId, intl);
    return [...valgtPeriode.aktiviteter].sort(sorterAktiviteter);
  }, [valgtPeriode.aktiviteter]);

  // Her er det noko rart. Denne må ha useMemo, ellers blir testen aldri ferdig
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

  const stønadskontoType = aktiviteter.length === 1 ? aktiviteter[0].stønadskontoType : StonadskontoType.UDEFINERT;

  const periodeÅrsakOptions = lagOptionsTilPeriodeÅrsakSelect(
    periodeResultatårsakKoder,
    valgtPeriode.fom,
    erOppfylt ? 'INNVILGET' : 'AVSLÅTT',
    årsakFilter,
    stønadskontoType,
    valgtPeriode.utsettelseType,
  );

  const graderingAvslagsårsakOptions = lagOptionsTilGraderingAvslagsårsakerSelect(alleKodeverk);

  const warning1 = hentTekstForÅVurdereUtsettelseVedMindreEnn100ProsentStilling(
    valgtPeriode.utsettelseType,
    valgtPeriode.aktiviteter,
    intl,
    erOppfylt,
  );
  const warning2 = hentTekstNårUtbetalingPlusArbeidsprosentMerEn100(aktiviteter, sorterteAktiviteter, intl);
  const warning = warning1 ?? warning2;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: UttakAktivitetType) =>
        oppdaterPeriode([transformValues(values, valgtPeriode, sorterteAktiviteter)])
      }
    >
      <VStack gap="space-16">
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
            periodeTyper={alleKodeverk['UttakPeriodeType']}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            aktiviteter={sorterteAktiviteter}
            erOppfylt={!!erOppfylt}
            valgtPeriode={valgtPeriode}
          />
        )}
        {erHovedsøkersPeriode && (
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'UttakActivity.Vurdering' })}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
        )}
        {erHovedsøkersPeriode && !isReadOnly && (
          <>
            <RhfRadioGroupNew name="erOppfylt" control={formMethods.control} hideLegend validate={[required]}>
              <HStack gap="space-16">
                <Radio value={true} size="small">
                  <FormattedMessage id="UttakActivity.Oppfylt" />
                </Radio>
                <Radio value={false} size="small">
                  <FormattedMessage id="UttakActivity.IkkeOppfylt" />
                </Radio>
              </HStack>
            </RhfRadioGroupNew>
            {erOppfylt !== undefined && (
              <ArrowBox alignOffset={erOppfylt ? 0 : 92}>
                <VStack gap="space-16">
                  <RhfSelect
                    name="periodeAarsak"
                    control={formMethods.control}
                    label={intl.formatMessage({
                      id: erOppfylt ? 'UttakActivity.InnvilgelseAarsaker' : 'UttakActivity.AvslagAarsak',
                    })}
                    selectValues={periodeÅrsakOptions}
                    validate={[required, notDash]}
                  />
                  {valgtPeriode.gradertAktivitet && erOppfylt && (
                    <>
                      <RhfRadioGroupNew
                        name="graderingInnvilget"
                        control={formMethods.control}
                        label={intl.formatMessage({ id: 'UttakActivity.Gradering' })}
                        validate={[required]}
                      >
                        <HStack gap="space-16">
                          <Radio value={true} size="small">
                            <FormattedMessage id="UttakActivity.Oppfylt" />
                          </Radio>
                          <Radio value={false} size="small">
                            <FormattedMessage id="UttakActivity.IkkeOppfylt" />
                          </Radio>
                        </HStack>
                      </RhfRadioGroupNew>
                      {graderingInnvilget === false && (
                        <RhfSelect
                          name="graderingAvslagAarsak"
                          control={formMethods.control}
                          label={intl.formatMessage({ id: 'UttakActivity.GraderingAvslagAarsaker' })}
                          validate={[required, notDash]}
                          selectValues={graderingAvslagsårsakOptions}
                        />
                      )}
                    </>
                  )}
                </VStack>
              </ArrowBox>
            )}
            {warning && (
              <Alert size="small" variant="info" className={styles.alert}>
                {warning}
              </Alert>
            )}
            <HStack gap="space-8">
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
    </RhfForm>
  );
};
