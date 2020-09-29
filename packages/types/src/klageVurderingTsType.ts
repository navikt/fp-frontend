import Kodeverk from './kodeverkTsType';

type KlageVurdering = Readonly<{
  klageVurderingResultatNK?: {
    klageVurdertAv: string;
    klageVurdering?: string;
    fritekstTilBrev?: string;
    klageMedholdArsak?: Kodeverk;
    klageMedholdArsakNavn?: string;
    klageVurderingOmgjoer?: string;
    godkjentAvMedunderskriver: boolean;
    begrunnelse?: string;
  };
  klageVurderingResultatNFP?: {
    klageVurdertAv: string;
    klageVurdering?: string;
    fritekstTilBrev?: string;
    klageMedholdArsak?: Kodeverk;
    klageMedholdArsakNavn?: string;
    klageVurderingOmgjoer?: string;
    godkjentAvMedunderskriver?: boolean;
    begrunnelse?: string;
  };
  klageFormkravResultatKA?: {
    avvistArsaker?: {
      navn?: string;
    }[];
  };
  klageFormkravResultatNFP?: {
    avvistArsaker?: {
      navn?: string;
    }[];
  };
}>

export default KlageVurdering;
