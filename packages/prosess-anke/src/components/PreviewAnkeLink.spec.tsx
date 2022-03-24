import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';

import PreviewAnkeLink from './PreviewAnkeLink';

describe('<PreviewAnkeLink>', () => {
  it('skal forhåndsvise anke ved klikk på lenke', () => {
    const previewCallback = sinon.spy();
    const wrapper = shallow(<PreviewAnkeLink
      previewCallback={previewCallback}
      fritekstTilBrev="Fritekst"
      ankeVurdering={ankeVurdering.ANKE_OMGJOER}
      readOnly={false}
    />);

    expect(wrapper.find('span')).toHaveLength(0);
    const knapp = wrapper.find('a');

    knapp.simulate('click', { preventDefault: () => undefined });

    expect(previewCallback.calledOnce).toBe(true);
    expect(previewCallback.getCalls()[0].args[0]).toEqual({
      dokumentMal: dokumentMalType.ANKE_OMGJORT,
      fritekst: 'Fritekst',
      mottaker: '',
    });
  });

  it('skal ikke vise klikkbar lenke når readonly', () => {
    const previewCallback = sinon.spy();
    const wrapper = shallow(<PreviewAnkeLink
      previewCallback={previewCallback}
      fritekstTilBrev="Fritekst"
      ankeVurdering={ankeVurdering.ANKE_OMGJOER}
      readOnly
    />);

    expect(wrapper.find('a')).toHaveLength(0);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
