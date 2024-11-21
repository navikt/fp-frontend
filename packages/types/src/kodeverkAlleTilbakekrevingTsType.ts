import { TilbakekrevingKodeverkType } from '@navikt/fp-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

export type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>;
