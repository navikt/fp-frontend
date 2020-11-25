import { expect } from 'chai';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import VurderAktiviteterPanel, { leggTilAktivitet, finnPlasseringIListe } from './VurderAktiviteterPanel';
import { lagAktivitetFieldId } from './VurderAktiviteterTabell';

import {
  BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME,
} from './AvklareAktiviteterPanel';

const aktivitet1 = {
  arbeidsgiverNavn: 'Arbeidsgiveren',
  arbeidsgiverId: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet2 = {
  arbeidsgiverNavn: 'Arbeidsgiveren2',
  arbeidsgiverId: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet3 = {
  arbeidsgiverNavn: 'Arbeidsgiveren3',
  aktørIdString: '324234234234',
  arbeidsgiverId: '1960-01-01',
  arbeidsforholdId: 'efj8343f34f',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitetAAP = {
  arbeidsgiverNavn: null,
  arbeidsgiverId: null,
  arbeidsforholdType: { kode: 'AAP', navn: 'Arbeidsavklaringspenger', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
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
const id3 = '1960-01-01efj8343f34f2019-01-01';
const idAAP = 'AAP2019-01-01';

describe('<VurderAktiviteterPanel>', () => {
  it('skal validere om ingen aktiviteter skal brukes og det ikkje finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter },
    ];
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: false };
    values[id2] = { skalBrukes: false };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: false };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    // eslint-disable-next-line no-underscore-dangle
    expect(errors._error).to.equal('VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet');
  });

  it('skal ikkje validere om ingen aktiviteter skal brukes og det finnes fleire aktiviteter i opptjeningsperioden', () => {
    const aktivitet1STP2 = {
      arbeidsgiverNavn: 'Arbeidsgiveren',
      arbeidsgiverId: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };
    const aktivitet2STP2 = {
      arbeidsgiverNavn: 'Arbeidsgiveren2',
      arbeidsgiverId: '334534623342',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: true,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };

    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitet1STP2, aktivitet2STP2] },

    ];
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: true, tom: aktivitet1STP2.tom };
    values[id2] = { skalBrukes: false, tom: aktivitet2STP2.tom };
    values[id3] = { skalBrukes: false, tom: aktivitet3.tom };
    values[idAAP] = { skalBrukes: false, tom: aktivitetAAP.tom };
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    expect(errors).to.be.empty;
  });

  it('skal validere om ingen aktiviteter er valgt i stp nr 2', () => {
    const aktivitetStp2 = {
      arbeidsgiverNavn: 'Arbeidsgiveren',
      arbeidsgiverId: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };
    const aktivitetStp3 = {
      arbeidsgiverNavn: 'Arbeidsgiveren3',
      aktørIdString: '324234234234',
      arbeidsgiverId: '1960-01-01',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2018-01-01',
      tom: '2018-12-31',
      skalBrukes: false,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };
    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter: [aktivitet3, aktivitetAAP] },
      { tom: '2019-01-02', aktiviteter: [aktivitetStp2] },
      { tom: '2019-01-01', aktiviteter: [aktivitetStp3] },

    ];
    const values = {
      avklarAktiviteter: null,
    };
    values[lagAktivitetFieldId(aktivitetStp2)] = { skalBrukes: false, tom: aktivitetStp2.tom };
    values[lagAktivitetFieldId(aktivitetStp3)] = { skalBrukes: null, tom: aktivitetStp3.tom };
    values[id3] = { skalBrukes: false, tom: aktivitet3.tom };
    values[idAAP] = { skalBrukes: false, tom: aktivitetAAP.tom };
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };

    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    // eslint-disable-next-line no-underscore-dangle
    expect(errors._error).to.equal('VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet');
  });

  it('skal validere ubesvart radio', () => {
    const aktivitet1STP2 = {
      arbeidsgiverNavn: 'Arbeidsgiveren',
      arbeidsgiverId: '384723894723',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: null,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };
    const aktivitet2STP2 = {
      arbeidsgiverNavn: 'Arbeidsgiveren2',
      arbeidsgiverId: '334534623342',
      arbeidsforholdId: 'efj8343f34f',
      fom: '2019-01-01',
      tom: '2019-01-01',
      skalBrukes: true,
      arbeidsforholdType: { kode: 'ARBEID', navn: 'Arbeid', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
    };

    const aktiviteterTomDatoMapping = [
      { tom: '2019-02-02', aktiviteter },
      { tom: '2019-01-02', aktiviteter: [aktivitet1STP2, aktivitet2STP2] },
    ];
    const values = {
      avklarAktiviteter: null,
    };
    values[id1] = { skalBrukes: false };
    values[id2] = { skalBrukes: false };
    values[id3] = { skalBrukes: null };
    values[idAAP] = { skalBrukes: false };
    values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] = 'sefiojsiejfise';
    values.avklarAktiviteter = {
      aktiviteterTomDatoMapping,
      skjæringstidspunkt: '2019-02-02',
    };
    const errors = VurderAktiviteterPanel.validate(values, aktiviteterTomDatoMapping, false);
    expect(errors[id3].skalBrukes[0].id).to.equal(isRequiredMessage()[0].id);
  });

  it('skal kunne legge til aktivitet i tom mapping', () => {
    const aktiviteterTomDatoMapping = [];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2020-02-08');
    expect(aktiviteterTomDatoMapping.length).to.equal(1);
    expect(aktiviteterTomDatoMapping[0].aktiviteter.length).to.equal(1);
  });

  it('skal kunne legge til aktivitet i mapping med eksisterende dato som er ulik gitt dato', () => {
    const aktiviteterTomDatoMapping = [
      { tom: '2018-02-02', aktiviteter: [aktivitet2] },
    ];
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2019-02-08');
    leggTilAktivitet(aktiviteterTomDatoMapping, aktivitet1, '2017-02-08');
    expect(aktiviteterTomDatoMapping.length).to.equal(3);
    expect(aktiviteterTomDatoMapping[0].aktiviteter.length).to.equal(1);
    expect(aktiviteterTomDatoMapping[1].aktiviteter.length).to.equal(1);
    expect(aktiviteterTomDatoMapping[2].aktiviteter.length).to.equal(1);
    expect(aktiviteterTomDatoMapping[0].tom).to.equal('2019-02-08');
    expect(aktiviteterTomDatoMapping[1].tom).to.equal('2018-02-02');
    expect(aktiviteterTomDatoMapping[2].tom).to.equal('2017-02-08');
  });

  it('skal finne ny index i tom liste', () => {
    const dato = '2019-02-08';
    const liste = [];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).to.equal(0);
  });

  it('skal finne ny index i liste med 1 element som ligger før', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).to.equal(1);
  });

  it('skal finne ny index i liste med 1 element som ligger etter', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).to.equal(0);
  });

  it('skal finne ny index i liste med 2 elementer der ny index er mellom', () => {
    const dato = '2019-02-08';
    const liste = [{ tom: '2019-02-09' }, { tom: '2019-02-07' }];
    const index = finnPlasseringIListe(liste, dato);
    expect(index).to.equal(1);
  });
});
