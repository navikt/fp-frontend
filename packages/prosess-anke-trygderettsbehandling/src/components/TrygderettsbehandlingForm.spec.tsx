import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { AnkeVurdering } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioGroupField, SelectField } from '@fpsak-frontend/form';

import { TrygderettsbehandlingForm } from './TrygderettsbehandlingForm';

describe('<TrygderettsbehandlingForm>', () => {
  const sprakkode = {
    kode: 'NB',
    kodeverk: '',
  };

  it('skal vise radioknapper og dropdown når omgjøring er valgt', () => {
    const wrapper = shallow(
      <TrygderettsbehandlingForm
        {...reduxFormPropsMock}
        readOnly={false}
        readOnlySubmitButton={false}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        behandlingId={1}
        behandlingVersjon={2}
        sprakkode={sprakkode}
        ankeOmgorArsaker={[]}
        ankeVurderingResultat={{} as AnkeVurdering['ankeVurderingResultat']}
        aksjonspunkter={[]}
        submitCallback={sinon.spy()}
        previewCallback={sinon.spy()}
        onSubmit={sinon.spy()}
        valgtTrygderettVurdering={{
          kode: ankeVurderingType.ANKE_OMGJOER,
          kodeverk: '',
        }}
      />,
    );

    expect(wrapper.find(RadioGroupField)).has.length(3);
    const select = wrapper.find(SelectField);
    expect(select).has.length(1);
    expect(select.prop('selectValues').length).is.eql(4);
  });

  it('skal ikke vise radioknapper og dropdown når omgjøring ikke er valgt', () => {
    const wrapper = shallow(
      <TrygderettsbehandlingForm
        {...reduxFormPropsMock}
        readOnly={false}
        readOnlySubmitButton={false}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        behandlingId={1}
        behandlingVersjon={2}
        sprakkode={sprakkode}
        ankeOmgorArsaker={[]}
        ankeVurderingResultat={{} as AnkeVurdering['ankeVurderingResultat']}
        aksjonspunkter={[]}
        submitCallback={sinon.spy()}
        previewCallback={sinon.spy()}
        onSubmit={sinon.spy()}
        valgtTrygderettVurdering={{
          kode: ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK,
          kodeverk: '',
        }}
      />,
    );

    expect(wrapper.find(RadioGroupField)).has.length(2);
    expect(wrapper.find(SelectField)).has.length(0);
  });
});
