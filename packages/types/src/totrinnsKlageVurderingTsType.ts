import Kodeverk from './kodeverkTsType';

type TotrinnsKlageVurdering = Readonly<{
  klageVurdering?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  klageVurderingResultatNFP?: any;
  klageVurderingResultatNK?: any;
}>

export default TotrinnsKlageVurdering;
