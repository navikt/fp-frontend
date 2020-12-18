import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import { Behandlingsresultat } from '@fpsak-frontend/types';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';
import VedtakOpphorRevurderingPanel from './VedtakOpphorRevurderingPanel';

describe('<VedtakOpphorRevurderingPanel>', () => {
  it('skal rendre opphørpanel med avslagsårsak', () => {
    const behandlingsresultat = {
      id: 1,
      type: {
        kode: 'test',
        kodeverk: '',
      },
      avslagsarsak: {
        kode: '1019',
        kodeverk: '',
      },
      avslagsarsakFritekst: null,
    };
    const wrapper = shallow(<VedtakOpphorRevurderingPanel
      readOnly
      behandlingsresultat={behandlingsresultat as Behandlingsresultat}
      revurderingsAarsakString="Test"
      beregningErManueltFastsatt={false}
      skalBrukeOverstyrendeFritekstBrev
    />);

    const tekst = wrapper.find(Normaltekst);
    expect(tekst).toHaveLength(1);
    expect(tekst.childAt(0).text()).toEqual('Test');

    expect(wrapper.find(VedtakFritekstPanel)).toHaveLength(0);
  });

  it('skal rendre opphørpanel med uten avslagsårsak men med fritekstpanel', () => {
    const behandlingsresultat = {
      id: 1,
      type: {
        kode: 'test',
        kodeverk: '',
      },
      avslagsarsak: {
        kode: '1019',
        kodeverk: '',
      },
      avslagsarsakFritekst: null,
    };
    const wrapper = shallow(<VedtakOpphorRevurderingPanel
      readOnly
      behandlingsresultat={behandlingsresultat as Behandlingsresultat}
      beregningErManueltFastsatt
      skalBrukeOverstyrendeFritekstBrev={false}
    />);

    expect(wrapper.find(Normaltekst)).toHaveLength(0);
    expect(wrapper.find(VedtakFritekstPanel)).toHaveLength(1);
  });
});
