import React, { FunctionComponent } from 'react';
import moment from 'moment';
import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteter,
  BeregningAktivitet,
  AlleKodeverk,
} from '@fpsak-frontend/types';
import { BeregningAktiviteterTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningAktivitetAP';
import VurderAktiviteterTabell, { lagAktivitetFieldId } from './VurderAktiviteterTabell';
import AvklarAktiviteterValues, { AktiviteterValues } from '../../typer/AvklarAktivitetTypes';

const harListeAktivitetSomSkalBrukes = (mapping: AvklarBeregningAktiviteter, values: AvklarAktiviteterValues): boolean => mapping.aktiviteter
  .find((aktivitet) => {
    const fieldId = lagAktivitetFieldId(aktivitet);
    return !!values.aktiviteterValues && !!values.aktiviteterValues[fieldId]
      ? values.aktiviteterValues[fieldId].skalBrukes
      : aktivitet.skalBrukes;
  }) !== undefined;

export const finnPlasseringIListe = (gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[], dato: string): number => {
  let i = 0;
  while (i < gjeldendeTomDatoMapping.length && moment(dato).isBefore(gjeldendeTomDatoMapping[i].tom === undefined ? null : gjeldendeTomDatoMapping[i].tom)) {
    i += 1;
  }
  return i;
};

export const leggTilAktivitet = (gjeldendeTomDatoMapping: AvklarBeregningAktiviteter[],
  aktivitet: BeregningAktivitet,
  tomDato: string): void => {
  // Finnes gjeldendeTomDatoMapping med tomDato ?
  const eksisterende = gjeldendeTomDatoMapping.find(({ tom }) => tom === tomDato);
  if (eksisterende === undefined) {
    const nyTomDatoMapping = {
      tom: tomDato,
      aktiviteter: [aktivitet],
    };
    const index = finnPlasseringIListe(gjeldendeTomDatoMapping, tomDato);
    gjeldendeTomDatoMapping.splice(index, 0, nyTomDatoMapping);
  } else {
    eksisterende.aktiviteter.push(aktivitet);
  }
};

const lagTomDatoMapping = (values: AvklarAktiviteterValues): AvklarBeregningAktiviteter[] => {
  const forrigeTomDatoMapping = values.avklarAktiviteter.aktiviteterTomDatoMapping;
  const gjeldendeTomDatoMapping = [];
  // @ts-ignore fix: hvor har denne tatt veien?
  const stpOpptjening = values.avklarAktiviteter.skjæringstidspunkt;

  // Alle aktiviteter som har t.o.m dato på en dag før, eller etter, skal legges til i gjeldendeTomDatoMapping
  forrigeTomDatoMapping.flatMap(({ aktiviteter }) => aktiviteter).forEach((aktivitet) => {
    const nyAktivitet = { ...aktivitet };
    const tomDato = values.aktiviteterValues[lagAktivitetFieldId(aktivitet)].tom;
    if (!!tomDato && tomDato !== nyAktivitet.tom) {
      nyAktivitet.tom = tomDato;
    }
    if (moment(tomDato).isSameOrAfter(moment(stpOpptjening).subtract(1, 'days'))) {
      leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, stpOpptjening);
    } else {
      leggTilAktivitet(gjeldendeTomDatoMapping, nyAktivitet, moment(tomDato).add(1, 'days').format('YYYY-MM-DD'));
    }
  });
  return gjeldendeTomDatoMapping;
};

/**
 * Returnerer aktuelle aktivitetslister som skal vises frem i panelet (f.eks om man skal vise frem benyttet aktivitet,
 * eller også andre aktiviteter for overstyring)
 */
const finnListerSomSkalVurderes = (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  values: AvklarAktiviteterValues,
  erOverstyrt: boolean): AvklarBeregningAktiviteter[] => {
  const nyTomDatoMapping = values ? lagTomDatoMapping(values) : aktiviteterTomDatoMapping;
  if (erOverstyrt) {
    return nyTomDatoMapping;
  }
  if (!values || harListeAktivitetSomSkalBrukes(nyTomDatoMapping[0], values) || nyTomDatoMapping.length === 1) {
    return [nyTomDatoMapping[0]];
  }
  return [nyTomDatoMapping[0], nyTomDatoMapping[1]];
};

/**
 *  Utleder "gjeldende" skjæringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skjæringstidspunkt.
 *  Disse inndelingene antas sortert i rekkefølge med seneste s.t.p først. Det sjekkes derfor  i rekkefølge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den første aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas altså at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} values - Verdier fra nåværende form values
 * @param {*} listeSomSkalVurderes - Liste med aktiviteter delt inn i "bøtter" for skjæringstidspunkt
 * @returns seneste skjæringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkjæringstidspunkt = (values: AvklarAktiviteterValues, listeSomSkalVurderes: AvklarBeregningAktiviteter[]): string => {
  if (values === undefined || listeSomSkalVurderes === undefined) {
    return undefined;
  }
  for (let k = 0; k < listeSomSkalVurderes.length; k += 1) {
    const { aktiviteter } = listeSomSkalVurderes[k];
    for (let i = 0; i < aktiviteter.length; i += 1) {
      const tempaktivitet = values.aktiviteterValues[lagAktivitetFieldId(aktiviteter[i])];
      if (tempaktivitet.skalBrukes) {
        return listeSomSkalVurderes[k].tom;
      }
    }
  }
  return undefined;
};

type OwnProps = {
    erOverstyrt: boolean;
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    harAksjonspunkt: boolean;
    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[];
    alleKodeverk: AlleKodeverk;
    formNameAvklarAktiviteter: string;
    values: AvklarAktiviteterValues;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

interface StaticFunctions {
  transformValues: (values: AvklarAktiviteterValues,
                    aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
                    erOverstyrt: boolean) => BeregningAktiviteterTransformedValues;
  validate: (values: AvklarAktiviteterValues,
             aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
             erOverstyrt: boolean) => any;
  hasValueChangedFromInitial: (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
                               values: AvklarAktiviteterValues,
                               initialValues: AvklarAktiviteterValues,
                               erOverstyrt: boolean) => boolean;
  buildInitialValues: (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
                       alleKodeverk: AlleKodeverk,
                       erOverstyrt: boolean,
                       harAksjonspunkt: boolean,
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => AktiviteterValues;
}

/**
 * VurderAktiviteterPanel
 *
 * Presentasjonskomponent.. Inneholder tabeller for avklaring av skjæringstidspunkt
 */
export const VurderAktiviteterPanel:FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  values,
  aktiviteterTomDatoMapping,
  erOverstyrt,
  harAksjonspunkt,
  alleKodeverk,
  formNameAvklarAktiviteter,
  arbeidsgiverOpplysningerPerId,
}) => {
  const listeSomSkalVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunkt(values, listeSomSkalVurderes);
  return (
    <>
      {listeSomSkalVurderes.map((aktivitetMap) => (
        <VurderAktiviteterTabell
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          aktiviteter={aktivitetMap.aktiviteter}
          erOverstyrt={erOverstyrt}
          harAksjonspunkt={harAksjonspunkt}
          alleKodeverk={alleKodeverk}
          tomDatoForAktivitetGruppe={aktivitetMap.tom}
          valgtSkjæringstidspunkt={gjeldendeSkjæringstidspunkt}
          ingenAktiviterErBrukt={gjeldendeSkjæringstidspunkt === undefined}
          formNameAvklarAktiviteter={formNameAvklarAktiviteter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={aktivitetMap.tom}
        />
      ))}
    </>
  );
};

VurderAktiviteterPanel.validate = (values, aktiviteterTomDatoMapping, erOverstyrt) => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  let errors = VurderAktiviteterTabell.validate(values, listerSomVurderes[0].aktiviteter);
  if (errors !== null) {
    return errors;
  }
  const harAktiviteterSomSkalBrukes = harListeAktivitetSomSkalBrukes(listerSomVurderes[0], values);
  if (harAktiviteterSomSkalBrukes) {
    return {};
  }
  const harAktiviteterINesteSkjæringstidspunkt = listerSomVurderes.length > 1
    && listerSomVurderes[1].aktiviteter.length > 0;
  if (!harAktiviteterINesteSkjæringstidspunkt) {
    return { _error: 'VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet' };
  }
  errors = VurderAktiviteterTabell.validate(values, listerSomVurderes[1].aktiviteter);
  if (errors !== null) {
    return errors;
  }
  const harAktiviteterSomSkalBrukesINesteSkjæringstidspunkt = harListeAktivitetSomSkalBrukes(listerSomVurderes[1], values);
  if (!harAktiviteterSomSkalBrukesINesteSkjæringstidspunkt) {
    return { _error: 'VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet' };
  }
  return {};
};

const erLikEllerFør = (dato1: string, dato2: string): boolean => moment(dato1).isSameOrBefore(moment(dato2));

VurderAktiviteterPanel.transformValues = (values: AvklarAktiviteterValues,
  aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  erOverstyrt: boolean): BeregningAktiviteterTransformedValues => {
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunkt(values, listerSomVurderes);
  return ({
    beregningsaktivitetLagreDtoList: listerSomVurderes
      .flatMap((liste) => VurderAktiviteterTabell.transformValues(values, liste.aktiviteter, gjeldendeSkjæringstidspunkt, liste.tom)),
  });
};

VurderAktiviteterPanel.hasValueChangedFromInitial = (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  values: AvklarAktiviteterValues,
  initialValues: AvklarAktiviteterValues,
  erOverstyrt: boolean): boolean => {
  if (!aktiviteterTomDatoMapping) {
    return false;
  }
  const listerSomVurderes = finnListerSomSkalVurderes(aktiviteterTomDatoMapping, values, erOverstyrt);
  return listerSomVurderes.find((liste) => VurderAktiviteterTabell.hasValueChangedFromInitial(liste.aktiviteter, values, initialValues)) !== undefined;
};

/**
 *  Utleder "gjeldende" skjæringstidspunkt (s.t.p) av lister med aktiviteter inndelt i skjæringstidspunkt.
 *  Disse inndelingene antas sortert i rekkefølge med seneste s.t.p først. Det sjekkes derfor  i rekkefølge om
 *  en aktivitet skal brukes (skalBrukes), og s.t.p for inndelingen til den første aktiviteten som
 *  skal brukes blir brukt.
 *
 *  Det antas altså at et s.t.p for en aktivitet er angitt i listeSomSkalVurderes[k].tom, der
 *  listeSomSkalVurderes[k].aktiviteter er en samling aktiviteter for s.t.p inndeling 'k'.
 *  (Liste med lister av aktiviteter).
 *
 * @param {*} values - Verdier fra nåværende form values
 * @param {*} aktiviteterTomDatoMapping - Liste med aktiviteter delt inn i "bøtter" for skjæringstidspunkt
 * @returns seneste skjæringstidspunkt for en aktivitet som er satt til "skalBrukes". Undefined hvis
 * noen av argumentene er undefined.
 */
const utledGjeldendeSkjæringstidspunktVedPreutfylling = (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[]): string => {
  if (aktiviteterTomDatoMapping === undefined) {
    return undefined;
  }
  for (let k = 0; k < aktiviteterTomDatoMapping.length; k += 1) {
    const { aktiviteter } = aktiviteterTomDatoMapping[k];
    for (let i = 0; i < aktiviteter.length; i += 1) {
      const skalBrukes = aktiviteter[i].skalBrukes === true || aktiviteter[i].skalBrukes === null || aktiviteter[i].skalBrukes === undefined;
      if (skalBrukes) {
        return aktiviteterTomDatoMapping[k].tom;
      }
    }
  }
  return undefined;
};

VurderAktiviteterPanel.buildInitialValues = (aktiviteterTomDatoMapping: AvklarBeregningAktiviteter[],
  alleKodeverk: AlleKodeverk,
  erOverstyrt: boolean,
  harAksjonspunkt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): AktiviteterValues => {
  if (!aktiviteterTomDatoMapping || aktiviteterTomDatoMapping.length === 0) {
    return {};
  }
  let initialValues = {};
  const gjeldendeSkjæringstidspunkt = utledGjeldendeSkjæringstidspunktVedPreutfylling(aktiviteterTomDatoMapping);

  aktiviteterTomDatoMapping.forEach((liste) => {
    initialValues = {
      ...initialValues,
      ...VurderAktiviteterTabell.buildInitialValues(liste.aktiviteter, alleKodeverk, erOverstyrt,
        harAksjonspunkt, erLikEllerFør(gjeldendeSkjæringstidspunkt, liste.tom), arbeidsgiverOpplysningerPerId),
    };
  });
  return initialValues;
};

export default VurderAktiviteterPanel;
