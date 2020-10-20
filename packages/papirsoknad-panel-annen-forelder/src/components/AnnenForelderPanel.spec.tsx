import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import * as useIntl from '../useIntl';
import AnnenForelderPanel, { AnnenForelderPanelImpl, KanIkkeOppgiBegrunnelsePanel } from './AnnenForelderPanel';

describe('<AnnenForelderPanel>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  describe('validate', () => {
    describe('hvis kan oppgi annen forelder', () => {
      const sokersPersonnummer = '12345678910';
      const validate = (values: any) => AnnenForelderPanel.validate(sokersPersonnummer, { kanIkkeOppgiAnnenForelder: false, ...values });
      it('skal validere fornavn', () => {
        const errorsWithoutFornavn = validate({});
        const errorsWithFornavn = validate({ fornavn: 'Ola' });

        expect(errorsWithoutFornavn.fornavn).to.be.an('array');
        expect(errorsWithFornavn.fornavn).to.not.exist;
      });

      it('skal validere etternavn', () => {
        const errorsWithoutEtternavn = validate({});
        const errorsWithEtternavn = validate({ etternavn: 'Ola' });

        expect(errorsWithoutEtternavn.etternavn).to.be.an('array');
        expect(errorsWithEtternavn.etternavn).to.not.exist;
      });

      /**
       * NB: Validerer kun formatkrav 11 siffer. Validerer ikke at fødselsnummeret faktisk er gyldig.
       */
      it('skal validere fødselsnummer', () => {
        const errorsWithNoFoedselsnummer = validate({});
        const errorsWithInvalidFoedselsnummer = validate({ foedselsnummer: 'Ola' });
        const errorsWithValidFoedselsnummer = validate({ foedselsnummer: '08057949997' });

        expect(errorsWithNoFoedselsnummer.foedselsnummer).to.be.an('array');
        expect(errorsWithInvalidFoedselsnummer.foedselsnummer).to.be.an('array');
        expect(errorsWithValidFoedselsnummer.foedselsnummer).to.not.exist;
      });
    });

    describe('hvis ikke kan oppgi annen forelder', () => {
      const sokersPersonnummer = '12345678910';
      const validateBegrunnelse = (kanIkkeOppgiBegrunnelse: any) => AnnenForelderPanel.validate(sokersPersonnummer,
        { kanIkkeOppgiAnnenForelder: true, kanIkkeOppgiBegrunnelse });
      it('skal validere årsak', () => {
        const errorsWithNoArsak = validateBegrunnelse({});
        const errorsWithArsak = validateBegrunnelse({ arsak: 'En årsak' });

        expect(errorsWithNoArsak.kanIkkeOppgiBegrunnelse.arsak).to.be.an('array');
        expect(errorsWithArsak.kanIkkeOppgiBegrunnelse.arsak).to.not.exist;
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
    expect(begrunnelse).to.have.length(0);

    wrapper.setProps({ kanIkkeOppgiAnnenForelder: true });
    wrapper.update();

    begrunnelse = wrapper.find({ name: 'kanIkkeOppgiBegrunnelse' });
    expect(begrunnelse).to.have.length(1);
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
      expect(land).to.have.length(0);
      expect(utenlandskFoedselsnummer).to.have.length(0);

      wrapper.setProps({ kanIkkeOppgiBegrunnelse: { arsak: kanIkkeOppgiAnnenForelderArsaker.IKKE_NORSK_FNR } });
      wrapper.update();
      land = wrapper.find({ name: 'land' });
      utenlandskFoedselsnummer = wrapper.find({ name: 'utenlandskFoedselsnummer' });

      expect(land).to.have.length(1);
      expect(utenlandskFoedselsnummer).to.have.length(1);
    });
  });
});
