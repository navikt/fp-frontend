import VedtaksbrevAvsnitt from './vedtaksbrevAvsnittTsType';

type Vedtaksbrev = {
  avsnittsliste: VedtaksbrevAvsnitt[],
  oppsummeringFritekst: string;
};

export default Vedtaksbrev;
