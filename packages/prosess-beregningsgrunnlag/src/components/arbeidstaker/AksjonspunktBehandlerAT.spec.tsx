import React from 'react';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AksjonspunktBehandlerAT from './AksjonspunktBehandlerAT';
import messages from '../../../i18n/nb_NO.json';

const mockAndel = (arbeidsgiverIdent, overstyrtPrAar, beregnetPrAar, skalFastsetteGrunnlag) => ({
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'test',
  },
  arbeidsforhold: {
    arbeidsgiverIdent,
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
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text()).toBe(
        `${arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent].navn} (${andel.arbeidsforhold.arbeidsgiverIdent})...5678`,
      );
      const inputField = rows.first().find('InputField');
      expect(inputField).toHaveLength(1);
      expect(inputField.props().readOnly).toBe(false);
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
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(andeler.length);
    andeler.forEach((andel, index) => {
      const arbeidsgiverNavn = rows.at(index).find('Normaltekst');
      expect(arbeidsgiverNavn.at(0).childAt(0).text()).toBe(
        `${arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent].navn} (${andel.arbeidsforhold.arbeidsgiverIdent})...5678`,
      );
      const inputField = rows.first().find('InputField');
      expect(inputField).toHaveLength(1);
      expect(inputField.props().readOnly).toBe(true);
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
    const expectedInitialValues = [{
      inntekt: 242000,
      andelsnr: undefined,
    }];
    const transformedValues = AksjonspunktBehandlerAT.transformValues(values, relevanteStatuser, andeler);
    expect(transformedValues).toEqual(expectedInitialValues);
  });
});
