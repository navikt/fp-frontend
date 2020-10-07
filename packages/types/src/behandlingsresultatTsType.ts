import Kodeverk from './kodeverkTsType';

type Behandlingsresultat = Readonly<{
  id: number;
  type: Kodeverk;
  avslagsarsak?: Kodeverk;
  avslagsarsakFritekst?: string;
  rettenTil?: Kodeverk;
  konsekvenserForYtelsen?: Kodeverk[];
  vedtaksbrev?: Kodeverk;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  }
}>

export default Behandlingsresultat;
