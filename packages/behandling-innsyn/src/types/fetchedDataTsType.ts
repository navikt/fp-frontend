import {
  Aksjonspunkt, Vilkar, Dokument, Innsyn,
} from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  innsyn: Innsyn;
  innsynDokumenter: Dokument[];
}

export default FetchedData;
