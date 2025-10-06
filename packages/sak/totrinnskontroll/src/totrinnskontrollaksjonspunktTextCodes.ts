import type { AksjonspunktKode } from '@navikt/fp-types';

export const totrinnskontrollaksjonspunktTextCodes: Partial<Record<AksjonspunktKode, string>> = {
  ['5004']: 'ToTrinnsForm.Adopsjon.KontrollerOpplysninger',
  ['5005']: 'ToTrinnsForm.Adopsjon.VurderEktefellesBarn',
  ['5006']: 'ToTrinnsForm.Adopsjon.VurderMannAdoptererAlene',
  ['6004']: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',
  ['6010']: 'ToTrinnsForm.Adopsjon.VilkarOverstyrt',

  ['5008']: 'ToTrinnsForm.Omsorgovertagelse.KontrollerOpplysninger',
  ['5011']: 'ToTrinnsForm.Omsorgovertagelse.VurderVilkarForeldreansvarTredjeLedd',

  ['7002']: 'ToTrinnsForm.Fødsel.VurderSokersRelasjon',
  ['5001']: 'ToTrinnsForm.Fødsel.SjekkTerminbekreftelse',
  ['5027']: 'ToTrinnsForm.Fødsel.SjekkManglendeFødsel',
  ['6019']: 'ToTrinnsForm.Fødsel.OverstyrFaktaFødsel',
  ['6003']: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',
  ['6009']: 'ToTrinnsForm.Fødsel.VilkarOverstyrt',

  ['5014']: 'ToTrinnsForm.Foreldreansvar.VurderVilkarForeldreansvarFjerdeLedd',
  ['5031']: 'ToTrinnsForm.Foreldreansvar.VurderTidligereUtbetaling',

  ['5052']: 'ToTrinnsForm.Beregning.AvklarAktiviteter',
  ['6014']: 'ToTrinnsForm.Beregning.OverstyrtBeregningsaktiviteter',
  ['6015']: 'ToTrinnsForm.Beregning.OverstyrtBeregningsgrunnlag',
  ['5038']: 'ToTrinnsForm.Beregning.InntektFastsatt',
  ['5042']: 'ToTrinnsForm.Beregning.InntektFastsatt',
  ['5047']: 'ToTrinnsForm.Beregning.InntektFastsatt',
  ['5049']: 'ToTrinnsForm.Beregning.InntektFastsatt',
  ['5050']: 'ToTrinnsForm.Beregning.GraderingUtenBG',
  ['5046']: 'ToTrinnsForm.Beregning.FastsettFordeltBeregningsgrunnlag',

  ['5007']: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  ['5043']: 'ToTrinnsForm.Soknadsfrist.ManueltVurdert',
  ['6006']: 'ToTrinnsForm.Soknadsfrist.VilkarOverstyrt',

  ['5021']: 'ToTrinnsForm.Medlemskap.VurderGyldigMedlemskap',
  ['5019']: 'ToTrinnsForm.Medlemskap.AvklarLovligOpphold',
  ['5020']: 'ToTrinnsForm.Medlemskap.VurderSokerBosatt',
  ['5023']: 'ToTrinnsForm.Medlemskap.AvklarOppholdsrett',
  ['6005']: 'ToTrinnsForm.Medlemskap.VilkarOverstyrt',
  ['6045']: 'ToTrinnsForm.Medlemskap.OverstyrtStartdato',
  ['5002']: 'ToTrinnsForm.Medlemskap.AvklartDekningsgrad',
  ['6016']: 'ToTrinnsForm.Medlemskap.OverstyrtDekningsgrad',

  ['5015']: 'ToTrinnsForm.Vedtak.Fritekstbrev',
  ['5028']: 'ToTrinnsForm.Vedtak.Fritekstbrev',

  ['5061']: 'ToTrinnsForm.Omsorg.VurderOmsorg',
  ['5060']: 'ToTrinnsForm.Aleneomsorg.VurderAleneomsorg',

  ['5076']: 'ToTrinnsForm.Uttak.Dod',
  ['5077']: 'ToTrinnsForm.Uttak.Soknadsfrist',
  ['5073']: 'ToTrinnsForm.Uttak.Klage',
  ['5069']: 'ToTrinnsForm.Uttak.AnnenpartEØS',
  ['5067']: 'ToTrinnsForm.Uttak.TetteStønadsperioder',
  ['5075']: 'ToTrinnsForm.Uttak.FordelingStonadsperioder',
  ['5078']: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Innvilget',
  ['5079']: 'ToTrinnsForm.Uttak.TilstotendeYtelser.Opphort',
  ['5072']: 'ToTrinnsForm.Uttak.Stortinget',

  ['5090']: 'ToTrinnsForm.TilkjentYtelse.Tilbaketrekk',

  ['5095']: 'ToTrinnsForm.Faresignaler.Vurder',

  ['5089']: 'ToTrinnsForm.Opptjening.VurderOpptjeningsvilkåret',

  ['5059']: 'ToTrinnsForm.Beregningsgrunnlag.Refusjonsstart',
  ['5085']: 'ToTrinnsForm.ArbeidOgInntekt.ManueltOpprettet',
};

export const totrinnsTilbakekrevingkontrollaksjonspunktTextCodes = {} as Record<string, string>;
