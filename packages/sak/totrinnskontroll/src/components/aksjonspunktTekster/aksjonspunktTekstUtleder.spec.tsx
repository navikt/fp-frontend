import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  Behandlingsresultat,
  BehandlingStatus,
  FaktaOmBeregningTilfelle,
  KodeverkMedNavn,
  TotrinnskontrollAksjonspunkt,
} from '@navikt/fp-types';

import { getAksjonspunkttekst } from './aksjonspunktTekstUtleder';

const behandlingStatusFVED = 'FVED' satisfies BehandlingStatus;

const erTilbakekreving = false;

const behandlingStatus = 'OPPRE' satisfies BehandlingStatus;
const faktaOmBeregningTilfeller = {} as KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];

const defaultAksjonspunkt = {
  aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  opptjeningAktiviteter: [],
  besluttersBegrunnelse: 'begrunnelse',
  totrinnskontrollGodkjent: false,
  beregningDto: { fastsattVarigEndringNaering: false, faktaOmBeregningTilfeller: [] },
  vurderPaNyttArsaker: [],
  uttakPerioder: [],
} satisfies TotrinnskontrollAksjonspunkt;

describe('aksjonspunktTekstUtleder', () => {
  it('skal vise korrekt tekst for aksjonspunkt 7002', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.AUTO_VENT_PÅ_FØDSELREGISTRERING,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Fødsel.VurderSokersRelasjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5001', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Fødsel.SjekkTerminbekreftelse');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5027', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Fødsel.SjekkManglendeFødsel');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6003', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Fødsel.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5031', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.VurderTidligereUtbetaling');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5038', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5047', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5007', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5043', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6006', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Soknadsfrist.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5021', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.UTGÅTT_5021,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5019', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.UTGÅTT_5019,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarLovligOpphold');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5020', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.UTGÅTT_5020,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Medlemskap.VurderSokerBosatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5023', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.UTGÅTT_5023,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarOppholdsrett');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6005', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Medlemskap.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5039 varig endring', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE,
      beregningDto: {
        fastsattVarigEndringNaering: true,
      },
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Beregning.VarigEndring');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5039 ikkje varig endring', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE,

      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Beregning.IkkeVarigEndring');
  });

  it('skal vise korrekt tekst for aksjonspunkt 6008 slettet', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: true,
      erAvklart: false,
      erLagtTil: false,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      beregningDto: { fastsattVarigEndringNaering: false, faktaOmBeregningTilfeller: [] },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 slettet', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: true,
      erAvklart: false,
      erLagtTil: false,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
  });

  it('skal vise korrekt tekst for aksjonspunkt 6008 lagt til', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: true,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,

      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 lagt til', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: true,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,

      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
  });

  it('skal vise korrekt tekst for aksjonspunkt 6008 endret', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: false,
      erEndret: true,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,

      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.OverstyrUttak.PeriodeEndret');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 endret', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: false,
      erLagtTil: false,
      erEndret: true,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,

      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret');
  });

  it('skal vise korrekt tekst for aksjonspunkt 6008 avklart', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: true,
      erLagtTil: false,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5071 avklart', () => {
    const uttakPeriode = {
      fom: '2024-05-01',
      tom: '2025-01-20',
      erSlettet: false,
      erAvklart: true,
      erLagtTil: false,
      erEndret: false,
    };
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      beregningDto: {
        fastsattVarigEndringNaering: false,
      },
      uttakPerioder: [uttakPeriode],
    } satisfies TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(behandlingStatus, faktaOmBeregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });

  // Klage
  // Klage medhold
  it('skal vise korrekt tekst for aksjonspunkt 5035 medhold', () => {
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
    } satisfies TotrinnskontrollAksjonspunkt;
    const behandlingsresultat = {
      type: 'KLAGE_MEDHOLD',
    } as Behandlingsresultat;
    const message = getAksjonspunkttekst(behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Klage.OmgjortTilGunst');
  });
  // Klage avslag
  // Ytelsesvedtak opphevet
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ytelsesvedtak opphevet', () => {
    const behandlingsresultat = {
      type: 'KLAGE_YTELSESVEDTAK_OPPHEVET',
    } as Behandlingsresultat;
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      behandlingStatusFVED,
      faktaOmBeregningTilfeller,
      false,
      aksjonspunkt,
      behandlingsresultat,
    );
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Klage.OppheveYtelsesVedtak');
  });
  // Klage avvist
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag klage avvist', () => {
    const behandlingsresultat = {
      type: 'KLAGE_AVVIST',
    } as Behandlingsresultat;
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Klage.Avvist');
  });
  // Ikke fastsatt Engangsstønad
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ikke fastsatt', () => {
    const behandlingsresultat = {
      type: 'KLAGE_YTELSESVEDTAK_STADFESTET',
    } as Behandlingsresultat;
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ytelsesvedtak stadfestet', () => {
    const behandlingsresultat = {
      type: 'KLAGE_YTELSESVEDTAK_STADFESTET',
    } as Behandlingsresultat;
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP,
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0]!.props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5058 vurder tidsbegrenset', () => {
    const beregningTilfeller = [
      {
        kode: 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD',
        navn: 'Vurder tidsbegrenset arbeidsforhold',
        kodeverk: '',
      },
    ] satisfies KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      beregningDto: {
        faktaOmBeregningTilfeller: ['VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'],
      },
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!).toEqual(
      <div key="Vurder tidsbegrenset arbeidsforhold">Vurder tidsbegrenset arbeidsforhold</div>,
    );
  });
  it('skal vise korrekt tekst for aksjonspunkt 5058 ATFL i samme org', () => {
    const beregningTilfeller = [
      {
        kode: 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
        navn: 'Vurder at og fl',
        kodeverk: '',
      },
    ] satisfies KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];
    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      beregningDto: {
        faktaOmBeregningTilfeller: ['VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'],
      },
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!).toEqual(<div key="Vurder at og fl">Vurder at og fl</div>);
  });
  it('skal vise korrekte tekster for kombinasjon av aksjonspunkt 5058', () => {
    const beregningTilfeller = [
      {
        kode: 'VURDER_BESTEBEREGNING' satisfies FaktaOmBeregningTilfelle,
        navn: 'Vurder besteberegning',
        kodeverk: '',
      },
      {
        kode: 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD' satisfies FaktaOmBeregningTilfelle,
        navn: 'Vurder tidsbegrenset arbeidsforhold',
        kodeverk: '',
      },
    ] satisfies KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];

    const aksjonspunkt = {
      ...defaultAksjonspunkt,
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      beregningDto: {
        faktaOmBeregningTilfeller: ['VURDER_BESTEBEREGNING', 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'],
      },
    } satisfies TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]!).toEqual(<div key="Vurder besteberegning">Vurder besteberegning</div>);
    expect(message[1]!).toEqual(
      <div key="Vurder tidsbegrenset arbeidsforhold">Vurder tidsbegrenset arbeidsforhold</div>,
    );
  });
});
