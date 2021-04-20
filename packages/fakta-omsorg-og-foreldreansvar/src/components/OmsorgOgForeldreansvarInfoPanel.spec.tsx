import React from 'react';
import { shallow } from 'enzyme';

import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { FamilieHendelse, Personoversikt, Soknad } from '@fpsak-frontend/types';

import messages from '../../i18n/nb_NO.json';
import OmsorgOgForeldreansvarFaktaForm from './OmsorgOgForeldreansvarFaktaForm';
import { OmsorgOgForeldreansvarInfoPanelImpl } from './OmsorgOgForeldreansvarInfoPanel';

const intlMock = getIntlMock(messages);

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
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personoversikt={{} as Personoversikt}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
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
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personoversikt={{} as Personoversikt}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
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
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personoversikt={{} as Personoversikt}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
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
      alleMerknaderFraBeslutter={{}}
      soknad={{} as Soknad}
      personoversikt={{} as Personoversikt}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder={[]}
      aksjonspunkter={[]}
      alleKodeverk={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const omsorgOgForeldreAnsvarFaktaForm = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(omsorgOgForeldreAnsvarFaktaForm.prop('erAksjonspunktForeldreansvar')).toBe(true);
  });
});
