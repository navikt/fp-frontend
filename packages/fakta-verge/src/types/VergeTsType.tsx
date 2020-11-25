import { Kodeverk } from '@fpsak-frontend/types';

type Verge = {
  navn?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  vergeType?: Kodeverk;
  organisasjonsnummer?: string;
};

export default Verge;
