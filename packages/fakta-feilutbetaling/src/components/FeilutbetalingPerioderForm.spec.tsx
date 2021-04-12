import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { FeilutbetalingPerioderFormImpl } from './FeilutbetalingPerioderForm';

const periode = {
  belop: 51000,
  fom: '2016-03-16',
  tom: '2016-05-26',
};

const mockProps = {
  ...reduxFormPropsMock,
  formName: '¨test',
  behandlingId: 1,
  behandlingVersjon: 2,
  periode,
  elementId: 0,
  årsaker: [],
  readOnly: false,
  onChangeÅrsak: sinon.spy(),
  onChangeUnderÅrsak: sinon.spy(),
};

describe('<FeilutbetalingPerioderFormImpl>', () => {
  it('skal rendre FeilutbetalingInfoPanel', () => {
    const wrapper = shallow(<FeilutbetalingPerioderFormImpl
      {...mockProps}
    />);

    const tableRow = wrapper.find('TableRow');
    expect(tableRow).toHaveLength(1);
    const tableColumn = wrapper.find('TableColumn');
    expect(tableColumn).toHaveLength(3);
    const selectField = wrapper.find('SelectField');
    expect(selectField).toHaveLength(1);
  });

  it('skal rendre underÅrsak selectfield hvis årsak har underÅrsaker', () => {
    const årsak = 'MEDLEMSKAP_VILKAARET_TYPE';
    const årsaker = [{
      hendelseType: {
        kode: 'MEDLEMSKAP_VILKAARET_TYPE',
        navn: '',
        kodeverk: '',
      },
      hendelseUndertyper: [{
        kode: 'MEDLEMSKAP_VILKAAR',
        navn: '',
        kodeverk: '',
      }],
    }];
    const props = {
      ...mockProps,
      årsak,
      årsaker,
    };
    const wrapper = shallow(<FeilutbetalingPerioderFormImpl
      {...props}
    />);

    const tableRow = wrapper.find('TableRow');
    expect(tableRow).toHaveLength(1);
    const tableColumn = wrapper.find('TableColumn');
    expect(tableColumn).toHaveLength(3);
    const selectField = wrapper.find('SelectField');
    expect(selectField).toHaveLength(2);
  });
});
