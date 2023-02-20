import { Location } from 'history';
import { Historikkinnslag } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

interface HistorikkMal {
  historikkinnslag: Historikkinnslag;
  behandlingLocation: Location;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  saksnummer: string;
  erTilbakekreving: boolean;
}

export default HistorikkMal;
