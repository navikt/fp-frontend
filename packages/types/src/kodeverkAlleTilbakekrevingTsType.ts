import TilbakekrevingKodeverkType from '@navikt/fp-kodeverk/src/tilbakekrevingKodeverkTyper';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type AlleKodeverkTilbakekreving = Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>

export default AlleKodeverkTilbakekreving;
