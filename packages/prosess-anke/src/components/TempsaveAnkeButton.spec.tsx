import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';

import TempsaveAnkeButton from './TempsaveAnkeButton';

describe('<TempsaveAnkeButton>', () => {
  it('skal lagre anke ved klikk på knapp', () => {
    const saveAnke = sinon.spy();
    const wrapper = shallow(<TempsaveAnkeButton
      saveAnke={saveAnke}
      spinner={false}
      readOnly={false}
      handleSubmit={() => undefined}
    />);

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });
});
