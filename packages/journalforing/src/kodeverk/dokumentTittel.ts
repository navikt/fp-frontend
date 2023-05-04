enum DokumentTittel {
  SØKNAD_FORELDREPEMGER_ENDRING_KVOTE = 'Søknad om endring av uttak av foreldrepenger eller overføring av kvote',
  SØKNAD_ENGANGSSTØNAD_ADOPSJON = 'Søknad om engangsstønad ved adopsjon',
  SØKNAD_ENGANGSSTØNAD_FØDSEL = 'Søknad om engangsstønad ved fødsel',
  SØKNAD_FORELDREPENGER_ADOPSJON = 'Søknad om foreldrepenger ved adopsjon',
  SØKNAD_FORELDREPENGER_FØDSEL = 'Søknad om foreldrepenger ved fødsel',
  SØKNAD_SVANGERSKAPSPENGER = 'Søknad om svangerskapspenger',
  ANKE = 'Anke',
  KLAGE = 'Klage',
  KOPI_AV_SKATTEMELDING = 'Kopi av skattemelding',
  RESULTATREGNSKAP = 'Resultatregnskap',
  ANNET = 'Annet',
  TERMINBEKREFTELSE = 'Terminbekreftelse',
  FØDSELSATTEST = 'Fødselsattest',
  TILRETTELEGGING_OMPLASERING_GRAVIDITET = 'Tilrettelegging/omplassering ved graviditet',
  UTTALELSE_TILBAKEKREVING = 'Uttalelse tilbakekreving',
  BEKREFTELSE_ARBEIDSGIVER = 'Bekreftelse fra arbeidsgiver',
  BEKREFTELSE_STUDIESTED_SKOLE = 'Bekreftelse fra studiested/skole',
  BEKREFTELSE_FERIE = 'Bekreftelse på avtalt ferie',
  BEKREFTELSE_KVALIFISERINGSPROGRAM = 'Bekreftelse på deltakelse i kvalifiseringsprogrammet',
  BEKREFTELSE_TLTAK_NAV = 'Bekreftelse på tiltak i regi av Arbeids- og velferdsetaten',
  BEKREFTELSE_OPPHOLDSTILLATELSE = 'Bekreftelse på oppholdstillatelse',
  BEKREFTELSE_FORSVAR_SIVILFORSVAR = 'Bekreftelse på øvelse eller tjeneste i Forsvaret eller Sivilforsvaret',
  BEKREFTELSE_FUNKSJONSNEDSETTELSE = 'Beskrivelse av funksjonsnedsettelse',
  DOKUMENTASJON_ALENEOMSORG = 'Dokumentasjon av aleneomsorg',
  DOKUMENTASJON_SØK_TILBAKE_I_TID = 'Dokumentasjon av begrunnelse for hvorfor man søker tilbake i tid',
  DOKUMENTASJON_OVERTAKELSE_OMSORG = 'Dokumentasjon av dato for overtakelse av omsorg',
  DOKUMENTASJON_INTRODUKSJONSPROGRAM = 'Dokumentasjon av deltakelse i introduksjonsprogrammet',
  DOKUMENTASJON_ETTERLØNN_SLUTTVEDERLAG = 'Dokumentasjon av etterlønn/sluttvederlag',
  DOKUMENTASJON_INNLEGELSE_HELSEINSTITUSJON = 'Dokumentasjon av innleggelse i helseinstitusjon',
  DOKUMENTASJON_FORSVAR_SIVILFORSVAR = 'Dokumentasjon av militær- eller siviltjeneste',
  DOKUMENTASJON_MOR_AKTIVITET = 'Dokumentasjon av mors utdanning, arbeid eller sykdom',
  RETTSKJENNELSE_TRYGDERETTEN = 'Rettskjennelse fra Trygderetten',
}

export const listeMedTittler = Object.values(DokumentTittel)
  .filter(tittel => Number.isNaN(Number(tittel)))
  .sort((t1, t2) => t1.localeCompare(t2));

export default DokumentTittel;
