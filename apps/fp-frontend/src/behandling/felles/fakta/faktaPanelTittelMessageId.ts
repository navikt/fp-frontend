import { FaktaPanelCode } from '@navikt/fp-konstanter';

/**
 * Mappar faktapanel-koden til i18n-nøkkelen for panelets tittel/menynavn.
 * Slik slepp kvart enkelt panel å vite kva for ein konkret nøkkel det skal bruke.
 */
export const FAKTA_PANEL_TITTEL_MESSAGE_ID: Partial<Record<FaktaPanelCode, string>> = {
  [FaktaPanelCode.ARBEIDSAVKLARINGSPENGER]: 'FaktaInitPanel.Title.Arbeidsavklaringspenger',
  [FaktaPanelCode.ARBEIDSFORHOLD]: 'FaktaInitPanel.Title.Arbeidsforhold',
  [FaktaPanelCode.ARBEID_OG_INNTEKT]: 'FaktaInitPanel.Title.ArbeidOgInntekt',
  [FaktaPanelCode.BEREGNING]: 'FaktaInitPanel.Title.Beregning',
  [FaktaPanelCode.BESTEBEREGNING]: 'FaktaInitPanel.Title.Besteberegning',
  [FaktaPanelCode.FEILUTBETALING]: 'TilbakekrevingFakta.FaktaFeilutbetaling',
  [FaktaPanelCode.FODSELSVILKARET]: 'FaktaInitPanel.Title.Fodsel',
  [FaktaPanelCode.FODSELTILRETTELEGGING]: 'FaktaInitPanel.Title.FodselOgTilrettelegging',
  [FaktaPanelCode.FORDELING]: 'FaktaInitPanel.Title.Fordeling',
  [FaktaPanelCode.INNTEKTSMELDINGER]: 'FaktaInitPanel.Title.Inntektsmelding',
  [FaktaPanelCode.MEDLEMSKAPSVILKARET]: 'FaktaInitPanel.Title.Medlemskap',
  [FaktaPanelCode.OMSORG]: 'FaktaInitPanel.Title.Omsorg',
  [FaktaPanelCode.OMSORG_OG_RETT]: 'FaktaInitPanel.Title.OmsorgOgRett',
  [FaktaPanelCode.OMSORGSOVERTAKELSE]: 'FaktaInitPanel.Title.Omsorgsovertakelse',
  [FaktaPanelCode.OPPTJENINGSVILKARET]: 'FaktaInitPanel.Title.Opptjening',
  [FaktaPanelCode.PERMISJON]: 'FaktaInitPanel.Title.Permisjon',
  [FaktaPanelCode.SAKEN]: 'FaktaInitPanel.Title.Saken',
  [FaktaPanelCode.UTTAK]: 'FaktaInitPanel.Title.Uttak',
  [FaktaPanelCode.UTTAK_EØS]: 'FaktaInitPanel.Title.Uttak.Eos',
  [FaktaPanelCode.UTTAK_DOKUMENTASJON]: 'FaktaInitPanel.Title.UttakDokumentasjon',
  [FaktaPanelCode.VERGE]: 'FaktaInitPanel.Title.Verge',
  [FaktaPanelCode.YTELSER]: 'FaktaInitPanel.Title.Ytelser',
};
