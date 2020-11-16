import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

class MenyKodeverk {
  $$behandlingType: Kodeverk;

  $$fpSakKodeverk: {[key: string]: KodeverkMedNavn[]};

  $$fpTilbakeKodeverk: {[key: string]: KodeverkMedNavn[]};

  constructor(behandlingType: Kodeverk) {
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

  getKodeverkForBehandlingstype(behandlingTypeKode: string, kodeverkType: string): KodeverkMedNavn[] {
    if (behandlingTypeKode === BehandlingType.TILBAKEKREVING || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING) {
      return this.$$fpTilbakeKodeverk[kodeverkType];
    }
    return this.$$fpSakKodeverk[kodeverkType];
  }

  getKodeverkForValgtBehandling(kodeverkType: string): KodeverkMedNavn[] {
    return this.getKodeverkForBehandlingstype(this.$$behandlingType.kode, kodeverkType);
  }

  getKodeverkForBehandlingstyper(behandlingTypeKoder: string[], kodeverkType: string): KodeverkMedNavn[] {
    return behandlingTypeKoder.reduce((acc, btk) => {
      const alleKodeverkForKodeverkType = this.getKodeverkForBehandlingstype(btk, kodeverkType);
      return alleKodeverkForKodeverkType ? acc.concat([alleKodeverkForKodeverkType.find((k) => k.kode === btk)]) : acc;
    }, []);
  }
}

export default MenyKodeverk;
