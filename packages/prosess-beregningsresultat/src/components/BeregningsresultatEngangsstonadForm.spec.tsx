import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Element } from 'nav-frontend-typografi';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { OverstyringKnapp } from '@fpsak-frontend/shared-components';
import { OverstyringPanel } from '@fpsak-frontend/prosess-felles';

import { BeregningsresultatEngangsstonadFormImpl } from './BeregningsresultatEngangsstonadForm';

describe('<BeregningsresultatEngangsstonadForm>', () => {
  it('skal vise beregningsgrunnlaget når en ikke har overstyrt', () => {
    const beregningResultat = {
      beregnetTilkjentYtelse: 120000,
      satsVerdi: 60000,
      antallBarn: 2,
    };

    const wrapper = shallow(<BeregningsresultatEngangsstonadFormImpl
      {...reduxFormPropsMock}
      behandlingResultatstruktur={beregningResultat}
      aksjonspunkter={[]}
      isOverstyrt={false}
      kanOverstyre
      toggleOverstyring={sinon.spy()}
      overrideReadOnly
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      erIkkeGodkjentAvBeslutter={false}
    />);

    const texts = wrapper.find(Element);

    expect(texts).toHaveLength(3);
    expect(texts.first().childAt(0).text()).toEqual('60 000 kr');
    expect(texts.at(1).childAt(0).text()).toEqual('2');
    expect(texts.last().childAt(0).text()).toEqual('120 000 kr');
  });

  it('skal ved valg av overstyr vise tekstfelter', () => {
    const beregningResultat = {
      beregnetTilkjentYtelse: 120000,
      satsVerdi: 60000,
      antallBarn: 2,
    };

    const wrapper = shallow(<BeregningsresultatEngangsstonadFormImpl
      {...reduxFormPropsMock}
      behandlingResultatstruktur={beregningResultat}
      aksjonspunkter={[]}
      isOverstyrt={false}
      kanOverstyre
      toggleOverstyring={sinon.spy()}
      overrideReadOnly
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      erIkkeGodkjentAvBeslutter={false}
    />);

    expect(wrapper.find(OverstyringPanel)).toHaveLength(0);

    wrapper.find(OverstyringKnapp).prop('onClick')(true);

    expect(wrapper.find(OverstyringPanel)).toHaveLength(1);
  });
});
