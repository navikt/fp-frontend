export enum UttakType {
  UTSETTELSE = 'UTSETTELSE',
  TIDLIG_OPPSTART_FAR = 'TIDLIG_OPPSTART_FAR',
  OVERFØRING = 'OVERFØRING',
  AKTIVITETSKRAV = 'AKTIVITETSKRAV',
}

export enum UttakVurdering {
  GODKJENT = 'GODKJENT',
  IKKE_GODKJENT = 'IKKE_GODKJENT',
  IKKE_DOKUMENTERT = 'IKKE_DOKUMENTERT',
}

export enum UttakÅrsak {
  INNLEGGELSE_SØKER = 'INNLEGGELSE_SØKER',
  INNLEGGELSE_BARN = 'INNLEGGELSE_BARN',
  HV_OVELSE = 'HV_OVELSE',
  NAV_TILTAK = 'NAV_TILTAK',
  SYKDOM_SØKER = 'SYKDOM_SØKER',
}

type DokumentasjonVurderingBehov = Readonly<{
  fom: string;
  tom: string;
  type: UttakType;
  årsak: UttakÅrsak;
  vurdering?: UttakVurdering;
}>

export default DokumentasjonVurderingBehov;
