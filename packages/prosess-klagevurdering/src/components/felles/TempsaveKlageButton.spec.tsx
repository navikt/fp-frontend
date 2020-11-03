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
      klageVurdering={{
        kode: klageVurderingType.STADFESTE_YTELSESVEDTAK,
        kodeverk: '',
      }}
      fritekstTilBrev=""
      begrunnelse=""
      saveKlage={sinon.spy()}
      aksjonspunktCode="123"
      klageMedholdArsak={undefined}
      klageVurderingOmgjoer={undefined}
    />);
    expect(wrapper.find(Hovedknapp)).has.length(1);
  });
});
