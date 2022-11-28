import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, Detail, BodyShort } from '@navikt/ds-react';
import moment from 'moment/moment';

import { CheckboxField, DecimalField, SelectField } from '@fpsak-frontend/form';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import {
  hasValidDecimal, maxValue, notDash, required,
} from '@navikt/ft-form-validators';
import { getKodeverknavnFn } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import oppholdArsakType, { oppholdArsakKontoNavn } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk,
} from '@fpsak-frontend/types';

import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import uttakArbeidTypeTekstCodes from '../utils/uttakArbeidTypeCodes';
import { PeriodeMedClassName } from './Uttak';
import styles from './uttakActivity.less';

const maxValue100 = maxValue(100);

const periodeStatusClassName = (periode: PeriodeMedClassName): string => {
  if (periode.erOppfylt === false) {
    return styles.redDetailsPeriod;
  }
  if (periode.erOppfylt
    || (periode.periodeResultatType === periodeResultatType.INNVILGET && !periode.tilknyttetStortinget)) {
    return styles.greenDetailsPeriod;
  }
  if (periode.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING || periode.tilknyttetStortinget) {
    return styles.orangeDetailsPeriod;
  }
  return styles.redDetailsPeriod;
};

const periodeIsInnvilget = (periode: PeriodeMedClassName): boolean => {
  if (periode.erOppfylt === false) {
    return false;
  }
  if (periode.erOppfylt || (periode.periodeResultatType === periodeResultatType.INNVILGET)) {
    return true;
  }
  return false;
};

const gradertArbforhold = (selectedItem: PeriodeMedClassName, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string | ReactElement => {
  let arbeidsforhold = '';
  if (selectedItem.gradertAktivitet) {
    const {
      arbeidsgiverReferanse, uttakArbeidType,
    } = selectedItem.gradertAktivitet;

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
  selectedItem: PeriodeMedClassName,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  kontoIkkeSatt?: boolean,
): ReactElement | string => {
  if (selectedItem.utsettelseType === '-' && !kontoIkkeSatt) {
    return <FormattedMessage id="UttakActivity.Uttak" />;
  }
  if (selectedItem.utsettelseType !== '-') {
    return (
      <FormattedMessage
        id="UttakActivity.Utsettelse"
        values={{ utsettelseType: getKodeverknavn(selectedItem.utsettelseType, KodeverkType.UTTAK_UTSETTELSE_TYPE) }}
      />
    );
  }
  if (kontoIkkeSatt) {
    return <FormattedMessage id="UttakActivity.IngenKonto" />;
  }
  return '';
};

const isInnvilgetText = (selectedItemData: PeriodeMedClassName, getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string): ReactElement => {
  if (periodeIsInnvilget(selectedItemData)) {
    return (
      <FormattedMessage
        id="UttakActivity.InnvilgelseAarsak"
        values={{
          innvilgelseAarsak: getKodeverknavn(selectedItemData.periodeResultatÅrsak, KodeverkType.PERIODE_RESULTAT_AARSAK),
          b: (chunks: any) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage
      id="UttakActivity.IkkeOppfyltAarsak"
      values={{
        avslagAarsak: getKodeverknavn(selectedItemData.periodeResultatÅrsak, KodeverkType.PERIODE_RESULTAT_AARSAK),
        b: (chunks: any) => <b>{chunks}</b>,
      }}
    />
  );
};

const stonadskonto = (
  selectedItem: PeriodeMedClassName,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  kontoIkkeSatt?: boolean,
): string => {
  let returnText = '';
  if (!kontoIkkeSatt) {
    returnText = getKodeverknavn(selectedItem.aktiviteter[0].stønadskontoType, KodeverkType.STOENADSKONTOTYPE);
  }
  return returnText;
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapPeriodeTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
  }) => <option value={kode} key={kode}>{oppholdArsakKontoNavn[kode]}</option>);

const visGraderingIkkeInnvilget = (selectedItem: PeriodeMedClassName, readOnly: boolean, graderingInnvilget?: boolean): boolean => (
  selectedItem.periodeResultatType === periodeResultatType.INNVILGET
    && selectedItem.gradertAktivitet
    && graderingInnvilget === false
    && readOnly
);

interface OwnProps {
  oppholdArsakTyper: KodeverkMedNavn[];
  selectedItemData: PeriodeMedClassName;
  kontoIkkeSatt?: boolean;
  readOnly: boolean;
  harSoktOmFlerbarnsdager: boolean;
  graderingInnvilget?: boolean;
  erSamtidigUttak?: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * UttakInfo
 * Presentationskomponent. Viser opp den faktiska informasjonen om en periode i uttak
 */
export const UttakInfo: FunctionComponent<OwnProps> = ({
  selectedItemData,
  kontoIkkeSatt,
  readOnly,
  graderingInnvilget,
  erSamtidigUttak,
  harSoktOmFlerbarnsdager,
  oppholdArsakTyper,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  return (
    <div className={periodeStatusClassName(selectedItemData)}>
      <FlexContainer>
        {selectedItemData.oppholdÅrsak === '-' && (
          <FlexRow spaceBetween>
            <FlexColumn>
              <Label size="small">
                {typePeriode(selectedItemData, getKodeverknavn, kontoIkkeSatt)}
              </Label>
              <BodyShort>
                {stonadskonto(selectedItemData, getKodeverknavn, kontoIkkeSatt)}
              </BodyShort>
            </FlexColumn>
            <FlexColumn>
              {readOnly && isInnvilgetText(selectedItemData, getKodeverknavn)}
            </FlexColumn>
            <FlexColumn>
              {(harSoktOmFlerbarnsdager) && (
                <CheckboxField
                  key="flerbarnsdager"
                  name="flerbarnsdager"
                  label={{ id: 'UttakActivity.Flerbarnsdager' }}
                  disabled={readOnly}
                />
              )}
              <CheckboxField
                key="samtidigUttak"
                name="samtidigUttak"
                label={{ id: 'UttakActivity.SamtidigUttak' }}
                disabled={readOnly}
              />
              {erSamtidigUttak && (
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <DecimalField
                        name="samtidigUttaksprosent"
                        bredde="XS"
                        readOnly={readOnly}
                        value={selectedItemData.samtidigUttaksprosent}
                        label={{ id: 'UttakInfo.SamtidigUttaksprosent' }}
                        validate={[required, maxValue100, hasValidDecimal]}
                        format={(value) => {
                          if (value || value === 0) {
                            return readOnly ? `${value} %` : value;
                          }
                          return '';
                        }}
                          // @ts-ignore Fiks dette
                        normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                      />
                    </FlexColumn>
                    {!readOnly && <FlexColumn className={styles.suffix}>%</FlexColumn>}
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
                  fomVerdi: moment(selectedItemData.fom.toString())
                    .format(DDMMYYYY_DATE_FORMAT),
                  tomVerdi: moment(selectedItemData.tom.toString())
                    .format(DDMMYYYY_DATE_FORMAT),
                }}
              />
            </Label>
            {selectedItemData.oppholdÅrsak === '-' && (
              <BodyShort>
                <FormattedMessage
                  id={calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).id}
                  values={{
                    weeks: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).weeks,
                    days: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).days,
                  }}
                />
              </BodyShort>
            )}
          </FlexColumn>
          <FlexColumn>
            {selectedItemData.gradertAktivitet && (
              <Detail size="small">
                <FormattedMessage id="UttakActivity.Gradering" />
              </Detail>
            )}
            {selectedItemData.oppholdÅrsak !== '-' && (
              <FormattedMessage
                id={calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).id}
                values={{
                  weeks: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).weeks,
                  days: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).days,
                }}
              />
            )}
            {gradertArbforhold(selectedItemData, arbeidsgiverOpplysningerPerId)}
            {visGraderingIkkeInnvilget(selectedItemData, readOnly, graderingInnvilget) && (
              <>
                <b>
                  <FormattedMessage id="UttakActivity.GraderingIkkeOppfylt" />
                  :
                </b>
                {getKodeverknavn(selectedItemData.graderingAvslagÅrsak, KodeverkType.GRADERING_AVSLAG_AARSAK)}
              </>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {selectedItemData.oppholdÅrsak !== '-' && (
        <>
          <FormattedMessage id="UttakInfo.Opphold.AnnenForelder" />
          <SelectField
            name="oppholdArsak"
            selectValues={mapPeriodeTyper(oppholdArsakTyper)}
            label=""
            bredde="m"
            readOnly={readOnly}
            value={selectedItemData.oppholdÅrsak}
            validate={[required, notDash]}
          />
        </>
      )}
      <VerticalSpacer eightPx />
      {selectedItemData.mottattDato && (
        <BodyShort>
          <FormattedMessage id="UttakInfo.MottattDato" values={{ dato: moment(selectedItemData.mottattDato).format(DDMMYYYY_DATE_FORMAT) }} />
        </BodyShort>
      )}
    </div>
  );
};

export default UttakInfo;
