// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AlleKodeverkTilbakekreving } from '@navikt/fp-types';

export const alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving = {
  Fagsystem: [
    {
      kode: 'AAREGISTERET',
      navn: null,
    },
    {
      kode: 'ARENA',
      navn: null,
    },
    {
      kode: 'ENHETSREGISTERET',
      navn: null,
    },
    {
      kode: 'FPSAK',
      navn: null,
    },
    {
      kode: 'FPTILBAKE',
      navn: null,
    },
    {
      kode: 'GOSYS',
      navn: null,
    },
    {
      kode: 'INFOTRYGD',
      navn: null,
    },
    {
      kode: 'INNTEKT',
      navn: null,
    },
    {
      kode: 'JOARK',
      navn: null,
    },
    {
      kode: 'K9',
      navn: null,
    },
    {
      kode: 'K9TILBAKE',
      navn: null,
    },
    {
      kode: 'MEDL',
      navn: null,
    },
    {
      kode: 'TPS',
      navn: null,
    },
  ],
  Venteårsak: [
    {
      kode: 'AVV_DOK',
      navn: 'Avventer dokumentasjon',
    },
    {
      kode: 'ENDRE_TILKJENT_YTELSE',
      navn: 'Mulig endring i tilkjent ytelse',
    },
    {
      kode: 'UTV_TIL_FRIST',
      navn: 'Utvidet tilsvarsfrist',
    },
    {
      kode: 'VENT_PÅ_BRUKERTILBAKEMELDING',
      navn: 'Venter på tilbakemelding fra bruker',
    },
    {
      kode: 'VENT_PÅ_MULIG_MOTREGNING',
      navn: 'Mulig motregning med annen ytelse',
    },
    {
      kode: 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
      navn: 'Venter på tilbakekrevingsgrunnlag fra økonomi',
    },
  ],
  Aktsomhet: [
    {
      kode: 'FORSETT',
      navn: 'Forsett',
    },
    {
      kode: 'GROVT_UAKTSOM',
      navn: 'Grov uaktsomhet',
    },
    {
      kode: 'SIMPEL_UAKTSOM',
      navn: 'Simpel uaktsomhet',
    },
  ],
  AnnenVurdering: [
    {
      kode: 'FORELDET',
      navn: 'Foreldet',
    },
    {
      kode: 'GOD_TRO',
      navn: 'Handlet i god tro',
    },
  ],
  SærligGrunn: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'GRAD_UAKTSOMHET',
      navn: 'Graden av uaktsomhet hos den kravet retter seg mot',
    },
    {
      kode: 'HELT_ELLER_DELVIS_NAVS_FEIL',
      navn: 'Om feilen helt eller delvis kan tilskrives Nav',
    },
    {
      kode: 'STOERRELSE_BELOEP',
      navn: 'Størrelsen på feilutbetalt beløp',
    },
    {
      kode: 'TID_FRA_UTBETALING',
      navn: 'Hvor lang tid siden utbetalingen fant sted',
    },
  ],
  VilkårResultat: [
    {
      kode: 'FEIL_OPPLYSNINGER',
      navn: 'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt feilaktige opplysninger (1. ledd, 2 punkt)',
    },
    {
      kode: 'FORSTO_BURDE_FORSTAATT',
      navn: 'Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)',
    },
    {
      kode: 'GOD_TRO',
      navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
    },
    {
      kode: 'MANGELFULL_OPPLYSNING',
      navn: 'Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt mangelfulle opplysninger (1. ledd, 2 punkt)',
    },
  ],
  VedtakResultatType: [
    {
      kode: 'DELVIS_TILBAKEBETALING',
      navn: 'Delvis tilbakebetaling',
    },
    {
      kode: 'FULL_TILBAKEBETALING',
      navn: 'Tilbakebetaling',
    },
    {
      kode: 'INGEN_TILBAKEBETALING',
      navn: 'Ingen tilbakebetaling',
    },
  ],
  ForeldelseVurderingType: [
    {
      kode: 'FORELDET',
      navn: 'Perioden er foreldet',
    },
    {
      kode: 'IKKE_FORELDET',
      navn: 'Perioden er ikke foreldet',
    },
    {
      kode: 'IKKE_VURDERT',
      navn: 'Perioden er ikke vurdert',
    },
    {
      kode: 'TILLEGGSFRIST',
      navn: 'Perioden er ikke foreldet, regel om tilleggsfrist (10 år) benyttes',
    },
  ],
  HistorikkAktør: [
    {
      kode: 'ARBEIDSGIVER',
      navn: 'Arbeidsgiver',
    },
    {
      kode: 'BESL',
      navn: 'Beslutter',
    },
    {
      kode: 'SBH',
      navn: 'Saksbehandler',
    },
    {
      kode: 'SOKER',
      navn: 'Søker',
    },
    {
      kode: 'VL',
      navn: 'Vedtaksløsningen',
    },
  ],
  HendelseType: [
    {
      kode: 'BEREGNING_TYPE',
      navn: '§14-7 Beregning',
    },
    {
      kode: 'ES_ADOPSJONSVILKAARET_TYPE',
      navn: '§14-17 1. ledd Adopsjonsvilkåret',
    },
    {
      kode: 'ES_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'ES_FEIL_UTBETALING_TYPE',
      navn: 'Feil i utbetaling',
    },
    {
      kode: 'ES_FODSELSVILKAARET_TYPE',
      navn: '§14-17 1. ledd Fødselsvilkåret',
    },
    {
      kode: 'ES_FORELDREANSVAR_FAR_TYPE',
      navn: '§14-17 4. ledd Foreldreansvar far',
    },
    {
      kode: 'ES_FORELDREANSVAR_TYPE',
      navn: '§14-17 2. ledd Foreldreansvar ',
    },
    {
      kode: 'ES_MEDLEMSKAP',
      navn: '§14-2 Medlemskap',
    },
    {
      kode: 'ES_OMSORGSVILKAAR_TYPE',
      navn: '§14-17 3. ledd Omsorgsvilkår ved mors død',
    },
    {
      kode: 'ES_RETT_PAA_FORELDREPENGER_TYPE',
      navn: 'Rett på foreldrepenger etter klage',
    },
    {
      kode: 'FP_ANNET_HENDELSE_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'FRISINN_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'KUN_RETT_TYPE',
      navn: '§14-14 Kun far/medmor rett',
    },
    {
      kode: 'MEDLEMSKAP',
      navn: '§14-2 Medlemskap',
    },
    {
      kode: 'OKONOMI_FEIL',
      navn: 'Feil i økonomi',
    },
    {
      kode: 'OLP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'OMP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'OPPHØR',
      navn: 'Opphør',
    },
    {
      kode: 'OPPTJENING_TYPE',
      navn: '§14-6 Opptjening',
    },
    {
      kode: 'PPN_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'PSB_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'STONADSPERIODEN_TYPE',
      navn: '§14-9 Stønadsperioden',
    },
    {
      kode: 'SVP_ANNET_TYPE',
      navn: 'Annet',
    },
    {
      kode: 'SVP_ARBEIDSGIVERS_FORHOLD_TYPE',
      navn: '§14-4 1. ledd Arbeidsgivers forhold',
    },
    {
      kode: 'SVP_BEREGNING_TYPE',
      navn: '§14-4 5. ledd Beregning ',
    },
    {
      kode: 'SVP_FAKTA_TYPE',
      navn: '§14-4 Fakta om svangerskap',
    },
    {
      kode: 'SVP_OPPTJENING_TYPE',
      navn: '§14-4 3. ledd Opptjening/ inntekt',
    },
    {
      kode: 'SVP_UTTAK_TYPE',
      navn: '§14-4 Uttak',
    },
    {
      kode: 'UTTAK_ALENEOMSORG_TYPE',
      navn: '§14-15 Uttak ved aleneomsorg/samlivsbrudd',
    },
    {
      kode: 'UTTAK_GENERELT_TYPE',
      navn: '§14-10 Generelt om uttak',
    },
    {
      kode: 'UTTAK_GRADERT_TYPE',
      navn: '§14-16 Gradert uttak',
    },
    {
      kode: 'UTTAK_KVOTENE_TYPE',
      navn: '§14-12 Uttak av kvotene',
    },
    {
      kode: 'UTTAK_UTSETTELSE_TYPE',
      navn: '§14-11 Utsettelse av uttak',
    },
    {
      kode: 'VILKAAR_GENERELLE_TYPE',
      navn: '§14-13 Generelle vilkår for fars uttak',
    },
  ],
  SkjermlenkeType: [
    {
      kode: 'FAKTA_OM_FEILUTBETALING',
      navn: 'Fakta om feilutbetaling',
    },
    {
      kode: 'FAKTA_OM_VERGE',
      navn: 'Fakta om verge/fullmektig',
    },
    {
      kode: 'FORELDELSE',
      navn: 'Foreldelse',
    },
    {
      kode: 'TILBAKEKREVING',
      navn: 'Tilbakekreving',
    },
    {
      kode: 'VEDTAK',
      navn: 'Vedtak',
    },
  ],
  HendelseUnderType: [
    {
      kode: 'ANNET_FRITEKST',
      navn: 'Annet - fritekst',
    },
    {
      kode: 'ARBEID_HELTID',
      navn: 'Arbeid heltid',
    },
    {
      kode: 'BARN_INNLAGT',
      navn: 'Barn er innlagt i helseinstitusjon',
    },
    {
      kode: 'ENDRET_DEKNINGSGRAD',
      navn: 'Endret dekningsgrad',
    },
    {
      kode: 'ENDRING_GRUNNLAG',
      navn: 'Endring i selve grunnlaget',
    },
    {
      kode: 'ES_ANDRE_FORELDRE_DODD',
      navn: 'Har ikke foreldreansvar ved andre forelders død',
    },
    {
      kode: 'ES_BARN_IKKE_REGISTRERT',
      navn: 'Barn er ikke registrert',
    },
    {
      kode: 'ES_BARN_OVER_15',
      navn: 'Barn er over 15 år',
    },
    {
      kode: 'ES_BRUKER_RETT_FORELDREPENGER',
      navn: 'Bruker har likevel rett på foreldrepenger',
    },
    {
      kode: 'ES_FAR_IKKE_ALENE',
      navn: 'Far overtar ikke foreldreansvar alene',
    },
    {
      kode: 'ES_FAR_IKKE_INNEN_STONADSPERIODE',
      navn: 'Far overtar ikke innen stønadsperioden',
    },
    {
      kode: 'ES_FAR_IKKE_OMSORG',
      navn: 'Far har ikke omsorg for barnet',
    },
    {
      kode: 'ES_FORELDREANSVAR_BARN_OVER_15',
      navn: 'Barn er over 15 år',
    },
    {
      kode: 'ES_IKKE_MINDRE_SAMVAER',
      navn: 'Ikke hatt mindre samvær enn barneloven §43',
    },
    {
      kode: 'ES_IKKE_OPPFYLT',
      navn: 'Adopsjonsvilkår er ikke oppfylt',
    },
    {
      kode: 'ES_IKKE_TILDELT',
      navn: 'Ikke tildelt foreldreansvar etter barneloven',
    },
    {
      kode: 'ES_MANN_IKKE_ALENE',
      navn: 'Mann adopterer ikke alene',
    },
    {
      kode: 'ES_MOTTAKER_FAR_MEDMOR',
      navn: 'Mottaker er far eller medmor',
    },
    {
      kode: 'ES_STEBARN',
      navn: 'Stebarnsadopsjon',
    },
    {
      kode: 'ES_STONADEN_ALLEREDE_UTBETALT',
      navn: 'Stønaden allerede utbetalt til mor',
    },
    {
      kode: 'ES_STONAD_FLERE_GANGER',
      navn: 'Stønad er gitt for samme barn flere ganger',
    },
    {
      kode: 'FEIL_FERIEPENGER_4G',
      navn: 'Feil i feriepenger - under 4 G',
    },
    {
      kode: 'FEIL_FLERBARNSDAGER',
      navn: 'Feil i flerbarnsdager',
    },
    {
      kode: 'FEIL_I_ANTALL_DAGER',
      navn: 'Feil i antall dager',
    },
    {
      kode: 'FORELDRES_UTTAK',
      navn: 'Ikke rett til samtidig uttak',
    },
    {
      kode: 'GRADERT_UTTAK',
      navn: 'Gradert uttak',
    },
    {
      kode: 'IKKE_ALENEOMSORG',
      navn: 'Ikke aleneomsorg',
    },
    {
      kode: 'IKKE_BOSATT',
      navn: 'Ikke bosatt',
    },
    {
      kode: 'IKKE_INNTEKT',
      navn: 'Ikke inntekt 6 av siste 10 måneder',
    },
    {
      kode: 'IKKE_LOVLIG_OPPHOLD',
      navn: 'Ikke lovlig opphold',
    },
    {
      kode: 'IKKE_OMSORG',
      navn: 'Ikke omsorg for barnet',
    },
    {
      kode: 'IKKE_OPPHOLDSRETT_EØS',
      navn: 'Ikke oppholdsrett EØS',
    },
    {
      kode: 'IKKE_YRKESAKTIV',
      navn: 'Ikke yrkesaktiv med pensjonsgivende inntekt',
    },
    {
      kode: 'INNTEKT_UNDER',
      navn: 'Inntekt under 1/2 G',
    },
    {
      kode: 'KVO_MOTTAKER_HELT_AVHENGIG',
      navn: 'Mottaker er helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'KVO_MOTTAKER_INNLAGT',
      navn: 'Mottaker er innlagt i helseinstitusjon',
    },
    {
      kode: 'KVO_SAMTIDIG_UTTAK',
      navn: 'Samtidig uttak',
    },
    {
      kode: 'LOVBESTEMT_FERIE',
      navn: 'Lovbestemt ferie',
    },
    {
      kode: 'MEDLEM_I_ANNET_LAND',
      navn: 'Unntak medlemskap/medlem annet land',
    },
    {
      kode: 'MOR_IKKE_ARBEID',
      navn: 'Mor er ikke i arbeid heltid',
    },
    {
      kode: 'MOR_IKKE_ARBEID_OG_STUDER',
      navn: 'Mor er ikke i arbeid og student - heltid',
    },
    {
      kode: 'MOR_IKKE_HELT_AVHENGIG',
      navn: 'Mor er ikke helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'MOR_IKKE_INNLAGT',
      navn: 'Mor er ikke innlagt på helseinstitusjon',
    },
    {
      kode: 'MOR_IKKE_I_IP',
      navn: 'Mor er ikke i introduksjonsprogram',
    },
    {
      kode: 'MOR_IKKE_I_KP',
      navn: 'Mor er ikke i kvalifiseringsprogram',
    },
    {
      kode: 'MOR_IKKE_STUDERT',
      navn: 'Mor er ikke student på heltid',
    },
    {
      kode: 'MOTTAKER_DØD',
      navn: 'Mottaker er død',
    },
    {
      kode: 'MOTTAKER_HELT_AVHENGIG',
      navn: 'Mottaker er helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: 'MOTTAKER_IKKE_GRAVID',
      navn: 'Mottaker er ikke lenger gravid',
    },
    {
      kode: 'MOTTAKER_INNLAGT',
      navn: 'Mottaker er innlagt i helseinstitusjon',
    },
    {
      kode: 'MOTTAKER_I_ARBEID',
      navn: 'Mottaker er i arbeid heltid',
    },
    {
      kode: 'NY_STONADSPERIODE',
      navn: 'Ny stønadsperiode for nytt barn',
    },
    {
      kode: 'OKONOMI_DOBBELUTBETALING',
      navn: 'Dobbeltutbetaling',
    },
    {
      kode: 'OKONOMI_FEIL_FERIEPENGER',
      navn: 'Feil feriepengeutbetaling',
    },
    {
      kode: 'OKONOMI_FEIL_TREKK',
      navn: 'Feil trekk',
    },
    {
      kode: 'OKONOMI_UTBETALT',
      navn: 'Utbetalt for mye',
    },
    {
      kode: 'OPPHOR_BARN_DOD',
      navn: 'Opphør barn død',
    },
    {
      kode: 'OPPHOR_MOTTAKER_DOD',
      navn: 'Opphør mottaker død',
    },
    {
      kode: 'REFUSJON_ARBGIVER',
      navn: 'Refusjon til arbeidsgiver',
    },
    {
      kode: 'STONADSPERIODE_MANGEL',
      navn: 'Manglende stønadsperiode',
    },
    {
      kode: 'STONADSPERIODE_OVER_3',
      navn: 'Stønadsperioden er over 3 år',
    },
    {
      kode: 'SVP_ENDRING_GRUNNLAG',
      navn: 'Endring i selve grunnlaget',
    },
    {
      kode: 'SVP_ENDRING_PERIODE',
      navn: 'Endring av periode',
    },
    {
      kode: 'SVP_ENDRING_PROSENT',
      navn: 'Endring i uttaksprosent/gradering',
    },
    {
      kode: 'SVP_ENDRING_TERMINDATO',
      navn: 'Endring i termindato',
    },
    {
      kode: 'SVP_IKKE_ARBEID',
      navn: 'Ikke i arbeid siste 4 uker',
    },
    {
      kode: 'SVP_IKKE_HELSEFARLIG',
      navn: 'Ikke helsefarlig for ventet barn',
    },
    {
      kode: 'SVP_INNTEKT_IKKE_TAP',
      navn: 'Ikke tap av pensjonsgivende inntekt',
    },
    {
      kode: 'SVP_INNTEKT_UNDER',
      navn: 'Inntekt under 1/2 G',
    },
    {
      kode: 'SVP_TIDLIG_FODSEL',
      navn: 'Tidlig fødsel',
    },
    {
      kode: 'SVP_TILRETTELEGGING_DELVIS_MULIG',
      navn: 'Delvis tilrettelegging mulig',
    },
    {
      kode: 'SVP_TILRETTELEGGING_FULLT_MULIG',
      navn: 'Full tilrettelegging mulig',
    },
    {
      kode: 'UTVANDRET',
      navn: 'Utvandret',
    },
    {
      kode: 'ØKONOMI_UTBETALT_FOR_MYE',
      navn: 'Feil i økonomi - utbetalt for mye',
    },
  ],
  BehandlingResultatType: [
    {
      kode: 'DELVIS_TILBAKEBETALING',
      navn: 'Delvis tilbakebetaling',
    },
    {
      kode: 'FASTSATT',
      navn: 'Resultatet er fastsatt',
    },
    {
      kode: 'FULL_TILBAKEBETALING',
      navn: 'Tilbakebetaling',
    },
    {
      kode: 'HENLAGT',
      navn: 'Henlagt',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET',
      navn: 'Henlagt, søknaden er feilopprettet',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET_MED_BREV',
      navn: 'Feilaktig opprettet - med henleggelsesbrev',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET_UTEN_BREV',
      navn: 'Feilaktig opprettet - uten henleggelsesbrev',
    },
    {
      kode: 'HENLAGT_KRAVGRUNNLAG_NULLSTILT',
      navn: 'Kravgrunnlaget er nullstilt',
    },
    {
      kode: 'HENLAGT_TEKNISK_VEDLIKEHOLD',
      navn: 'Teknisk vedlikehold',
    },
    {
      kode: 'IKKE_FASTSATT',
      navn: 'Ikke fastsatt',
    },
    {
      kode: 'INGEN_TILBAKEBETALING',
      navn: 'Ingen tilbakebetaling',
    },
  ],
  VidereBehandling: [
    {
      kode: 'TILBAKEKR_IGNORER',
      navn: 'Feilutbetaling, avvent samordning',
    },
    {
      kode: 'TILBAKEKR_INNTREKK',
      navn: 'Feilutbetaling hvor inntrekk dekker hele beløpet',
    },
    {
      kode: 'TILBAKEKR_OPPDATER',
      navn: 'Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp.',
    },
    {
      kode: 'TILBAKEKR_OPPRETT',
      navn: 'Feilutbetaling med tilbakekreving',
    },
  ],
  VergeType: [
    {
      kode: 'ADVOKAT',
      navn: 'Advokat/advokatfullmektig',
    },
    {
      kode: 'ANNEN_F',
      navn: 'Annen fullmektig',
    },
    {
      kode: 'BARN',
      navn: 'Verge for barn under 18 år',
    },
    {
      kode: 'FBARN',
      navn: 'Verge for foreldreløst barn under 18 år',
    },
    {
      kode: 'VOKSEN',
      navn: 'Verge for voksen',
    },
  ],
  VurderÅrsak: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'BEGRUNNELSE',
      navn: 'Begrunnelse',
    },
    {
      kode: 'FEIL_FAKTA',
      navn: 'Fakta',
    },
    {
      kode: 'FEIL_LOV',
      navn: 'Regel-/lovanvendelse',
    },
    {
      kode: 'FEIL_REGEL',
      navn: 'Feil regelforståelse',
    },
    {
      kode: 'SAKSFLYT',
      navn: 'Saksflyt',
    },
    {
      kode: 'SKJØNN',
      navn: 'Skjønn',
    },
    {
      kode: 'UTREDNING',
      navn: 'Utredning',
    },
  ],
  BehandlingÅrsakType: [
    {
      kode: 'FATTET_AV_ANNEN_INSTANS',
      navn: 'Vedtak fattet av annen instans',
    },
    {
      kode: 'RE_FEILUTBETALT_BELØP_REDUSERT',
      navn: 'Feilutbetalt beløp helt eller delvis bortfalt',
    },
    {
      kode: 'RE_FORELDELSE',
      navn: 'Nye opplysninger om foreldelse',
    },
    {
      kode: 'RE_KLAGE_KA',
      navn: 'Revurdering etter KA-behandlet klage',
    },
    {
      kode: 'RE_KLAGE_NFP',
      navn: 'Revurdering NFP omgjør vedtak basert på klage',
    },
    {
      kode: 'RE_VILKÅR',
      navn: 'Nye opplysninger om vilkårsvurdering',
    },
  ],
  BehandlingType: [
    {
      kode: 'BT-007',
      navn: 'Tilbakekreving',
    },
    {
      kode: 'BT-009',
      navn: 'Tilbakekreving revurdering',
    },
  ],
};
