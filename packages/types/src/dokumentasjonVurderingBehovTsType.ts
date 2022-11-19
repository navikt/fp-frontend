export enum UttakType {
  UTSETTELSE = 'UTSETTELSE',
  OVERFØRING = 'OVERFØRING',
  UTTAK = 'UTTAK',
}

export enum UttakVurdering {
  GODKJENT = 'GODKJENT',
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
  AKTIVITETSKRAV = 'AKTIVITETSKRAV',
  TIDLIG_OPPSTART_FAR = 'TIDLIG_OPPSTART_FAR',
}

type DokumentasjonVurderingBehov = Readonly<{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering;
}>

export default DokumentasjonVurderingBehov;
