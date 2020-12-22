import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-omsorg-og-adopsjon';
import { FodselsDatoFields, OmsorgOgAdopsjonPanelImpl } from './OmsorgOgAdopsjonPanel';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireActual('../../i18n/intl-enzyme-test-helper-papirsoknad-omsorg-og-adopsjon');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('<OmsorgOgAdopsjonPanel>', () => {
  it('skal vise komponent med to datepickers når årsakstype er adopsjon', () => {
    const wrapper = shallowWithIntl(<OmsorgOgAdopsjonPanelImpl
      form="form"
      namePrefix="test"
      familieHendelseType={familieHendelseType.ADOPSJON}
      isForeldrepengerFagsak
      isForeldrepenger
    />);
    const overtakelseDatepicker = wrapper.find('DatepickerField');
    const fodselsDatepickers = wrapper.find({ component: FodselsDatoFields });
    expect(overtakelseDatepicker).toHaveLength(2);
    expect(fodselsDatepickers).toHaveLength(1);
  });

  it('skal vise komponent med en datepicker når årsakstype er omsorg', () => {
    const wrapper = shallowWithIntl(<OmsorgOgAdopsjonPanelImpl
      form="form"
      namePrefix="test"
      familieHendelseType={familieHendelseType.OMSORG}
      isForeldrepengerFagsak
      isForeldrepenger
    />);
    const overtakelseDatepicker = wrapper.find('DatepickerField');
    expect(overtakelseDatepicker).toHaveLength(1);
  });

  describe('<FodselsDatoFields>', () => {
    it('skal vise to fødselsdato-datepickers hvis antall barn er to', () => {
      const wrapper = shallow(<FodselsDatoFields
        fields={new MockFields('barn', 2)}
        antallBarn={2}
      />);

      const datepicker = wrapper.find('DatepickerField');
      expect(datepicker).toHaveLength(2);
    });

    it('skal legge til korrekt antall fields utifra input fra antallBarn', () => {
      const props = {
        fields: new MockFields('name', 0),
        antallBarn: 2,
        familieHendelseType: familieHendelseType.ADOPSJON,
      };
      const pushSpy = sinon.spy(props.fields, 'push');
      const wrapper = shallow(<FodselsDatoFields {...props} />);

      expect(pushSpy.callCount).toEqual(1);
      expect(props.fields).toHaveLength(1);

      wrapper.instance().UNSAFE_componentWillReceiveProps(props, {});
      wrapper.update();

      expect(pushSpy.callCount).toEqual(2);
      expect(props.fields).toHaveLength(2);

      wrapper.instance().UNSAFE_componentWillReceiveProps(props, {});
      wrapper.update();

      expect(pushSpy.callCount).toEqual(2);
      expect(props.fields).toHaveLength(2);
    });
  });
});
