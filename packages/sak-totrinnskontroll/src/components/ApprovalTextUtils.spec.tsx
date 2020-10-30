import { expect } from 'chai';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import arbeidsforholdHandlingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdHandlingType';
import getAksjonspunktText, { getFaktaOmArbeidsforholdMessages } from './ApprovalTextUtils';

const lagAksjonspunkt = (
  aksjonspunktKode: any, opptjeningAktiviteter: any, beregningDto: any,
  besluttersBegrunnelse: any, totrinnskontrollGodkjent: any,
  vurderPaNyttArsaker: any, status: any, uttakPerioder: any, arbeidforholdDtos: any,
) => ({
  aksjonspunktKode,
  opptjeningAktiviteter,
  beregningDto,
  besluttersBegrunnelse,
  totrinnskontrollGodkjent,
  vurderPaNyttArsaker,
  status,
  uttakPerioder,
  arbeidforholdDtos,
});

const arbeidsforholdHandlingTyper = [
  { kode: 'BRUK', navn: 'aaa' },
  { kode: 'NYTT_ARBEIDSFORHOLD', navn: 'bbb' },
  { kode: 'BRUK_UTEN_INNTEKTSMELDING', navn: 'ccc' },
  { kode: 'IKKE_BRUK', navn: 'ddd' },
  { kode: 'SLÅTT_SAMMEN_MED_ANNET', navn: 'eee' },
  { kode: 'LAGT_TIL_AV_SAKSBEHANDLER', navn: 'fff' },
];

describe('<ApprovalTextUtils>', () => {
  it('skal vise korrekt tekst for aksjonspunkt 5004', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.ADOPSJONSDOKUMENTAJON, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Adopsjon.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5005', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Adopsjon.VurderEktefellesBarn');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5006', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6004', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYR_ADOPSJONSVILKAR, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Adopsjon.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5008', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OMSORGSOVERTAKELSE, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5011', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd');
  });

  it('skal vise korrekt tekst for aksjonspunkt 7002', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AUTO_VENT_PÅ_FODSELREGISTRERING, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Fødsel.VurderSokersRelasjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5001', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.TERMINBEKREFTELSE, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5027', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Fødsel.SjekkManglendeFødsel');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6003', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYR_FODSELSVILKAR, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Fødsel.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5014', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 engangsstønad', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(false, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 foreldrepenger', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5031', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5038', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5042', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6007', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYR_BEREGNING, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.VilkarOverstyrt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5047', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.InntektFastsatt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5007', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.SOKNADSFRISTVILKARET, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5043', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6006', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Soknadsfrist.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5045', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.FastsettStartdato');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5021', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5019', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.AvklarLovligOpphold');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5020', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.VurderSokerBosatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5023', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_OPPHOLDSRETT, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.AvklarOppholdsrett');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6005', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Medlemskap.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5081', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO, undefined,
      undefined, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('TotrinnsForm.Uttak.AvklarManglendeUttaksperiode');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5039 varig endring', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, undefined,
      { fastsattVarigEndringNaering: true }, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.VarigEndring');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5039 ikkje varig endring', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', undefined,
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.Beregning.IkkeVarigEndring');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5070 slettet', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: true,
      erAvklart: false,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_UTTAK, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6008 slettet', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: true,
      erAvklart: false,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 slettet', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: true,
      erAvklart: false,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5070 lagt til', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: true,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_UTTAK, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6008 lagt til', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: true,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 lagt til', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: true,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5070 endret', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: false,
      erEndret: true,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_UTTAK, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeEndret');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6008 endret', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: false,
      erEndret: true,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.OverstyrUttak.PeriodeEndret');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 endret', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: false,
      erEndret: true,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5070 avklart', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: true,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.AVKLAR_UTTAK, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6008 avklart', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: true,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 avklart', () => {
    const uttakPeriode = {
      fom: '-',
      tom: '-',
      erSlettet: false,
      erAvklart: true,
      erLagtTil: false,
      erEndret: false,
    };
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 9 arguments, but got 8.
    const aksjonspunkt = lagAksjonspunkt(
      aksjonspunktCodes.FASTSETT_UTTAKPERIODER, undefined,
      { fastsattVarigEndringNaering: false }, 'begrunnelse', false, undefined, 'status', [uttakPeriode],
    );
    const message = getAksjonspunktText.resultFunc(true, null, null, null, null)(aksjonspunkt);
    expect(message[0].props.id).to.eql('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5080 når søker er i permisjon, skal kun vise tekst om permisjon', () => {
    const arbeidforholdDto = {
      arbeidsforholdHandlingType: { kode: arbeidsforholdHandlingType.BRUK },
      brukPermisjon: true,
    };
    const messages = getFaktaOmArbeidsforholdMessages(arbeidforholdDto, arbeidsforholdHandlingTyper);
    expect(messages).to.be.length(1);
    expect(messages[0].props.id).to.eql('ToTrinnsForm.FaktaOmArbeidsforhold.SoekerErIPermisjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5080 når søker ikke er i permisjon, skal ikke vise tekst for bruk', () => {
    const arbeidforholdDto = {
      arbeidsforholdHandlingType: { kode: arbeidsforholdHandlingType.BRUK },
      brukPermisjon: false,
    };
    const messages = getFaktaOmArbeidsforholdMessages(arbeidforholdDto, arbeidsforholdHandlingTyper);
    expect(messages).to.be.length(1);
    expect(messages[0].props.id).to.eql('ToTrinnsForm.FaktaOmArbeidsforhold.SoekerErIkkeIPermisjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5080 når søker ikke er i permisjon sammen med en annen handling som ikke er bruk', () => {
    const arbeidforholdDto = {
      arbeidsforholdHandlingType: { kode: arbeidsforholdHandlingType.BRUK_UTEN_INNTEKTSMELDING },
      brukPermisjon: false,
    };
    const messages = getFaktaOmArbeidsforholdMessages(arbeidforholdDto, arbeidsforholdHandlingTyper);
    expect(messages).to.be.length(2);
    expect(messages[0].props.id).to.eql('ToTrinnsForm.FaktaOmArbeidsforhold.SoekerErIkkeIPermisjon');
    expect(messages[1].props.id).to.eql('ToTrinnsForm.FaktaOmArbeidsforhold.Melding');
    expect(messages[1].props.values.melding).to.eql('ccc');
  });
});
