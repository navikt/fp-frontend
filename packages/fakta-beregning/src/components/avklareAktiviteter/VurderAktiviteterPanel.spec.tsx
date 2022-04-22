import { isRequiredMessage } from '@navikt/ft-utils';
import VurderAktiviteterPanel, { leggTilAktivitet, finnPlasseringIListe } from './VurderAktiviteterPanel';
import { lagAktivitetFieldId } from './VurderAktiviteterTabell';

import {
  BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME,
} from './AvklareAktiviteterPanel';

const aktivitet1 = {
  arbeidsgiverIdent: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet2 = {
  arbeidsgiverIdent: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: 'ARBEID',
};

const aktivitet3 = {
  aktørIdString: '324234234234',
  arbeidsgiverIdent: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: 'ARBEID',
};

const aktivitetAAP = {
  arbeidsforholdType: 'AAP',
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: null,
};

const aktiviteter = [
  aktivitet1,
  aktivitet2,
  aktivitet3,
  aktivitetAAP,
];

const id1 = '3847238947232019-01-01';
const id2 = '334534623342efj8343f34f2019-01-01';
const id3 = '324234234234efj8343f34f2019-01-01';
const idAAP = 'AAP2019-01-01';

describe('<VurderAktiviteterPanel>', () => {
  it('skal validere om ingen aktiviteter skal brukes og det ikkje finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter },
    ];
    const values = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: false };
    values.aktiviteterValues[id2] = { skalBrukes: false };
    values.aktiviteterValues[id3] = { skalBrukes: false };
    values.aktiviteterValues[idAAP] = { skalBrukes: false };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    // eslint-disable-next-line no-underscore-dangle
    expect(errors._error).toBe('VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet');
  });

  it('skal ikkje validere om ingen aktiviteter skal brukes og det finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktivitet1STP2 = {
      arbeidsgiverIdent: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: 'ARBEID',
    };
    const aktivitet2STP2 = {
      arbeidsgiverIdent: '334534623342',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: true,
      arbeidsforholdType: 'ARBEID',
    };

    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitet1STP2, aktivitet2STP2] },

    ];
    const values = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: true, tom: aktivitet1STP2.tom };
    values.aktiviteterValues[id2] = { skalBrukes: false, tom: aktivitet2STP2.tom };
    values.aktiviteterValues[id3] = { skalBrukes: false, tom: aktivitet3.tom };
    values.aktiviteterValues[idAAP] = { skalBrukes: false, tom: aktivitetAAP.tom };
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    expect(Object.keys(errors)).toHaveLength(0);
  });

  it('skal validere om ingen aktiviteter er valgt i stp nr 2', () => {
    const aktivitetStp2 = {
      arbeidsgiverIdent: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: 'ARBEID',
    };
    const aktivitetStp3 = {
      aktørIdString: '324234234234',
      arbeidsgiverIdent: '1960-01-01',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2018-01-01',
      tom: '2018-12-31',
      skalBrukes: false,
      arbeidsforholdType: 'ARBEID',
    };
    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitetStp2] },
      { tom: '2019-01-01', aktiviteter: [aktivitetStp3] },

    ];
    const values = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    values.aktiviteterValues[lagAktivitetFieldId(aktivitetStp2)] = { skalBrukes: false, tom: aktivitetStp2.tom };
    values.aktiviteterValues[lagAktivitetFieldId(aktivitetStp3)] = { skalBrukes: null, tom: aktivitetStp3.tom };
    values.aktiviteterValues[id3] = { skalBrukes: false, tom: aktivitet3.tom };
    values.aktiviteterValues[idAAP] = { skalBrukes: false, tom: aktivitetAAP.tom };
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };

    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    // eslint-disable-next-line no-underscore-dangle
    expect(errors._error).toBe('VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet');
  });

  it('skal validere ubesvart radio', () => {
    const aktivitet1STP2 = {
      arbeidsgiverIdent: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: 'ARBEID',
    };
    const aktivitet2STP2 = {
      arbeidsgiverIdent: '334534623342',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: true,
      arbeidsforholdType: 'ARBEID',
    };

    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter },
      { tom: '2019-01-02', aktiviteter: [aktivitet1STP2, aktivitet2STP2] },
    ];
    const values = {
      avklarAktiviteter: null,
      aktiviteterValues: {},
    };
    values.aktiviteterValues[id1] = { skalBrukes: false };
    values.aktiviteterValues[id2] = { skalBrukes: false };
    values.aktiviteterValues[id3] = { skalBrukes: null };
    values.aktiviteterValues[idAAP] = { skalBrukes: false };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    expect(errors[id3].skalBrukes).toBe(isRequiredMessage());
  });

  it('skal kunne legge til aktivitet i tom mapping', () => {
    const aktiviteterTomDatoMapping = [];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2020-02-08');
    expect(aktiviteterTomDatoMapping.length).toBe(1);
    expect(aktiviteterTomDatoMapping[0].aktiviteter.length).toBe(1);
  });

  it('skal kunne legge til aktivitet i mapping med eksisterende dato som er ulik gitt dato', () => {
    const aktiviteterTomDatoMapping = [
      { tom: '2018-02-02', aktiviteter: [aktivitet2] },
    ];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2019-02-08');
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2017-02-08');
    expect(aktiviteterTomDatoMapping.length).toBe(3);
    expect(aktiviteterTomDatoMapping[0].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[1].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[2].aktiviteter.length).toBe(1);
    expect(aktiviteterTomDatoMapping[0].tom).toBe('2019-02-08');
    expect(aktiviteterTomDatoMapping[1].tom).toBe('2018-02-02');
    expect(aktiviteterTomDatoMapping[2].tom).toBe('2017-02-08');
  });

  it('skal finne ny index i tom liste', () => {
    const dato = '2019-02-08';
    const liste = [];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(0);
  });

  it('skal finne ny index i liste med 1 element som ligger før', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(1);
  });

  it('skal finne ny index i liste med 1 element som ligger etter', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(0);
  });

  it('skal finne ny index i liste med 2 elementer der ny index er mellom', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }, { tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).toBe(1);
  });
});
