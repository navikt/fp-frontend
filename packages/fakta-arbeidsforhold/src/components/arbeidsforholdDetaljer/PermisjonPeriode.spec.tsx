import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { Arbeidsforhold } from '@fpsak-frontend/types';

import PermisjonPeriode from './PermisjonPeriode';

describe('<PermisjonPeriode>', () => {
  it('skal ikke vise permisjon når arbeidsforholdet har undefined permisjoner', () => {
    const wrapper = shallow(<PermisjonPeriode
      arbeidsforhold={{
        permisjoner: undefined,
      } as Arbeidsforhold}
    />);
    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    expect(wrapper.find('PeriodLabel')).toHaveLength(0);
  });
  it('skal ikke vise permisjon når arbeidsforholdet en tom liste med permisjoner', () => {
    const wrapper = shallow(<PermisjonPeriode
      arbeidsforhold={{
        permisjoner: [],
      } as Arbeidsforhold}
    />);
    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    expect(wrapper.find('PeriodLabel')).toHaveLength(0);
  });
  it('skal vise permisjon når arbeidsforholdet har kun en permisjon', () => {
    const wrapper = shallow(<PermisjonPeriode
      arbeidsforhold={{
        permisjoner: [
          {
            permisjonFom: '2018-10-10',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
        ],
      } as Arbeidsforhold}
    />);
    const msg = wrapper.find(FormattedMessage);
    expect(msg).toHaveLength(1);
    expect(msg.props().id).toEqual('PersonArbeidsforholdDetailForm.Permisjon');
    const periode = wrapper.find('PeriodLabel');
    expect(periode).toHaveLength(1);
    // @ts-ignore
    expect(periode.props().dateStringFom).toEqual('2018-10-10');
    // @ts-ignore
    expect(periode.props().dateStringTom).toEqual('');
  });
  it('skal vise permisjoner når arbeidsforholdet har flere permisjoner', () => {
    const wrapper = shallow(<PermisjonPeriode
      arbeidsforhold={{
        permisjoner: [
          {
            permisjonFom: '2015-01-01',
            permisjonTom: undefined,
            permisjonsprosent: 100,
          },
          {
            permisjonFom: '2017-01-01',
            permisjonTom: '2019-01-01',
            permisjonsprosent: 100,
          },
        ],
      } as Arbeidsforhold}
    />);
    const msg = wrapper.find(FormattedMessage);
    expect(msg).toHaveLength(1);
    expect(msg.prop('id')).toEqual('PersonArbeidsforholdDetailForm.Permisjoner');
    const perioder = wrapper.find('PeriodLabel');
    expect(perioder.get(0).props.dateStringFom).toEqual('2015-01-01');
    expect(perioder.get(0).props.dateStringTom).toEqual('');
    expect(perioder.get(1).props.dateStringFom).toEqual('2017-01-01');
    expect(perioder.get(1).props.dateStringTom).toEqual('2019-01-01');
  });
});
