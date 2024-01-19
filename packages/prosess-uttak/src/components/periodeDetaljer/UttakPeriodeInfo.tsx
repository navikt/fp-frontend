import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { Label, Detail, BodyShort, HStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { hasValidDecimal, maxValue, notDash, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, NumberField, SelectField } from '@navikt/ft-form-hooks';

import {
  KodeverkType,
  oppholdArsakType,
  oppholdArsakKontoNavn,
  uttakArbeidType as uttakArbeidTypeKodeverk,
  periodeResultatType,
} from '@navikt/fp-kodeverk';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk, PeriodeSoker } from '@navikt/fp-types';

import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';

import styles from './uttakPeriodeInfo.module.css';

const maxValue100 = maxValue(100);

const periodeStatusClassName = (valgtPeriode: PeriodeSoker, erTilknyttetStortinget: boolean): string => {
  if (valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET && !erTilknyttetStortinget) {
    return styles.greenDetailsPeriod;
  }
  if (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || erTilknyttetStortinget) {
    return styles.orangeDetailsPeriod;
  }
  return styles.redDetailsPeriod;
};

const periodeIsInnvilget = (valgtPeriode: PeriodeSoker): boolean =>
  valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET;

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
          utsettelseType: alleKodeverk[KodeverkType.UTTAK_UTSETTELSE_TYPE].find(
            k => k.kode === valgtPeriode.utsettelseType,
          )?.navn,
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
          innvilgelseAarsak: alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK].find(
            k => k.kode === valgtPeriode.periodeResultatÅrsak,
          )?.navn,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="UttakActivity.IkkeOppfyltAarsak"
      values={{
        avslagAarsak: alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK].find(
          k => k.kode === valgtPeriode.periodeResultatÅrsak,
        )?.navn,
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />
  );
};

const stonadskonto = (valgtPeriode: PeriodeSoker, alleKodeverk: AlleKodeverk, kontoIkkeSatt?: boolean): string => {
  let returnText = '';
  if (!kontoIkkeSatt) {
    returnText =
      alleKodeverk[KodeverkType.STOENADSKONTOTYPE].find(k => k.kode === valgtPeriode.aktiviteter[0]?.stønadskontoType)
        ?.navn || '';
  }
  return returnText;
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER,
];

const mapPeriodeTyper = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeÅrsaker.includes(kode))
    .map(({ kode }) => (
      <option value={kode} key={kode}>
        {oppholdArsakKontoNavn[kode]}
      </option>
    ));

const visGraderingIkkeInnvilget = (
  valgtPeriode: PeriodeSoker,
  readOnly: boolean,
  graderingInnvilget?: boolean,
): boolean =>
  valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET &&
  !!valgtPeriode.gradertAktivitet &&
  graderingInnvilget === false &&
  readOnly;

interface OwnProps {
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

const UttakPeriodeInfo: FunctionComponent<OwnProps> = ({
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
}) => {
  const intl = useIntl();

  const oppholdArsakTyper = alleKodeverk[KodeverkType.OPPHOLD_ARSAK];

  const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';

  return (
    <div className={periodeStatusClassName(valgtPeriode, erTilknyttetStortinget)}>
      {valgtPeriode.oppholdÅrsak === '-' && (
        <HStack justify="space-between">
          <div>
            <Label size="small">{typePeriode(valgtPeriode, alleKodeverk, kontoIkkeSatt)}</Label>
            <BodyShort>{stonadskonto(valgtPeriode, alleKodeverk, kontoIkkeSatt)}</BodyShort>
          </div>
          <div>{isReadOnly && isInnvilgetText(valgtPeriode, alleKodeverk)}</div>
          <div>
            {harSoktOmFlerbarnsdager && (
              <CheckboxField
                name="flerbarnsdager"
                label={intl.formatMessage({ id: 'UttakActivity.Flerbarnsdager' })}
                readOnly={isReadOnly}
              />
            )}
            <CheckboxField
              key="samtidigUttak"
              name="samtidigUttak"
              label={intl.formatMessage({ id: 'UttakActivity.SamtidigUttak' })}
              readOnly={isReadOnly}
              validate={[
                // @ts-ignore FIX type i CheckboxField
                (samtidigUttak: boolean) =>
                  erOppfylt && samtidigUttak !== true && valgtInnvilgelsesÅrsak === '2038'
                    ? intl.formatMessage({ id: 'ValidationMessage.SamtidigUttakErObligatorisk' })
                    : null,
              ]}
            />
            {erSamtidigUttak && (
              <HStack gap="2">
                <NumberField
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
      <VerticalSpacer eightPx />
      <HStack gap="10">
        <div>
          <Label size="small">
            <FormattedMessage
              id="UttakActivity.PeriodeData.Periode"
              values={{
                fomVerdi: dayjs(valgtPeriode.fom.toString()).format(DDMMYYYY_DATE_FORMAT),
                tomVerdi: dayjs(valgtPeriode.tom.toString()).format(DDMMYYYY_DATE_FORMAT),
              }}
            />
          </Label>
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
            {
              alleKodeverk[KodeverkType.GRADERING_AVSLAG_AARSAK].find(k => k.kode === valgtPeriode.graderingAvslagÅrsak)
                ?.navn
            }
          </div>
        )}
      </HStack>
      {valgtPeriode.oppholdÅrsak !== '-' && (
        <div className={styles.select}>
          <VerticalSpacer sixteenPx />
          <Detail>
            <FormattedMessage id="UttakInfo.Opphold.AnnenForelder" />
          </Detail>
          <SelectField
            name="oppholdArsak"
            selectValues={mapPeriodeTyper(oppholdArsakTyper)}
            label=""
            hideLabel
            readOnly={isReadOnly}
            validate={[required, notDash]}
          />
        </div>
      )}
      <VerticalSpacer eightPx />
      {valgtPeriode.mottattDato && (
        <BodyShort>
          <FormattedMessage
            id="UttakInfo.MottattDato"
            values={{ dato: dayjs(valgtPeriode.mottattDato).format(DDMMYYYY_DATE_FORMAT) }}
          />
        </BodyShort>
      )}
    </div>
  );
};

export default UttakPeriodeInfo;
