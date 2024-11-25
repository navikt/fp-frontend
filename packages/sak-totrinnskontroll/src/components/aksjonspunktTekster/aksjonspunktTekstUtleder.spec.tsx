import React from 'react';

import {
  AksjonspunktKode,
  BehandlingStatus,
  FaktaOmBeregningTilfelle,
  BehandlingResultatType,
} from '@navikt/fp-kodeverk';
import { Behandlingsresultat, KodeverkMedNavn, TotrinnskontrollAksjonspunkt } from '@navikt/fp-types';

import { getAksjonspunkttekst } from './aksjonspunktTekstUtleder';

const behandlingStatusFVED = BehandlingStatus.FATTER_VEDTAK;

const erTilbakekreving = false;

const behandlingStatus = BehandlingStatus.OPPRETTET;
const faktaOmBeregningTilfeller = {} as KodeverkMedNavn[];

describe('<aksjonspunktTekstUtleder>', () => {
  it('skal vise korrekt tekst for aksjonspunkt 5004', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5005', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VurderEktefellesBarn');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5006', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6004', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Adopsjon.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5008', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OMSORGSOVERTAKELSE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5011', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd');
  });

  it('skal vise korrekt tekst for aksjonspunkt 7002', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AUTO_VENT_PÅ_FODSELREGISTRERING,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.VurderSokersRelasjon');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5001', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.TERMINBEKREFTELSE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5027', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.SjekkManglendeFødsel');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6003', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Fødsel.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5014', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 engangsstønad', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      false,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddES');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5013 foreldrepenger', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarAndreLeddFP');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5031', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5038', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6007', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OVERSTYR_BEREGNING,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.VilkarOverstyrt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5047', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.InntektFastsatt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5007', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.SOKNADSFRISTVILKARET,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5043', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.ManueltVurdert');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6006', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Soknadsfrist.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5021', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5019', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarLovligOpphold');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5020', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AVKLAR_OM_BRUKER_ER_BOSATT,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VurderSokerBosatt');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5023', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.AVKLAR_OPPHOLDSRETT,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.AvklarOppholdsrett');
  });
  it('skal vise korrekt tekst for aksjonspunkt 6005', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Medlemskap.VilkarOverstyrt');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5039 varig endring', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: true },
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.VarigEndring');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5039 ikkje varig endring', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Beregning.IkkeVarigEndring');
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
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
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
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeSlettet');
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
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
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
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeLagtTil');
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
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
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
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.ManueltFastsattUttak.PeriodeEndret');
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
      aksjonspunktKode: AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
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
      aksjonspunktKode: AksjonspunktKode.FASTSETT_UTTAKPERIODER,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto: { fastsattVarigEndringNaering: false },
      uttakPerioder: [uttakPeriode],
    } as TotrinnskontrollAksjonspunkt;

    const message = getAksjonspunkttekst(
      true,
      behandlingStatus,
      faktaOmBeregningTilfeller,
      erTilbakekreving,
      aksjonspunkt,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.AvklarUttak.PeriodeAvklart');
  });

  // Klage
  // Klage medhold
  it('skal vise korrekt tekst for aksjonspunkt 5035 medhold', () => {
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const behandlingsresultat = {
      type: BehandlingResultatType.KLAGE_MEDHOLD,
    } as Behandlingsresultat;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OmgjortTilGunst');
  });
  // Klage avslag
  // Ytelsesvedtak opphevet
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ytelsesvedtak opphevet', () => {
    const behandlingsresultat = {
      type: BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET,
    } as Behandlingsresultat;
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(
      true,
      behandlingStatusFVED,
      faktaOmBeregningTilfeller,
      false,
      aksjonspunkt,
      behandlingsresultat,
    );
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.OppheveYtelsesVedtak');
  });
  // Klage avvist
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag klage avvist', () => {
    const behandlingsresultat = {
      type: BehandlingResultatType.KLAGE_AVVIST,
    } as Behandlingsresultat;
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.Avvist');
  });
  // Ikke fastsatt Engangsstønad
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ikke fastsatt', () => {
    const behandlingsresultat = {
      type: BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
    } as Behandlingsresultat;
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });
  it('skal vise korrekt tekst for aksjonspunkt 5035 avslag ytelsesvedtak stadfestet', () => {
    const behandlingsresultat = {
      type: BehandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET,
    } as Behandlingsresultat;
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.BEHANDLE_KLAGE_NFP,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatusFVED, [], false, aksjonspunkt, behandlingsresultat);
    expect(message[0].props.id).toEqual('ToTrinnsForm.Klage.StadfesteYtelsesVedtak');
  });

  it('skal vise korrekt tekst for aksjonspunkt 5058 vurder tidsbegrenset', () => {
    const beregningTilfeller = [
      {
        kode: FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
        navn: 'Vurder tidsbegrenset arbeidsforhold',
        kodeverk: '',
      },
    ];
    const beregningDto = { faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD] };
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(
      <div key="Vurder tidsbegrenset arbeidsforhold">Vurder tidsbegrenset arbeidsforhold</div>,
    );
  });
  it('skal vise korrekt tekst for aksjonspunkt 5058 ATFL i samme org', () => {
    const beregningTilfeller = [
      {
        kode: FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON,
        navn: 'Vurder at og fl',
        kodeverk: '',
      },
    ];
    const beregningDto = { faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON] };
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(<div key="Vurder at og fl">Vurder at og fl</div>);
  });
  it('skal vise korrekte tekster for kombinasjon av aksjonspunkt 5058', () => {
    const beregningTilfeller = [
      {
        kode: FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
        navn: 'Vurder besteberegning',
        kodeverk: '',
      },
      {
        kode: FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
        navn: 'Vurder tidsbegrenset arbeidsforhold',
        kodeverk: '',
      },
    ];
    const beregningDto = {
      faktaOmBeregningTilfeller: [
        FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING,
        FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD,
      ],
    };
    const aksjonspunkt = {
      aksjonspunktKode: AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN,
      besluttersBegrunnelse: 'begrunnelse',
      totrinnskontrollGodkjent: false,
      beregningDto,
    } as TotrinnskontrollAksjonspunkt;
    const message = getAksjonspunkttekst(true, behandlingStatus, beregningTilfeller, erTilbakekreving, aksjonspunkt);
    expect(message[0]).toEqual(<div key="Vurder besteberegning">Vurder besteberegning</div>);
    expect(message[1]).toEqual(
      <div key="Vurder tidsbegrenset arbeidsforhold">Vurder tidsbegrenset arbeidsforhold</div>,
    );
  });
});
