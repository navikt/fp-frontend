import { Location } from 'history';
import { Historikkinnslag } from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

interface HistorikkMal {
  historikkinnslag: Historikkinnslag;
  behandlingLocation: Location;
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  saksnummer: string;
  erTilbakekreving: boolean;
}

export default HistorikkMal;
