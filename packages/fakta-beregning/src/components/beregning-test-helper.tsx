import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

const behandlingFormName = 'behandling_1000051_v1';

export const getBehandlingFormName = () => behandlingFormName;

const kodeverk = {};
kodeverk[kodeverkTyper.AKTIVITET_STATUS] = [
  { kode: 'AT', navn: 'Arbeidstaker', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'FL', navn: 'Frilanser', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'TY', navn: 'Tilstøtende ytelse', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'SN', navn: 'Selvstendig næringsdrivende', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'AT_FL', navn: 'Kombinert arbeidstaker og frilanser', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'AT_SN', navn: 'Kombinert arbeidstaker og selvstendig næringsdrivende', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'FL_SN', navn: 'Kombinert frilanser og selvstendig næringsdrivende', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'AT_FL_SN', navn: 'Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'DP', navn: 'Dagpenger', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'AAP', navn: 'Arbeidsavklaringspenger', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'MS', navn: 'Militær eller sivil', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'KUN_YTELSE', navn: 'Kun ytelse', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
  { kode: 'VENTELØNN_VARTPENGER', navn: 'Ventelønn/vartpenger', kodeverk: kodeverkTyper.AKTIVITET_STATUS },
];

kodeverk[kodeverkTyper.INNTEKTSKATEGORI] = [
  { kode: 'ARBEIDSTAKER', navn: 'Arbeidstaker', kodeverk: kodeverkTyper.INNTEKTSKATEGORI },
  { kode: 'FRILANSER', navn: 'Frilanser', kodeverk: kodeverkTyper.INNTEKTSKATEGORI },
];

export const lagStateMedAksjonspunkterOgBeregningsgrunnlag = (aksjonspunkter, beregningsgrunnlag, formName = 'test', values = {}, initial = {}) => {
  const dataState = {};

  const state = {
    default: {
      // @ts-ignore
      ...dataState.default,
      fagsak: {
        selectedSaksnummer: '1',
      },
      forstegangOgRevurderingBehandling: {
        behandlingUuid: '1000051',
        kodeverk,
      },
      behandling: {
        behandlingInfoHolder: {},
      },
    },
    form: {},
  };
  state.form[behandlingFormName] = {
    [formName]: {
      values,
      initial,
    },
  };
  return state;
};
