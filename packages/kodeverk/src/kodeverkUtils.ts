import KodeverkType from './kodeverkTyper';

// TODO Fjern desse metodane. Kan like godt slå opp direkte

export const getKodeverknavnFraKode = (
  alleKodeverk: any,
  kodeverkType: string,
  kode: string,
  undertype?: string,
): string => {
  // @ts-ignore fiks
  let kodeverkForType: KodeverkMedNavn[] = alleKodeverk[kodeverkType];
  if (!kodeverkForType || kodeverkForType.length === 0) {
    return '';
  }
  if (undertype) {
    // @ts-ignore Må endra kodeverket-typen til å støtta undertype
    kodeverkForType = kodeverkForType[undertype];
  }

  const kodeverk = kodeverkForType.find(k => k.kode === kode);
  return kodeverk ? kodeverk.navn : '';
};

export const getKodeverknavnFn =
  (alleKodeverk: any) =>
  (kode: string, kodeverkType: KodeverkType, undertype?: string): string =>
    getKodeverknavnFraKode(alleKodeverk, kodeverkType, kode, undertype);
