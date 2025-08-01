import type { AktivitetskravPermisjonType } from '@navikt/fp-kodeverk';

export enum UttakType {
  UTSETTELSE = 'UTSETTELSE',
  OVERFØRING = 'OVERFØRING',
  UTTAK = 'UTTAK',
}

export enum UttakVurdering {
  GODKJENT = 'GODKJENT',
  GODKJENT_AUTOMATISK = 'GODKJENT_AUTOMATISK',
  IKKE_GODKJENT = 'IKKE_GODKJENT',
  IKKE_DOKUMENTERT = 'IKKE_DOKUMENTERT',
}

export enum UttakÅrsak {
  INNLEGGELSE_SØKER = 'INNLEGGELSE_SØKER',
  INNLEGGELSE_BARN = 'INNLEGGELSE_BARN',
  HV_ØVELSE = 'HV_ØVELSE',
  NAV_TILTAK = 'NAV_TILTAK',
  SYKDOM_SØKER = 'SYKDOM_SØKER',
  INNLEGGELSE_ANNEN_FORELDER = 'INNLEGGELSE_ANNEN_FORELDER',
  SYKDOM_ANNEN_FORELDER = 'SYKDOM_ANNEN_FORELDER',
  BARE_SØKER_RETT = 'BARE_SØKER_RETT',
  ALENEOMSORG = 'ALENEOMSORG',
  TIDLIG_OPPSTART_FAR = 'TIDLIG_OPPSTART_FAR',
  AKTIVITETSKRAV_ARBEID = 'AKTIVITETSKRAV_ARBEID',
  AKTIVITETSKRAV_UTDANNING = 'AKTIVITETSKRAV_UTDANNING',
  AKTIVITETSKRAV_KVALPROG = 'AKTIVITETSKRAV_KVALPROG',
  AKTIVITETSKRAV_INTROPROG = 'AKTIVITETSKRAV_INTROPROG',
  AKTIVITETSKRAV_TRENGER_HJELP = 'AKTIVITETSKRAV_TRENGER_HJELP',
  AKTIVITETSKRAV_INNLAGT = 'AKTIVITETSKRAV_INNLAGT',
  AKTIVITETSKRAV_ARBEID_OG_UTDANNING = 'AKTIVITETSKRAV_ARBEID_OG_UTDANNING',
  AKTIVITETSKRAV_IKKE_OPPGITT = 'AKTIVITETSKRAV_IKKE_OPPGITT',
}

export type DokumentasjonVurderingBehov = Readonly<{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
  aktivitetskravGrunnlag: AktivitetskravGrunnlagArbeid[];
}>;

export type AktivitetskravGrunnlagArbeid = Readonly<{
  orgNummer: string;
  stillingsprosent: number;
  permisjon: Permisjon;
}>;

type Permisjon = Readonly<{
  prosent: number;
  type: AktivitetskravPermisjonType;
}>;
