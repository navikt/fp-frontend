import React from 'react';
import { shallow } from 'enzyme';
import Sinon from 'sinon';

import { TextAreaField } from '@fpsak-frontend/form';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, AnkeVurdering } from '@fpsak-frontend/types';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';

import { BehandleAnkeForm } from './BehandleAnkeForm';

describe('<BehandleAnkeForm>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<BehandleAnkeForm
      readOnly={false}
      saveAnke={Sinon.spy()}
      previewCallback={Sinon.spy()}
      readOnlySubmitButton={false}
      aksjonspunkter={[{
        definisjon: {
          kode: AksjonspunktCode.MANUELL_VURDERING_AV_ANKE,
          kodeverk: '',
        },
      } as Aksjonspunkt]}
      sprakkode={{
        kode: 'nb',
        kodeverk: '',
      }}
      behandlinger={[]}
      ankeOmgorArsaker={[]}
      behandlingTyper={[]}
      behandlingStatuser={[]}
      submitCallback={Sinon.spy()}
      ankeVurderingResultat={{} as AnkeVurdering['ankeVurderingResultat']}
      formValues={{
        ankeVurdering: {
          kode: ankeVurdering.ANKE_AVVIS,
          kodeverk: '',
        },
      }}
    />);

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});
