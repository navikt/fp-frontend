import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FeilutbetalingPerioderTable from './FeilutbetalingPerioderTable';

const perioder = [
  {
    fom: '2016-03-16',
    tom: '2016-05-26',
    belop: 1200,
  },
  {
    fom: '2016-06-27',
    tom: '2016-07-26',
    belop: 1200,
  },
];

const headerTextCodes = [
  'FeilutbetalingInfoPanel.Period',
  'FeilutbetalingInfoPanel.Hendelse',
  'FeilutbetalingInfoPanel.Beløp',
];

const mockProps = {
  perioder,
  årsaker: [],
  formName: 'FaktaFeilutbetalingForm',
  readOnly: false,
  onChangeÅrsak: sinon.spy(),
  onChangeUnderÅrsak: sinon.spy(),
};

describe('<FeilutbetalingPerioderTable>', () => {
  it('skal rendre FeilutbetalingInfoPanel', () => {
    const wrapper = shallow(<FeilutbetalingPerioderTable
      {...mockProps}
    />);

    const table = wrapper.find('Table');
    expect(table).toHaveLength(1);
    expect(table.prop('headerTextCodes')).toEqual(headerTextCodes);
  });
});
