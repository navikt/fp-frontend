import React from 'react';
import { shallow } from 'enzyme';

import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { FamilieHendelse, Personopplysninger, Soknad } from '@fpsak-frontend/types';

import { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-omsorg-og-foreldreansvar';
import OmsorgOgForeldreansvarFaktaForm from './OmsorgOgForeldreansvarFaktaForm';
import { OmsorgOgForeldreansvarInfoPanelImpl } from './OmsorgOgForeldreansvarInfoPanel';

describe('<OmsorgOgForeldreansvarInfoPanel>', () => {
  const relatertYtelseTypeListe = Object.values(relatertYtelseType).map((type) => ({
    kode: type,
    kodeverk: '',
    navn: '',
  }));

  it('skal vise faktapanel og form for omsorgsvilkåret', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={{ begrunnelse: 'test' }}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      vilkarTypes={[{ kode: 'test', kodeverk: '', navn: '' }]}
      relatertYtelseTypes={relatertYtelseTypeListe}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personopplysninger={{} as Personopplysninger}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
    />);

    const form = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(form).toHaveLength(1);
    expect(form.prop('readOnly')).toBe(false);

    const begrunnelseForm = wrapper.find(FaktaBegrunnelseTextField);
    expect(begrunnelseForm).toHaveLength(1);
    expect(begrunnelseForm.prop('isReadOnly')).toBe(false);
  });

  it('skal vise readonly form', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={{ begrunnelse: 'test' }}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter
      submittable
      readOnly
      vilkarTypes={[{ kode: 'test', kodeverk: '', navn: '' }]}
      relatertYtelseTypes={relatertYtelseTypeListe}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personopplysninger={{} as Personopplysninger}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
    />);

    const form = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(form.prop('readOnly')).toBe(true);
  });

  it('skal vise readonly submit-knapp når det ikke er åpne aksjonspunkter', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={{ begrunnelse: 'test' }}
      erAksjonspunktForeldreansvar={false}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly={false}
      vilkarTypes={[{ kode: 'test', kodeverk: '', navn: '' }]}
      relatertYtelseTypes={relatertYtelseTypeListe}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personopplysninger={{} as Personopplysninger}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
    />);

    const begrunnelseForm = wrapper.find(FaktaBegrunnelseTextField);
    expect(begrunnelseForm.prop('isReadOnly')).toBe(false);
  });

  it('skal gi foreldreansvar lik true når aksjonspunkt er foreldreansvar', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      initialValues={{ begrunnelse: 'test' }}
      erAksjonspunktForeldreansvar
      hasOpenAksjonspunkter={false}
      submittable
      readOnly={false}
      vilkarTypes={[{ kode: 'test', kodeverk: '', navn: '' }]}
      relatertYtelseTypes={relatertYtelseTypeListe}
      behandlingId={1}
      behandlingVersjon={1}
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personopplysninger={{} as Personopplysninger}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
    />);
    const omsorgOgForeldreAnsvarFaktaForm = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(omsorgOgForeldreAnsvarFaktaForm.prop('erAksjonspunktForeldreansvar')).toBe(true);
  });
});
