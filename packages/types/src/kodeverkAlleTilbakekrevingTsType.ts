import { TilbakekrevingKodeverkType } from '@navikt/fp-kodeverk';

import type { KodeverkMedNavn } from './kodeverkMedNavnTsType';

export type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkType, KodeverkMedNavn<unknown>[]>;
