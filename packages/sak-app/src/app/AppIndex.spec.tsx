import React from 'react';
import { shallow } from 'enzyme';

import AppIndex from './AppIndex';
import Home from './components/Home';
import Dekorator from './components/Dekorator';
import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<AppIndex>', () => {
  const locationMock = {
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  };

  it('skal vise hjem-skjermbilde', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    const wrapper = shallow(<AppIndex.WrappedComponent
      location={locationMock}
    />);
    expect(wrapper.find(Dekorator)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('skal vise query-feilmelding', () => {
    requestApi.mock(FpsakApiKeys.NAV_ANSATT.name, { navn: 'Peder' });
    const location = {
      search: '?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266',
    };

    const wrapper = shallow(<AppIndex.WrappedComponent
      location={{ ...locationMock, ...location }}
    />);

    const headerComp = wrapper.find(Dekorator);
    expect(headerComp.prop('queryStrings')).toEqual({ errormessage: 'Det finnes ingen sak med denne referansen: 266' });
  });
});
