import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme/build';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import {
  AlleKodeverk,
  Beregningsgrunnlag as BeregningsgrunnlagProp, BeregningsgrunnlagPeriodeProp,
  SammenligningsgrunlagProp,
} from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import { BeregningFormImpl, transformValues, buildInitialValues } from './BeregningForm';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel2 from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import AksjonspunktBehandler from '../fellesPaneler/AksjonspunktBehandler';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';
import messages from '../../../i18n/nb_NO.json';

const apVurderDekningsgrad = {
  definisjon: aksjonspunktCodes.VURDER_DEKNINGSGRAD,
  status: 'OPPR',
  kanLoses: true,
  erAktivt: true,
};
const apFastsettBgATFL = {
  definisjon: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  status: 'UTFO',
  kanLoses: false,
  erAktivt: false,
};

const apVurderVarigEndretEllerNyoppstartetSN = {
  definisjon: aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  status: 'OPPR',
  kanLoses: true,
  erAktivt: true,
};

const apFastsettBgSnNyIArbeidslivet = {
  definisjon: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  status: 'OPPR',
  kanLoses: true,
  erAktivt: true,
};
const apFastsettBgTidsbegrensetArbeidsforhold = {
  definisjon: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  status: 'OPPR',
  kanLoses: true,
  erAktivt: true,
};

const apEttLukketOgEttApent = [apFastsettBgATFL, apVurderDekningsgrad];

const allAndeler = [{
  aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  beregnetPrAar: 200000,
  overstyrtPrAar: 100,
}];
const allPerioder = [{
  bruttoPrAar: 300000,
  beregningsgrunnlagPrStatusOgAndel: allAndeler,
}];

const relevanteStatuser = {
  isArbeidstaker: true,
  isKombinasjonsstatus: true,
  isFrilanser: false,
  isSelvstendigNaeringsdrivende: false,
  harAndreTilstotendeYtelser: false,
  harDagpengerEllerAAP: false,
  isAAP: false,
  isDagpenger: false,
  skalViseBeregningsgrunnlag: false,
  isMilitaer: false,
};

const lagPeriode = (): BeregningsgrunnlagPeriodeProp => ({
  beregningsgrunnlagPeriodeFom: '2019-09-16',
  beregningsgrunnlagPeriodeTom: undefined,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  beregningsgrunnlagPrStatusOgAndel: [{
    aktivitetStatus: 'AT',
  }],
});
const lagBeregningsgrunnlag = (avvikPromille: number, årsinntektVisningstall: number,
  sammenligningSum: number, dekningsgrad: number, sammenligningsgrunnlagInput?: SammenligningsgrunlagProp): BeregningsgrunnlagProp => ({
  beregningsgrunnlagPeriode: [lagPeriode()],
  skjaeringstidspunktBeregning: '2019-10-31',
  grunnbeløp: null,
  erOverstyrtInntekt: false,
  sammenligningsgrunnlagPrStatus: sammenligningsgrunnlagInput ? [sammenligningsgrunnlagInput] : null,
  sammenligningsgrunnlag: sammenligningsgrunnlagInput || {
    sammenligningsgrunnlagFom: '2018-09-01',
    sammenligningsgrunnlagTom: '2019-10-31',
    avvikProsent: 27.5,
    sammenligningsgrunnlagType: 'SAMMENLIGNING_AT',
    differanseBeregnet: 12100,
    rapportertPrAar: sammenligningSum,
    avvikPromille,
  },
  dekningsgrad,
  årsinntektVisningstall,
  aktivitetStatus: ['UDEFINERT'],
} as BeregningsgrunnlagProp);
const mockVilkar = [{
  vilkarType: 'FP_VK_41',
  vilkarStatus: vilkarUtfallType.OPPFYLT,
}];
const sammenligningsgrunnlag = (kode: string): SammenligningsgrunlagProp => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar: 330000,
  avvikPromille: 275,
  avvikProsent: 27.5,
  sammenligningsgrunnlagType: kode,
  differanseBeregnet: 12100,
});

const getBGVilkar = (vilkar) => (vilkar ? vilkar.find((v) => v.vilkarType && v.vilkarType === vilkarType.BEREGNINGSGRUNNLAGVILKARET) : undefined);
describe('<BeregningForm>', () => {
  it('skal teste at AvviksopplysningerPanel får korrekte props fra BeregningFP', () => {
    const sg = sammenligningsgrunnlag('SAMMENLIGNING_ATFL_SN');
    const beregningsgrunnlag = lagBeregningsgrunnlag(0, 100000, 100000, 100, sg);
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      beregningsgrunnlag={beregningsgrunnlag}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      alleKodeverk={{} as AlleKodeverk}
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const avvikPanel = wrapper.find(AvviksopplysningerPanel);
    expect(avvikPanel.props().harAksjonspunkter).toBe(true);
    expect(avvikPanel.props().gjelderBesteberegning).toBe(false);
    expect(avvikPanel.props().sammenligningsgrunnlagPrStatus[0]).toBe(sg);
    expect(avvikPanel.props().relevanteStatuser).toBe(relevanteStatuser);
    const expectedPerioder = lagPeriode();
    expect(avvikPanel.props().allePerioder[0]).toEqual(expectedPerioder);
  });
  it('skal teste at SkjeringspunktOgStatusPanel får korrekte props fra BeregningFP', () => {
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 120000, 100000, 100)}
      alleKodeverk={{} as AlleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const skjeringspunktOgStatusPanel = wrapper.find(SkjeringspunktOgStatusPanel2);
    expect(skjeringspunktOgStatusPanel.props().skjeringstidspunktDato).toBe('2019-10-31');
  });

  it('skal teste at Aksjonspunktbehandler får korrekte props fra BeregningFP', () => {
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 120000, 100000, 100)}
      alleKodeverk={{} as AlleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const aksjonspunktBehandler = wrapper.find(AksjonspunktBehandler);
    expect(aksjonspunktBehandler.props().readOnly).toBe(false);
    const expectedPerioder = lagPeriode();
    expect(aksjonspunktBehandler.props().allePerioder[0]).toEqual(expectedPerioder);
    expect(aksjonspunktBehandler.props().aksjonspunkter).toEqual(apEttLukketOgEttApent);
  });

  it('skal teste at Beregningsgrunnlag får korrekte props fra BeregningFP', () => {
    relevanteStatuser.skalViseBeregningsgrunnlag = true;
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 100000, 100000, 100)}
      alleKodeverk={{} as AlleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const beregningsgrunnlag = wrapper.find(Beregningsgrunnlag);
    expect(beregningsgrunnlag.props().relevanteStatuser).toBe(relevanteStatuser);
    const expectedPerioder = lagPeriode();
    expect(beregningsgrunnlag.props().allePerioder[0]).toEqual(expectedPerioder);
  });
  it('skal teste at Beregningsgrunnlag ikke blir vist', () => {
    relevanteStatuser.skalViseBeregningsgrunnlag = false;
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 100000, 100000, 100)}
      alleKodeverk={{} as AlleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const beregningsgrunnlag = wrapper.find(Beregningsgrunnlag);
    expect(beregningsgrunnlag).toHaveLength(0);
  });
  it('skal teste at BeregningForm rendrer riktige komponenter', () => {
    relevanteStatuser.skalViseBeregningsgrunnlag = false;
    const bg = lagBeregningsgrunnlag(0, 100000, 100000, 100);
    const wrapper = shallowWithIntl(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={bg as BeregningsgrunnlagProp}
      alleKodeverk={{} as AlleKodeverk}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />, messages);
    const avvikspanel = wrapper.find('AvviksopplysningerPanel');
    expect(avvikspanel).toHaveLength(1);
    const aksjonPunktPanel = wrapper.find(AksjonspunktBehandler);
    expect(aksjonPunktPanel).toHaveLength(1);
    const beregningsResultatPanel = wrapper.find(BeregningsresultatTable);
    expect(beregningsResultatPanel).toHaveLength(1);
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087 og 5039, samt varigEndring', () => {
    const values = {
      fellesVurdering: 'bbb',
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
      bruttoBeregningsgrunnlag: 240000,
      erVarigEndretNaering: true,
    };
    const aksjonspunkter = [apVurderDekningsgrad, apVurderVarigEndretEllerNyoppstartetSN];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkter, allPerioder);
    expect(result).toHaveLength(2);
    expect(result[0].kode).toBe('5087');
    expect(result[1].kode).toBe('5039');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087 og 5039, uten varigEndring', () => {
    const values = {
      fellesVurdering: 'bbb',
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
      bruttoBeregningsgrunnlag: 240000,
      erVarigEndretNaering: false,
    };
    const aksjonspunkter = [apVurderDekningsgrad, apVurderVarigEndretEllerNyoppstartetSN];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkter, allPerioder);
    expect(result).toHaveLength(2);
    expect(result[0].kode).toBe('5087');
    expect(result[1].kode).toBe('5039');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087 og 5049', () => {
    const values = {
      fellesVurdering: 'bbb',
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
      bruttoBeregningsgrunnlag: 240000,
    };
    const aksjonspunkter = [apVurderDekningsgrad, apFastsettBgSnNyIArbeidslivet];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkter, allPerioder);
    expect(result).toHaveLength(2);
    expect(result[0].kode).toBe('5087');
    expect(result[1].kode).toBe('5049');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087 og 5038', () => {
    const values = {
      fellesVurdering: 'bbb',
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
      bruttoBeregningsgrunnlag: 240000,
    };
    const aksjonspunkter = [apVurderDekningsgrad, apFastsettBgATFL];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkter, allPerioder);
    expect(result).toHaveLength(2);
    expect(result[0].kode).toBe('5087');
    expect(result[1].kode).toBe('5038');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087 og 5039', () => {
    const values = {
      fellesVurdering: 'bbb',
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
      bruttoBeregningsgrunnlag: 240000,
    };
    const aksjonspunkter = [apVurderDekningsgrad, apVurderVarigEndretEllerNyoppstartetSN];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkter, allPerioder);
    expect(result).toHaveLength(2);
    expect(result[0].kode).toBe('5087');
    expect(result[1].kode).toBe('5039');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5087', () => {
    const values = {
      begrunnDekningsgradEndring: 'aaa',
      dekningsgrad: 100,
    };
    const aksjonspunkt = [apVurderDekningsgrad];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkt, allPerioder);
    expect(result).toHaveLength(1);
    expect(result[0].kode).toBe('5087');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5039', () => {
    const values = {
      fellesVurdering: 'bbb',
      bruttoBeregningsgrunnlag: '240000',
    };
    const aksjonspunkt = [apVurderVarigEndretEllerNyoppstartetSN];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkt, allPerioder);
    expect(result).toHaveLength(1);
    expect(result[0].kode).toBe('5039');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5049', () => {
    const values = {
      fellesVurdering: 'bbb',
      bruttoBeregningsgrunnlag: '240000',
    };
    const aksjonspunkt = [apFastsettBgSnNyIArbeidslivet];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkt, allPerioder);
    expect(result).toHaveLength(1);
    expect(result[0].kode).toBe('5049');
  });
  it('skal teste at transformValues blir transformert riktig med aksjonspunkt 5038', () => {
    const values = {};
    const aksjonspunkt = [apFastsettBgATFL];
    const result = transformValues(values, relevanteStatuser, allAndeler, aksjonspunkt, allPerioder);
    expect(result).toHaveLength(1);
    expect(result[0].kode).toBe('5038');
  });
  it('skal teste buildInitialValues', () => {
    const gjeldendeAksjonspunkter = [apFastsettBgTidsbegrensetArbeidsforhold];
    const beregningsgrunnlag = lagBeregningsgrunnlag(0, 120000, 100000, 100);

    const actualValues = buildInitialValues.resultFunc(beregningsgrunnlag, gjeldendeAksjonspunkter);
    const expectedValues = {
      ATFLVurdering: undefined,
      undefined: '',
    };
    expect(actualValues).toEqual(expectedValues);
  });
});
