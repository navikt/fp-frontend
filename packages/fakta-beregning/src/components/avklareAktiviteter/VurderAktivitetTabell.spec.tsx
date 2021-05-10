import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { RadioGroupField } from '@fpsak-frontend/form';
import {
  Table, TableRow, TableColumn, EditedIcon,
} from '@fpsak-frontend/shared-components';
import { VurderAktiviteterTabell, lagAktivitetFieldId, skalVurdereAktivitet } from './VurderAktiviteterTabell';

const aktivitet1 = {
  arbeidsgiverId: '384723894723',
  arbeidsgiverIdVisning: '384723894723',
  fom: '2019-01-01',
  tom: null,
  skalBrukes: null,
  arbeidsforholdType: { kode: 'ARBEID', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet2 = {
  arbeidsgiverId: '334534623342',
  arbeidsgiverIdVisning: '334534623342',
  arbeidsforholdId: 'efj8343f34f',
  eksternArbeidsforholdId: '123456',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: true,
  arbeidsforholdType: { kode: 'ARBEID', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitet3 = {
  aktørIdString: '324234234234',
  arbeidsgiverId: '324234234234',
  arbeidsforholdId: 'efj8343f34f',
  eksternArbeidsforholdId: '56789',
  fom: '2019-01-01',
  tom: '2019-02-02',
  skalBrukes: false,
  arbeidsforholdType: { kode: 'ARBEID', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
};

const aktivitetAAP = {
  arbeidsgiverNavn: null,
  arbeidsgiverId: null,
  arbeidsforholdType: { kode: opptjeningAktivitetType.AAP, kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
  fom: '2019-01-01',
  tom: '2020-02-02',
  skalBrukes: null,
};

const aktivitetVentelonnVartpenger = {
  arbeidsgiverNavn: null,
  arbeidsgiverId: null,
  arbeidsforholdType: { kode: 'VENTELØNN_VARTPENGER', kodeverk: 'OPPTJENING_AKTIVITET_TYPE' },
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

const agOpplysninger = {
  324234234234: {
    identifikator: '324234234234',
    navn: 'Arbeidsgiveren3',
    erPrivatPerson: true,
    fødselsdato: '1960-01-01',
  },
  334534623342: {
    identifikator: '334534623342',
    navn: 'Arbeidsgiveren2',
    erPrivatPerson: false,
  },
  384723894723: {
    identifikator: '384723894723',
    navn: 'Arbeidsgiveren',
    erPrivatPerson: false,
  },
};

const alleKodeverk = {
  [kodeverkTyper.OPPTJENING_AKTIVITET_TYPE]: [{
    kode: opptjeningAktivitetType.ARBEID,
    navn: 'Arbeid',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.FRILANS,
    navn: 'Frilans',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.DAGPENGER,
    navn: 'Dagpenger',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.NARING,
    navn: 'Næring',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.AAP,
    navn: 'Arbeidsavklaringspenger',
    kodeverk: 'test',
  }],
};

const changeCallback = sinon.spy();

describe('<VurderAktiviteterTabell>', () => {
  it('skal vise tabell', () => {
    const wrapper = shallow(<VurderAktiviteterTabell
      readOnly={false}
      formNameAvklarAktiviteter="test"
      isAksjonspunktClosed
      aktiviteter={aktiviteter}
      alleKodeverk={alleKodeverk}
      erOverstyrt={false}
      harAksjonspunkt
      valgtSkjæringstidspunkt="2019-02-01"
      ingenAktiviterErBrukt={false}
      tomDatoForAktivitetGruppe="2019-02-01"
      reduxChange={changeCallback}
      behandlingFormName="formname"
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);

    const heading = wrapper.find(FormattedMessage).first();
    expect(heading.prop('id')).toBe('VurderAktiviteterTabell.FullAAPKombinert.Overskrift');

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rows = table.find(TableRow);
    expect(rows).toHaveLength(4);

    const cols = rows.first().find(TableColumn);
    expect(cols).toHaveLength(4);
    const radios1 = rows.first().find(RadioGroupField);
    expect(radios1).toHaveLength(2);
    radios1.forEach((radio) => {
      expect(radio.props().readOnly).toBe(false);
    });

    const cols2 = rows.at(1).find(TableColumn);
    expect(cols2).toHaveLength(4);
    const radios2 = rows.at(1).find(RadioGroupField);
    expect(radios2).toHaveLength(2);
    radios2.forEach((radio) => {
      expect(radio.props().readOnly).toBe(false);
    });

    const cols3 = rows.last().find(TableColumn);
    expect(cols3).toHaveLength(4);
    const radios3 = rows.last().find(RadioGroupField);
    expect(radios3).toHaveLength(2);
    radios3.forEach((radio) => {
      expect(radio.props().readOnly).toBe(true);
    });
  });

  it('skal vise tabell med ventelønn/vartpenger overskrift', () => {
    const utenAAP = [
      aktivitet1,
      aktivitet2,
      aktivitetVentelonnVartpenger,
    ];
    const wrapper = shallow(<VurderAktiviteterTabell
      readOnly={false}
      isAksjonspunktClosed
      aktiviteter={utenAAP}
      alleKodeverk={alleKodeverk}
      formNameAvklarAktiviteter="test"
      erOverstyrt={false}
      harAksjonspunkt
      valgtSkjæringstidspunkt="2019-02-01"
      ingenAktiviterErBrukt={false}
      tomDatoForAktivitetGruppe="2019-02-01"
      reduxChange={changeCallback}
      behandlingFormName="formname"
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);

    const heading = wrapper.find(FormattedMessage).first();
    expect(heading.prop('id')).toBe('VurderAktiviteterTabell.VentelonnVartpenger.Overskrift');

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rows = table.find(TableRow);
    expect(rows).toHaveLength(3);

    rows.forEach((row) => {
      const radios = row.find(RadioGroupField);
      expect(radios).toHaveLength(2);
      radios.forEach((radio) => {
        expect(radio.props().readOnly).toBe(false);
      });
    });
  });

  it('skal vise tabell med gul mann kolonne for alle rader unntatt AAP', () => {
    const wrapper = shallow(<VurderAktiviteterTabell
      readOnly
      isAksjonspunktClosed
      aktiviteter={aktiviteter}
      alleKodeverk={alleKodeverk}
      formNameAvklarAktiviteter="test"
      erOverstyrt={false}
      harAksjonspunkt
      valgtSkjæringstidspunkt="2019-02-01"
      ingenAktiviterErBrukt={false}
      tomDatoForAktivitetGruppe="2019-02-01"
      reduxChange={changeCallback}
      behandlingFormName="formname"
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);

    const heading = wrapper.find(FormattedMessage).first();
    expect(heading.prop('id')).toBe('VurderAktiviteterTabell.FullAAPKombinert.Overskrift');

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rows = table.find(TableRow);
    expect(rows).toHaveLength(4);

    const cols = rows.first().find(TableColumn);
    expect(cols).toHaveLength(5);
    const radios1 = rows.first().find(RadioGroupField);
    expect(radios1).toHaveLength(2);
    radios1.forEach((radio) => {
      expect(radio.props().readOnly).toBe(true);
    });
    const edited1 = rows.first().find(EditedIcon);
    expect(edited1).toHaveLength(1);

    const cols2 = rows.at(1).find(TableColumn);
    expect(cols2).toHaveLength(5);
    const radios2 = rows.at(1).find(RadioGroupField);
    expect(radios2).toHaveLength(2);
    radios2.forEach((radio) => {
      expect(radio.props().readOnly).toBe(true);
    });
    const edited2 = rows.at(1).find(EditedIcon);
    expect(edited2).toHaveLength(1);

    const cols3 = rows.last().find(TableColumn);
    expect(cols3).toHaveLength(5);
    const radios3 = rows.last().find(RadioGroupField);
    expect(radios3).toHaveLength(2);
    radios3.forEach((radio) => {
      expect(radio.props().readOnly).toBe(true);
    });
    const edited3 = rows.last().find(EditedIcon);
    expect(edited3).toHaveLength(0);
  });

  const id1 = '3847238947232019-01-01';
  it('skal lage id for arbeid', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet1);
    expect(idArbeid).toBe(id1);
  });

  const id2 = '334534623342efj8343f34f2019-01-01';
  it('skal lage id for arbeid med arbeidsforholdId', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet2);
    expect(idArbeid).toBe(id2);
  });

  const id3 = '324234234234efj8343f34f2019-01-01';
  it('skal lage id for arbeid med aktørId', () => {
    const idArbeid = lagAktivitetFieldId(aktivitet3);
    expect(idArbeid).toBe(id3);
  });

  const idAAP = 'AAP2019-01-01';
  it('skal lage id for AAP', () => {
    const idArbeid = lagAktivitetFieldId(aktivitetAAP);
    expect(idArbeid).toBe(idAAP);
  });

  it('skal bygge initial values', () => {
    const initialValues = VurderAktiviteterTabell.buildInitialValues(aktiviteter, alleKodeverk, false, true, true, agOpplysninger);
    expect(initialValues[id1].beregningAktivitetNavn).toBe('Arbeidsgiveren (384723894723)');
    expect(initialValues[id1].fom).toBe('2019-01-01');
    expect(initialValues[id1].tom).toBe(null);
    expect(initialValues[id1].skalBrukes).toBe(null);

    expect(initialValues[id2].beregningAktivitetNavn).toBe('Arbeidsgiveren2 (334534623342)...3456');
    expect(initialValues[id2].fom).toBe('2019-01-01');
    expect(initialValues[id2].tom).toBe('2019-02-02');
    expect(initialValues[id2].skalBrukes).toBe(true);

    expect(initialValues[id3].beregningAktivitetNavn).toBe('Arbeidsgiveren3 (01.01.1960)...6789');
    expect(initialValues[id3].fom).toBe('2019-01-01');
    expect(initialValues[id3].tom).toBe('2019-02-02');
    expect(initialValues[id3].skalBrukes).toBe(false);

    expect(initialValues[idAAP].beregningAktivitetNavn).toBe('Arbeidsavklaringspenger');
    expect(initialValues[idAAP].fom).toBe('2019-01-01');
    expect(initialValues[idAAP].tom).toBe('2020-02-02');
    expect(initialValues[idAAP].skalBrukes).toBe(true);
  });

  it('skal bygge initial values for overstyrer', () => {
    const initialValues = VurderAktiviteterTabell.buildInitialValues(aktiviteter, alleKodeverk, false, false, true, agOpplysninger);
    expect(initialValues[id1].beregningAktivitetNavn).toBe('Arbeidsgiveren (384723894723)');
    expect(initialValues[id1].fom).toBe('2019-01-01');
    expect(initialValues[id1].tom).toBe(null);
    expect(initialValues[id1].skalBrukes).toBe(true);

    expect(initialValues[id2].beregningAktivitetNavn).toBe('Arbeidsgiveren2 (334534623342)...3456');
    expect(initialValues[id2].fom).toBe('2019-01-01');
    expect(initialValues[id2].tom).toBe('2019-02-02');
    expect(initialValues[id2].skalBrukes).toBe(true);

    expect(initialValues[id3].beregningAktivitetNavn).toBe('Arbeidsgiveren3 (01.01.1960)...6789');
    expect(initialValues[id3].fom).toBe('2019-01-01');
    expect(initialValues[id3].tom).toBe('2019-02-02');
    expect(initialValues[id3].skalBrukes).toBe(false);

    expect(initialValues[idAAP].beregningAktivitetNavn).toBe('Arbeidsavklaringspenger');
    expect(initialValues[idAAP].fom).toBe('2019-01-01');
    expect(initialValues[idAAP].tom).toBe('2020-02-02');
    expect(initialValues[idAAP].skalBrukes).toBe(true);
  });

  it('skal transform values', () => {
    const values = {};
    values[id1] = { skalBrukes: true };
    values[id2] = { skalBrukes: false };
    values[id3] = { skalBrukes: false };
    values[idAAP] = { skalBrukes: true };
    const transformed = VurderAktiviteterTabell.transformValues(values, aktiviteter, '2019-02-02', '2019-02-02');
    expect(transformed.length).toBe(2);
    expect(transformed[0].oppdragsgiverOrg).toBe('334534623342');
    expect(transformed[0].arbeidsforholdRef).toBe(aktivitet2.arbeidsforholdId);
    expect(transformed[0].fom).toBe('2019-01-01');
    expect(transformed[0].tom).toBe('2019-02-02');
    expect(transformed[0].arbeidsgiverIdentifikator).toBe(null);
    expect(transformed[0].skalBrukes).toBe(false);

    expect(transformed[1].oppdragsgiverOrg).toBe(null);
    expect(transformed[1].arbeidsforholdRef).toBe(aktivitet3.arbeidsforholdId);
    expect(transformed[1].fom).toBe('2019-01-01');
    expect(transformed[1].tom).toBe('2019-02-02');
    expect(transformed[1].arbeidsgiverIdentifikator).toBe('324234234234');
    expect(transformed[1].skalBrukes).toBe(false);
  });

  it('skal ikkje vurdere AAP for ikkje overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitetAAP, false, true, true, false);
    expect(skalVurderes).toBe(false);
  });

  it('skal vurdere annen aktivitet for overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, true, true, true, false);
    expect(skalVurderes).toBe(true);
  });

  it('skal vurdere annen aktivitet for ikkje overstyring', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, false, true, true, false);
    expect(skalVurderes).toBe(true);
  });

  it('skal ikkje vurdere annen aktivitet for ikkje overstyring uten aksjonspunkt', () => {
    const skalVurderes = skalVurdereAktivitet(aktivitet1, false, false, true, false);
    expect(skalVurderes).toBe(false);
  });
});
