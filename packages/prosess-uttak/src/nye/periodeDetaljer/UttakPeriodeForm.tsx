import React, {
  useCallback, ReactElement, FunctionComponent, useMemo,
} from 'react';
import { Button, Detail } from '@navikt/ds-react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
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

import UttakAktiviteterTabell, { FormValues as Aktivitet } from './UttakAktiviteterTabell';

import styles from './uttakPeriodeForm.less';
import UttakPeriodeInfo from './UttakPeriodeInfo';

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

type FormValues = {
  begrunnelse: string;
  erOppfylt: boolean;
  periodeAarsak: string;
  graderingInnvilget: boolean;
  graderingAvslagAarsak: string;
  samtidigUttaksprosent?: number;
  flerbarnsdager: boolean;
  samtidigUttak?: boolean;
  oppholdArsak: string;
  aktiviteter: Aktivitet[];
};

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

const lagOptionsTilPeriodeÅrsakSelect = (
  årsakKoder: ArsakKodeverk[],
  utfallType: string,
  aarsakFilter: AarsakFilter,
  utsettelseType?: string,
  periodeType?: string,
  skalFiltrere?: boolean,
): ReactElement[] => {
  årsakKoder.sort(sorterÅrsakKodeverk);
  let filteredNyKodeArray = årsakKoder
    .filter((kodeItem) => !utfallType || kodeItem.utfallType === utfallType)
    .filter((kodeItem) => {
      if (kodeItem.gyldigForLovendringer === undefined) {
        return true;
      }
      if (aarsakFilter.kreverSammenhengendeUttak) {
        return kodeItem.gyldigForLovendringer.includes('KREVER_SAMMENHENGENDE_UTTAK');
      }
      return aarsakFilter.utenMinsterett
        ? kodeItem.gyldigForLovendringer.includes('FRITT_UTTAK')
        : kodeItem.gyldigForLovendringer.includes('MINSTERETT_2022');
    })
    .filter((kodeItem) => {
      if (kodeItem.synligForRolle === undefined) {
        return true;
      }
      return aarsakFilter.søkerErMor
        ? kodeItem.synligForRolle.includes('MOR')
        : kodeItem.synligForRolle.includes('IKKE_MOR');
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

// https://jira.adeo.no/browse/PFP-7937
const finnUker = (
  aktivitet: PeriodeSokerAktivitet,
  valgtPeriode: PeriodeSoker,
): number => {
  if (valgtPeriode.periodeResultatType && !aktivitet.trekkdagerDesimaler && (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return Math.floor(aktivitet.trekkdagerDesimaler / 5);
};

const finnDager = (
  aktivitet: PeriodeSokerAktivitet,
  valgtPeriode: PeriodeSoker,
): number => {
  if (valgtPeriode.periodeResultatType && !aktivitet.trekkdagerDesimaler && (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    return 0;
  }
  if (aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler < 0) {
    return 0;
  }
  return parseFloat(((aktivitet.trekkdagerDesimaler % 5).toFixed(1)));
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

const byggDefaultValues = (
  valgtPeriode: PeriodeSoker,
  periodeResultatårsakKoder: ArsakKodeverk[],
): FormValues => {
  const kontoIkkeSatt = !valgtPeriode.periodeType
    && (valgtPeriode.aktiviteter[0].stønadskontoType === '-');
  return {
    begrunnelse: valgtPeriode.begrunnelse,
    erOppfylt: erPeriodeOppfylt(valgtPeriode, periodeResultatårsakKoder),
    periodeAarsak: valgtPeriode.periodeResultatÅrsak,
    graderingInnvilget: valgtPeriode.graderingInnvilget,
    samtidigUttak: valgtPeriode.samtidigUttak,
    graderingAvslagAarsak: valgtPeriode.graderingAvslagÅrsak ? valgtPeriode.graderingAvslagÅrsak : '-',
    samtidigUttaksprosent: valgtPeriode.samtidigUttaksprosent,
    flerbarnsdager: valgtPeriode.flerbarnsdager,
    oppholdArsak: valgtPeriode.oppholdÅrsak,
    aktiviteter: valgtPeriode.aktiviteter.map((a) => ({
      stønadskontoType: a.stønadskontoType,
      weeks: finnUker(a, valgtPeriode),
      days: finnDager(a, valgtPeriode),
      utbetalingsgrad: !kontoIkkeSatt ? a.utbetalingsgrad : '0',
    })),
  };
};

const transformValues = (
  values: FormValues,
  valgtPeriode: PeriodeSoker,
): PeriodeSoker => ({
  ...valgtPeriode,
  ...values,
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

  const formMethods = useForm<FormValues>({
    defaultValues: useMemo(() => byggDefaultValues(valgtPeriode, periodeResultatårsakKoder), [valgtPeriode]),
  });

  const erOppfylt = formMethods.watch('erOppfylt');
  const graderingInnvilget = formMethods.watch('graderingInnvilget');
  const samtidigUttak = formMethods.watch('samtidigUttak');
  const førsteValgteStønadskonto = formMethods.watch('aktiviteter')[0].stønadskontoType;

  const periodeÅrsakOptions = useMemo(() => lagOptionsTilPeriodeÅrsakSelect(
    periodeResultatårsakKoder,
    erOppfylt ? 'INNVILGET' : 'AVSLÅTT',
    årsakFilter,
    valgtPeriode.utsettelseType,
    førsteValgteStønadskonto || valgtPeriode.periodeType,
    valgtPeriode.aktiviteter.length === 1,
  ), [erOppfylt, årsakFilter, valgtPeriode, førsteValgteStønadskonto]);

  const graderingAvslagsårsakOptions = useMemo(() => lagOptionsTilGraderingAvslagsårsakerSelect(alleKodeverk), []);

  const submit = useCallback((values: FormValues) => oppdaterPeriode([transformValues(values, valgtPeriode)]), [valgtPeriode]);

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
          aktiviteter={valgtPeriode.aktiviteter}
          erOppfylt={erOppfylt}
          utsettelseType={valgtPeriode.utsettelseType}
        />
      )}
      {erHovedsøkersPeriode && (
        <>
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'UttakActivity.Vurdering' })}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
          <VerticalSpacer sixteenPx />
          <RadioGroupPanel
            name="erOppfylt"
            hideLegend
            validate={[required]}
            isReadOnly={isReadOnly}
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
                  selectValues={periodeÅrsakOptions}
                  validate={[required, notDash]}
                  label={intl.formatMessage({ id: erOppfylt ? 'UttakActivity.InnvilgelseAarsaker' : 'UttakActivity.AvslagAarsak' })}
                  readOnly={isReadOnly}
                />
                {(valgtPeriode.gradertAktivitet && erOppfylt) && (
                  <div className={styles.marginTop30}>
                    <Detail>
                      <FormattedMessage id="UttakActivity.Gradering" />
                    </Detail>
                    <VerticalSpacer eightPx />
                    <RadioGroupPanel
                      name="graderingInnvilget"
                      hideLegend
                      validate={[required]}
                      isReadOnly={isReadOnly}
                      isHorizontal
                      isTrueOrFalseSelection
                      radios={[
                        { label: intl.formatMessage({ id: 'UttakActivity.Oppfylt' }), value: 'true' },
                        { label: intl.formatMessage({ id: 'UttakActivity.IkkeOppfylt' }), value: 'false' },
                      ]}
                    />
                    {graderingInnvilget === false && (
                      <SelectField
                        name="graderingAvslagAarsak"
                        selectValues={graderingAvslagsårsakOptions}
                        validate={[required, notDash]}
                        label={intl.formatMessage({ id: 'UttakActivity.GraderingAvslagAarsaker' })}
                        readOnly={isReadOnly}
                      />
                    )}
                  </div>
                )}
              </ArrowBox>
            </>
          )}
          <VerticalSpacer sixteenPx />
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
