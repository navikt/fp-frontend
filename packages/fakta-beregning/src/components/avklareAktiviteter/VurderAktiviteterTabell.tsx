import React, { Component } from 'react';
import { change as reduxChange } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { RadioGroupField, RadioOption, DatepickerField } from '@fpsak-frontend/form';
import { required, getKodeverknavnFn, DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import opptjeningAktivitetTyper from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';

import {
  Table, TableRow, TableColumn, PeriodLabel, EditedIcon, DateLabel,
} from '@fpsak-frontend/shared-components';
import { ArbeidsgiverOpplysningerPerId, BeregningAktivitet, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createVisningsnavnFakta } from '../ArbeidsforholdHelper';

import styles from './vurderAktiviteterTabell.less';

/**
 * Lager en unik aktivitet-ID prefiks basert på idType for en aktivitet. Man prøver å legge på
 * aktivitet.arbeidsforholdId, om den finnes.
 *
 * @param {*} aktivitet
 * @param {*} idType er enten arbeidsgiverId eller aktørIdString for en aktivitet
 */
const aktivitetFieldIdPrefiks = (aktivitet: BeregningAktivitet, idType: string): string => {
  if (aktivitet.arbeidsforholdId) {
    return idType + aktivitet.arbeidsforholdId;
  }
  return idType;
};

/**
 * Felles suffiks som legges bak prefiks ved generering av aktivitetFieldIDer
 *
 * @param aktivitetPrefiks
 * @param aktivitet
 * @returns aktivitetFieldId
 */
const appendAktivitetFieldIdSuffiks = (aktivitetPrefiks: string,
  aktivitet: BeregningAktivitet): string => aktivitetPrefiks + aktivitet.fom.replace('.', '');

/**
 * Oppretter en unik ID for en aktivitet. Denne IDen brukes for å identifisere aktiviteter, slik at man f.eks kan
 * gjøre oppslag på disse. IDen består av en prefiks som genereres ift om det finnes en arbeidsgiverId
 * eller en aktørIdString (eller ingen).
 *
 * Det legges til slutt på en felles "suffiks" på alle genererte prefikser
 *
 * @param {*} aktivitet
 */
export const lagAktivitetFieldId = (aktivitet: BeregningAktivitet): string => {
  if (aktivitet.arbeidsgiverId || aktivitet.aktørIdString) {
    const aktivitetPrefiks = aktivitetFieldIdPrefiks(aktivitet, aktivitet.arbeidsgiverId ? aktivitet.arbeidsgiverId : aktivitet.aktørIdString);
    return appendAktivitetFieldIdSuffiks(aktivitetPrefiks, aktivitet);
  }
  return appendAktivitetFieldIdSuffiks(aktivitet.arbeidsforholdType.kode, aktivitet);
};

/**
 * Avgjør om en en aktivitet er valgbar i forhold til skjæringstidspunkt eller ift om ingen aktiviteter er i bruk
 * (og ingen øvrige betingelser som f.eks overstyring)
 *
 * @param {*} erSkjæringstidpunktLikEllerFørTom true hvis t.o.m dato for aktiviteten er lik eller etter s.t.p
 * @param {*} ingenAktiviterErBrukt true hvis ingen aktiviteter er brukt
 * @returns true hvis aktivitet er valgbar (uavhengig av overstyring)
 */
const erAktivitetValgbar = (erSkjæringstidpunktLikEllerFørTom: boolean,
  ingenAktiviterErBrukt: boolean): boolean => erSkjæringstidpunktLikEllerFørTom || ingenAktiviterErBrukt;

/**
 * Denne metoden avgjør om en aktivitet skal kunne vurderes - eller ikke. Dvs om det skal kunne velges
 * om den kan benyttes eller ikke (brukes for å avgjøre om radiobuttons for en aktivitet er synlig)
 *
 * @param {*} aktivitet - aktivitet som skal vurderes brukt
 * @param {*} skalOverstyre - om overstyring er aktivert
 * @param {*} harAksjonspunkt - om behandlingen har et aksjonspunkt for avklaringen av aktiviteter
 * @param {*} erSkjæringstidpunktLikEllerFørTom - om et gjeldende skjæringstidspunkt er lik eller før t.o.m dato
 * @param {*} ingenAktiviterErBrukt - true hvis alle aktiviteter er satt til "Ikke benytt"
 */
export const skalVurdereAktivitet = (aktivitet: BeregningAktivitet,
  skalOverstyre: boolean,
  harAksjonspunkt: boolean,
  erSkjæringstidpunktLikEllerFørTom: boolean,
  ingenAktiviterErBrukt: boolean): boolean => {
  if (!skalOverstyre && !harAksjonspunkt) {
    return false;
  }
  if (aktivitet.arbeidsforholdType && aktivitet.arbeidsforholdType.kode === opptjeningAktivitetTyper.AAP) {
    return false;
  }
  if (skalOverstyre) {
    return erAktivitetValgbar(erSkjæringstidpunktLikEllerFørTom, ingenAktiviterErBrukt);
  }
  return true;
};

const lagVisningsnavn = (aktivitet: BeregningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]}): string => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[aktivitet.arbeidsgiverId];
  if (!agOpplysning) {
    return aktivitet.arbeidsforholdType ? getKodeverknavnFn(alleKodeverk, kodeverkTyper)(aktivitet.arbeidsforholdType) : '';
  }
  return createVisningsnavnFakta(agOpplysning, aktivitet.eksternArbeidsforholdId);
};

const isSameOrBefore = (dato1: string, dato2: string): boolean => moment(dato1).isSameOrBefore(moment(dato2));

const lagTableRow = (
  readOnly,
  isAksjonspunktClosed,
  aktivitet,
  alleKodeverk,
  erOverstyrt,
  harAksjonspunkt,
  tomDatoForAktivitetGruppe,
  valgtSkjæringstidspunkt,
  ingenAktiviterErBrukt,
  arbeidsgiverOpplysningerPerId,
) => {
  const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(valgtSkjæringstidspunkt, tomDatoForAktivitetGruppe);
  return (
    <TableRow key={lagAktivitetFieldId(aktivitet)}>
      <TableColumn>
        <Normaltekst>
          {lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk)}
        </Normaltekst>
      </TableColumn>
      <TableColumn className={styles.rowalign}>
        {!erOverstyrt
      && (
      <Normaltekst>
        <PeriodLabel dateStringFom={aktivitet.fom} dateStringTom={aktivitet.tom} />
      </Normaltekst>
      )}
        {erOverstyrt
      && (
        <>
          <DateLabel dateString={aktivitet.fom} />
          {' '}
          -
          {' '}
          <DatepickerField
            name={`${lagAktivitetFieldId(aktivitet)}.tom`}
            validate={[required]}
            readOnly={readOnly}
          />
        </>

      )}
      </TableColumn>
      <TableColumn className={styles.radioMiddle}>
        <RadioGroupField
          name={`${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          readOnly={readOnly || !skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt,
            erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)}
        >
          {[<RadioOption key={`${lagAktivitetFieldId(aktivitet)}.bruk`} value />]}
        </RadioGroupField>
      </TableColumn>
      <TableColumn className={styles.radioMiddle}>
        <RadioGroupField
          name={`${lagAktivitetFieldId(aktivitet)}.skalBrukes`}
          readOnly={readOnly || !skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt,
            erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)}
        >
          {[<RadioOption key={`${lagAktivitetFieldId(aktivitet)}.ikkeBruk`} value={false} />]}
        </RadioGroupField>
      </TableColumn>
      {isAksjonspunktClosed && readOnly
      && (
      <TableColumn>
        {skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt,
          erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)
          && <EditedIcon />}
      </TableColumn>
      )}
    </TableRow>
  );
};

const getHeaderTextCodes = () => ([
  'VurderAktiviteterTabell.Header.Aktivitet',
  'VurderAktiviteterTabell.Header.Periode',
  'VurderAktiviteterTabell.Header.Benytt',
  'VurderAktiviteterTabell.Header.IkkeBenytt',
]
);

const finnHeading = (aktiviteter, erOverstyrt, skjaeringstidspunkt) => {
  if (erOverstyrt) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.Overstyrt.Overskrift"
        values={{ skjaeringstidspunkt: moment(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT) }}
      />
    );
  }
  const harAAP = aktiviteter.some((a) => a.arbeidsforholdType && a.arbeidsforholdType.kode === opptjeningAktivitetTyper.AAP);

  const harVentelonnVartpenger = aktiviteter.some((aktivitet) => aktivitet.arbeidsforholdType
    && aktivitet.arbeidsforholdType.kode === opptjeningAktivitetTyper.VENTELØNN_VARTPENGER);
  if (harAAP) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.FullAAPKombinert.Overskrift"
        values={{ skjaeringstidspunkt: moment(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT) }}
      />
    );
  }
  if (harVentelonnVartpenger) {
    return (
      <FormattedMessage
        id="VurderAktiviteterTabell.VentelonnVartpenger.Overskrift"
        values={{ skjaeringstidspunkt: moment(skjaeringstidspunkt).format(DDMMYYYY_DATE_FORMAT) }}
      />
    );
  }
  return '';
};

const skalBrukesPretufylling = (aktivitet: BeregningAktivitet,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean): boolean => {
  if (skalVurdereAktivitet(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt, false)) {
    return aktivitet.skalBrukes;
  }
  return aktivitet.skalBrukes === true || aktivitet.skalBrukes === null || aktivitet.skalBrukes === undefined;
};

const mapToInitialValues = (aktivitet: BeregningAktivitet,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  erTomLikEllerFørSkjæringstidpunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => ({
  beregningAktivitetNavn: lagVisningsnavn(aktivitet, arbeidsgiverOpplysningerPerId, alleKodeverk),
  fom: aktivitet.fom,
  tom: aktivitet.tom,
  skalBrukes: skalBrukesPretufylling(aktivitet, erOverstyrt, harAksjonspunkt, erTomLikEllerFørSkjæringstidpunkt),
});

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    aktiviteter: BeregningAktivitet[];
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    erOverstyrt: boolean;
    harAksjonspunkt: boolean;
    tomDatoForAktivitetGruppe: string;
    valgtSkjæringstidspunkt: string;
    ingenAktiviterErBrukt: boolean;
    reduxChange: (behandlingFormName: string, fieldName: string, value: any) => void;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type MappedOwnProps = {
  behandlingFormName: string;
}

/**
 * VurderAktiviteterTabell
 *
 * Presentasjonskomponent.. Inneholder tabeller for avklaring av skjæringstidspunkt
 */
export class VurderAktiviteterTabell extends Component<OwnProps & MappedOwnProps> {
  static validate = (values: any, aktiviteter: BeregningAktivitet[]) => {
    const errors = {};
    let harError = false;
    aktiviteter
      .forEach((aktivitet) => {
        const fieldId = lagAktivitetFieldId(aktivitet);
        const e = required(values[fieldId].skalBrukes);
        if (e) {
          errors[fieldId] = { skalBrukes: e };
          harError = true;
        }
      });
    if (harError) {
      return errors;
    }
    return null;
  };

  static transformValues = (values: any, aktiviteter: BeregningAktivitet[], valgtSkjæringstidspunkt: string, tomDatoForAktivitetGruppe: string) => {
    const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(valgtSkjæringstidspunkt, tomDatoForAktivitetGruppe);
    return aktiviteter
      .filter((aktivitet) => values[lagAktivitetFieldId(aktivitet)].skalBrukes === false || values[lagAktivitetFieldId(aktivitet)].tom != null)
      .map((aktivitet) => ({
        oppdragsgiverOrg: aktivitet.aktørIdString ? null : aktivitet.arbeidsgiverId,
        arbeidsforholdRef: aktivitet.arbeidsforholdId,
        fom: aktivitet.fom,
        tom: values[lagAktivitetFieldId(aktivitet)].tom != null ? values[lagAktivitetFieldId(aktivitet)].tom : aktivitet.tom,
        opptjeningAktivitetType: aktivitet.arbeidsforholdType ? aktivitet.arbeidsforholdType.kode : null,
        arbeidsgiverIdentifikator: aktivitet.aktørIdString ? aktivitet.aktørIdString : null,
        skalBrukes: erValgtSkjæringstidspunktLikEllerFørTomDato ? values[lagAktivitetFieldId(aktivitet)].skalBrukes : true,
      }));
  };

  static hasValueChangedFromInitial = (aktiviteter: BeregningAktivitet[], values: any, initialValues: any) => {
    const changedAktiviteter = aktiviteter.map(lagAktivitetFieldId).find((fieldId) => {
      if (values[fieldId] && initialValues[fieldId]) {
        if (values[fieldId].skalBrukes !== initialValues[fieldId].skalBrukes) {
          return true;
        }
      }
      return false;
    });
    return changedAktiviteter !== undefined;
  };

  static buildInitialValues = (aktiviteter: BeregningAktivitet[],
    alleKodeverk: {[key: string]: KodeverkMedNavn[]},
    erOverstyrt: boolean,
    harAksjonspunkt: boolean,
    erTomLikEllerFørSkjæringstidpunkt: boolean,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => {
    if (!aktiviteter) {
      return {};
    }
    const initialValues = {};
    aktiviteter.forEach((aktivitet) => {
      initialValues[lagAktivitetFieldId(aktivitet)] = mapToInitialValues(aktivitet, alleKodeverk, erOverstyrt, harAksjonspunkt,
        erTomLikEllerFørSkjæringstidpunkt, arbeidsgiverOpplysningerPerId);
    });
    return initialValues;
  };

  componentDidUpdate() {
    const {
      behandlingFormName, reduxChange: reduxFieldChange, aktiviteter,
      valgtSkjæringstidspunkt, tomDatoForAktivitetGruppe, ingenAktiviterErBrukt,
    } = this.props;

    const erValgtSkjæringstidspunktLikEllerFørTomDato = isSameOrBefore(valgtSkjæringstidspunkt, tomDatoForAktivitetGruppe);
    if (!erAktivitetValgbar(erValgtSkjæringstidspunktLikEllerFørTomDato, ingenAktiviterErBrukt)) {
      aktiviteter.map((a) => `${lagAktivitetFieldId(a)}.skalBrukes`)
        .forEach((fieldName) => {
          reduxFieldChange(behandlingFormName, fieldName, true);
        });
    }
  }

  render() {
    const {
      readOnly,
      isAksjonspunktClosed,
      aktiviteter,
      alleKodeverk,
      erOverstyrt,
      harAksjonspunkt,
      tomDatoForAktivitetGruppe,
      ingenAktiviterErBrukt,
      valgtSkjæringstidspunkt,
      arbeidsgiverOpplysningerPerId,
    } = this.props;

    return (
      <>
        <Element>
          {finnHeading(aktiviteter, erOverstyrt, tomDatoForAktivitetGruppe)}
        </Element>
        <Table headerTextCodes={getHeaderTextCodes()} noHover>
          {aktiviteter.map((aktivitet) => (
            lagTableRow(readOnly, isAksjonspunktClosed, aktivitet, alleKodeverk, erOverstyrt,
              harAksjonspunkt, tomDatoForAktivitetGruppe, valgtSkjæringstidspunkt, ingenAktiviterErBrukt, arbeidsgiverOpplysningerPerId)
          ))}
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  behandlingFormName: ownProps.formNameAvklarAktiviteter,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    reduxChange,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VurderAktiviteterTabell);
