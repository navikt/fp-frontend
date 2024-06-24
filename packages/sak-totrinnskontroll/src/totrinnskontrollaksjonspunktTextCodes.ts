import { AksjonspunktCode } from '@navikt/fp-kodeverk';

const totrinnskontrollaksjonspunktTextCodes = {
  [AksjonspunktCode.ADOPSJONSDOKUMENTAJON]: 'ToTrinnsForm.Adopsjon.KontrollerOpplysninger',
  [AksjonspunktCode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: 'ToTrinnsForm.Adopsjon.VurderEktefellesBarn',
  [AksjonspunktCode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: 'ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene',
  [AksjonspunktCode.OVERSTYR_ADOPSJONSVILKAR]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',
  [AksjonspunktCode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',

  [AksjonspunktCode.OMSORGSOVERTAKELSE]: 'ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger',
  [AksjonspunktCode.MANUELL_VURDERING_AV_OMSORGSVILKARET]:
    'ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd',
  // 5032: 'TrinnsForm.Omsorgovertagelse.VurderTidligereUtbetaling',

  [AksjonspunktCode.AUTO_VENT_PÅ_FODSELREGISTRERING]: 'ToTrinnsForm.Fødsel.VurderSokersRelasjon',
  [AksjonspunktCode.TERMINBEKREFTELSE]: 'ToTrinnsForm.Fødsel.KontrollerOpplysningerTermin',
  [AksjonspunktCode.SJEKK_MANGLENDE_FODSEL]: 'ToTrinnsForm.Fødsel.SjekkManglendeFødsel',
  [AksjonspunktCode.OVERSTYR_FODSELSVILKAR]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',
  [AksjonspunktCode.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR]: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',

  [AksjonspunktCode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd',
  [AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling',

  [AksjonspunktCode.AVKLAR_AKTIVITETER]: 'ToTrinnsForm.Beregning.AvklarAktiviteter',
  [AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter',
  [AksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE]:
    'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktCode.OVERSTYR_BEREGNING]: 'ToTrinnsForm.Beregning.VilkarOverstyrt',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]: 'ToTrinnsForm.Beregning.InntektFastsatt',
  [AksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.GraderingUtenBG',
  [AksjonspunktCode.FORDEL_BEREGNINGSGRUNNLAG]: 'ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag',

  [AksjonspunktCode.SOKNADSFRISTVILKARET]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER]: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  [AksjonspunktCode.OVERSTYR_SOKNADSFRISTVILKAR]: 'ToTrinnsForm.Soknadsfrist.VilkarOverstyrt',

  [AksjonspunktCode.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE]: 'ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap',
  [AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD]: 'ToTrinnsForm.Medlemskap.AvklarLovligOpphold',
  [AksjonspunktCode.AVKLAR_OM_BRUKER_ER_BOSATT]: 'ToTrinnsForm.Medlemskap.VurderSokerBosatt',
  [AksjonspunktCode.AVKLAR_OPPHOLDSRETT]: 'ToTrinnsForm.Medlemskap.AvklarOppholdsrett',
  [AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR]: 'ToTrinnsForm.Medlemskap.VilkarOverstyrt',
  [AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO]: 'ToTrinnsForm.Medlemskap.OverstyrtStartdato',
  [AksjonspunktCode.AVKLAR_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.AvklartDekningsgrad',
  [AksjonspunktCode.OVERSTYR_DEKNINGSGRAD]: 'ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad',

  [AksjonspunktCode.FORESLA_VEDTAK]: 'ToTrinnsForm.Vedtak.Fritekstbrev',
  [AksjonspunktCode.FORESLA_VEDTAK_MANUELT]: 'ToTrinnsForm.Vedtak.Fritekstbrev',

  [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: 'ToTrinnsForm.Omsorg.VurderOmsorg',
  [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: 'ToTrinnsForm.Aleneomsorg.VurderAleneomsorg',

  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD]: 'ToTrinnsForm.Uttak.Dod',
  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST]: 'ToTrinnsForm.Uttak.Soknadsfrist',
  [AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE]: 'ToTrinnsForm.Uttak.Klage',
  [AksjonspunktCode.ANNENPART_EØS]: 'ToTrinnsForm.Uttak.AnnenpartEØS',
  [AksjonspunktCode.TETTE_SAKER]: 'ToTrinnsForm.Uttak.TetteStønadsperioder',
  [AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN]:
    'ToTrinnsForm.Uttak.FordelingStonadsperioder',
  [AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget',
  [AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT]: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort',
  [AksjonspunktCode.TILKNYTTET_STORTINGET]: 'ToTrinnsForm.Uttak.Stortinget',

  [AksjonspunktCode.VURDER_TILBAKETREKK]: 'ToTrinnsForm.TilkjentYtelse.Tilbaketrekk',

  [AksjonspunktCode.VURDER_FARESIGNALER]: 'ToTrinnsForm.Faresignaler.Vurder',

  [AksjonspunktCode.VURDER_OPPTJENINGSVILKARET]: 'ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret',

  [AksjonspunktCode.VURDER_REFUSJON_BERGRUNN]: 'ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart',
  [AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING]: 'ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet',
} as Record<string, string>;

export const totrinnsTilbakekrevingkontrollaksjonspunktTextCodes = {} as Record<string, string>;

export default totrinnskontrollaksjonspunktTextCodes;
