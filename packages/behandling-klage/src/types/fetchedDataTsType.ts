import { Aksjonspunkt, KlageVurdering, Vilkar } from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  klageVurdering: KlageVurdering;
}

export default FetchedData;
