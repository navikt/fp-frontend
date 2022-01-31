import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { Ytelsefordeling } from '@fpsak-frontend/types';

import { AnnenForelderHarRettForm } from './AnnenForelderHarRettForm';

const avklarAnnenforelderHarRettAp = {
  aksjonspunktType: 'MANU',
  kode: 'MANU',
  kodeverk: 'AKSJONSPUNKT_TYPE',
  navn: 'Manuell',
  begrunnelse: 'test2',
  besluttersBegrunnelse: null,
  definisjon: '5086',
  erAktivt: true,
  kanLoses: true,
  status: 'UTFO',
  toTrinnsBehandling: true,
  toTrinnsBehandlingGodkjent: null,
  vilkarType: null,
  vurderPaNyttArsaker: null,
};

describe('<AnnenForelderHarRettForm>', () => {
  it('skal vise AnnenForelderHarRettForm', () => {
    const wrapper = shallow(<AnnenForelderHarRettForm
      {...reduxFormPropsMock}
      readOnly={false}
      hasOpenAksjonspunkter
      hasOpenUttakAksjonspunkter
      aksjonspunkt={avklarAnnenforelderHarRettAp}
      ytelsefordeling={{} as Ytelsefordeling}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(wrapper.find('[id="UttakInfoPanel.Aksjonspunkt.5086"]')).toHaveLength(1);

    const panel = wrapper.find('div').first();
    expect(panel.find(FaktaSubmitButton)).toHaveLength(1);
  });
});
