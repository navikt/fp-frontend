type Aktivitetskrav = Readonly<{
  fom: string;
  tom: string;
  behov: string;
  behovÅrsak: string;
  vurdering?: string;
  endret: boolean;
}>

export default Aktivitetskrav;
