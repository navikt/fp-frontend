import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export const totrinnskontrollaksjonspunktTextCodes = {
  [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: 'ToTrinnsForm.Adopsjon.KontrollerOpplysninger',
  [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'ToTrinnsForm.Adopsjon.VurderEktefellesBarn',
  [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: 'ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene',
  [AksjonspunktKode.OVERSTYR_ADOPSJONSVILKAR]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',

  [AksjonspunktKode.OMSORGSOVERTAKELSE]: 'ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger',
  [AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET]:
    'ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd',
  // 5032: 'TrinnsForm.Omsorgovertagelse.VurderTidligereUtbetaling',

  [AksjonspunktKode.AUTO_VENT_PÅ_FODSELREGISTRERING]: 'ToTrinnsForm.Fødsel.VurderSokersRelasjon',
  [AksjonspunktKode.TERMINBEKREFTELSE]: 'ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin',
  [AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]: 'ToTrinnsForm.Fødsel.SjekkManglendeFødsel',
  [AksjonspunktKode.OVERSTYR_FODSELSVILKAR]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',

  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling',

  [AksjonspunktKode.AVKLAR_AKTIVITETER]: 'ToTrinnsForm.Beregning.AvklarAktiviteter',
  [AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter',
  [AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:
    'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.GraderingUtenBG',
  [AksjonspunktKode.FORDEL_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag',

  [AksjonspunktKode.SOKNADSFRISTVILKARET]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktKode.OVERSTYR_SOKNADSFRISTVILKAR]: 'ToTrinnsForm.Soknadsfrist.VilkarOverstyrt',

  [AksjonspunktKode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]: 'ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap',
  [AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD]: 'ToTrinnsForm.Medlemskap.AvklarLovligOpphold',
  [AksjonspunktKode.AVKLAR_OM_BRUKER_ER_BOSATT]: 'ToTrinnsForm.Medlemskap.VurderSokerBosatt',
  [AksjonspunktKode.AVKLAR_OPPHOLDSRETT]: 'ToTrinnsForm.Medlemskap.AvklarOppholdsrett',
  [AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR]: 'ToTrinnsForm.Medlemskap.VilkarOverstyrt',
  [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO]: 'ToTrinnsForm.Medlemskap.OverstyrtStartdato',
  [AksjonspunktKode.AVKLAR_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.AvklartDekningsgrad',
  [AksjonspunktKode.OVERSTYR_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad',

  [AksjonspunktKode.FORESLA_VEDTAK]: 'ToTrinnsForm.Vedtak.Fritekstbrev',
  [AksjonspunktKode.FORESLA_VEDTAK_MANUELT]: 'ToTrinnsForm.Vedtak.Fritekstbrev',

  [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: 'ToTrinnsForm.Omsorg.VurderOmsorg',
  [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: 'ToTrinnsForm.Aleneomsorg.VurderAleneomsorg',

  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'ToTrinnsForm.Uttak.Dod',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'ToTrinnsForm.Uttak.Soknadsfrist',
  [AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'ToTrinnsForm.Uttak.Klage',
  [AksjonspunktKode.ANNENPART_EØS]: 'ToTrinnsForm.Uttak.AnnenpartEØS',
  [AksjonspunktKode.TETTE_SAKER]: 'ToTrinnsForm.Uttak.TetteStønadsperioder',
  [AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:
    'ToTrinnsForm.Uttak.FordelingStonadsperioder',
  [AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget',
  [AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort',
  [AksjonspunktKode.TILKNYTTET_STORTINGET]: 'ToTrinnsForm.Uttak.Stortinget',

  [AksjonspunktKode.VURDER_TILBAKETREKK]: 'ToTrinnsForm.TilkjentYtelse.Tilbaketrekk',

  [AksjonspunktKode.VURDER_FARESIGNALER]: 'ToTrinnsForm.Faresignaler.Vurder',

  [AksjonspunktKode.VURDER_OPPTJENINGSVILKARET]: 'ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret',

  [AksjonspunktKode.VURDER_REFUSJON_BERGRUNN]: 'ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart',
  [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING]: 'ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet',
} as Record<string, string>;

export const totrinnsTilbakekrevingkontrollaksjonspunktTextCodes = {} as Record<string, string>;
