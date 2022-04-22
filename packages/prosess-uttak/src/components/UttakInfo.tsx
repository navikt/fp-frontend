import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { FormattedMessage } from 'react-intl';
import { Element, Undertekst } from 'nav-frontend-typografi';
import moment from 'moment/moment';

import { CheckboxField, DecimalField, SelectField } from '@fpsak-frontend/form';
import {
  calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, hasValidDecimal, maxValue, notDash, required, getKodeverknavnFn,
} from '@navikt/ft-utils';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import oppholdArsakType, { oppholdArsakKontoNavn } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk,
} from '@fpsak-frontend/types';

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
      {selectedItemData.oppholdÅrsak === '-'
          && (
            <Row>
              <Column xs="4">
                <Row>
                  <Column xs="12">
                    <Element>
                      {typePeriode(selectedItemData, getKodeverknavn, kontoIkkeSatt)}
                    </Element>
                  </Column>
                </Row>
                <Row>
                  <Column xs="12">
                    {stonadskonto(selectedItemData, getKodeverknavn, kontoIkkeSatt)}
                  </Column>
                </Row>
              </Column>
              <Column xs="5">
                {readOnly
                  && (
                    <div>
                      {isInnvilgetText(selectedItemData, getKodeverknavn)}
                    </div>
                  )}
              </Column>
              <Column xs="3">
                <>
                  <Row className={styles.fieldHorizontal}>
                    <Column className={styles.textAlignRight}>
                      {(harSoktOmFlerbarnsdager)
                        && (
                          <CheckboxField
                            key="flerbarnsdager"
                            name="flerbarnsdager"
                            label={{ id: 'UttakActivity.Flerbarnsdager' }}
                            disabled={readOnly}
                          />
                        )}
                    </Column>
                  </Row>
                  <Row className={styles.fieldHorizontal}>
                    <Column className={styles.textAlignRight}>
                      <CheckboxField
                        key="samtidigUttak"
                        name="samtidigUttak"
                        label={{ id: 'UttakActivity.SamtidigUttak' }}
                        disabled={readOnly}
                      />
                    </Column>
                  </Row>
                </>
                {erSamtidigUttak
                  && (
                    <Row className={styles.fieldHorizontal}>
                      <Column className={styles.textAlignRight}>
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
                      </Column>
                        {!readOnly && <Column className={styles.suffix}>%</Column>}
                    </Row>
                  )}
              </Column>
            </Row>
          )}
      <Row>
        <Column xs="4">
          <Row>
            <Column xs="12">
              <Element>
                <FormattedMessage
                  id="UttakActivity.PeriodeData.Periode"
                  values={{
                    fomVerdi: moment(selectedItemData.fom.toString())
                      .format(DDMMYYYY_DATE_FORMAT),
                    tomVerdi: moment(selectedItemData.tom.toString())
                      .format(DDMMYYYY_DATE_FORMAT),
                  }}
                />
              </Element>
            </Column>
          </Row>
          {selectedItemData.oppholdÅrsak === '-'
              && (
                <Row>
                  <Column xs="12">
                    <FormattedMessage
                      id={calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).id}
                      values={{
                        weeks: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).weeks,
                        days: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).days,
                      }}
                    />
                  </Column>
                </Row>
              )}
        </Column>
        <Column xs="6">
          <Row>
            <Column xs="12">
              {selectedItemData.gradertAktivitet
                  && (
                    <Undertekst>
                      <FormattedMessage id="UttakActivity.Gradering" />
                    </Undertekst>
                  )}
              {selectedItemData.oppholdÅrsak !== '-'
                  && (
                    <FormattedMessage
                      id={calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).id}
                      values={{
                        weeks: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).weeks,
                        days: calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom).days,
                      }}
                    />
                  )}
            </Column>
          </Row>
          <Row>
            <Column xs="12">
              {gradertArbforhold(selectedItemData, arbeidsgiverOpplysningerPerId)}
            </Column>
          </Row>
          {visGraderingIkkeInnvilget(selectedItemData, readOnly, graderingInnvilget) && (
          <Row>
            <Column xs="12">
              <b>
                <FormattedMessage id="UttakActivity.GraderingIkkeOppfylt" />
                :
              </b>
              {getKodeverknavn(selectedItemData.graderingAvslagÅrsak, KodeverkType.GRADERING_AVSLAG_AARSAK)}
            </Column>
          </Row>
          )}
        </Column>
      </Row>
      {selectedItemData.oppholdÅrsak !== '-' && (
        <div>
          <Row>
            <Column xs="12">
              <FormattedMessage id="UttakInfo.Opphold.AnnenForelder" />
            </Column>
          </Row>
          <Row>
            <Column xs="12">
              <SelectField
                name="oppholdArsak"
                selectValues={mapPeriodeTyper(oppholdArsakTyper)}
                label=""
                bredde="m"
                readOnly={readOnly}
                value={selectedItemData.oppholdÅrsak}
                validate={[required, notDash]}
              />
            </Column>
          </Row>
        </div>
      )}
      {selectedItemData.mottattDato && (
        <FormattedMessage id="UttakInfo.MottattDato" values={{ dato: moment(selectedItemData.mottattDato).format(DDMMYYYY_DATE_FORMAT) }} />
      )}
    </div>
  );
};

export default UttakInfo;
