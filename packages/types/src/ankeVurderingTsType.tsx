import Kodeverk from './kodeverkTsType';

type AnkeVurdering = Readonly<{
  ankeVurderingResultat?: {
    ankeVurdering?: Kodeverk;
    ankeVurderingOmgjoer?: Kodeverk;
    ankeOmgjoerArsak?: Kodeverk;
    begrunnelse: string;
    paAnketBehandlingId?: number;
    erAnkerIkkePart: boolean;
    erIkkeKonkret: boolean;
    erFristIkkeOverholdt: boolean;
    erIkkeSignert: boolean;
    erSubsidiartRealitetsbehandles: boolean;
    fritekstTilBrev?: string;
    merknadKommentar?: string;
    erMerknaderMottatt?: boolean;
    avsluttBehandling?: boolean;
 };
}>;

export default AnkeVurdering;
