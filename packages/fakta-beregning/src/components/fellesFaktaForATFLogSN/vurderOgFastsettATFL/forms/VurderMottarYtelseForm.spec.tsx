import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { isRequiredMessage } from '@fpsak-frontend/utils';
import { RadioGroupField } from '@fpsak-frontend/form';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';

import { ArbeidstakerUtenIMAndel, FaktaOmBeregning } from '@fpsak-frontend/types';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { createVisningsnavnFakta } from '../../../ArbeidsforholdHelper';
import VurderMottarYtelseForm, {
  frilansMedAndreFrilanstilfeller,
  frilansUtenAndreFrilanstilfeller,
  mottarYtelseForArbeidMsg,
} from './VurderMottarYtelseForm';
import { finnFrilansFieldName, utledArbeidsforholdFieldName } from './VurderMottarYtelseUtils';
import { InntektTransformed } from '../../../../typer/FieldValues';

const requiredMessage = isRequiredMessage();

const beregningsgrunnlag = {
  beregningsgrunnlagPeriode: [{
    beregningsgrunnlagPrStatusOgAndel: [
      { andelsnr: 1, aktivitetStatus: { kode: 'AT', kodeverk: 'test' } },
      { andelsnr: 2, aktivitetStatus: { kode: 'AT', kodeverk: 'test' } },
      { andelsnr: 3, aktivitetStatus: { kode: 'AT', kodeverk: 'test' } },
      { andelsnr: 4, aktivitetStatus: { kode: 'FL', kodeverk: 'test' } },
    ],
  }],
};

const arbeidsforhold = {
  arbeidsgiverIdent: '3284788923',
  arbeidsforholdId: '321378huda7e2',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const arbeidsforhold2 = {
  arbeidsgiverIdent: '843597943435',
  arbeidsforholdId: 'jjisefoosfe',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const arbeidsforhold3 = {
  arbeidsgiverIdent: '843597943435',
  arbeidsforholdId: '5465465464',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const andel = {
  andelsnr: 1,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold,
};

const andel2 = {
  andelsnr: 2,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold2,
};

const andel3 = {
  andelsnr: 3,
  inntektPrMnd: 25000,
  lagtTilAvSaksbehandler: false,
  arbeidsforhold: arbeidsforhold3,
};

const arbeidstakerAndelerUtenIM = [
  { ...andel, mottarYtelse: null } as ArbeidstakerUtenIMAndel,
  { ...andel2, mottarYtelse: false } as ArbeidstakerUtenIMAndel,
  { ...andel3, mottarYtelse: true } as ArbeidstakerUtenIMAndel,
];

const agOpplysninger = {
  843597943435: {
    navn: 'Virksomheten2',
    identifikator: '843597943435',
    erPrivatPerson: false,
  },
  3284788923: {
    navn: 'Virksomheten',
    identifikator: '3284788923',
    erPrivatPerson: false,
  },
};

const alleKodeverk = {};

describe('<VurderMottarYtelseForm>', () => {
  it('skal teste at initial values bygges korrekt uten dto til stede', () => {
    const initialValues = VurderMottarYtelseForm.buildInitialValues(undefined);
    expect(initialValues).toBe(null);
  });

  it('skal teste at initial values bygges korrekt med frilans uten definert mottar ytelse', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: null,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse);
    expect(initialValues[finnFrilansFieldName()]).toBe(null);
  });

  it('skal teste at initial values bygges korrekt med frilans med mottar ytelse', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: true,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse);
    expect(initialValues[finnFrilansFieldName()]).toBe(true);
  });

  it('skal teste at initial values bygges korrekt med frilans uten mottar ytelse', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse);
    expect(initialValues[finnFrilansFieldName()]).toBe(false);
  });

  it('skal teste at initial values bygges korrekt med frilans og arbeidsforhold uten inntektsmelding', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
      arbeidstakerAndelerUtenIM,
    };
    const initialValues = VurderMottarYtelseForm.buildInitialValues(mottarYtelse);
    expect(initialValues[finnFrilansFieldName()]).toBe(false);
    expect(initialValues[utledArbeidsforholdFieldName(andel)]).toBe(null);
    expect(initialValues[utledArbeidsforholdFieldName(andel2)]).toBe(false);
    expect(initialValues[utledArbeidsforholdFieldName(andel3)]).toBe(true);
  });

  it('skal ikkje returnere errors', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
      arbeidstakerAndelerUtenIM,
    };
    const values = {};
    values[finnFrilansFieldName()] = false;
    values[utledArbeidsforholdFieldName(andel)] = false;
    values[utledArbeidsforholdFieldName(andel2)] = false;
    values[utledArbeidsforholdFieldName(andel3)] = false;
    const errors = VurderMottarYtelseForm.validate(values, mottarYtelse);
    expect(errors[finnFrilansFieldName()]).toBeUndefined();
    expect(errors[utledArbeidsforholdFieldName(andel)]).toBeUndefined();
    expect(errors[utledArbeidsforholdFieldName(andel2)]).toBeUndefined();
    expect(errors[utledArbeidsforholdFieldName(andel3)]).toBeUndefined();
  });

  it('skal returnere required errors', () => {
    const mottarYtelse = {
      erFrilans: true,
      frilansMottarYtelse: false,
      arbeidstakerAndelerUtenIM,
    };
    const values = {};
    values[finnFrilansFieldName()] = null;
    values[utledArbeidsforholdFieldName(andel)] = null;
    values[utledArbeidsforholdFieldName(andel2)] = null;
    values[utledArbeidsforholdFieldName(andel3)] = null;
    const errors = VurderMottarYtelseForm.validate(values, mottarYtelse);
    expect(errors[finnFrilansFieldName()]).toBe(requiredMessage);
    expect(errors[utledArbeidsforholdFieldName(andel)]).toBe(requiredMessage);
    expect(errors[utledArbeidsforholdFieldName(andel2)]).toBe(requiredMessage);
    expect(errors[utledArbeidsforholdFieldName(andel3)]).toBe(requiredMessage);
  });

  it('skal vise radioknapp for frilans uten andre frilanstilfeller', () => {
    const faktaBG = {
      vurderMottarYtelse: {
        erFrilans: true,
      },
      andelerForFaktaOmBeregning: [],
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderMottarYtelseForm
      readOnly={false}
      isAksjonspunktClosed={false}
      tilfeller={[]}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={{ faktaOmBeregning: faktaBG }}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);
    const flRadio = wrapper.find(RadioGroupField);
    expect(flRadio).toHaveLength(1);
    expect(flRadio.prop('name')).toBe(finnFrilansFieldName());
    const formattedMsg = wrapper.find(FormattedMessage);
    expect(formattedMsg).toHaveLength(1);
    expect(formattedMsg.prop('id')).toBe(frilansUtenAndreFrilanstilfeller());
  });

  it('skal vise radioknapp for frilans med andre frilanstilfeller', () => {
    const faktaBG = {
      vurderMottarYtelse: {
        erFrilans: true,
      },
      andelerForFaktaOmBeregning: [],
    } as FaktaOmBeregning;
    const wrapper = shallow(<VurderMottarYtelseForm
      readOnly={false}
      isAksjonspunktClosed={false}
      tilfeller={[faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL]}
      beregningsgrunnlag={{ faktaOmBeregning: faktaBG }}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);
    const flRadio = wrapper.find(RadioGroupField);
    expect(flRadio).toHaveLength(1);
    expect(flRadio.prop('name')).toBe(finnFrilansFieldName());
    const formattedMsg = wrapper.find(FormattedMessage);
    expect(formattedMsg).toHaveLength(1);
    expect(formattedMsg.prop('id')).toBe(frilansMedAndreFrilanstilfeller());
  });

  it('skal vise radioknapper for AT uten inntektsmelding', () => {
    const bg = {
      faktaOmBeregning: {
        vurderMottarYtelse: {
          arbeidstakerAndelerUtenIM,
        },
        andelerForFaktaOmBeregning: [],
      },
    };
    const wrapper = shallow(<VurderMottarYtelseForm
      readOnly={false}
      isAksjonspunktClosed={false}
      tilfeller={[faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL]}
      beregningsgrunnlag={bg as Beregningsgrunnlag}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);
    const atRadio = wrapper.find(RadioGroupField);
    expect(atRadio).toHaveLength(3);
    atRadio.forEach((radio, index) => expect(radio.prop('name')).toBe(utledArbeidsforholdFieldName(arbeidstakerAndelerUtenIM[index])));
    const formattedMsg = wrapper.find(FormattedMessage);
    expect(formattedMsg).toHaveLength(3);
    formattedMsg.forEach((msg, index) => {
      expect(msg.prop('id')).toBe(mottarYtelseForArbeidMsg());
      expect(msg.prop('values')).toEqual(
        {
          arbeid: createVisningsnavnFakta(agOpplysninger[arbeidstakerAndelerUtenIM[index].arbeidsforhold.arbeidsgiverIdent],
            arbeidstakerAndelerUtenIM[index].arbeidsforhold.eksternArbeidsforholdId),
        },
      );
    });
  });

  it('skal transform values og sende ned FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING ved mottar ytelse for AT uten inntektsmelding', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_LONNSENDRING, faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {};
    values[utledArbeidsforholdFieldName(andel)] = true;
    values[utledArbeidsforholdFieldName(andel2)] = false;
    values[utledArbeidsforholdFieldName(andel3)] = true;
    const fastsatteAndelsnr = [];
    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    const fastsatteInntekter = transformed.fastsattUtenInntektsmelding.andelListe;
    expect(fastsatteAndelsnr.length).toBe(2);
    expect(fastsatteAndelsnr.find((nr) => nr === andel.andelsnr) === undefined).toBe(false);
    expect(fastsatteAndelsnr.find((nr) => nr === andel3.andelsnr) === undefined).toBe(false);
    expect(fastsatteInntekter.length).toBe(2);
    expect(fastsatteInntekter[0].andelsnr).toBe(1);
    expect(fastsatteInntekter[0].fastsattBeløp).toBe(10000);
    expect(fastsatteInntekter[1].andelsnr).toBe(3);
    expect(fastsatteInntekter[1].fastsattBeløp).toBe(20000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller;
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(
      faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
    );
  });

  it('skal kunne sette beløp til 0', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_LONNSENDRING, faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 0 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 0 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {};
    values[utledArbeidsforholdFieldName(andel)] = true;
    values[utledArbeidsforholdFieldName(andel2)] = false;
    values[utledArbeidsforholdFieldName(andel3)] = true;
    const fastsatteAndelsnr = [];
    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    const fastsatteInntekter = transformed.fastsattUtenInntektsmelding.andelListe;
    expect(fastsatteAndelsnr.length).toBe(2);
    expect(fastsatteAndelsnr.find((nr) => nr === andel.andelsnr) === undefined).toBe(false);
    expect(fastsatteAndelsnr.find((nr) => nr === andel3.andelsnr) === undefined).toBe(false);
    expect(fastsatteInntekter.length).toBe(2);
    expect(fastsatteInntekter[0].andelsnr).toBe(1);
    expect(fastsatteInntekter[0].fastsattBeløp).toBe(0);
    expect(fastsatteInntekter[1].andelsnr).toBe(3);
    expect(fastsatteInntekter[1].fastsattBeløp).toBe(0);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller;
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(
      faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
    );
  });

  it('skal transform values og sende ned FASTSETT_MAANEDSINNTEKT_FL ved mottar ytelse for Frilans', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM: [],
      },
      andelerForFaktaOmBeregning: [],
    };
    const values = {};
    values[finnFrilansFieldName()] = true;
    const fastsatteAndelsnr = [];
    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    const fastsattInntekt = transformed.fastsettMaanedsinntektFL.maanedsinntekt;
    expect(fastsatteAndelsnr.length).toBe(1);
    expect(fastsattInntekt).toBe(10000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller;
    expect(fastsatteTilfeller.length).toBe(2);
    expect(fastsatteTilfeller[0]).toBe(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[1]).toBe(faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
  });

  it('skal transform values ved mottar ytelse for Frilans og arbeidstaker uten inntektsmelding', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.VURDER_LONNSENDRING,
      faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
      { andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr = [];
    const values = {};
    values[finnFrilansFieldName()] = true;
    values[utledArbeidsforholdFieldName(andel)] = true;
    values[utledArbeidsforholdFieldName(andel2)] = false;
    values[utledArbeidsforholdFieldName(andel3)] = true;

    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    expect(fastsatteAndelsnr.length).toBe(3);
    const fastsattFrilansinntekt = transformed.fastsettMaanedsinntektFL.maanedsinntekt;
    expect(fastsattFrilansinntekt).toBe(10000);

    const fastsatteArbeidsinntekter = transformed.fastsattUtenInntektsmelding.andelListe;
    expect(fastsatteArbeidsinntekter.length).toBe(2);
    expect(fastsatteArbeidsinntekter[0].andelsnr).toBe(1);
    expect(fastsatteArbeidsinntekter[0].fastsattBeløp).toBe(10000);
    expect(fastsatteArbeidsinntekter[1].andelsnr).toBe(3);
    expect(fastsatteArbeidsinntekter[1].fastsattBeløp).toBe(20000);
    const fastsatteTilfeller = transformed.faktaOmBeregningTilfeller;
    expect(fastsatteTilfeller.length).toBe(3);
    expect(fastsatteTilfeller[0]).toBe(faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
    expect(fastsatteTilfeller[2]).toBe(faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL);
    expect(fastsatteTilfeller[1]).toBe(
      faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
    );
  });

  it('skal ikkje transform values mottar ytelse for AT uten inntektsmelding visst inntekt allerede er lagt til', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_LONNSENDRING, faktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING,
      faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: andel.andelsnr, fastsattBelop: 10000 } as InntektTransformed,
      { andelsnr: andel3.andelsnr, fastsattBelop: 20000 } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: false,
        arbeidstakerAndelerUtenIM,
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr = [andel.andelsnr, andel3.andelsnr];
    const values = {};
    values[utledArbeidsforholdFieldName(andel)] = true;
    values[utledArbeidsforholdFieldName(andel2)] = false;
    values[utledArbeidsforholdFieldName(andel3)] = true;

    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    expect(transformed.fastsattUtenInntektsmelding).toBeUndefined();
  });

  it('skal ikkje transform values mottar ytelse for frilans visst inntekt allerede er lagt til', () => {
    const tilfeller = [faktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL, faktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL,
      faktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE];
    const inntektPrMnd = [
      { andelsnr: 4, fastsattBelop: 10000, aktivitetStatus: 'FL' } as InntektTransformed,
    ];
    const faktaOmBeregning = {
      faktaOmBeregningTilfeller: tilfeller.map((kode) => ({ kode, kodeverk: 'test' })),
      vurderMottarYtelse: {
        erFrilanser: true,
        arbeidstakerAndelerUtenIM: [],
      },
      andelerForFaktaOmBeregning: [],
    };
    const fastsatteAndelsnr = [4];
    const values = {};
    values[finnFrilansFieldName()] = true;
    const transformed = VurderMottarYtelseForm.transformValues(values, inntektPrMnd, faktaOmBeregning, beregningsgrunnlag, fastsatteAndelsnr);
    expect(transformed.fastsettMaanedsinntektFL).toBeUndefined();
  });
});
