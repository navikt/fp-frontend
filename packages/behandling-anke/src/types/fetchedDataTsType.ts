import { Aksjonspunkt, AnkeVurdering, Vilkar } from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  ankeVurdering: AnkeVurdering;
}

export default FetchedData;
