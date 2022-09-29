import React from 'react';

import { ProsessBeregningsgrunnlagAksjonspunktCode } from '@navikt/ft-prosess-beregningsgrunnlag';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import klageVurderingOmgjoerCodes from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import behandlingStatusCodes from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { KlageVurdering, KodeverkMedNavn, TotrinnskontrollAksjonspunkt } from '@fpsak-frontend/types';

import getAksjonspunkttekst from './aksjonspunktTekstUtleder';

const medholdIKlage = {
  klageVurdering: klageVurderingCodes.MEDHOLD_I_KLAGE,
  klageVurderingOmgjoer: klageVurderingOmgjoerCodes.GUNST_MEDHOLD_I_KLAGE,
};
const oppheveYtelsesVedtak = { klageVurdering: klageVurderingCodes.OPPHEVE_YTELSESVEDTAK };
const avvistKlage = { klageVurdering: klageVurderingCodes.AVVIS_KLAGE };
const behandlingStatusFVED = behandlingStatusCodes.FATTER_VEDTAK;
const stadfesteKlage = { klageVurdering: klageVurderingCodes.STADFESTE_YTELSESVEDTAK };

const arbeidsforholdHandlingTyper = [
  { kode: 'BRUK', navn: 'aaa', kodeverk: '' },
  { kode: 'NYTT_ARBEIDSFORHOLD', navn: 'bbb', kodeverk: '' },
  { kode: 'BRUK_UTEN_INNTEKTSMELDING', navn: 'ccc', kodeverk: '' },
  { kode: 'IKKE_BRUK', navn: 'ddd', kodeverk: '' },
  { kode: 'SLÅTT_SAMMEN_MED_ANNET', navn: 'eee', kodeverk: '' },
  { kode: 'LAGT_TIL_AV_SAKSBEHANDLER', navn: 'fff', kodeverk: '' },
];

const erTilbakekreving = false;

const behandlingStatus = behandlingStatusCodes.OPPRETTET;
const faktaOmBeregningTilfeller = {} as KodeverkMedNavn[];

describe('<aksjonspunktTekstUtleder>', () => {
  it('skal vise korrekt tekst for aksjonspunkt 5004', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5005', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VurderEktefellesBarn');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5006', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6004', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYR_ADOPSJONSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5008', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5011', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd');
  });

  it('skal vise korrekt tekst for aksjonspunkt 7002', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AUTO_VENT_PÅ_FODSELREGISTRERING,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.VurderSokersRelasjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5001', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.TERMINBEKREFTELSE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5027', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.SjekkManglendeFødsel');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6003', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYR_FODSELSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5014', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 engangsstønad', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(false, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 foreldrepenger', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5031', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5038', () => {
    const aksjonspunkt = {
      aksjonspunktKode: ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5042', () => {
    const aksjonspunkt = {
      aksjonspunktKode: ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6007', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYR_BEREGNING,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.VilkarOverstyrt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5047', () => {
    const aksjonspunkt = {
      aksjonspunktKode: ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5007', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.SOKNADSFRISTVILKARET,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5043', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6006', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYR_SOKNADSFRISTVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5021', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5019', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarLovligOpphold');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5020', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VurderSokerBosatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5023', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarOppholdsrett');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6005', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5081', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('TotrinnsForm.Uttak.AvklarManglendeUttaksperiode');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5039 varig endring', () => {
    const aksjonspunkt = {
      aksjonspunktKode: ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: true },
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.VarigEndring');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5039 ikkje varig endring', () => {
    const aksjonspunkt = {
      aksjonspunktKode: ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.IkkeVarigEndring');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_UTTAK,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_UTTAK,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_UTTAK,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeEndret');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.OverstyrUttak.PeriodeEndret');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AVKLAR_UTTAK,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
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
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });

  // Klage
  // Klage medhold
  it('skal vise korrekt tekst for aksjonspunkt 5035 medhold', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const klagebehandlingVurdering = {
      klageVurderingResultatNFP: medholdIKlage,
    } as KlageVurdering;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], [], false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OmgjortTilGunst');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5036 medhold', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const klagebehandlingVurdering = {
      klageVurderingResultatNK: medholdIKlage,
    } as KlageVurdering;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], faktaOmBeregningTilfeller, false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OmgjortTilGunst');
  });
  // Klage avslag
  // Ytelsesvedtak opphevet
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ytelsesvedtak opphevet', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNFP: oppheveYtelsesVedtak,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], faktaOmBeregningTilfeller, false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OppheveYtelsesVedtak');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5036 avslag ytelsesvedtak opphevet', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNK: oppheveYtelsesVedtak,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], faktaOmBeregningTilfeller, false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OppheveYtelsesVedtak');
  });
  // Klage avvist
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag klage avvist', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNFP: avvistKlage,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], [], false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.Avvist');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5036 avslag klage avvist', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNK: avvistKlage,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], [], false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.Avvist');
  });
  // Ikke fastsatt Engangsstønad
  it('skal vise korrekt tekst for aksjonspunkt 5036 avslag ikke fastsatt', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNFP: stadfesteKlage,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], [], false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5036 avslag ytelsesvedtak stadfestet', () => {
    const klagebehandlingVurdering = {
      klageVurderingResultatNK: stadfesteKlage,
    } as KlageVurdering;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], [], false, aksjonspunkt, klagebehandlingVurdering);
    // @ts-ignore
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5058 vurder tidsbegrenset', () => {
    const beregningTilfeller = [{
      kode: faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
      navn: 'Vurder tidsbegrenset arbeidsforhold',
      kodeverk: '',
    }];
    const beregningDto = { faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD] };
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(<div>Vurder tidsbegrenset arbeidsforhold</div>);
  });
  it('skal vise korrekt tekst for aksjonspunkt 5058 ATFL i samme org', () => {
    const beregningTilfeller = [{
      kode: faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
      navn: 'Vurder at og fl',
      kodeverk: '',
    }];
    const beregningDto = { faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON] };
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(<div>Vurder at og fl</div>);
  });
  it('skal vise korrekte tekster for kombinasjon av aksjonspunkt 5058', () => {
    const beregningTilfeller = [{
      kode: faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
      navn: 'Vurder besteberegning',
      kodeverk: '',
    }, {
      kode: faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
      navn: 'Vurder tidsbegrenset arbeidsforhold',
      kodeverk: '',
    }];
    const beregningDto = {
      faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_BESTEBEREGNING, faktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD],
    };
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, arbeidsforholdHandlingTyper, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(<div>Vurder besteberegning</div>);
    expect(message[1]).toEqual(<div>Vurder tidsbegrenset arbeidsforhold</div>);
  });
});
