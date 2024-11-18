import { TilbakekrevingKodeverkType } from '@navikt/fp-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>;

export default AlleKodeverkTilbakekreving;
