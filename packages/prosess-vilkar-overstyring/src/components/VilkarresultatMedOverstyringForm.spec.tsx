import React from 'react';
import { expect } from 'chai';
import { EtikettLiten } from 'nav-frontend-typografi';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { VilkarResultPicker } from '@fpsak-frontend/prosess-felles';

import { VilkarresultatMedOverstyringForm } from './VilkarresultatMedOverstyringForm';

describe('<VilkarresultatMedOverstyringForm>', () => {
  it('skal rendre form med knapp når vilkåret er overstyrt', () => {
    const wrapper = shallow(<VilkarresultatMedOverstyringForm
      {...reduxFormPropsMock}
      erVilkarOk
      overstyringApKode="5011"
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
      behandlingId={1}
      behandlingVersjon={2}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      medlemskapFom="10.10.2010"
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      initialValues={{
        erVilkarOk: true,
      }}
      status=""
      isSolvable
    />);

    const melding = wrapper.find(FormattedMessage);
    expect(melding).to.have.length(2);
    expect(melding.first().prop('id')).to.eql('Fødsel');

    const normaltekst = wrapper.find(EtikettLiten);
    expect(normaltekst).to.have.length(1);
    expect(normaltekst.childAt(0).text()).to.eql('§23');

    const vilkarResultPicker = wrapper.find(VilkarResultPicker);
    expect(vilkarResultPicker).to.have.length(1);
  });
});
