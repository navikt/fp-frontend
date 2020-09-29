import sinon from 'sinon';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { expect } from 'chai';
import { Hovedknapp } from 'nav-frontend-knapper';
import React from 'react';
import { shallow } from 'enzyme/build';
import TempsaveKlageButton from './TempsaveKlageButton';

describe('<TempsaveKlageButton>', () => {
  it('Skal rendre komponent korrekt', () => {
    const wrapper = shallow(<TempsaveKlageButton
      klageVurdering={klageVurderingType.STADFESTE_YTELSESVEDTAK}
      fritekstTilBrev=""
      begrunnelse=""
      saveKlage={sinon.spy()}
      aksjonspunktCode="123"
      klageMedholdArsak=""
      klageVurderingOmgjoer=""
    />);
    expect(wrapper.find(Hovedknapp)).has.length(1);
  });
});
