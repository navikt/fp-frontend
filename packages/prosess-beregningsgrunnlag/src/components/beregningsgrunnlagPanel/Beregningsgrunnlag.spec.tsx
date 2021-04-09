import React from 'react';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import Beregningsgrunnlag, { TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING } from './Beregningsgrunnlag';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import GrunnlagForAarsinntektPanelFL from '../frilanser/GrunnlagForAarsinntektPanelFL';
import GrunnlagForAarsinntektPanelSN from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';

import TilstotendeYtelser from '../tilstotendeYtelser/TilstotendeYtelser';
import YtelserFraInfotrygd from '../tilstotendeYtelser/YtelserFraInfotrygd';
import MilitaerPanel from '../militar/MilitaerPanel';
import messages from '../../../i18n/nb_NO.json';

const arbeidstakerAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSTAKER,
    kodeverk: 'test',
  },
  beregnetPrAar: 100000,
  overstyrtPrAar: 150000,
  beregningsperiodeFom: '2014-01-01',
  beregningsperiodeTom: '2015-01-01',
};

const frilanserAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.FRILANSER,
    kodeverk: 'test',
  },
  beregnetPrAar: 200000,
  overstyrtPrAar: 250000,
  beregningsperiodeFom: '2015-01-01',
  beregningsperiodeTom: '2016-01-01',

};
const tyAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.KUN_YTELSE,
    kodeverk: 'test',
  },
  beregnetPrAar: 300000,
  beregningsperiodeFom: '2016-01-01',
  beregningsperiodeTom: '2017-01-01',
};
const dagpengerAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.DAGPENGER,
    kodeverk: 'test',
  },
  beregnetPrAar: 300000,
  beregningsperiodeFom: '2016-01-01',
  beregningsperiodeTom: '2017-01-01',
};
const aapAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.ARBEIDSAVKLARINGSPENGER,
    kodeverk: 'test',
  },
  beregnetPrAar: 300000,
  beregningsperiodeFom: '2016-01-01',
  beregningsperiodeTom: '2017-01-01',
};
const militaerAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.MILITAER_ELLER_SIVIL,
    kodeverk: 'test',
  },
  beregnetPrAar: 300000,
};
const lagPerioderMedAndeler = (andelListe) => ([{
  bruttoPrAar: 200000,
  periodeAarsaker: [{
    kode: periodeAarsak.UDEFINERT,
    kodeverk: 'test',
  }],
  beregningsgrunnlagPrStatusOgAndel: andelListe,
}]);

const selvstedigNaeringsdrivendeAndel = {
  aktivitetStatus: {
    kode: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'test',
  },
  elementNavn: 'pensjonsgivende inntekt',
  beregnetPrAar: 300000,
  overstyrtPrAar: 350000,
  beregningsperiodeFom: '2016-01-01',
  beregningsperiodeTom: '2017-01-01',
};
const atflAksjonspunkt = {
  id: 55,
  erAktivt: true,
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    kodeverk: 'Fastsett varig brutto beregning ATFL',
  },
  toTrinnsBehandling: false,
  status: {
    kode: 'OPPR',
    kodeverk: 'Opprettet',
  },
  begrunnelse: 'begrunnelse arbeidstaker/frilans',
  vilkarType: null,
  kanLoses: true,
};
const selvstendigAksjonspunkt = {
  id: 55,
  erAktivt: true,
  definisjon: {
    kode: aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    kodeverk: 'Fastsett varig brutto beregning SN',
  },
  toTrinnsBehandling: false,
  status: {
    kode: 'OPPR',
    kodeverk: 'Opprettet',
  },
  begrunnelse: 'begrunnelse selvstendig',
  vilkarType: null,
  kanLoses: true,
};
const selvstendigNyIArbAksjonspunkt = {
  id: 55,
  erAktivt: true,
  definisjon: {
    kode: aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
    kodeverk: 'Fastsett varig brutto beregning SN',
  },
  toTrinnsBehandling: false,
  status: {
    kode: 'OPPR',
    kodeverk: 'Opprettet',
  },
  begrunnelse: 'begrunnelse selvstendig',
  vilkarType: null,
  kanLoses: true,
};
const vurderAksjonspunktDekningsgrad = {
  id: 56,
  erAktivt: true,
  definisjon: {
    kode: aksjonspunktCodes.VURDER_DEKNINGSGRAD,
    kodeverk: 'Vurder Dekningsgrad',
  },
  toTrinnsBehandling: false,
  status: {
    kode: 'OPPR',
    kodeverk: 'Opprettet',
  },
  begrunnelse: 'begrunnelse dekningsgrad',
  vilkarType: null,
  kanLoses: true,
};

describe('<Beregningsgrunnlag>', () => {
  it('Skal teste at korrekte komponenter vises for arbeidstaker uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([arbeidstakerAndel])}
      relevanteStatuser={{ isArbeidstaker: true, isKombinasjonsstatus: true } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const atPanel = wrapper.find(GrunnlagForAarsinntektPanelAT);
    expect(atPanel).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
    expect(atPanel.props().alleAndelerIFørstePeriode[0]).toBe(arbeidstakerAndel);
  });
  it('Skal teste at korrekte komponenter vises for frilanser uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([frilanserAndel])}
      relevanteStatuser={{ isFrilanser: true, isKombinasjonsstatus: true } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const flPanel = wrapper.find(GrunnlagForAarsinntektPanelFL);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(flPanel).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
    expect(flPanel.props().alleAndeler[0]).toBe(frilanserAndel);
  });
  it('Skal teste at korrekte komponenter vises for selvstendig næringsdrivende uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel])}
      relevanteStatuser={{ isSelvstendigNaeringsdrivende: true } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const snPanel = wrapper.find(GrunnlagForAarsinntektPanelSN);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(snPanel).toHaveLength(1);
    expect(snPanel.props().alleAndeler[0]).toBe(selvstedigNaeringsdrivendeAndel);
  });
  it('Skal teste at korrekte komponenter vises for selvstendig næringsdrivende med NyIArbeidslivet aksjonspunkt', () => {
    const ap = [selvstendigNyIArbAksjonspunkt as Aksjonspunkt];
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel])}
      gjeldendeAksjonspunkter={ap}
      relevanteStatuser={{ isSelvstendigNaeringsdrivende: true } as RelevanteStatuserProp}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    const snPanel = wrapper.find(GrunnlagForAarsinntektPanelSN);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(snPanel).toHaveLength(1);

    expect(snPanel.props().alleAndeler[0]).toBe(selvstedigNaeringsdrivendeAndel);
  });
  it('Skal teste at korrekte komponenter vises for selvstendig næringsdrivende / arbeidstaker med aksjonspunkt', () => {
    const ap = [selvstendigAksjonspunkt as Aksjonspunkt];
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      gjeldendeAksjonspunkter={ap}
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel, arbeidstakerAndel])}
      relevanteStatuser={{ isArbeidstaker: true, isSelvstendigNaeringsdrivende: true, isKombinasjonsstatus: true } as RelevanteStatuserProp}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(1);
  });
  it('Skal teste at korrekte komponenter vises for selvstendig næringsdrivende / frilanser uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel, frilanserAndel])}
      relevanteStatuser={{
        isFrilanser: true,
        isSelvstendigNaeringsdrivende: true,
        isKombinasjonsstatus: true,
      } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(1);
  });
  it('Skal teste at korrekte komponenter vises for arbeidstaker / frilanser med aksjonspunkt', () => {
    const ap = [atflAksjonspunkt as Aksjonspunkt];
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel, frilanserAndel])}
      gjeldendeAksjonspunkter={ap}
      relevanteStatuser={{
        isArbeidstaker: true,
        isFrilanser: true,
        isKombinasjonsstatus: true,
      } as RelevanteStatuserProp}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
  });
  it('Skal teste at korrekte komponenter vises for arbeidstaker / frilanser / selvstendig næringsdrivende med aksjonspunkt', () => {
    const ap = [selvstendigAksjonspunkt];
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([selvstedigNaeringsdrivendeAndel, frilanserAndel, arbeidstakerAndel])}
      gjeldendeAksjonspunkter={ap}
      relevanteStatuser={{
        isArbeidstaker: true,
        isFrilanser: true,
        isSelvstendigNaeringsdrivende: true,
        isKombinasjonsstatus: true,
      } as RelevanteStatuserProp}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(1);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(1);
  });
  it('Skal teste at korrekte komponenter vises for dagpenger / aap uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([aapAndel, dagpengerAndel])}
      gjeldendeAksjonspunkter={[]}
      relevanteStatuser={{ harDagpengerEllerAAP: true, isKombinasjonsstatus: false, isSelvstendigNaeringsdrivende: false } as RelevanteStatuserProp}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
    expect(wrapper.find(TilstotendeYtelser)).toHaveLength(1);

    const ytelsePanel = wrapper.find(TilstotendeYtelser);
    expect(ytelsePanel.props().gjelderBesteberegning).toBe(false);
  });
  it('Skal teste at korrekte komponenter vises for andre tilstøtende ytelser uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([tyAndel])}
      relevanteStatuser={{ harDagpengerEllerAAP: false, isKombinasjonsstatus: false, harAndreTilstotendeYtelser: true } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
    expect(wrapper.find(TilstotendeYtelser)).toHaveLength(0);
    expect(wrapper.find(YtelserFraInfotrygd)).toHaveLength(1);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(0);
  });
  it('Skal teste at korrekte komponenter vises for militær uten aksjonspunkt', () => {
    const wrapper = shallowWithIntl(<Beregningsgrunnlag
      readOnly
      allePerioder={lagPerioderMedAndeler([militaerAndel])}
      relevanteStatuser={{ isMilitaer: true } as RelevanteStatuserProp}
      gjeldendeAksjonspunkter={[]}
      gjelderBesteberegning={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={{}}
    />, messages);
    expect(wrapper.find(GrunnlagForAarsinntektPanelAT)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelFL)).toHaveLength(0);
    expect(wrapper.find(GrunnlagForAarsinntektPanelSN)).toHaveLength(0);
    expect(wrapper.find(TilstotendeYtelser)).toHaveLength(0);
    expect(wrapper.find(YtelserFraInfotrygd)).toHaveLength(0);
    expect(wrapper.find(MilitaerPanel)).toHaveLength(1);
  });
  it('Skal teste buildInitialValues med ATFL og vurderDekningsgrad aksjonspunkt', () => {
    const aksjonspunkter = [vurderAksjonspunktDekningsgrad, atflAksjonspunkt];
    const values = Beregningsgrunnlag.buildInitialValues(aksjonspunkter);
    expect(values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]).toBe('begrunnelse dekningsgrad');
    expect(values.ATFLVurdering).toBe('begrunnelse arbeidstaker/frilans');
  });
  it('Skal teste buildInitialValues uten aksjonspunkter', () => {
    const aksjonspunkter = [];
    const values = Beregningsgrunnlag.buildInitialValues(aksjonspunkter);
    expect(values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]).toBe('');
    expect(values.ATFLVurdering).toBe('');
  });
  it('Skal teste at transformValues gir forventet resultat', () => {
    const values = {
      ATFLVurdering: 'aaa',
      inntektFrilanser: '100',
    };
    const transformedValues = Beregningsgrunnlag.transformATFLTidsbegrensetValues(values, []);
    expect(transformedValues.kode).toBe('5047');
    expect(transformedValues.begrunnelse).toBe('aaa');
    expect(transformedValues.fastsatteTidsbegrensedePerioder).toHaveLength(0);
    expect(transformedValues.frilansInntekt).toBe(100);
  });
  it('Skal teste at transformValues gir forventet resultat med inntekt undefined', () => {
    const values = {
      ATFLVurdering: 'aaa',
      inntektFrilanser: null,
    };
    const transformedValues = Beregningsgrunnlag.transformATFLTidsbegrensetValues(values, []);
    expect(transformedValues.kode).toBe('5047');
    expect(transformedValues.begrunnelse).toBe('aaa');
    expect(transformedValues.fastsatteTidsbegrensedePerioder).toHaveLength(0);
    expect(transformedValues.frilansInntekt).toBe(null);
  });
});
