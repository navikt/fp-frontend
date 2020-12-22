import React from 'react';
import { shallow } from 'enzyme';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import AnnenForelderPanel, { AnnenForelderPanelImpl, KanIkkeOppgiBegrunnelsePanel } from './AnnenForelderPanel';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireActual('../../i18n/intl-enzyme-test-helper-papirsoknad-annen-forelder');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('<AnnenForelderPanel>', () => {
  describe('validate', () => {
    describe('hvis kan oppgi annen forelder', () => {
      const sokersPersonnummer = '12345678910';
      const validate = (values: any) => AnnenForelderPanel.validate(sokersPersonnummer, { kanIkkeOppgiAnnenForelder: false, ...values });
      it('skal validere fornavn', () => {
        const errorsWithoutFornavn = validate({});
        const errorsWithFornavn = validate({ fornavn: 'Ola' });

        expect(errorsWithoutFornavn.fornavn).toEqual('Feltet må fylles ut');
        expect(errorsWithFornavn.fornavn).toBeFalsy();
      });

      it('skal validere etternavn', () => {
        const errorsWithoutEtternavn = validate({});
        const errorsWithEtternavn = validate({ etternavn: 'Ola' });

        expect(errorsWithoutEtternavn.etternavn).toEqual('Feltet må fylles ut');
        expect(errorsWithEtternavn.etternavn).toBeFalsy();
      });

      /**
       * NB: Validerer kun formatkrav 11 siffer. Validerer ikke at fødselsnummeret faktisk er gyldig.
       */
      it('skal validere fødselsnummer', () => {
        const errorsWithNoFoedselsnummer = validate({});
        const errorsWithInvalidFoedselsnummer = validate({ foedselsnummer: 'Ola' });
        const errorsWithValidFoedselsnummer = validate({ foedselsnummer: '08057949997' });

        expect(errorsWithNoFoedselsnummer.foedselsnummer).toEqual('Feltet må fylles ut');
        expect(errorsWithInvalidFoedselsnummer.foedselsnummer).toEqual('Feltet må være et fødselsnummer (11 siffer)');
        expect(errorsWithValidFoedselsnummer.foedselsnummer).toBeFalsy();
      });
    });

    describe('hvis ikke kan oppgi annen forelder', () => {
      const sokersPersonnummer = '12345678910';
      const validateBegrunnelse = (kanIkkeOppgiBegrunnelse: any) => AnnenForelderPanel.validate(sokersPersonnummer,
        { kanIkkeOppgiAnnenForelder: true, kanIkkeOppgiBegrunnelse });
      it('skal validere årsak', () => {
        const errorsWithNoArsak = validateBegrunnelse({});
        const errorsWithArsak = validateBegrunnelse({ arsak: 'En årsak' });

        expect(errorsWithNoArsak.kanIkkeOppgiBegrunnelse.arsak).toEqual('Feltet må fylles ut');
        expect(errorsWithArsak.kanIkkeOppgiBegrunnelse.arsak).toBeFalsy();
      });
    });
  });

  const countryCodes = [
    {
      kode: 'NOR',
      navn: 'Norge',
      kodeverk: '',
    },
    {
      kode: 'SWE',
      navn: 'Sverige',
      kodeverk: '',
    },
  ];

  it('skal kun vise angi begrunnelse hvis kanIkkeOppgiAnnenForelder er valgt', () => {
    const wrapper = shallow(<AnnenForelderPanelImpl
      form="test"
      soknadData={new SoknadData('ES', 'TEST', 'TEST')}
      namePrefix="test"
      alleKodeverk={{
        [kodeverkTyper.LANDKODER]: countryCodes,
      }}
    />);

    let begrunnelse = wrapper.find({ name: 'kanIkkeOppgiBegrunnelse' });
    expect(begrunnelse).toHaveLength(0);

    wrapper.setProps({ kanIkkeOppgiAnnenForelder: true });
    wrapper.update();

    begrunnelse = wrapper.find({ name: 'kanIkkeOppgiBegrunnelse' });
    expect(begrunnelse).toHaveLength(1);
  });

  describe('<KanIkkeOppgiBegrunnelseForm>', () => {
    it('skal kun vise land dropdown og utenlandskFodelsnummer felt hvis arsak er IKKE_NORSK_FNR', () => {
      const wrapper = shallow(<KanIkkeOppgiBegrunnelsePanel
        readOnly={false}
        formatMessage={() => ''}
        countryCodes={countryCodes}
        kanIkkeOppgiBegrunnelse={{ arsak: undefined }}
      />);

      let land = wrapper.find({ name: 'land' });
      let utenlandskFoedselsnummer = wrapper.find({ name: 'utenlandskFoedselsnummer' });
      expect(land).toHaveLength(0);
      expect(utenlandskFoedselsnummer).toHaveLength(0);

      wrapper.setProps({ kanIkkeOppgiBegrunnelse: { arsak: kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR } });
      wrapper.update();
      land = wrapper.find({ name: 'land' });
      utenlandskFoedselsnummer = wrapper.find({ name: 'utenlandskFoedselsnummer' });

      expect(land).toHaveLength(1);
      expect(utenlandskFoedselsnummer).toHaveLength(1);
    });
  });
});
