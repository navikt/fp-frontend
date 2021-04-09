import React from 'react';
import { shallow } from 'enzyme';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  TableRow, TableColumn, PeriodLabel, DateLabel,
} from '@fpsak-frontend/shared-components';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OppholdstillatelseTabell from './OppholdstillatelseTabell';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<OppholdstillatelseTabell>', () => {
  it('skal vise tabeller med oppholdstillatelser', () => {
    const wrapper = shallow(<OppholdstillatelseTabell.WrappedComponent
      intl={intlMock}
      oppholdstillatelse={[{
        fom: '2019-01-01',
        tom: '2021-10-13',
        oppholdstillatelseType: {
          kode: 'MIDLERTIDIG',
          kodeverk: '',
        },
      }, {
        tom: '2021-01-13',
        oppholdstillatelseType: {
          kode: 'MIDLERTIDIG',
          kodeverk: '',
        },
      }]}
      alleKodeverk={{
        [kodeverkTyper.OPPHOLDSTILLATELSE_TYPE]: [{
          kode: 'MIDLERTIDIG',
          navn: 'Midlertidig',
          kodeverk: '',
        }],
      }}
    />);

    const rader = wrapper.find(TableRow);
    expect(rader).toHaveLength(2);

    const kolonnerRad1 = rader.first().find(TableColumn);
    expect(kolonnerRad1).toHaveLength(2);
    const periodeLabel = kolonnerRad1.first().find(PeriodLabel);
    expect(periodeLabel).toHaveLength(1);
    expect(periodeLabel.prop('dateStringFom')).toEqual('2019-01-01');
    expect(periodeLabel.prop('dateStringTom')).toEqual('2021-10-13');
    expect(kolonnerRad1.last().childAt(0).text()).toEqual('Midlertidig');

    const kolonnerRad2 = rader.last().find(TableColumn);
    expect(kolonnerRad2).toHaveLength(2);
    const dateLabel = kolonnerRad2.first().find(DateLabel);
    expect(dateLabel).toHaveLength(1);
    expect(dateLabel.prop('dateString')).toEqual('2021-01-13');
    expect(kolonnerRad2.last().childAt(0).text()).toEqual('Midlertidig');
  });
});
