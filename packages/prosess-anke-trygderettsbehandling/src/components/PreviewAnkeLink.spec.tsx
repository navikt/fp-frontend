import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';

import PreviewAnkeLink from './PreviewAnkeLink';

describe('<PreviewAnkeLink>', () => {
  it('skal vise trykkbar lenke', () => {
    const wrapper = shallow(
      <PreviewAnkeLink
        previewCallback={sinon.spy()}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        readOnly={false}
      />,
    );

    expect(wrapper.find('span')).has.length(0);
    expect(wrapper.find('a')).has.length(1);
  });

  it('skal ikke vise trykkbar lenke ved readonly', () => {
    const wrapper = shallow(
      <PreviewAnkeLink
        previewCallback={sinon.spy()}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        readOnly
      />,
    );

    expect(wrapper.find('span')).has.length(1);
    expect(wrapper.find('a')).has.length(0);
  });

  it('skal forhåndsvise data ved klikk på lenke', () => {
    const forhandsvis = sinon.spy();
    const wrapper = shallow(
      <PreviewAnkeLink
        previewCallback={forhandsvis}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        fritekstTilBrev="Dette er en fritekst"
        ankeVurdering={{
          kode: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
          kodeverk: '',
        }}
        readOnly={false}
      />,
    );

    const lenke = wrapper.find('a');
    lenke.prop('onClick')({ preventDefault: () => undefined } as React.MouseEvent);

    expect(forhandsvis.called).is.true;
    const { args } = forhandsvis.getCalls()[0];
    expect(args).has.length(1);
    expect(args[0]).is.eql({
      dokumentMal: dokumentMalType.ANKE_BESLUTNING_OM_OPPHEVING,
      fritekst: 'Dette er en fritekst',
      mottaker: '',
    });
  });
});
