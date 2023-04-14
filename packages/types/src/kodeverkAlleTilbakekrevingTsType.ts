import { tilbakekrevingKodeverkTyper } from '@navikt/fp-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type AlleKodeverkTilbakekreving = Record<tilbakekrevingKodeverkTyper, KodeverkMedNavn[]>;

export default AlleKodeverkTilbakekreving;
