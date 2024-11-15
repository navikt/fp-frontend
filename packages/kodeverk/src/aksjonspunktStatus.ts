export enum AksjonspunktStatus {
  OPPRETTET = 'OPPR',
  UTFORT = 'UTFO',
  AVBRUTT = 'AVBR',
}

export const isAksjonspunktOpen = (statusKode: string): boolean => statusKode === AksjonspunktStatus.OPPRETTET;
