import type { IntlShape } from 'react-intl';

import { FaktaPanelCode } from '@navikt/fp-konstanter';

/**
 * Mapper faktapanel-koden til i18n-nøkkelen for panelets tittel/menynavn.
 * Slik slipper hvert enkelt panel å vite hvilken konkret nøkkel det skal bruke.
 */
const FAKTA_PANEL_TITTEL_MESSAGE_ID: Partial<Record<FaktaPanelCode, string>> = {
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

/**
 * Henter ut menyteksten/kortnavnet til et faktapanel basert på panelkoden.
 * Samme kode blir brukt både til å slå opp aksjonspunkt/vilkår for panelet og
 * til å hente ut navnet, slik at hver wrapper bare trenger å kjenne til én ting.
 */
export const hentFaktaPanelMenyTekst = (faktaPanelKode: FaktaPanelCode, intl: IntlShape): string => {
  const messageId = FAKTA_PANEL_TITTEL_MESSAGE_ID[faktaPanelKode];
  if (!messageId) {
    throw new Error(`Mangler i18n-nøkkel for faktapanel-tittel for koden ${faktaPanelKode}`);
  }
  return intl.formatMessage({ id: messageId });
};
