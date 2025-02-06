import { BehandlingType, KodeverkType, TilbakekrevingKodeverkType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, KodeverkMedNavn } from '@navikt/fp-types';

export class MenyKodeverk {
  $$behandlingType: string | undefined;

  $$fpSakKodeverk: AlleKodeverk | undefined;

  $$fpTilbakeKodeverk: AlleKodeverkTilbakekreving | undefined;

  constructor(behandlingType: string | undefined) {
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

  getKodeverkForBehandlingstype(
    kodeverkType: KodeverkType | TilbakekrevingKodeverkType,
    behandlingTypeKode?: string,
  ): KodeverkMedNavn[] {
    if (
      behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
      behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING
    ) {
      // @ts-expect-error Fiks
      return this.$$fpTilbakeKodeverk ? this.$$fpTilbakeKodeverk[kodeverkType] : undefined;
    }
    if (kodeverkType !== KodeverkType.AVSLAGSARSAK) {
      // @ts-expect-error Fiks
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
