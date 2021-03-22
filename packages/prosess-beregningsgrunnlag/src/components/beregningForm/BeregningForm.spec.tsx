import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme/build';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import shallowWithIntl from '@fpsak-frontend/prosess-vedtak/i18n/intl-enzyme-test-helper-prosess-vedtak';
import {
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  SammenligningsgrunlagProp,
} from '@fpsak-frontend/types';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import { BeregningFormImpl, transformValues, buildInitialValues } from './BeregningForm';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel2 from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import AksjonspunktBehandler from '../fellesPaneler/AksjonspunktBehandler';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';

const apVurderDekningsgrad = {
  definisjon: {
    kode: aksjonspunktCodes.VURDER_DEKNINGSGRAD,
    kodeverk: 'test',
    navn: 'apNavn2',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
    navn: 'statusNavn2',
  },
  kanLoses: true,
  erAktivt: true,
};
const apFastsettBgATFL = {
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    kodeverk: 'test',
    navn: 'apNavn1',
  },
  status: {
    kode: 'UTFO',
    kodeverk: 'test',
    navn: 'statusNavn1',
  },
  kanLoses: false,
  erAktivt: false,
};

const apVurderVarigEndretEllerNyoppstartetSN = {
  definisjon: {
    kode: aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'test',
    navn: 'apNavn3',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
    navn: 'statusNavn3',
  },
  kanLoses: true,
  erAktivt: true,
};

const apFastsettBgSnNyIArbeidslivet = {
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
    kodeverk: 'test',
    navn: 'apNavn4',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
    navn: 'statusNavn4',
  },
  kanLoses: true,
  erAktivt: true,
};
const apFastsettBgTidsbegrensetArbeidsforhold = {
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
    kodeverk: 'test',
  },
  status: {
    kode: 'OPPR',
    kodeverk: 'test',
  },
  kanLoses: true,
  erAktivt: true,
};

const apEttLukketOgEttApent = [apFastsettBgATFL, apVurderDekningsgrad];

const allAndeler = [{
  aktivitetStatus: {
    kode: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'test',
  },
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

const lagPeriode = () => ({
  beregningsgrunnlagPeriodeFom: '2019-09-16',
  beregningsgrunnlagPeriodeTom: undefined,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000,
  redusertPrAar: 360000,
  beregningsgrunnlagPrStatusOgAndel: [{
    aktivitetStatus: {
      kode: 'AT',
      kodeverk: 'AKTIVITET_STATUS',
    },
  }],
  andelerLagtTilManueltIForrige: [],
});
const lagBeregningsgrunnlag = (avvikPromille, årsinntektVisningstall,
  sammenligningSum, dekningsgrad) => ({
  beregningsgrunnlagPeriode: [lagPeriode()],
  skjaeringstidspunktBeregning: '2019-10-31',
  sammenligningsgrunnlagPrStatus: null,
  sammenligningsgrunnlag: {
    sammenligningsgrunnlagFom: '2018-09-01',
    sammenligningsgrunnlagTom: '2019-10-31',
    avvikProsent: 27.5,
    sammenligningsgrunnlagType: {
      kode: 'SAMMENLIGNING_AT',
      kodeverk: 'test',
    },
    differanseBeregnet: 12100,
    rapportertPrAar: sammenligningSum,
    avvikPromille,
  },
  dekningsgrad,
  årsinntektVisningstall,
  aktivitetStatus: [{
    kode: 'UDEFINERT',
    kodeverk: 'test',
  }],
});
const mockVilkar = [{
  vilkarType: {
    kode: 'FP_VK_41',
    kodeverk: 'test',
  },
  vilkarStatus: {
    kode: vilkarUtfallType.OPPFYLT,
  },
}];
const sammenligningsgrunnlag = (kode) => ({
  sammenligningsgrunnlagFom: '2018-09-01',
  sammenligningsgrunnlagTom: '2019-10-31',
  rapportertPrAar: 330000,
  avvikPromille: 275,
  avvikProsent: 27.5,
  sammenligningsgrunnlagType: {
    kode,
    kodeverk: 'test',
  },
  differanseBeregnet: 12100,
});

const getBGVilkar = (vilkar) => (vilkar ? vilkar.find((v) => v.vilkarType && v.vilkarType.kode === vilkarType.BEREGNINGSGRUNNLAGVILKARET) : undefined);
describe('<BeregningForm>', () => {
  it('skal teste at AvviksopplysningerPanel får korrekte props fra BeregningFP', () => {
    const beregningsgrunnlag = lagBeregningsgrunnlag(0, 100000, 100000, 100);
    const sammenligningsgrunnlagPrStatus = sammenligningsgrunnlag('SAMMENLIGNING_ATFL_SN');
    beregningsgrunnlag.sammenligningsgrunnlagPrStatus = [sammenligningsgrunnlagPrStatus as SammenligningsgrunlagProp];
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      beregningsgrunnlag={beregningsgrunnlag}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const avvikPanel = wrapper.find(AvviksopplysningerPanel);
    expect(avvikPanel.props().harAksjonspunkter).toBe(true);
    expect(avvikPanel.props().gjelderBesteberegning).toBe(false);
    expect(avvikPanel.props().sammenligningsgrunnlagPrStatus[0]).toBe(sammenligningsgrunnlagPrStatus);
    expect(avvikPanel.props().relevanteStatuser).toBe(relevanteStatuser);
    const expectedPerioder = lagPeriode();
    expect(avvikPanel.props().allePerioder[0]).toEqual(expectedPerioder);
  });
  it('skal teste at AksjonspunktHjelp rendrer fra BeregningFP', () => {
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 120000, 100000, 100)}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const aksjonspunktHelpTextHTML = wrapper.find(AksjonspunktHelpTextHTML);
    expect(aksjonspunktHelpTextHTML.length).toBe(1);
  });
  it('skal teste at SkjeringspunktOgStatusPanel får korrekte props fra BeregningFP', () => {
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 120000, 100000, 100)}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
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
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const aksjonspunktBehandler = wrapper.find(AksjonspunktBehandler);
    expect(aksjonspunktBehandler.props().readOnly).toBe(false);
    expect(aksjonspunktBehandler.props().tidsBegrensetInntekt).toBe(false);
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
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
    const beregningsgrunnlag = wrapper.find(Beregningsgrunnlag);
    expect(beregningsgrunnlag.props().relevanteStatuser).toBe(relevanteStatuser);
    expect(beregningsgrunnlag.props().readOnly).toBe(false);
    expect(beregningsgrunnlag.props().gjeldendeAksjonspunkter).toBe(apEttLukketOgEttApent);
    const expectedPerioder = lagPeriode();
    expect(beregningsgrunnlag.props().allePerioder[0]).toEqual(expectedPerioder);
  });

  it('skal teste at Beregningsgrunnlag ikke blir vist', () => {
    relevanteStatuser.skalViseBeregningsgrunnlag = false;
    const wrapper = shallow(<BeregningFormImpl
      readOnly={false}
      gjeldendeAksjonspunkter={apEttLukketOgEttApent}
      beregningsgrunnlag={lagBeregningsgrunnlag(0, 100000, 100000, 100)}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
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
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={{}}
      relevanteStatuser={relevanteStatuser as RelevanteStatuserProp}
      submitCallback={sinon.spy}
      readOnlySubmitButton
      vilkaarBG={getBGVilkar(mockVilkar)}
      arbeidsgiverOpplysningerPerId={{}}
      {...reduxFormPropsMock}
    />);
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
      begrunnDekningsgradEndring: '',
      undefined: '',
      dekningsgrad: undefined,
    };
    expect(actualValues).toEqual(expectedValues);
  });
});
