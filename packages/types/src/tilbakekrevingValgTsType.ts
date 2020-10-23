import Kodeverk from './kodeverkTsType';

type TilbakekrevingValg = Readonly<{
  erTilbakekrevingVilkårOppfylt: boolean;
  grunnerTilReduksjon: boolean;
  videreBehandling: Kodeverk;
  varseltekst: string;
}>

export default TilbakekrevingValg;
