import type { KlageAvvistÅrsak, KlageHjemmel, KlageMedholdÅrsak } from '@navikt/fp-kodeverk';

export type KlageVurderingResultat = Readonly<{
  klageVurdertAv: string;
  klageVurdering?: string;
  fritekstTilBrev?: string;
  klageMedholdArsak?: KlageMedholdÅrsak;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: KlageHjemmel;
  begrunnelse?: string;
}>;

export type KlageVurdering = Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: KlageAvvistÅrsak[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: string;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: string[];
  underBehandlingKabal?: boolean;
  behandletAvKabal?: boolean;
  mottattDato?: string;
}>;
