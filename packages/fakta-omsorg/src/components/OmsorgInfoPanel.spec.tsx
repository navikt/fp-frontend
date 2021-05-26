import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import {
  AlleKodeverk, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

import BostedFaktaView from './BostedFaktaView';
import OmsorgFaktaForm from './OmsorgFaktaForm';
import { OmsorgInfoPanel } from './OmsorgInfoPanel';

describe('<OmsorgInfoPanel>', () => {
  const personoversikt = {
    bruker: {
      navn: 'Espen Utvikler',
      aktoerId: '1',
      kjønn: {
        kode: '',
        kodeverk: '',
      },
      sivilstand: {
        kode: 'UGIF',
        kodeverk: '',
      },
      adresser: [],
    },
  } as Personoversikt;

  const aleneomsorgAp = {
    id: 1,
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
      kodeverk: '',
    },
    status: {
      kode: 's1',
      kodeverk: '',
    },
    kanLoses: true,
    erAktivt: false,
  };

  const omsorgAp = {
    id: 1,
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
      kodeverk: '',
    },
    status: {
      kode: 's1',
      kodeverk: '',
    },
    kanLoses: true,
    erAktivt: false,
  };
  it('skal vise omsorginfopanel når en har aleneomsorgaksjonspunkt', () => {
    const wrapper = shallow(<OmsorgInfoPanel
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      omsorg={false}
      aksjonspunkter={[aleneomsorgAp]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
      alleMerknaderFraBeslutter={{}}
      personoversikt={personoversikt}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const panel = wrapper.find(OmsorgFaktaForm);
    expect(panel).toHaveLength(1);
  });

  it('skal vise helptext for omsorg og aleneomsorg aksjonspunkt', () => {
    const wrapper = shallow(<OmsorgInfoPanel
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      omsorg={false}
      aksjonspunkter={[aleneomsorgAp, omsorgAp]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      personoversikt={personoversikt}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
      alleMerknaderFraBeslutter={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    const helpTextMessage = wrapper.find(FormattedMessage);
    expect(helpTextMessage).toHaveLength(2);
    expect(helpTextMessage.at(0).prop('id')).toEqual('OmsorgInfoPanel.VurderAleneomsorg');
    expect(helpTextMessage.at(1).prop('id')).toEqual('OmsorgInfoPanel.VurderOmsorg');
  });

  it('skal vise helptext for omsorg aksjonspunkt', () => {
    const wrapper = shallow(<OmsorgInfoPanel
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      omsorg={false}
      aksjonspunkter={[omsorgAp]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      personoversikt={personoversikt}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
      alleMerknaderFraBeslutter={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    const helpTextMessage = wrapper.find(FormattedMessage);
    expect(helpTextMessage).toHaveLength(1);
    expect(helpTextMessage.at(0).prop('id')).toEqual('OmsorgInfoPanel.VurderOmsorg');
  });

  it('skal vise BostedFakta', () => {
    const wrapper = shallow(<OmsorgInfoPanel
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      omsorg={false}
      aksjonspunkter={[omsorgAp]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      personoversikt={personoversikt}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
      alleMerknaderFraBeslutter={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const bostedFaktaView = wrapper.find(BostedFaktaView);
    expect(bostedFaktaView).toHaveLength(1);
    expect(bostedFaktaView.at(0).prop('personoversikt')).toEqual(personoversikt);
  });

  it('skal vise OmsorgFaktaForm', () => {
    const wrapper = shallow(<OmsorgInfoPanel
      {...reduxFormPropsMock}
      initialValues={{ begrunnelse: 'test' }}
      omsorg={false}
      aksjonspunkter={[omsorgAp]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      personoversikt={personoversikt}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
      alleMerknaderFraBeslutter={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />);
    const omsorgFaktaForm = wrapper.find(OmsorgFaktaForm);
    expect(omsorgFaktaForm).toHaveLength(1);
    expect(omsorgFaktaForm.at(0).prop('omsorg')).toEqual(false);
    expect(omsorgFaktaForm.at(0).prop('aksjonspunkter')).toEqual([omsorgAp]);
    expect(omsorgFaktaForm.at(0).prop('readOnly')).toEqual(false);
  });
});
