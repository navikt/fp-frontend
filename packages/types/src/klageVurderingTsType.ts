import Kodeverk from './kodeverkTsType';

type KlageVurdering = Readonly<{
  klageVurderingResultatNK?: {
    klageVurdertAv: string;
    klageVurdering?: Kodeverk;
    fritekstTilBrev?: string;
    klageMedholdArsak?: Kodeverk;
    klageVurderingOmgjoer?: Kodeverk;
    godkjentAvMedunderskriver: boolean;
    begrunnelse?: string;
  };
  klageVurderingResultatNFP?: {
    klageVurdertAv: string;
    klageVurdering?: Kodeverk;
    fritekstTilBrev?: string;
    klageMedholdArsak?: Kodeverk;
    klageVurderingOmgjoer?: Kodeverk;
    godkjentAvMedunderskriver?: boolean;
    begrunnelse?: string;
  };
  klageFormkravResultatKA?: {
    avvistArsaker?: {
      navn?: string;
    }[];
    paKlagdBehandlingId: number;
    paklagdBehandlingType: Kodeverk;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
  klageFormkravResultatNFP?: {
    avvistArsaker?: {
      navn?: string;
    }[];
    paKlagdBehandlingId: number;
    paklagdBehandlingType: Kodeverk;
    begrunnelse: string;
    erKlagerPart: boolean;
    erKlageKonkret: boolean;
    erKlagefirstOverholdt: boolean;
    erSignert: boolean;
  };
}>

export default KlageVurdering;
