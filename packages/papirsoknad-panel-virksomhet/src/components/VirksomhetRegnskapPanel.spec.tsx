import React from 'react';
import { shallow } from 'enzyme';

import { VirksomhetRegnskapPanel } from './VirksomhetRegnskapPanel';

describe('<VirksomhetRegnskapPanel>', () => {
  it('skal rendre visning korrekt med default props', () => {
    const wrapper = shallow(<VirksomhetRegnskapPanel form="test" />);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).toHaveLength(1);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);

    const inputs = wrapper.find('InputField');
    expect(inputs).toHaveLength(0);
  });

  it('skal rendre visning korrekt når virksomhet har regnskapsfører', () => {
    const wrapper = shallow(<VirksomhetRegnskapPanel form="test" harRegnskapsforer />);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).toHaveLength(1);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);

    const inputs = wrapper.find('InputField');
    expect(inputs).toHaveLength(2);
  });
});
