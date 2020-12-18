import React from 'react';
import { shallow } from 'enzyme';

import { VirksomhetRelasjonPanel } from './VirksomhetRelasjonPanel';

describe('<VirksomhetRelasjonPanel>', () => {
  it('Skal rendre visning korrekt ved default props', () => {
    const wrapper = shallow(<VirksomhetRelasjonPanel />);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).toHaveLength(1);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);
  });
});
