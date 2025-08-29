export enum AksjonspunktStatus {
  OPPRETTET = 'OPPR',
  UTFORT = 'UTFO',
  AVBRUTT = 'AVBR',
}

export const erAksjonspunktÅpent = (ap: { status: string }): boolean => ap.status === AksjonspunktStatus.OPPRETTET;
