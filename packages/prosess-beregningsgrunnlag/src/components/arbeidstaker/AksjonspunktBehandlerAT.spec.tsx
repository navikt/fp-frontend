import React from 'react';
import { expect } from 'chai';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BeregningsgrunnlagAndel, RelevanteStatuserProp } from '@fpsak-frontend/types';
import AksjonspunktBehandlerAT from './AksjonspunktBehandlerAT';

const mockAndel = (arbeidsgiverId, overstyrtPrAar, beregnetPrAar, skalFastsetteGrunnlag) => ({
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'test',
  },
  arbeidsforhold: {
    arbeidsgiverId,
    eksternArbeidsforholdId: '345678',
    startdato: '2018-10-09',
  },
  beregnetPrAar,
  overstyrtPrAar,
  skalFastsetteGrunnlag,
} as BeregningsgrunnlagAndel);

const arbeidsgiverOpplysningerPerId = {
  123: {
    erPrivatPerson: false,
    identifikator: '123',
    referanse: '123',
    navn: 'Arbeidsgiver 1',
  },
  321: {
    erPrivatPerson: false,
    identifikator: '321',
    referanse: '321',
    navn: 'Arbeidsgiver 2',
  },
};

describe('<AksjonspunktBehandlerAT>', () => {
  it('Skal teste tabellen får korrekte rader readonly=false', () => {
    const andeler = [mockAndel('123', 100, 200000, true), mockAndel('321', 100, 200000, true)];
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerAT
      readOnly={false}
      alleAndelerIForstePeriode={andeler}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const rows = wrapper.find('Row');
    expect(rows).to.have.length(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text())
        .to.equal(`${arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverId].navn} (${andel.arbeidsforhold.arbeidsgiverId})...5678`);
      const inputField = rows.first().find('InputField');
      expect(inputField).to.have.length(1);
      expect(inputField.props().readOnly).to.equal(false);
    });
  });

  it('Skal teste tabellen får korrekte rader readonly=true', () => {
    const andeler = [mockAndel('123', 100, 200000, true),
      mockAndel('321', 100, 200000, true)];
    const wrapper = shallowWithIntl(<AksjonspunktBehandlerAT
      readOnly
      alleAndelerIForstePeriode={andeler}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const rows = wrapper.find('Row');
    expect(rows).to.have.length(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text())
        .to.equal(`${arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverId].navn} (${andel.arbeidsforhold.arbeidsgiverId})...5678`);
      const inputField = rows.first().find('InputField');
      expect(inputField).to.have.length(1);
      expect(inputField.props().readOnly).to.equal(true);
    });
  });

  it('Skal teste transformValues metode', () => {
    const andeler = [
      mockAndel('123', 100, 200000, true),
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
      mockAndel('123', 100, 200000, true),
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
