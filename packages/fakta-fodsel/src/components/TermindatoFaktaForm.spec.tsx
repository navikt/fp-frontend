import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DateLabel, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
import {
  Aksjonspunkt, FamilieHendelse, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import { buildInitialValues, TermindatoFaktaForm } from './TermindatoFaktaForm';

describe('<TermindatoFaktaForm>', () => {
  it('skal rendre form som lar NAV-ansatt avklare fødselsdato og antall barn', () => {
    const wrapper = shallow(<TermindatoFaktaForm
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      readOnly={false}
      isForTidligTerminbekreftelse={false}
      submittable
      alleMerknaderFraBeslutter={{
        [aksjonspunktCodes.TERMINBEKREFTELSE]: {},
      }}
      behandlingId={1}
      behandlingVersjon={2}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkt={{} as Aksjonspunkt}
      personopplysninger={{} as Personopplysninger}
      soknad={{} as Soknad}
      submitHandler={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(wrapper.find(DatepickerField)).has.length(2);
    expect(wrapper.find(InputField)).has.length(1);
  });

  it('skal vise fødselsdato og antall barn fra TPS når fødselsdato er satt av TPS', () => {
    const wrapper = shallow(<TermindatoFaktaForm
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      readOnly={false}
      fodselsdatoTps="2018-01-01"
      antallBarnTps={1}
      isForTidligTerminbekreftelse={false}
      isOverridden={false}
      submittable
      alleMerknaderFraBeslutter={{
        [aksjonspunktCodes.TERMINBEKREFTELSE]: {},
      }}
      behandlingId={1}
      behandlingVersjon={2}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkt={{} as Aksjonspunkt}
      personopplysninger={{} as Personopplysninger}
      soknad={{} as Soknad}
      submitHandler={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(wrapper.find(FaktaGruppe)).has.length(2);
    expect(wrapper.find(DateLabel).prop('dateString')).to.eql('2018-01-01');
    expect(wrapper.find(Normaltekst).at(3).childAt(0).text()).to.eql('1');
  });

  it('skal sette initielle verdier når en ikke har avklarte data', () => {
    const familiehendelse = {};
    const soknad = {
      antallBarn: 2,
      utstedtdato: '2016-01-15',
      termindato: '2016-09-15',
    };
    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.TERMINBEKREFTELSE,
        kodeverk: '',
      },
    } as Aksjonspunkt;

    const initialValues = buildInitialValues.resultFunc(soknad as Soknad, familiehendelse as FamilieHendelse, aksjonspunkt);

    expect(initialValues).to.eql({
      utstedtdato: '2016-01-15',
      termindato: '2016-09-15',
      antallBarn: 2,
      begrunnelse: undefined,
    });
  });

  it('skal sette initielle verdier når en har avklarte data', () => {
    const familiehendelse = {
      utstedtdato: '2015-01-15',
      termindato: '2015-09-15',
      antallBarnTermin: 5,
    };
    const soknad = {
      antallBarn: 2,
      utstedtdato: '2016-01-15',
      termindato: '2016-09-15',
    };
    const aksjonspunkt = {
      definisjon: {
        kode: aksjonspunktCodes.TERMINBEKREFTELSE,
        kodeverk: '',
      },
      begrunnelse: 'test',
    } as Aksjonspunkt;

    const initialValues = buildInitialValues.resultFunc(soknad as Soknad, familiehendelse as FamilieHendelse, aksjonspunkt);

    expect(initialValues).to.eql({
      utstedtdato: '2015-01-15',
      termindato: '2015-09-15',
      antallBarn: 5,
      begrunnelse: 'test',
    });
  });
});
