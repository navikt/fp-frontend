import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import { FaktaBegrunnelseTextField } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { FamilieHendelse, Personopplysninger, Soknad } from '@fpsak-frontend/types';

import OmsorgOgForeldreansvarFaktaForm from './OmsorgOgForeldreansvarFaktaForm';
import { OmsorgOgForeldreansvarInfoPanelImpl } from './OmsorgOgForeldreansvarInfoPanel';
import * as useIntl from '../useIntl';

describe('<OmsorgOgForeldreansvarInfoPanel>', () => {
  const relatertYtelseTypeListe = Object.values(relatertYtelseType).map((type) => ({
    kode: type,
    kodeverk: '',
    navn: '',
  }));

  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise faktapanel og form for omsorgsvilkåret', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
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
    />);

    const form = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(form).to.have.length(1);
    expect(form.prop('readOnly')).is.false;

    const begrunnelseForm = wrapper.find(FaktaBegrunnelseTextField);
    expect(begrunnelseForm).to.have.length(1);
    expect(begrunnelseForm.prop('isReadOnly')).is.false;
  });

  it('skal vise readonly form', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
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
    />);

    const form = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(form.prop('readOnly')).is.true;
  });

  it('skal vise readonly submit-knapp når det ikke er åpne aksjonspunkter', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
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
    />);

    const begrunnelseForm = wrapper.find(FaktaBegrunnelseTextField);
    expect(begrunnelseForm.prop('isReadOnly')).is.false;
  });

  it('skal gi foreldreansvar lik true når aksjonspunkt er foreldreansvar', () => {
    const wrapper = shallow(<OmsorgOgForeldreansvarInfoPanelImpl
      {...reduxFormPropsMock}
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
    />);
    const omsorgOgForeldreAnsvarFaktaForm = wrapper.find(OmsorgOgForeldreansvarFaktaForm);
    expect(omsorgOgForeldreAnsvarFaktaForm.prop('erAksjonspunktForeldreansvar')).is.true;
  });
});
