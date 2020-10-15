import { Kodeverk } from '@fpsak-frontend/types';

type BehandlingOppretting = Readonly<{
  behandlingType: Kodeverk;
  kanOppretteBehandling: boolean;
}>

type BehandlingOperasjoner = Readonly<{
  uuid: string;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
}>

type SakRettigheter = Readonly<{
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlingTillatteOperasjoner: BehandlingOperasjoner[];
}>

export default SakRettigheter;
