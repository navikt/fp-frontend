import React from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Soknad, Ytelsefordeling } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OmsorgFaktaForm from './OmsorgFaktaForm';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const tekster = jest.requireActual('../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(tekster),
  };
});

describe('<OmsorgFaktaForm>', () => {
  const omsorgAp = {
    id: 2,
    definisjon: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
    status: 'OPPRETTET',
    toTrinnsBehandling: false,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: false,
  };

  it('skal vise form - med <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[omsorgAp]}
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);

    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(1);
    expect(radioGroup.first().prop('name')).toEqual('omsorg');

    const radioFieldsGroup2 = radioGroup.first().find('RadioOption');
    expect(radioFieldsGroup2).toHaveLength(2);
    expect(radioFieldsGroup2.first().prop('value')).toEqual(true);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.first().prop('label').id).toEqual('OmsorgFaktaForm.HarOmsorg');
    expect(radioFieldsGroup2.last().prop('value')).toEqual(false);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.last().prop('label').props.id).toEqual('OmsorgFaktaForm.HarIkkeOmsorg');
    expect(wrapper.find('FieldArray')).toHaveLength(1);
  });

  it('skal vise form - uten <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallowWithIntl(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg
      aksjonspunkter={[omsorgAp]}
      className="defaultAleneOmsorgFakta"
      alleMerknaderFraBeslutter={{}}
      ytelsefordeling={{} as Ytelsefordeling}
      soknad={{} as Soknad}
    />, messages);
    expect(wrapper.find('RadioGroupField')).toHaveLength(1);
    expect(wrapper.find('FieldArray')).toHaveLength(0);
  });
});
