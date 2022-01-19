import { AlleKodeverk, AlleKodeverkTilbakekreving } from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

export const getKodeverknavnFraKode = (
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving,
  kodeverkType: string,
  kode: string,
  undertype?: string,
): string => {
  let kodeverkForType = alleKodeverk[kodeverkType];
  if (!kodeverkForType || kodeverkForType.length === 0) {
    return '';
  }
  if (undertype) {
    // @ts-ignore Må endra kodeverket-typen til å støtta undertype
    kodeverkForType = kodeverkForType[undertype];
  }

  const kodeverk = kodeverkForType.find((k) => k.kode === kode);
  return kodeverk ? kodeverk.navn : '';
};

export const getKodeverknavnFn = (
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving,
  kodeverkTyper: {[key: string]: string},
) => (
  kode: string,
  kodeverkType: KodeverkType,
  undertype?: string,
): string => getKodeverknavnFraKode(alleKodeverk, kodeverkTyper[kodeverkType], kode, undertype);
