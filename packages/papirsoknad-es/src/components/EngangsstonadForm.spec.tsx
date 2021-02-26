import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import RegistreringFodselGrid from './RegistreringFodselGrid';
import RegistreringAdopsjonOgOmsorgGrid from './RegistreringAdopsjonOgOmsorgGrid';
import { EngangsstonadForm } from './EngangsstonadForm';

describe('<EngangsstonadForm>', () => {
  it('skal vise fødselpaneler når familieHendelseType er lik fødsel', () => {
    const wrapper = shallow(<EngangsstonadForm
      {...reduxFormPropsMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      readOnly={false}
      soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.FODSEL, foreldreType.MOR)}
      alleKodeverk={{}}
      fagsakPersonnummer="12423424"
      validate={sinon.spy()}
    />);
    const form = wrapper.find(RegistreringFodselGrid);
    expect(form).toHaveLength(1);
  });

  it('skal vise adopsjonspaneler når familieHendelseType er lik adopsjon', () => {
    const wrapper = shallow(<EngangsstonadForm
      {...reduxFormPropsMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      readOnly={false}
      soknadData={new SoknadData(fagsakYtelseType.ENGANGSSTONAD, familieHendelseType.ADOPSJON, foreldreType.MOR)}
      alleKodeverk={{}}
      fagsakPersonnummer="12423424"
      validate={sinon.spy()}
    />);
    const form = wrapper.find(RegistreringAdopsjonOgOmsorgGrid);
    expect(form).toHaveLength(1);
  });
});
