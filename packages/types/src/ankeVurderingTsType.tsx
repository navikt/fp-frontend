import Kodeverk from './kodeverkTsType';

type AnkeVurdering = Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: string;
    ankeVurderingOmgjoer?: string;
    ankeOmgjoerArsak?: Kodeverk;
    begrunnelse: string;
    paAnketBehandlingId?: number;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev: string;
 };
}>;

export default AnkeVurdering;
