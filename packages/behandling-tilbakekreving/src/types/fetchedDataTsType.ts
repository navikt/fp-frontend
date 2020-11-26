import {
  Aksjonspunkt, BeregningsresultatTilbakekreving, FeilutbetalingPerioderWrapper, FeilutbetalingFakta,
} from '@fpsak-frontend/types';

interface FetchedData {
  aksjonspunkter: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  beregningsresultat: BeregningsresultatTilbakekreving;
  feilutbetalingFakta: FeilutbetalingFakta;
}

export default FetchedData;
