import Kodeverk from './kodeverkTsType';

export type KlageVurderingResultat = Readonly<{
  klageVurdertAv: string;
  klageVurdering?: Kodeverk;
  fritekstTilBrev?: string;
  klageMedholdArsak?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  klageHjemmel?: Kodeverk;
  godkjentAvMedunderskriver: boolean;
  begrunnelse?: string;
}>

type KlageVurdering = Readonly<{
  klageVurderingResultatNK?: KlageVurderingResultat;
  klageVurderingResultatNFP?: KlageVurderingResultat;
  klageFormkravResultatKA?: {
    avvistArsaker: Kodeverk[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: Kodeverk;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker: Kodeverk[];
    paKlagdBehandlingUuid: string;
    paklagdBehandlingType: Kodeverk;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  aktuelleHjemler?: Kodeverk[];
}>

export default KlageVurdering;
