// Definerer alle prosess-steg. Desse verdien blir vist i URL og brukt i historikk-elementene.
enum ProsessStegCode {
  DEFAULT = 'default',
  INNGANGSVILKAR = 'inngangsvilkar',
  AVREGNING = 'simulering',
  BEHANDLE_INNSYN = 'behandle_innsyn',
  BEREGNING = 'beregning',
  BEREGNINGSGRUNNLAG = 'beregningsgrunnlag',
  KLAGE_NAV_FAMILIE_OG_PENSJON = 'klage_nav_familie_og_pensjon',
  KLAGE_NAV_KLAGEINSTANS = 'klage_nav_klageinstans',
  FORMKRAV_KLAGE_NAV_KLAGEINSTANS = 'formkrav_klage_nav_klageinstans',
  FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON = 'formkrav_klage_nav_familie_og_pensjon',
  FORTSATTMEDLEMSKAP = 'fortsattmedlemskap',
  OPPLYSNINGSPLIKT = 'opplysningsplikt',
  SOEKNADSFRIST = 'soeknadsfrist',
  TILBAKEKREVING = 'tilbakekreving',
  FORELDELSE = 'foreldelse',
  TILKJENT_YTELSE = 'tilkjent_ytelse',
  VARSEL = 'varsel',
  VEDTAK = 'vedtak',
  UTTAK = 'uttak',
  SIMULERING = 'simulering',
  KLAGE_RESULTAT = 'resultat',
  ANKEBEHANDLING = 'ankebehandling',
  ANKE_MERKNADER = 'ankemerknader',
  ANKE_RESULTAT = 'ankeresultat',
}

export default ProsessStegCode;
