import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { AlleKodeverk } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { RadioGroupField, SelectField } from '@fpsak-frontend/form';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { TrygderettsbehandlingForm } from './TrygderettsbehandlingForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

// @ts-ignore Fiks
const kodeverk = alleKodeverk as AlleKodeverk;

describe('<TrygderettsbehandlingForm>', () => {
  const sprakkode = 'NB';

  it('skal vise radioknapper og dropdown når omgjøring er valgt', () => {
    const wrapper = shallow(
      <TrygderettsbehandlingForm
        {...reduxFormPropsMock}
        intl={intlMock}
        readOnly={false}
        readOnlySubmitButton={false}
        aksjonspunktCode={aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER}
        sprakkode={sprakkode}
        aksjonspunkter={[]}
        behandlinger={[]}
        submitCallback={sinon.spy()}
        onSubmit={sinon.spy()}
        formValues={{
          trygderettVurdering: ankeVurdering.ANKE_OMGJOER,
        }}
        ankeVurderingInput={undefined}
        alleKodeverk={kodeverk}
        alleAktuelleHjemler={[]}
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
        aksjonspunkter={[]}
        behandlinger={[]}
        submitCallback={sinon.spy()}
        onSubmit={sinon.spy()}
        formValues={{
          trygderettVurdering: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
        }}
        ankeVurderingInput={undefined}
        alleKodeverk={kodeverk}
        alleAktuelleHjemler={[]}
      />,
    );

    expect(wrapper.find(RadioGroupField)).toHaveLength(2);
    expect(wrapper.find(SelectField)).toHaveLength(0);
  });
});
