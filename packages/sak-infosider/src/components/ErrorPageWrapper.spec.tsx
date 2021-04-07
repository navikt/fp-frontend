import React from 'react';
import { shallow } from 'enzyme';
import { Innholdstittel } from 'nav-frontend-typografi';
import ErrorPageWrapper from './ErrorPageWrapper';

describe('<ErrorPageWrapper>', () => {
  it('skal rendre ErrorPageWrapper korrekt', () => {
    const wrapper = shallow(<ErrorPageWrapper><article>pageContent</article></ErrorPageWrapper>);
    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find(Innholdstittel)).toHaveLength(1);
  });
});
