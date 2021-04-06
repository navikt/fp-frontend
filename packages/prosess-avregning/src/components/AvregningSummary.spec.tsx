import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import AvregningSummary from './AvregningSummary';

describe('<AvregningSummary>', () => {
  const mockProps = {
    fom: '2018-01-01',
    tom: '2018-07-07',
    feilutbetaling: 15000,
    etterbetaling: 0,
    inntrekk: 20000,
  };

  it('skal vise AvregningSummary', () => {
    const props = {
      ...mockProps,
      ingenPerioderMedAvvik: false,
    };
    const wrapper = shallow(<AvregningSummary
      {...props}
    />);

    const element = wrapper.find('Element');
    expect(element).toHaveLength(1);
    const normaltekst = wrapper.find('Normaltekst');
    expect(normaltekst).toHaveLength(4);
    const row = wrapper.find('Row');
    expect(row).toHaveLength(3);
    const column = wrapper.find('Column');
    expect(column).toHaveLength(6);
  });

  it('skal vise melding ingen perioder med avvik', () => {
    const props = {
      ...mockProps,
      ingenPerioderMedAvvik: true,
    };
    const wrapper = shallow(<AvregningSummary
      {...props}
    />);

    const message = wrapper.find(FormattedMessage);
    expect(message.at(0).prop('id')).toEqual('Avregning.bruker');
    expect(message.at(1).prop('id')).toEqual('Avregning.ingenPerioder');
  });
});
