import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';

import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import TempsaveAnkeButton from './TempsaveAnkeButton';

describe('<TempsaveAnkeButton>', () => {
  it('skal lagre anke ved klikk på knapp', () => {
    const saveAnke = sinon.spy();
    const wrapper = shallow(<TempsaveAnkeButton
      fritekstTilBrev="Fritekst"
      begrunnelse="Begrunnelse"
      saveAnke={saveAnke}
      spinner={false}
      aksjonspunktCode={AksjonspunktCode.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER}
      readOnly={false}
    />);

    const knapp = wrapper.find(Hovedknapp);

    knapp.simulate('click', { preventDefault: () => undefined });

    expect(saveAnke.calledOnce).toBe(true);
    expect(saveAnke.getCalls()[0].args[0]).toEqual({
      begrunnelse: 'Begrunnelse',
      fritekstTilBrev: 'Fritekst',
      kode: '7032',
    });
  });
});
