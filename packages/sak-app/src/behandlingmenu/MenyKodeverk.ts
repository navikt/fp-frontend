import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

class MenyKodeverk {
  $$behandlingType?: Kodeverk;

  $$fpSakKodeverk: {[key: string]: KodeverkMedNavn[]} = {};

  $$fpTilbakeKodeverk: {[key: string]: KodeverkMedNavn[]} = {};

  constructor(behandlingType?: Kodeverk) {
    this.$$behandlingType = behandlingType;
  }

  medFpSakKodeverk(fpSakKodeverk: {[key: string]: KodeverkMedNavn[]}): this {
    this.$$fpSakKodeverk = fpSakKodeverk;
    return this;
  }

  medFpTilbakeKodeverk(fpTilbakeKodeverk: {[key: string]: KodeverkMedNavn[]} = {}): this {
    this.$$fpTilbakeKodeverk = fpTilbakeKodeverk;
    return this;
  }

  getKodeverkForBehandlingstype(kodeverkType: string, behandlingTypeKode?: string): KodeverkMedNavn[] {
    if (behandlingTypeKode === BehandlingType.TILBAKEKREVING || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING) {
      return this.$$fpTilbakeKodeverk[kodeverkType];
    }
    return this.$$fpSakKodeverk[kodeverkType];
  }

  getKodeverkForValgtBehandling(kodeverkType: string): KodeverkMedNavn[] {
    return this.getKodeverkForBehandlingstype(kodeverkType, this.$$behandlingType?.kode);
  }

  getKodeverkForBehandlingstyper(behandlingTypeKoder: string[], kodeverkType: string): KodeverkMedNavn[] {
    return behandlingTypeKoder.reduce<KodeverkMedNavn[]>((acc, btk) => {
      const alleKodeverkForKodeverkType = this.getKodeverkForBehandlingstype(btk, kodeverkType);
      if (alleKodeverkForKodeverkType) {
        const kodeverk = alleKodeverkForKodeverkType.find((k) => k.kode === btk);
        return kodeverk ? acc.concat([kodeverk]) : acc;
      }
      return acc;
    }, []);
  }
}

export default MenyKodeverk;
