import { TilbakekrevingKodeverkTyper } from '@navikt/fp-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkTyper, KodeverkMedNavn[]>;

export default AlleKodeverkTilbakekreving;
