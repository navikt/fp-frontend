import React from 'react';
import { FeriepengegrunnlagAndel } from '@fpsak-frontend/types';
import { shallow } from 'enzyme';
import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { Normaltekst } from 'nav-frontend-typografi';
import FeriepengerPrAar from './FeriepengerPrAar';

const alleKodeverk = {};

const agOpplysninger = {
  123: {
    navn: 'Bedriften',
    identifikator: '123',
    erPrivatPerson: false,
  },
  321: {
    navn: 'Kåre Kåresen',
    identifikator: '321',
    erPrivatPerson: true,
    fødselsdato: '1992-12-12',
  },
};

const lagFPAndel = (agId: string, opptjeningsår: number, sumRefusjon: number, sumSøker: number):FeriepengegrunnlagAndel => ({
  aktivitetStatus: {
    kode: agId ? 'AT' : 'SN',
    kodeverk: 'AKTIVITET_STATUS',
  },
  opptjeningsår,
  årsbeløp: sumRefusjon || sumSøker,
  erBrukerMottaker: !!sumSøker,
  arbeidsgiverId: agId,
});

describe('<FeriepengerPrAar>', () => {
  it('Skal teste at korrekte rader vises i tabell gitt opptjeningsår bedrift', () => {
    const andelArbeidsgiverFeilÅr = lagFPAndel('123', 2020, 200, 0);
    const andelSøker = lagFPAndel('123', 2021, 0, 500);
    const andelArbeidsgiver = lagFPAndel('123', 2021, 200, 0);

    const wrapper = shallow(<FeriepengerPrAar
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      alleKodeverk={alleKodeverk}
      opptjeningsår={2021}
      alleAndeler={[andelArbeidsgiver, andelSøker, andelArbeidsgiverFeilÅr]}
    />);

    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.prop('id')).toEqual('TilkjentYtelse.Feriepenger.Opptjeningsår');
    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rader = table.find(TableRow);
    expect(rader).toHaveLength(1);
    const kolonner = rader.first().find(TableColumn);
    const tekst1 = kolonner.at(0).find(Normaltekst).at(0);
    expect(tekst1.childAt(0).text()).toEqual('Bedriften (123)');
    const tekst2 = kolonner.at(1).find(Normaltekst).at(0);
    expect(tekst2.childAt(0).text()).toEqual('200');
    const tekst3 = kolonner.at(2).find(Normaltekst).at(0);
    expect(tekst3.childAt(0).text()).toEqual('500');
  });

  it('Skal teste at korrekte rader vises i tabell gitt opptjeningsår privat AG', () => {
    const andelArbeidsgiverPrivat = lagFPAndel('321', 2021, 350, 0);

    const wrapper = shallow(<FeriepengerPrAar
      arbeidsgiverOpplysningerPerId={agOpplysninger}
      alleKodeverk={alleKodeverk}
      opptjeningsår={2021}
      alleAndeler={[andelArbeidsgiverPrivat]}
    />);

    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.prop('id')).toEqual('TilkjentYtelse.Feriepenger.Opptjeningsår');
    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rader = table.find(TableRow);
    expect(rader).toHaveLength(1);
    const kolonner = rader.first().find(TableColumn);
    const tekst = kolonner.at(0).find(Normaltekst).at(0);
    expect(tekst.childAt(0).text()).toEqual('Kåre Kåresen (12.12.1992)');
  });
});
