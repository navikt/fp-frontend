import { Historikkinnslag, Kodeverk } from '@fpsak-frontend/types';
import { Location } from 'history';

interface HistorikkMal {
  historikkinnslag: Historikkinnslag;
  behandlingLocation: Location;
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
  saksnummer: number;
}

export default HistorikkMal;
