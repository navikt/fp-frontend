import { behandlingType as BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, AlleKodeverkTilbakekreving, KodeverkMedNavn } from '@navikt/fp-types';

class MenyKodeverk {
  $$behandlingType?: string;

  $$fpSakKodeverk: AlleKodeverk;

  $$fpTilbakeKodeverk: AlleKodeverkTilbakekreving;

  constructor(behandlingType?: string) {
    this.$$behandlingType = behandlingType;
  }

  medFpSakKodeverk(fpSakKodeverk: AlleKodeverk): this {
    this.$$fpSakKodeverk = fpSakKodeverk;
    return this;
  }

  medFpTilbakeKodeverk(fpTilbakeKodeverk: AlleKodeverkTilbakekreving): this {
    this.$$fpTilbakeKodeverk = fpTilbakeKodeverk;
    return this;
  }

  getKodeverkForBehandlingstype(kodeverkType: KodeverkType, behandlingTypeKode?: string): KodeverkMedNavn[] {
    if (
      behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
      behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING
    ) {
      return this.$$fpTilbakeKodeverk ? this.$$fpTilbakeKodeverk[kodeverkType] : undefined;
    }
    if (kodeverkType !== KodeverkType.AVSLAGSARSAK) {
      return this.$$fpSakKodeverk[kodeverkType];
    }
    throw new Error('Avslagsårsak ikke støttet');
  }

  getKodeverkForValgtBehandling(kodeverkType: KodeverkType): KodeverkMedNavn[] {
    return this.getKodeverkForBehandlingstype(kodeverkType, this.$$behandlingType);
  }

  getKodeverkForBehandlingstyper(behandlingTypeKoder: string[], kodeverkType: KodeverkType): KodeverkMedNavn[] {
    return behandlingTypeKoder.reduce<KodeverkMedNavn[]>((acc, btk) => {
      const alleKodeverkForKodeverkType = this.getKodeverkForBehandlingstype(kodeverkType, btk);
      if (alleKodeverkForKodeverkType) {
        const kodeverk = alleKodeverkForKodeverkType.find(k => k.kode === btk);
        return kodeverk ? acc.concat([kodeverk]) : acc;
      }
      return acc;
    }, []);
  }
}

export default MenyKodeverk;
