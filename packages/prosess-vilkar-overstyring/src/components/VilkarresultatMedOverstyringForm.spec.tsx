import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { VilkarresultatMedOverstyringForm } from './VilkarresultatMedOverstyringForm';

describe('<VilkarresultatMedOverstyringForm>', () => {
  it('skal rendre form med knapp når vilkåret er overstyrt', () => {
    const wrapper = shallow(<VilkarresultatMedOverstyringForm
      {...reduxFormPropsMock}
      erVilkarOk
      overstyringApKode={AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET}
      avslagsarsaker={[{ kode: 'test1', navn: 'test', kodeverk: '' }, { kode: 'test2', navn: 'test', kodeverk: '' }]}
      lovReferanse="§23"
      hasAksjonspunkt
      overrideReadOnly={false}
      kanOverstyreAccess={{
        isEnabled: true,
      }}
      aksjonspunktCodes={[]}
      toggleOverstyring={() => undefined}
      erMedlemskapsPanel={false}
      panelTittelKode="Fødsel"
      erOverstyrt
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      medlemskapFom="10.10.2010"
      aksjonspunkter={[]}
      submitCallback={() => Promise.resolve()}
      onSubmit={() => undefined}
      validate={() => undefined}
      initialValues={{
        erVilkarOk: true,
      }}
      status=""
      isSolvable
      erIkkeGodkjentAvBeslutter={false}
    />);

    const melding = wrapper.find(FormattedMessage);
    expect(melding).toHaveLength(2);
    expect(melding.first().prop('id')).toEqual('Fødsel');

    const normaltekst = wrapper.find(Undertekst);
    expect(normaltekst).toHaveLength(1);
    expect(normaltekst.childAt(0).text()).toEqual('§23');

    const vilkarResultPicker = wrapper.find(VilkarResultPicker);
    expect(vilkarResultPicker).toHaveLength(1);
  });
});
