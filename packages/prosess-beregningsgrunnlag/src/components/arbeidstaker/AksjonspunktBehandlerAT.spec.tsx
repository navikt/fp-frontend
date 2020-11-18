import React from 'react';
import { expect } from 'chai';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BeregningsgrunnlagAndel, RelevanteStatuserProp } from '@fpsak-frontend/types';
import AksjonspunktBehandlerAT from './AksjonspunktBehandlerAT';

const mockAndel = (arbeidsgiverNavn, overstyrtPrAar, beregnetPrAar, skalFastsetteGrunnlag) => ({
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'test',
  },
  arbeidsforhold: {
    arbeidsgiverNavn,
    arbeidsgiverId: '123',
    arbeidsforholdId: '123',
    eksternArbeidsforholdId: '345678',
    startdato: '2018-10-09',
  },
  beregnetPrAar,
  overstyrtPrAar,
  skalFastsetteGrunnlag,
} as BeregningsgrunnlagAndel);

describe('<AksjonspunktBehandlerAT>', () => {
  it('Skal teste tabellen får korrekte rader readonly=false', () => {
    const andeler = [mockAndel('Arbeidsgiver 1', 100, 200000, true), mockAndel('Arbeidsgiver 2', 100, 200000, true)];
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerAT
      readOnly={false}
      alleAndelerIForstePeriode={andeler}
      alleKodeverk={{}}
    />);
    const rows = wrapper.find('Row');
    expect(rows).to.have.length(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text()).to.equal(`${andel.arbeidsforhold.arbeidsgiverNavn} (123)...5678`);
      const inputField = rows.first().find('InputField');
      expect(inputField).to.have.length(1);
      expect(inputField.props().readOnly).to.equal(false);
    });
  });

  it('Skal teste tabellen får korrekte rader readonly=true', () => {
    const andeler = [mockAndel('Arbeidsgiver 1', 100, 200000, true), mockAndel('Arbeidsgiver 2', 100, 200000, true)];
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerAT
      readOnly
      alleAndelerIForstePeriode={andeler}
      alleKodeverk={{}}
    />);
    const rows = wrapper.find('Row');
    expect(rows).to.have.length(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text()).to.equal(`${andel.arbeidsforhold.arbeidsgiverNavn} (123)...5678`);
      const inputField = rows.first().find('InputField');
      expect(inputField).to.have.length(1);
      expect(inputField.props().readOnly).to.equal(true);
    });
  });

  it('Skal teste transformValues metode', () => {
    const andeler = [
      mockAndel('Arbeidsgiver 1', 100, 200000, true),
    ];
    const relevanteStatuser = {
      isArbeidstaker: true,
      isFrilanser: false,
    } as RelevanteStatuserProp;
    const values = {
      ATFLVurdering: 'Vurdering',
      begrunnDekningsgradEndring: '',
      inntekt0: '242 000',
      dekningsgrad: undefined,
    };
    values;
    const expectedInitialValues = {
      kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      begrunnelse: values.ATFLVurdering,
      inntektFrilanser: null,
      inntektPrAndelList: [{
        inntekt: 242000,
        andelsnr: undefined,
      }],
    };
    const transformedValues = AksjonspunktBehandlerAT.transformValues(values, relevanteStatuser, andeler);
    expect(transformedValues).is.deep.equal(expectedInitialValues);
  });
  it('Skal teste transformValuesATFlhver for seg metode', () => {
    const andeler = [
      mockAndel('Arbeidsgiver 1', 100, 200000, true),
    ];
    const values = {
      ATFLVurdering: 'Vurdering',
      begrunnDekningsgradEndring: '',
      inntekt0: '242 000',
      dekningsgrad: undefined,
    };
    values;
    const expectedInitialValues = [{
      andelsnr: undefined,
      inntekt: 242000,
    }];
    const transformedValues = AksjonspunktBehandlerAT.transformValuesForAT(values, andeler);
    expect(transformedValues).is.deep.equal(expectedInitialValues);
  });
});
