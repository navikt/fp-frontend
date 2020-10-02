import { Kodeverk } from '@fpsak-frontend/types';

type Verge = {
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  vergeType?: Kodeverk;
  begrunnelse?: string;
};

export default Verge;
