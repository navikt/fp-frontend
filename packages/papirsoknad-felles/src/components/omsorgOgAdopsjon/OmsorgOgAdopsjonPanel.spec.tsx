import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/sinon-chai` if it exists o... Remove this comment to see the full error message
import sinonChai from 'sinon-chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

import { FodselsDatoFields, OmsorgOgAdopsjonPanelImpl } from './OmsorgOgAdopsjonPanel';

chai.use(sinonChai);

describe('<OmsorgOgAdopsjonPanel>', () => {
  it('skal vise komponent med to datepickers når årsakstype er adopsjon', () => {
    const wrapper = shallowWithIntl(<OmsorgOgAdopsjonPanelImpl
      form="form"
      intl={intlMock}
      familieHendelseType={familieHendelseType.ADOPSJON}
      isForeldrepenger
    />);
    const overtakelseDatepicker = wrapper.find('DatepickerField');
    const fodselsDatepickers = wrapper.find({ component: FodselsDatoFields });
    expect(overtakelseDatepicker).to.have.length(2);
    expect(fodselsDatepickers).to.have.length(1);
  });

  it('skal vise komponent med en datepicker når årsakstype er omsorg', () => {
    const wrapper = shallowWithIntl(<OmsorgOgAdopsjonPanelImpl
      form="form"
      intl={intlMock}
      familieHendelseType={familieHendelseType.OMSORG}
      isForeldrepenger
    />);
    const overtakelseDatepicker = wrapper.find('DatepickerField');
    expect(overtakelseDatepicker).to.have.length(1);
  });

  describe('<FodselsDatoFields>', () => {
    it('skal vise to fødselsdato-datepickers hvis antall barn er to', () => {
      const wrapper = shallow(<FodselsDatoFields
        fields={new MockFields('barn', 2)}
        antallBarn={2}
        // @ts-expect-error ts-migrate(2769) FIXME: Property 'familieHendelseType' does not exist on t... Remove this comment to see the full error message
        familieHendelseType={familieHendelseType.ADOPSJON}
      />);

      const datepicker = wrapper.find('DatepickerField');
      expect(datepicker).to.have.length(2);
    });

    it('skal legge til korrekt antall fields utifra input fra antallBarn', () => {
      const props = {
        fields: new MockFields('name', 0),
        antallBarn: 2,
        familieHendelseType: familieHendelseType.ADOPSJON,
      };
      const pushSpy = sinon.spy(props.fields, 'push');
      const wrapper = shallow(<FodselsDatoFields {...props} />);

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'calledOnce' does not exist on type 'Asse... Remove this comment to see the full error message
      expect(pushSpy).to.have.been.calledOnce;
      expect(props.fields.length).to.eql(1);

      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      wrapper.instance().UNSAFE_componentWillReceiveProps(props);
      wrapper.update();

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'calledTwice' does not exist on type 'Ass... Remove this comment to see the full error message
      expect(pushSpy).to.have.been.calledTwice;
      expect(props.fields.length).to.eql(2);

      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      wrapper.instance().UNSAFE_componentWillReceiveProps(props);
      wrapper.update();

      // @ts-expect-error ts-migrate(2339) FIXME: Property 'calledTwice' does not exist on type 'Ass... Remove this comment to see the full error message
      expect(pushSpy).to.have.been.calledTwice;
      expect(props.fields.length).to.eql(2);
    });
  });
});
