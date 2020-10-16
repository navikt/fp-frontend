import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kanIkkeOppgiAnnenForelderArsaker from '@fpsak-frontend/kodeverk/src/kanIkkeOppgiAnnenForelderArsak';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import SoknadData from '../SoknadData';
import AnnenForelderPanel, { AnnenForelderPanelImpl, KanIkkeOppgiBegrunnelsePanel } from './AnnenForelderPanel';

describe('<AnnenForelderPanel>', () => {
  describe('validate', () => {
    describe('hvis kan oppgi annen forelder', () => {
      const sokersPersonnummer = '12345678910';
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'Connec... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'Connec... Remove this comment to see the full error message
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
    },
    {
      kode: 'SWE',
      navn: 'Sverige',
    },
  ];

  it('skal kun vise angi begrunnelse hvis kanIkkeOppgiAnnenForelder er valgt', () => {
    const wrapper = shallowWithIntl(<AnnenForelderPanelImpl
      intl={intlMock}
      countryCodes={countryCodes}
      form="test"
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 4.
      soknadData={new SoknadData('ES', 'TEST', 'TEST', [])}
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
      const wrapper = shallowWithIntl(<KanIkkeOppgiBegrunnelsePanel
        readOnly={false}
        formatMessage={() => ''}
        countryCodes={countryCodes}
        kanIkkeOppgiBegrunnelse={{}}
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
