import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { Label, Detail, BodyShort } from '@navikt/ds-react';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import {
  hasValidDecimal, maxValue, notDash, required,
} from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { CheckboxField, NumberField, SelectField } from '@navikt/ft-form-hooks';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import oppholdArsakType, { oppholdArsakKontoNavn } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk, PeriodeSoker,
} from '@fpsak-frontend/types';

import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';

import styles from './uttakPeriodeInfo.less';

const maxValue100 = maxValue(100);

const periodeStatusClassName = (
  valgtPeriode: PeriodeSoker,
  erTilknyttetStortinget: boolean,
): string => {
  if (valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET && !erTilknyttetStortinget) {
    return styles.greenDetailsPeriod;
  }
  if (valgtPeriode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || erTilknyttetStortinget) {
    return styles.orangeDetailsPeriod;
  }
  return styles.redDetailsPeriod;
};

const periodeIsInnvilget = (
  valgtPeriode: PeriodeSoker,
): boolean => valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET;

const gradertArbforhold = (
  valgtPeriode: PeriodeSoker,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string | ReactElement => {
  let arbeidsforhold = '';
  if (valgtPeriode.gradertAktivitet) {
    const {
      arbeidsgiverReferanse, uttakArbeidType,
    } = valgtPeriode.gradertAktivitet;

    if (uttakArbeidType && uttakArbeidType !== uttakArbeidTypeKodeverk.ORDINÆRT_ARBEID) {
      return <FormattedMessage id={uttakArbeidTypeTekstCodes[uttakArbeidType]} />;
    }
    if (arbeidsgiverReferanse && arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]) {
      const {
        navn, identifikator,
      } = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
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
        values={{ utsettelseType: alleKodeverk[KodeverkType.UTTAK_UTSETTELSE_TYPE].find((k) => k.kode === valgtPeriode.utsettelseType)?.navn }}
      />
    );
  }
  if (kontoIkkeSatt) {
    return <FormattedMessage id="UttakActivity.IngenKonto" />;
  }
  return '';
};

const isInnvilgetText = (
  valgtPeriode: PeriodeSoker,
  alleKodeverk: AlleKodeverk,
): ReactElement => {
  if (periodeIsInnvilget(valgtPeriode)) {
    return (
      <FormattedMessage
        id="UttakActivity.InnvilgelseAarsak"
        values={{
          innvilgelseAarsak: alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK].find((k) => k.kode === valgtPeriode.periodeResultatÅrsak)?.navn,
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="UttakActivity.IkkeOppfyltAarsak"
      values={{
        avslagAarsak: alleKodeverk[KodeverkType.PERIODE_RESULTAT_AARSAK].find((k) => k.kode === valgtPeriode.periodeResultatÅrsak)?.navn,
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />
  );
};

const stonadskonto = (
  valgtPeriode: PeriodeSoker,
  alleKodeverk: AlleKodeverk,
  kontoIkkeSatt?: boolean,
): string => {
  let returnText = '';
  if (!kontoIkkeSatt) {
    returnText = alleKodeverk[KodeverkType.STOENADSKONTOTYPE].find((k) => k.kode === valgtPeriode.aktiviteter[0]?.stønadskontoType)?.navn;
  }
  return returnText;
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapPeriodeTyper = (
  typer: KodeverkMedNavn[],
): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
  }) => <option value={kode} key={kode}>{oppholdArsakKontoNavn[kode]}</option>);

const visGraderingIkkeInnvilget = (
  valgtPeriode: PeriodeSoker,
  readOnly: boolean,
  graderingInnvilget?: boolean,
): boolean => (
  valgtPeriode.periodeResultatType === periodeResultatType.INNVILGET
    && valgtPeriode.gradertAktivitet
    && graderingInnvilget === false
    && readOnly
);

interface OwnProps {
  valgtPeriode: PeriodeSoker;
  isReadOnly: boolean;
  harSoktOmFlerbarnsdager: boolean;
  graderingInnvilget?: boolean;
  erSamtidigUttak?: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erTilknyttetStortinget: boolean;
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
}) => {
  const intl = useIntl();

  const oppholdArsakTyper = alleKodeverk[KodeverkType.OPPHOLD_ARSAK];

  const kontoIkkeSatt = !valgtPeriode.periodeType && (valgtPeriode.aktiviteter[0].stønadskontoType === '-');

  return (
    <div className={periodeStatusClassName(valgtPeriode, erTilknyttetStortinget)}>
      <FlexContainer>
        {valgtPeriode.oppholdÅrsak === '-' && (
          <FlexRow spaceBetween>
            <FlexColumn>
              <Label size="small">
                {typePeriode(valgtPeriode, alleKodeverk, kontoIkkeSatt)}
              </Label>
              <BodyShort>
                {stonadskonto(valgtPeriode, alleKodeverk, kontoIkkeSatt)}
              </BodyShort>
            </FlexColumn>
            <FlexColumn>
              {isReadOnly && isInnvilgetText(valgtPeriode, alleKodeverk)}
            </FlexColumn>
            <FlexColumn>
              {(harSoktOmFlerbarnsdager) && (
                <CheckboxField
                  name="flerbarnsdager"
                  label={intl.formatMessage({ id: 'UttakActivity.Flerbarnsdager' })}
                  disabled={isReadOnly}
                />
              )}
              <CheckboxField
                key="samtidigUttak"
                name="samtidigUttak"
                label={intl.formatMessage({ id: 'UttakActivity.SamtidigUttak' })}
                disabled={isReadOnly}
              />
              {erSamtidigUttak && (
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn className={styles.bredde}>
                      <NumberField
                        name="samtidigUttaksprosent"
                        readOnly={isReadOnly}
                        label={intl.formatMessage({ id: 'UttakInfo.SamtidigUttaksprosent' })}
                        validate={[required, maxValue100, hasValidDecimal]}
                        forceTwoDecimalDigits
                      />
                    </FlexColumn>
                    {!isReadOnly && <FlexColumn className={styles.suffix}>%</FlexColumn>}
                  </FlexRow>
                </FlexContainer>
              )}
            </FlexColumn>
          </FlexRow>
        )}
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage
                id="UttakActivity.PeriodeData.Periode"
                values={{
                  fomVerdi: dayjs(valgtPeriode.fom.toString())
                    .format(DDMMYYYY_DATE_FORMAT),
                  tomVerdi: dayjs(valgtPeriode.tom.toString())
                    .format(DDMMYYYY_DATE_FORMAT),
                }}
              />
            </Label>
            {valgtPeriode.oppholdÅrsak === '-' && (
              <BodyShort>
                <FormattedMessage
                  id={calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).id}
                  values={{
                    weeks: calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).weeks,
                    days: calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).days,
                  }}
                />
              </BodyShort>
            )}
          </FlexColumn>
          <FlexColumn>
            {valgtPeriode.gradertAktivitet && (
              <Detail>
                <FormattedMessage id="UttakActivity.Gradering" />
              </Detail>
            )}
            {valgtPeriode.oppholdÅrsak !== '-' && (
              <FormattedMessage
                id={calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).id}
                values={{
                  weeks: calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).weeks,
                  days: calcDaysAndWeeks(valgtPeriode.fom, valgtPeriode.tom).days,
                }}
              />
            )}
            {gradertArbforhold(valgtPeriode, arbeidsgiverOpplysningerPerId)}
            {visGraderingIkkeInnvilget(valgtPeriode, isReadOnly, graderingInnvilget) && (
              <>
                <b>
                  <FormattedMessage id="UttakActivity.GraderingIkkeOppfylt" />
                  :
                </b>
                {alleKodeverk[KodeverkType.GRADERING_AVSLAG_AARSAK].find((k) => k.kode === valgtPeriode.graderingAvslagÅrsak)?.navn}
              </>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
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
            readOnly={isReadOnly}
            validate={[required, notDash]}
          />
        </div>
      )}
      <VerticalSpacer eightPx />
      {valgtPeriode.mottattDato && (
        <BodyShort>
          <FormattedMessage id="UttakInfo.MottattDato" values={{ dato: dayjs(valgtPeriode.mottattDato).format(DDMMYYYY_DATE_FORMAT) }} />
        </BodyShort>
      )}
    </div>
  );
};

export default UttakPeriodeInfo;
