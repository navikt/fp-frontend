import { Kodeverk } from '@fpsak-frontend/types';

// eslint-disable-next-line no-shadow
export enum VergeBehandlingmenyValg {
  OPPRETT = 'OPPRETT',
  FJERN = 'FJERN',
  SKJUL = 'SKJUL',
}

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
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>

type SakRettigheter = Readonly<{
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  behandlingTillatteOperasjoner: BehandlingOperasjoner[];
}>

export default SakRettigheter;
