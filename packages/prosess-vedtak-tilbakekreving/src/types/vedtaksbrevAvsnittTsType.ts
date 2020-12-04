type VedtaksbrevAvsnitt = {
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
};

export default VedtaksbrevAvsnitt;
