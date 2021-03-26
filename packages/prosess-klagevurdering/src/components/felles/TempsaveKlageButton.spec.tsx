import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import React from 'react';
import { shallow } from 'enzyme/build';
import TempsaveKlageButton from './TempsaveKlageButton';

describe('<TempsaveKlageButton>', () => {
  it('Skal rendre komponent korrekt', () => {
    const wrapper = shallow(<TempsaveKlageButton
      saveKlage={sinon.spy()}
      aksjonspunktCode="123"
      handleSubmit={() => {}}
    />);
    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });
});
