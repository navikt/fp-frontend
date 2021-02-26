import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import OmsorgOgAdopsjonPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';
import FodselPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-fodsel';

import { ForeldrepengerForm } from './ForeldrepengerForm';

describe('<ForeldrepengerForm>', () => {
  it('skal vise fødselpaneler når familieHendelseType er lik fødsel', () => {
    const wrapper = shallow(<ForeldrepengerForm
      {...reduxFormPropsMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      readOnly={false}
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR)}
      alleKodeverk={{}}
      fagsakPersonnummer="12121212"
      valuesForRegisteredFieldsOnly={{}}
      annenForelderInformertRequired
      sokerHarAleneomsorg
      validate={sinon.spy()}
    />);
    expect(wrapper.find(FodselPapirsoknadIndex)).toHaveLength(1);
  });

  it('skal vise adopsjonspaneler når familieHendelseType er lik adopsjon', () => {
    const wrapper = shallow(<ForeldrepengerForm
      {...reduxFormPropsMock}
      onSubmitUfullstendigsoknad={sinon.spy()}
      readOnly={false}
      soknadData={new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.MOR)}
      alleKodeverk={{}}
      fagsakPersonnummer="12121212"
      valuesForRegisteredFieldsOnly={{}}
      annenForelderInformertRequired
      sokerHarAleneomsorg
      validate={sinon.spy()}
    />);
    expect(wrapper.find(OmsorgOgAdopsjonPapirsoknadIndex)).toHaveLength(1);
  });
});
