import React from 'react';
import sinon from 'sinon';

import {
  DateLabel, Image, PeriodLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { Arbeidsforhold } from '@fpsak-frontend/types';
import { mountWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { Normaltekst } from 'nav-frontend-typografi';
import PersonArbeidsforholdTable, { utledNøkkel } from './PersonArbeidsforholdTable';
import IngenArbeidsforholdRegistrert from './IngenArbeidsforholdRegistrert';
import messages from '../../../i18n/nb_NO.json';

describe('<PersonArbeidsforholdTable>', () => {
  const arbeidsforhold = {
    id: '1',
    arbeidsforholdId: '1231-2345',
    eksternArbeidsforholdId: '23456789',
    arbeidsgiverReferanse: '1234567',
    fomDato: '2018-01-01',
    tomDato: '2018-10-10',
    kilde: {
      navn: '',
    },
    mottattDatoInntektsmelding: undefined,
    brukArbeidsforholdet: false,
    tilVurdering: true,
    stillingsprosent: 80,
    lagtTilAvSaksbehandler: false,
  } as Arbeidsforhold;

  const arbeidsgiverOpplysningerPerId = {
    1234567: {
      erPrivatPerson: false,
      identifikator: '1234567',
      navn: 'Svendsen Eksos',
    },
    223455667: {
      erPrivatPerson: false,
      identifikator: '223455667',
      navn: 'Nilsen Eksos',
    },
  };

  it('skal vise tabell med to arbeidsforhold der den ene raden er markert som valgt', () => {
    const arbeidsforhold2 = {
      id: '2',
      arbeidsforholdId: '1231-2345',
      eksternArbeidsforholdId: '565656565',
      arbeidsgiverReferanse: '223455667',
      fomDato: '2018-02-01',
      tomDato: '2018-02-10',
      kilde: {
        navn: '',
      },
      mottattDatoInntektsmelding: undefined,
      brukArbeidsforholdet: false,
      stillingsprosent: 50,
      lagtTilAvSaksbehandler: false,
    } as Arbeidsforhold;

    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[arbeidsforhold, arbeidsforhold2]}
      selectedId={arbeidsforhold.id}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);

    const rows = table.find(TableRow);

    expect(rows).toHaveLength(3);

    const row1 = rows.at(1);
    expect(row1.prop('isSelected')).toBe(true);
    const colsRow1 = row1.find(TableColumn);
    expect(colsRow1).toHaveLength(6);
    expect(colsRow1.first().childAt(0).childAt(0).text()).toEqual('Svendsen Eksos(1234567)...6789');
    expect(colsRow1.at(1).find(PeriodLabel)).toHaveLength(1);
    expect(colsRow1.at(3).childAt(0).childAt(0).text()).toEqual('80.00 %');

    const row2 = rows.last();
    expect(row2.prop('isSelected')).toBe(false);
  });

  it('skal ikke vise mottatt dato for inntektsmelding når denne ikke finnes', () => {
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[arbeidsforhold]}
      selectedId={arbeidsforhold.id}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const cols = wrapper.find(TableColumn);

    expect(cols).toHaveLength(12);
    expect(cols.at(10).children()).toHaveLength(1);
  });

  it('skal vise mottatt dato for inntektsmelding når denne finnes', () => {
    const newArbeidsforhold = {
      ...arbeidsforhold,
      mottattDatoInntektsmelding: '2018-05-05',
    };

    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[newArbeidsforhold]}
      selectedId={newArbeidsforhold.id}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const cols = wrapper.find(TableColumn);
    expect(cols).toHaveLength(12);
    expect(wrapper.find(DateLabel).prop('dateString')).toEqual('2018-05-05');
  });

  it('skal ikke vise ikon for at arbeidsforholdet er i bruk', () => {
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[arbeidsforhold]}
      selectedId={arbeidsforhold.id}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const cols = wrapper.find(TableColumn);
    expect(cols).toHaveLength(12);
    expect(cols.last().children()).toHaveLength(1);
  });

  it('skal vise ikon for at arbeidsforholdet er i bruk', () => {
    const newArbeidsforhold = {
      ...arbeidsforhold,
      brukArbeidsforholdet: true,
    };

    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[newArbeidsforhold]}
      selectedId={newArbeidsforhold.id}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const cols = wrapper.find(TableColumn);
    expect(cols).toHaveLength(12);
    expect(cols.last().find(Image)).toHaveLength(1);
  });

  it('skal vise IngenArbeidsforholdRegistrert komponent når ingen arbeidsforhold', () => {
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[]}
      selectedId={undefined}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const element = wrapper.find(IngenArbeidsforholdRegistrert);
    expect(element).toHaveLength(1);
  });

  it('skal vise stillingsprosent selv når den er 0', () => {
    const endretArbeidsforhold = {
      ...arbeidsforhold,
      stillingsprosent: 0,
    };
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[endretArbeidsforhold]}
      selectedId={undefined}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const tableRow = wrapper.find(TableRow).at(1);
    expect(tableRow.props().model.stillingsprosent).toEqual(0);
  });

  it('skal vise riktig utledet navn når lagt til av saksbehandler', () => {
    const endretArbeidsforhold = {
      ...arbeidsforhold,
      lagtTilAvSaksbehandler: true,
    };
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[endretArbeidsforhold]}
      selectedId={undefined}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const tableRow = wrapper.find(TableRow).at(1);
    const tekst = tableRow.find(Normaltekst).at(0);
    expect(tekst.childAt(0).text()).toEqual('Svendsen Eksos');
  });

  it('skal vise overstyrt tom dato', () => {
    const endretArbeidsforhold = {
      ...arbeidsforhold,
      overstyrtTom: '2025-01-01',
    };
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[endretArbeidsforhold]}
      selectedId={undefined}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const periodeLabel = wrapper.find(PeriodLabel);
    expect(periodeLabel.props().dateStringTom).toEqual('2025-01-01');
  });
  it('skal vise tom dato', () => {
    const endretArbeidsforhold = {
      ...arbeidsforhold,
    };
    const wrapper = mountWithIntl(<PersonArbeidsforholdTable
      alleArbeidsforhold={[endretArbeidsforhold]}
      selectedId={undefined}
      selectArbeidsforholdCallback={sinon.spy()}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    const periodeLabel = wrapper.find(PeriodLabel);
    expect(periodeLabel.props().dateStringTom).toEqual('2018-10-10');
  });
  it('arbeidsforhold med samme navn og orgnr, en med arbeidsforholdId og en uten, skal få ulik nøkkel', () => {
    const arbfor1 = { ...arbeidsforhold };
    arbfor1.arbeidsforholdId = '123';
    arbfor1.eksternArbeidsforholdId = null;

    const arbfor2 = { ...arbeidsforhold };
    arbfor2.arbeidsforholdId = null;
    arbfor2.eksternArbeidsforholdId = null;

    const nøkkel1 = utledNøkkel(arbfor1, arbeidsgiverOpplysningerPerId);
    const nøkkel2 = utledNøkkel(arbfor2, arbeidsgiverOpplysningerPerId);
    expect(nøkkel1).not.toEqual(nøkkel2);
  });
});
