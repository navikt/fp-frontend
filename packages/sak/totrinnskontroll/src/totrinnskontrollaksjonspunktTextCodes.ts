import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export const totrinnskontrollaksjonspunktTextCodes = {
  [AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON]: 'ToTrinnsForm.Adopsjon.KontrollerOpplysninger',
  [AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'ToTrinnsForm.Adopsjon.VurderEktefellesBarn',
  [AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE]: 'ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene',
  [AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',

  [AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE]: 'ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger',
  [AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET]:
    'ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd',

  [AksjonspunktKode.AUTO_VENT_PÅ_FØDSELREGISTRERING]: 'ToTrinnsForm.Fødsel.VurderSokersRelasjon',
  [AksjonspunktKode.SJEKK_TERMINBEKREFTELSE]: 'ToTrinnsForm.Fødsel.SjekkTerminbekreftelse',
  [AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL]: 'ToTrinnsForm.Fødsel.SjekkManglendeFødsel',
  [AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL]: 'ToTrinnsForm.Fødsel.OverstyrFaktaFødsel',
  [AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',

  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD]:
    'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd',
  [AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE]: 'ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling',

  [AksjonspunktKode.AVKLAR_AKTIVITETER]: 'ToTrinnsForm.Beregning.AvklarAktiviteter',
  [AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter',
  [AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.UTGÅTT_5042]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.UTGÅTT_5050]: 'ToTrinnsForm.Beregning.GraderingUtenBG',
  [AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag',

  [AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET]: 'ToTrinnsForm.Soknadsfrist.VilkarOverstyrt',

  [AksjonspunktKode.UTGÅTT_5021]: 'ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap',
  [AksjonspunktKode.UTGÅTT_5019]: 'ToTrinnsForm.Medlemskap.AvklarLovligOpphold',
  [AksjonspunktKode.UTGÅTT_5020]: 'ToTrinnsForm.Medlemskap.VurderSokerBosatt',
  [AksjonspunktKode.UTGÅTT_5023]: 'ToTrinnsForm.Medlemskap.AvklarOppholdsrett',
  [AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET]: 'ToTrinnsForm.Medlemskap.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO]: 'ToTrinnsForm.Medlemskap.OverstyrtStartdato',
  [AksjonspunktKode.AVKLAR_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.AvklartDekningsgrad',
  [AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad',

  [AksjonspunktKode.FORESLÅ_VEDTAK]: 'ToTrinnsForm.Vedtak.Fritekstbrev',
  [AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT]: 'ToTrinnsForm.Vedtak.Fritekstbrev',

  [AksjonspunktKode.AVKLAR_LØPENDE_OMSORG]: 'ToTrinnsForm.Omsorg.VurderOmsorg',
  [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: 'ToTrinnsForm.Aleneomsorg.VurderAleneomsorg',

  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'ToTrinnsForm.Uttak.Dod',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'ToTrinnsForm.Uttak.Soknadsfrist',
  [AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'ToTrinnsForm.Uttak.Klage',
  [AksjonspunktKode.UTGÅTT_5069]: 'ToTrinnsForm.Uttak.AnnenpartEØS',
  [AksjonspunktKode.UTGÅTT_5067]: 'ToTrinnsForm.Uttak.TetteStønadsperioder',
  [AksjonspunktKode.UTGÅTT_5075]: 'ToTrinnsForm.Uttak.FordelingStonadsperioder',
  [AksjonspunktKode.UTGÅTT_5078]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget',
  [AksjonspunktKode.UTGÅTT_5079]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort',
  [AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT]: 'ToTrinnsForm.Uttak.Stortinget',

  [AksjonspunktKode.UTGÅTT_5090]: 'ToTrinnsForm.TilkjentYtelse.Tilbaketrekk',

  [AksjonspunktKode.VURDER_FARESIGNALER]: 'ToTrinnsForm.Faresignaler.Vurder',

  [AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET]: 'ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret',

  [AksjonspunktKode.VURDER_REFUSJON_BERGRUNN]: 'ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart',
  [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING]: 'ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet',
};

export const totrinnsTilbakekrevingkontrollaksjonspunktTextCodes = {} as Record<string, string>;
