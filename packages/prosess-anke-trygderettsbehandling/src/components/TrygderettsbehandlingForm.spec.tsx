import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { AnkeVurdering } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioGroupField, SelectField } from '@fpsak-frontend/form';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { TrygderettsbehandlingForm } from './TrygderettsbehandlingForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TrygderettsbehandlingForm>', () => {
  const sprakkode = {
    kode: 'NB',
    kodeverk: '',
  };

  it('skal vise radioknapper og dropdown når omgjøring er valgt', () => {
    const wrapper = shallow(
      <TrygderettsbehandlingForm
        {...reduxFormPropsMock}
        intl={intlMock}
        readOnly={false}
        readOnlySubmitButton={false}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
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

    expect(wrapper.find(RadioGroupField)).toHaveLength(3);
    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);
    expect(select.prop('selectValues').length).toEqual(4);
  });

  it('skal ikke vise radioknapper og dropdown når omgjøring ikke er valgt', () => {
    const wrapper = shallow(
      <TrygderettsbehandlingForm
        {...reduxFormPropsMock}
        intl={intlMock}
        readOnly={false}
        readOnlySubmitButton={false}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
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

    expect(wrapper.find(RadioGroupField)).toHaveLength(2);
    expect(wrapper.find(SelectField)).toHaveLength(0);
  });
});
