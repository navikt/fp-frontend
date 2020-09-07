import { Kodeverk } from '@fpsak-frontend/types';

type Permisjon = Readonly<{
  permisjonFom: string;
  permisjonTom: string;
  permisjonsprosent: number;
  erGyldig: boolean;
  type: Kodeverk;
}>

export default Permisjon;
