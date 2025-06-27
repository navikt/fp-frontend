import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDecimal, maxValue, notDash, required } from '@navikt/ft-form-validators';
import { calcDaysAndWeeks, dateFormat, periodFormat } from '@navikt/ft-utils';

import { OppholdArsakType, PeriodeResultatType, UttakArbeidType as uttakArbeidTypeKodeverk } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, PeriodeSoker } from '@navikt/fp-types';

import { uttakArbeidTypeTekstCodes } from '../../utils/uttakArbeidTypeCodes';

import styles from './uttakPeriodeInfo.module.css';

const maxValue100 = maxValue(100);

const OppholdArsakKontoNavn = {
  INGEN: 'Ingen årsak',
  UTTAK_MØDREKVOTE_ANNEN_FORELDER: 'Mødrekvote',
  UTTAK_FEDREKVOTE_ANNEN_FORELDER: 'Fedrekvote',
  UTTAK_FELLESP_ANNEN_FORELDER: 'Fellesperiode',
  UTTAK_FORELDREPENGER_ANNEN_FORELDER: 'Foreldrepenger',
  UDEFINERT: '-',
} as Record<string, string>;

const periodeStatusClassName = (valgtPeriode: PeriodeSoker, erTilknyttetStortinget: boolean): string => {
  if (valgtPeriode.periodeResultatType === PeriodeResultatType.INNVILGET && !erTilknyttetStortinget) {
    return styles.greenDetailsPeriod;
  }
  if (valgtPeriode.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING || erTilknyttetStortinget) {
    return styles.orangeDetailsPeriod;
  }
  return styles.redDetailsPeriod;
};

const periodeIsInnvilget = (valgtPeriode: PeriodeSoker): boolean =>
  valgtPeriode.periodeResultatType === PeriodeResultatType.INNVILGET;

const gradertArbforhold = (
  valgtPeriode: PeriodeSoker,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string | ReactElement => {
  let arbeidsforhold = '';
  if (valgtPeriode.gradertAktivitet) {
    const { arbeidsgiverReferanse, uttakArbeidType } = valgtPeriode.gradertAktivitet;

    if (uttakArbeidType && uttakArbeidType !== uttakArbeidTypeKodeverk.ORDINÆRT_ARBEID) {
      return <FormattedMessage id={uttakArbeidTypeTekstCodes[uttakArbeidType]} />;
    }
    if (arbeidsgiverReferanse && arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]) {
      const { navn, identifikator } = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
      arbeidsforhold = navn ? `${navn}` : arbeidsforhold;
      arbeidsforhold = identifikator ? `${arbeidsforhold} (${identifikator})` : arbeidsforhold;
    }
  }
  return arbeidsforhold;
};

const typePeriode = (
  valgtPeriode: PeriodeSoker,
  alleKodeverk: AlleKodeverk,
  kontoIkkeSatt?: boolean,
): ReactElement | string => {
  if (valgtPeriode.utsettelseType === '-' && !kontoIkkeSatt) {
    return <FormattedMessage id="UttakActivity.Uttak" />;
  }
  if (valgtPeriode.utsettelseType !== '-') {
    return (
      <FormattedMessage
        id="UttakActivity.Utsettelse"
        values={{
          utsettelseType: alleKodeverk['UttakUtsettelseType'].find(k => k.kode === valgtPeriode.utsettelseType)?.navn,
        }}
      />
    );
  }
  if (kontoIkkeSatt) {
    return <FormattedMessage id="UttakActivity.IngenKonto" />;
  }
  return '';
};

const isInnvilgetText = (valgtPeriode: PeriodeSoker, alleKodeverk: AlleKodeverk): ReactElement => {
  if (periodeIsInnvilget(valgtPeriode)) {
    return (
      <FormattedMessage
        id="UttakActivity.InnvilgelseAarsak"
        values={{
          innvilgelseAarsak: alleKodeverk['PeriodeResultatÅrsak'].find(
            k => k.kode === valgtPeriode.periodeResultatÅrsak,
          )?.navn,
          b: chunks => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="UttakActivity.IkkeOppfyltAarsak"
      values={{
        avslagAarsak: alleKodeverk['PeriodeResultatÅrsak'].find(k => k.kode === valgtPeriode.periodeResultatÅrsak)
          ?.navn,
        b: chunks => <b>{chunks}</b>,
      }}
    />
  );
};

const stonadskonto = (valgtPeriode: PeriodeSoker, alleKodeverk: AlleKodeverk, kontoIkkeSatt?: boolean): string => {
  let returnText = '';
  if (!kontoIkkeSatt) {
    returnText =
      alleKodeverk['StønadskontoType'].find(k => k.kode === valgtPeriode.aktiviteter[0]?.stønadskontoType)?.navn ?? '';
  }
  return returnText;
};

const gyldigeÅrsaker = [
  OppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  OppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER,
];

const mapPeriodeTyper = (typer: KodeverkMedNavn<'OppholdÅrsak'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeÅrsaker.some(årsak => årsak === kode))
    .map(({ kode }) => (
      <option value={kode} key={kode}>
        {OppholdArsakKontoNavn[kode]}
      </option>
    ));

const visGraderingIkkeInnvilget = (
  valgtPeriode: PeriodeSoker,
  readOnly: boolean,
  graderingInnvilget?: boolean,
): boolean =>
  valgtPeriode.periodeResultatType === PeriodeResultatType.INNVILGET &&
  !!valgtPeriode.gradertAktivitet &&
  graderingInnvilget === false &&
  readOnly;

interface Props {
  valgtPeriode: PeriodeSoker;
  isReadOnly: boolean;
  harSoktOmFlerbarnsdager: boolean;
  graderingInnvilget?: boolean;
  erSamtidigUttak?: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erTilknyttetStortinget: boolean;
  erOppfylt?: boolean;
  valgtInnvilgelsesÅrsak?: string;
}

export const UttakPeriodeInfo = ({
  valgtPeriode,
  isReadOnly,
  graderingInnvilget,
  erSamtidigUttak,
  harSoktOmFlerbarnsdager,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  erTilknyttetStortinget,
  erOppfylt,
  valgtInnvilgelsesÅrsak,
}: Props) => {
  const intl = useIntl();

  const oppholdArsakTyper = alleKodeverk['OppholdÅrsak'];

  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';

  return (
    <VStack gap="4" className={periodeStatusClassName(valgtPeriode, erTilknyttetStortinget)}>
      {valgtPeriode.oppholdÅrsak === '-' && (
        <HStack justify="space-between">
          <div>
            <Label size="small">{typePeriode(valgtPeriode, alleKodeverk, kontoIkkeSatt)}</Label>
            <BodyShort>{stonadskonto(valgtPeriode, alleKodeverk, kontoIkkeSatt)}</BodyShort>
          </div>
          <div>{isReadOnly && isInnvilgetText(valgtPeriode, alleKodeverk)}</div>
          <div>
            {harSoktOmFlerbarnsdager && (
              <RhfCheckbox
                name="flerbarnsdager"
                label={intl.formatMessage({ id: 'UttakActivity.Flerbarnsdager' })}
                readOnly={isReadOnly}
              />
            )}
            <RhfCheckbox
              key="samtidigUttak"
              name="samtidigUttak"
              label={intl.formatMessage({ id: 'UttakActivity.SamtidigUttak' })}
              readOnly={isReadOnly}
              validate={[
                // @ts-expect-error FIX type i RhfCheckbox
                (samtidigUttak: boolean) =>
                  erOppfylt && samtidigUttak !== true && valgtInnvilgelsesÅrsak === '2038'
                    ? intl.formatMessage({ id: 'ValidationMessage.SamtidigUttakErObligatorisk' })
                    : null,
              ]}
            />
            {erSamtidigUttak && (
              <HStack gap="2">
                <RhfNumericField
                  name="samtidigUttaksprosent"
                  className={styles.numberFieldLength}
                  readOnly={isReadOnly}
                  label={intl.formatMessage({ id: 'UttakInfo.SamtidigUttaksprosent' })}
                  validate={[required, maxValue100, hasValidDecimal]}
                  forceTwoDecimalDigits
                />
                {!isReadOnly && <div className={styles.suffix}>%</div>}
              </HStack>
            )}
          </div>
        </HStack>
      )}
      <HStack gap="10">
        <div>
          <Label size="small">{periodFormat(valgtPeriode.fom, valgtPeriode.tom)}</Label>
          {valgtPeriode.oppholdÅrsak === '-' && (
            <BodyShort>{calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).formattedString}</BodyShort>
          )}
        </div>
        <div>
          {valgtPeriode.gradertAktivitet && (
            <Detail>
              <FormattedMessage id="UttakActivity.Gradering" />
            </Detail>
          )}
          {valgtPeriode.oppholdÅrsak !== '-' && (
            <div>{calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).formattedString}</div>
          )}
          {gradertArbforhold(valgtPeriode, arbeidsgiverOpplysningerPerId)}
        </div>
        {visGraderingIkkeInnvilget(valgtPeriode, isReadOnly, graderingInnvilget) && (
          <div>
            <b>
              <FormattedMessage id="UttakActivity.GraderingIkkeOppfylt" />:
            </b>
            {alleKodeverk['GraderingAvslagÅrsak'].find(k => k.kode === valgtPeriode.graderingAvslagÅrsak)?.navn}
          </div>
        )}
      </HStack>
      {valgtPeriode.oppholdÅrsak !== '-' && (
        <div className={styles.select}>
          <Detail>
            <FormattedMessage id="UttakInfo.Opphold.AnnenForelder" />
          </Detail>
          <RhfSelect
            name="oppholdArsak"
            selectValues={mapPeriodeTyper(oppholdArsakTyper)}
            label=""
            hideLabel
            readOnly={isReadOnly}
            validate={[required, notDash]}
          />
        </div>
      )}
      {valgtPeriode.mottattDato && (
        <BodyShort>
          <FormattedMessage id="UttakInfo.MottattDato" values={{ dato: dateFormat(valgtPeriode.mottattDato) }} />
        </BodyShort>
      )}
    </VStack>
  );
};
