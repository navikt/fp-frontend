import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { createBeregningTableData } from './BeregningsresultatTable';

const vilkaarBG = {
  vilkarStatus: vilkarUtfallType.IKKE_VURDERT,
  vilkarType: 'FP_VK_41',
};
const mockPeriode = () => ([{
  beregningsgrunnlagPeriodeFom: '2019-09-16',
  beregningsgrunnlagPeriodeTom: undefined,
  beregnetPrAar: 360000,
  bruttoPrAar: 360000,
  bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
  avkortetPrAar: 360000, // under 6G
  redusertPrAar: 340000, // redusert ved dekningsgrad 80
  dagsats: 1385,
  beregningsgrunnlagPrStatusOgAndel: [{
    aktivitetStatus: 'AT',
    avkortetPrAar: 360001,
    overstyrtPrAar: undefined,
    bruttoPrAar: 300001,
    redusertPrAar: 360001,
    erTilkommetAndel: false,
    lagtTilAvSaksbehandler: false,
    skalFastsetteGrunnlag: null,
    arbeidsforhold: null,
    bortfaltNaturalytelse: null,
  }],
  andelerLagtTilManueltIForrige: [],
  periodeAarsaker: [],

}]);

const flAndel = {
  aktivitetStatus: aktivitetStatus.FRILANSER,
  avkortetPrAar: 140250,
  bruttoPrAar: 140250,
  redusertPrAar: 140250,
  erTilkommetAndel: false,
  lagtTilAvSaksbehandler: false,
  skalFastsetteGrunnlag: false,
  overstyrtPrAar: undefined,
  arbeidsforhold: null,
  bortfaltNaturalytelse: null,
};

const grunnbelop = 99123;
const seksG = grunnbelop * 6;
describe('<BeregningsresultatTable>', () => {
  it('Skal teste at create table returnerer riktig data ved AT og dekningsgrad 80', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT'];
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(1);
      const { rowsAndeler, dagsatser, redusertRad } = periode;
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      const andelLabel = rowsAndeler[0].ledetekst;
      expect(andelLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.AT');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer riktig data ved AT vilkartype OPPFYLT', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 100;
    const aktivitetStatusList = ['AT'];
    vilkaarBG.vilkarStatus = vilkarUtfallType.OPPFYLT;
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].skalFastsetteGrunnlag = false;
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(1);
      const { rowsAndeler, dagsatser } = periode;
      const andelLabel = rowsAndeler[0].ledetekst;
      expect(andelLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer en at rad ved Brukers Andel', () => {
    vilkaarBG.vilkarStatus = vilkarUtfallType.IKKE_VURDERT;
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['BA'];
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = 'BA';
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(1);
      const { rowsAndeler, dagsatser, redusertRad } = periode;
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      const andelLabel = rowsAndeler[0].ledetekst;
      expect(andelLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.BA');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer returnerer riktig ved AT FL', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'FL'];
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      flAndel,
    );
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(2);
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const andelLabelFL = rowsAndeler[1].ledetekst;
      expect(andelLabelFL.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.FL');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(flAndel.bruttoPrAar));

      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer riktig ved AT < SN', () => {
    vilkaarBG.vilkarStatus = vilkarUtfallType.IKKE_VURDERT;
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'SN'];
    const snAndel = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      avkortetPrAar: 599985,
      bruttoPrAar: 754985,
      pgiSnitt: 754985,
      redusertPrAar: 554985,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(1);
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(1);
      const andelLabelSN = rowsAndeler[0].ledetekst;
      expect(andelLabelSN.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.SN');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(snAndel.bruttoPrAar));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer riktig ved AT > SN', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'SN'];
    const snAndel = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      bruttoPrAar: 254985,
      pgiSnitt: 254985,
      redusertPrAar: null,
      avkortetPrAar: null,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad, rowsForklaringer,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(1);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const forklaringLabel = rowsForklaringer[0];
      expect(forklaringLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAToverstigerSN');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer riktig data ved AT FL SN med redusert og avkortet', () => {
    vilkaarBG.vilkarStatus = vilkarUtfallType.OPPFYLT;
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = [
      aktivitetStatus.ARBEIDSTAKER,
      aktivitetStatus.FRILANSER,
      aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    ];
    const snAndel = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      avkortetPrAar: 599985,
      bruttoPrAar: 754985,
      pgiSnitt: 754985,
      redusertPrAar: 554985,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      flAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1330250;
    beregningsgrunnlagPerioder[0].avkortetPrAar = seksG;
    beregningsgrunnlagPerioder[0].redusertPrAar = 554985;
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );

    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad, avkortetRad,
      } = periode;
      expect(rowsAndeler.length).toBe(3);
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(redusertRad.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].redusertPrAar));
      expect(avkortetRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.Avkortet6g');
      expect(avkortetRad.verdi).toBe(formatCurrencyNoKr(seksG));
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const andelLabelFL = rowsAndeler[1].ledetekst;
      expect(andelLabelFL.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.FL');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(flAndel.bruttoPrAar));
      const andelLabelSN = rowsAndeler[2].ledetekst;
      expect(andelLabelSN.props.id).toBe('Beregningsgrunnlag.BeregningTable.Fastsatt.SN');
      expect(formatCurrencyNoKr(rowsAndeler[2].verdi)).toBe(formatCurrencyNoKr(snAndel.bruttoPrAar));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });

  it('Skal teste at create table returnerer riktig data ved AT FL > SN med redusert og avkortet', () => {
    vilkaarBG.vilkarStatus = vilkarUtfallType.OPPFYLT;
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = [
      aktivitetStatus.ARBEIDSTAKER,
      aktivitetStatus.FRILANSER,
      aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    ];
    const snAndel = {
      aktivitetStatus: aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      avkortetPrAar: 599985,
      bruttoPrAar: 154985,
      pgiSnitt: 154985,
      redusertPrAar: null,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    flAndel.bruttoPrAar = 596000;
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      flAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    snAndel.skalFastsetteGrunnlag = true;
    beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar = 1147342;
    beregningsgrunnlagPerioder[0].avkortetPrAar = seksG;
    beregningsgrunnlagPerioder[0].redusertPrAar = 479318;
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].bruttoPrAar = 551316;

    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad, avkortetRad, rowsForklaringer,
      } = periode;
      expect(rowsAndeler.length).toBe(2);
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(redusertRad.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].redusertPrAar));
      expect(avkortetRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.Avkortet6g');
      expect(avkortetRad.verdi).toBe(formatCurrencyNoKr(seksG));
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(551316));
      const andelLabelFL = rowsAndeler[1].ledetekst;
      expect(andelLabelFL.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.FL');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(flAndel.bruttoPrAar));
      const forklaringLabel = rowsForklaringer[0];
      expect(forklaringLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_FLoverstigerSN');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });

  it('Skal teste at create table returnerer riktig data ved DP FL SN', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = [
      'DP',
      'FL',
      'SN',
    ];

    const snAndel = {
      aktivitetStatus: 'SN',
      avkortetPrAar: 599985,
      bruttoPrAar: 754985,
      pgiSnitt: 754985,
      redusertPrAar: 554985,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };

    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      flAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].bruttoPrAar = 123000;
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[1].bruttoPrAar = 223000;
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = aktivitetStatus.DAGPENGER;
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );

    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, redusertRad,
      } = periode;
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(3);
      const andelLabelDP = rowsAndeler[1].ledetekst;
      expect(andelLabelDP.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.DP');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(123000));
      const andelLabelFL = rowsAndeler[0].ledetekst;
      expect(andelLabelFL.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.FL');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(223000));
      const andelLabelSN = rowsAndeler[2].ledetekst;
      expect(andelLabelSN.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.SN');
      expect(formatCurrencyNoKr(rowsAndeler[2].verdi)).toBe(formatCurrencyNoKr(snAndel.pgiSnitt));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });

  it('Skal teste at create table returnerer riktig data ved DP + FL > SN', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = [
      'DP',
      'FL',
      'SN',
    ];

    const snAndel = {
      aktivitetStatus: 'SN',
      avkortetPrAar: 360003,
      bruttoPrAar: 300003,
      pgiSnitt: 300033,
      redusertPrAar: 360003,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      flAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].aktivitetStatus = aktivitetStatus.DAGPENGER;
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );

    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, redusertRad, rowsForklaringer,
      } = periode;
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelFL = rowsAndeler[0].ledetekst;
      expect(andelLabelFL.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.FL');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(flAndel.bruttoPrAar));
      const forklaringLabel = rowsForklaringer[0];
      expect(forklaringLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringDP_FLoverstigerSN');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });

  it('Skal teste at create table returnerer riktig data ved AT + DP > SN', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = [
      'AT',
      'DP',
      'SN',
    ];
    const dpAndel = {
      aktivitetStatus: 'DP',
      avkortetPrAar: 360002,
      bruttoPrAar: 300002,
      redusertPrAar: 360002,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    const snAndel = {
      aktivitetStatus: 'SN',
      avkortetPrAar: 360003,
      bruttoPrAar: 300003,
      pgiSnitt: 300033,
      redusertPrAar: 360003,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      dpAndel,
    );
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      snAndel,
    );
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      const {
        rowsAndeler, dagsatser, redusertRad, rowsForklaringer,
      } = periode;
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const forklaringLabel = rowsForklaringer[0];
      expect(forklaringLabel.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_DPoverstigerSN');
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer returnerer riktig ved AT AAP', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'AAP'];
    const aapAndel = {
      aktivitetStatus: 'AAP',
      avkortetPrAar: 360003,
      bruttoPrAar: 300003,
      pgiSnitt: 300033,
      redusertPrAar: 360003,
      erTilkommetAndel: false,
      lagtTilAvSaksbehandler: false,
      skalFastsetteGrunnlag: false,
      overstyrtPrAar: undefined,
      arbeidsforhold: null,
      bortfaltNaturalytelse: null,
    };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel.push(
      aapAndel,
    );
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(2);
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const andelLabelAAP = rowsAndeler[1].ledetekst;
      expect(andelLabelAAP.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AAP');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(aapAndel.bruttoPrAar));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer returnerer riktig ved AT med naturalytelse', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'AAP'];
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].arbeidsforhold = { naturalytelseBortfaltPrÅr: 48000 };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].bortfaltNaturalytelse = 48000;
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(2);
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const andelLabelAAP = rowsAndeler[1].ledetekst;
      expect(andelLabelAAP.props.id).toBe('Beregningsgrunnlag.BeregningTable.Naturalytelser');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(48000));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at flere perioder med årsak som ikke skal vises fører til at første periode vises', () => {
    const beregningsgrunnlagPerioder = mockPeriode();
    const dekningsgrad = 80;
    const aktivitetStatusList = ['AT', 'AAP'];
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].arbeidsforhold = { naturalytelseBortfaltPrÅr: 48000 };
    beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel[0].bortfaltNaturalytelse = 48000;
    beregningsgrunnlagPerioder[0].periodeAarsaker.push({
      kode: periodeAarsak.ENDRING_I_REFUSJONSKRAV,
    });
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      null,
    );
    selectorData.forEach((periode) => {
      expect(periode.rowsAndeler.length).toBe(2);
      const {
        rowsAndeler, dagsatser, bruttoRad, redusertRad,
      } = periode;
      expect(bruttoRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.BruttoTotalt');
      expect(bruttoRad.verdi).toBe(
        formatCurrencyNoKr(beregningsgrunnlagPerioder[0].bruttoInkludertBortfaltNaturalytelsePrAar),
      );
      expect(redusertRad.ledetekst.props.id).toBe('Beregningsgrunnlag.BeregningTable.RedusertProsent');
      expect(redusertRad.ledetekst.props.values.redusert).toBe(dekningsgrad);
      expect(rowsAndeler.length).toBe(2);
      const andelLabelAT = rowsAndeler[0].ledetekst;
      expect(andelLabelAT.props.id).toBe('Beregningsgrunnlag.BeregningTable.Omberegnet.AT');
      expect(formatCurrencyNoKr(rowsAndeler[0].verdi)).toBe(formatCurrencyNoKr(300001));
      const andelLabelAAP = rowsAndeler[1].ledetekst;
      expect(andelLabelAAP.props.id).toBe('Beregningsgrunnlag.BeregningTable.Naturalytelser');
      expect(formatCurrencyNoKr(rowsAndeler[1].verdi)).toBe(formatCurrencyNoKr(48000));
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(beregningsgrunnlagPerioder[0].dagsats));
    });
  });
  it('Skal teste at create table returnerer riktig dagsats når svp-grunnlag', () => {
    const beregningsgrunnlagPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-09-16',
        beregningsgrunnlagPeriodeTom: undefined,
        beregnetPrAar: 360000,
        bruttoPrAar: 360000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 360000,
        avkortetPrAar: 360000,
        redusertPrAar: 360000,
        dagsats: 0,
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'AT',
            avkortetPrAar: 360000,
            overstyrtPrAar: undefined,
            bruttoPrAar: 300001,
            redusertPrAar: 360001,
            erTilkommetAndel: false,
            lagtTilAvSaksbehandler: false,
          },
        ],
        andelerLagtTilManueltIForrige: [],
        periodeAarsaker: [],
      },
    ];
    const dekningsgrad = 100;
    const aktivitetStatusList = ['AT'];
    const ytelseGrunnlag = { ytelsetype: 'SVP' };
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      ytelseGrunnlag,
    );
    selectorData.forEach((periode) => {
      const { dagsatser } = periode;
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(1385));
    });
  });
  it('Skal teste at create table returnerer riktig dagsats når svp-grunnlag og brutto over 6G', () => {
    const beregningsgrunnlagPerioder = [
      {
        beregningsgrunnlagPeriodeFom: '2019-09-16',
        beregningsgrunnlagPeriodeTom: undefined,
        beregnetPrAar: 800000,
        bruttoPrAar: 800000,
        bruttoInkludertBortfaltNaturalytelsePrAar: 800000,
        avkortetPrAar: 594738,
        redusertPrAar: 800000,
        dagsats: 0,
        beregningsgrunnlagPrStatusOgAndel: [
          {
            aktivitetStatus: 'AT',
            avkortetPrAar: 594738,
            overstyrtPrAar: undefined,
            bruttoPrAar: 800000,
            redusertPrAar: 200852,
            erTilkommetAndel: false,
            lagtTilAvSaksbehandler: false,
          },
        ],
        andelerLagtTilManueltIForrige: [],
        periodeAarsaker: [],
      },
    ];
    const dekningsgrad = 100;
    const aktivitetStatusList = ['AT'];
    const ytelseGrunnlag = { ytelsetype: 'SVP' };
    const selectorData = createBeregningTableData.resultFunc(
      beregningsgrunnlagPerioder,
      aktivitetStatusList,
      dekningsgrad,
      grunnbelop,
      vilkaarBG.vilkarStatus,
      ytelseGrunnlag,
    );
    selectorData.forEach((periode) => {
      const { dagsatser } = periode;
      expect(dagsatser.verdi).toBe(formatCurrencyNoKr(2287));
    });
  });
});
