import React from 'react';
import { shallow } from 'enzyme';
import { FieldArray } from 'redux-form';

import { CheckboxField } from '@fpsak-frontend/form';
import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';
import { AlleKodeverk } from '@fpsak-frontend/types';

import AndreYtelserPanel, { AndreYtelserPanel as AndreYtelserPanelImpl } from './AndreYtelserPanel';

describe('<AndreYtelserPanel>', () => {
  const andreYtelser = [
    { navn: 'Lønn under utdanning', kode: 'LONN_UTDANNING', kodeverk: '' },
    { navn: 'Etterlønn fr arbeidsgiver', kode: 'ETTERLONN_ARBEIDSGIVER', kodeverk: '' },
    { navn: 'Militær- eller siviltjeneste', kode: arbeidType.MILITÆR_ELLER_SIVILTJENESTE, kodeverk: '' },
    { navn: 'Ventelønn', kode: 'VENTELONN', kodeverk: '' },
  ];

  it('skal vise andre ytelser panel', () => {
    const wrapper = shallow(<AndreYtelserPanelImpl
      readOnly={false}
      andreYtelser={andreYtelser}
      selectedYtelser={{}}
      form="test"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const checkboxes = wrapper.find(CheckboxField);
    expect(checkboxes).toHaveLength(4);
  });

  it('skal kun vise checkbox for militær og siviltjeneste når prop er satt', () => {
    const wrapper = shallow(<AndreYtelserPanelImpl
      readOnly={false}
      andreYtelser={andreYtelser}
      selectedYtelser={{}}
      kunMiliterEllerSiviltjeneste
      form="test"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const checkboxes = wrapper.find(CheckboxField);
    expect(checkboxes).toHaveLength(1);
  });

  it('skal vise andre ytelser panel med FieldArray når ytelse er valgt', () => {
    const wrapper = shallow(<AndreYtelserPanelImpl
      readOnly={false}
      andreYtelser={andreYtelser}
      selectedYtelser={{
        LONN_UTDANNING: [{
          periodeFom: undefined,
          periodeTom: undefined,
        }],
      }}
      form="test"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const checkboxes = wrapper.find(CheckboxField);
    expect(checkboxes).toHaveLength(4);

    const fieldArray = wrapper.find(FieldArray);
    expect(fieldArray).toHaveLength(1);
  });

  it('validering skal returnerer errors objekt på riktig format', () => {
    const values = {
      andreYtelser: {
        LONN_UTDANNING: true,
        LONN_UTDANNING_PERIODER: [{
          periodeFom: 'abc',
          periodeTom: 'ads',
        }],
      },
    };

    const errorsWithInvalidDates = AndreYtelserPanel.validate(values, andreYtelser);
    expect(errorsWithInvalidDates.andreYtelser.LONN_UTDANNING_PERIODER).toEqual([{
      periodeFom: 'Dato må skrives slik : dd.mm.åååå',
      periodeTom: 'Dato må skrives slik : dd.mm.åååå',
    }]);
    expect(errorsWithInvalidDates.andreYtelser.ETTERLONN_ARBEIDSGIVER_PERIODER).toBeFalsy();
  });

  it('transformValues skal returnerer ytelser på riktig format', () => {
    const values = {
      andreYtelser: {
        LONN_UTDANNING: true,
        LONN_UTDANNING_PERIODER: [{ periodeFom: 'abc', periodeTom: 'ads' }, { periodeFom: 'abc', periodeTom: 'ads' }],
        ETTERLONN_ARBEIDSGIVER: true,
        ETTERLONN_ARBEIDSGIVER_PERIODER: [{ periodeFom: 'ssa', periodeTom: 'fesfes' }],
        VENTELONN: true,
        VENTELONN_PERIODER: [{ periodeFom: 'ssa', periodeTom: 'fesfes' }],
      },
    };

    const errorsWithInvalidDates = AndreYtelserPanel.transformValues(values, andreYtelser);
    expect(errorsWithInvalidDates).toEqual([{
      periodeFom: 'abc',
      periodeTom: 'ads',
      ytelseType: 'LONN_UTDANNING',
    }, {
      periodeFom: 'abc',
      periodeTom: 'ads',
      ytelseType: 'LONN_UTDANNING',
    }, {
      periodeFom: 'ssa',
      periodeTom: 'fesfes',
      ytelseType: 'ETTERLONN_ARBEIDSGIVER',
    }, {
      periodeFom: 'ssa',
      periodeTom: 'fesfes',
      ytelseType: 'VENTELONN',
    }]);

    expect(errorsWithInvalidDates).toHaveLength(4);
  });
});
